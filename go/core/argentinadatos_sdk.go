package core

import (
	"fmt"

	vs "github.com/voxgig-sdk/argentinadatos-sdk/go/utility/struct"
)

type ArgentinadatosSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewArgentinadatosSDK(options map[string]any) *ArgentinadatosSDK {
	sdk := &ArgentinadatosSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *ArgentinadatosSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *ArgentinadatosSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *ArgentinadatosSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *ArgentinadatosSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

func (sdk *ArgentinadatosSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}


// Acta returns a Acta entity bound to this client.
// Idiomatic usage: client.Acta(nil).List(nil, nil) or
// client.Acta(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Acta(data map[string]any) ArgentinadatosEntity {
	return NewActaEntityFunc(sdk, data)
}


// BonosCer returns a BonosCer entity bound to this client.
// Idiomatic usage: client.BonosCer(nil).List(nil, nil) or
// client.BonosCer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) BonosCer(data map[string]any) ArgentinadatosEntity {
	return NewBonosCerEntityFunc(sdk, data)
}


// Cotizacion returns a Cotizacion entity bound to this client.
// Idiomatic usage: client.Cotizacion(nil).List(nil, nil) or
// client.Cotizacion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Cotizacion(data map[string]any) ArgentinadatosEntity {
	return NewCotizacionEntityFunc(sdk, data)
}


// Criptopeso returns a Criptopeso entity bound to this client.
// Idiomatic usage: client.Criptopeso(nil).List(nil, nil) or
// client.Criptopeso(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Criptopeso(data map[string]any) ArgentinadatosEntity {
	return NewCriptopesoEntityFunc(sdk, data)
}


// CuentaRemuneradaUsd returns a CuentaRemuneradaUsd entity bound to this client.
// Idiomatic usage: client.CuentaRemuneradaUsd(nil).List(nil, nil) or
// client.CuentaRemuneradaUsd(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) CuentaRemuneradaUsd(data map[string]any) ArgentinadatosEntity {
	return NewCuentaRemuneradaUsdEntityFunc(sdk, data)
}


// Diputado returns a Diputado entity bound to this client.
// Idiomatic usage: client.Diputado(nil).List(nil, nil) or
// client.Diputado(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Diputado(data map[string]any) ArgentinadatosEntity {
	return NewDiputadoEntityFunc(sdk, data)
}


// EntidadRendimiento returns a EntidadRendimiento entity bound to this client.
// Idiomatic usage: client.EntidadRendimiento(nil).List(nil, nil) or
// client.EntidadRendimiento(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) EntidadRendimiento(data map[string]any) ArgentinadatosEntity {
	return NewEntidadRendimientoEntityFunc(sdk, data)
}


// Estado returns a Estado entity bound to this client.
// Idiomatic usage: client.Estado(nil).List(nil, nil) or
// client.Estado(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Estado(data map[string]any) ArgentinadatosEntity {
	return NewEstadoEntityFunc(sdk, data)
}


// EventoPresidencial returns a EventoPresidencial entity bound to this client.
// Idiomatic usage: client.EventoPresidencial(nil).List(nil, nil) or
// client.EventoPresidencial(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) EventoPresidencial(data map[string]any) ArgentinadatosEntity {
	return NewEventoPresidencialEntityFunc(sdk, data)
}


// Feriado returns a Feriado entity bound to this client.
// Idiomatic usage: client.Feriado(nil).List(nil, nil) or
// client.Feriado(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Feriado(data map[string]any) ArgentinadatosEntity {
	return NewFeriadoEntityFunc(sdk, data)
}


// Finanza returns a Finanza entity bound to this client.
// Idiomatic usage: client.Finanza(nil).List(nil, nil) or
// client.Finanza(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Finanza(data map[string]any) ArgentinadatosEntity {
	return NewFinanzaEntityFunc(sdk, data)
}


// FondoComunInversion returns a FondoComunInversion entity bound to this client.
// Idiomatic usage: client.FondoComunInversion(nil).List(nil, nil) or
// client.FondoComunInversion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) FondoComunInversion(data map[string]any) ArgentinadatosEntity {
	return NewFondoComunInversionEntityFunc(sdk, data)
}


// FondoComunInversionOtro returns a FondoComunInversionOtro entity bound to this client.
// Idiomatic usage: client.FondoComunInversionOtro(nil).List(nil, nil) or
// client.FondoComunInversionOtro(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) FondoComunInversionOtro(data map[string]any) ArgentinadatosEntity {
	return NewFondoComunInversionOtroEntityFunc(sdk, data)
}


// FondoComunInversionVariable returns a FondoComunInversionVariable entity bound to this client.
// Idiomatic usage: client.FondoComunInversionVariable(nil).List(nil, nil) or
// client.FondoComunInversionVariable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) FondoComunInversionVariable(data map[string]any) ArgentinadatosEntity {
	return NewFondoComunInversionVariableEntityFunc(sdk, data)
}


// HipotecarioUvaTna returns a HipotecarioUvaTna entity bound to this client.
// Idiomatic usage: client.HipotecarioUvaTna(nil).List(nil, nil) or
// client.HipotecarioUvaTna(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) HipotecarioUvaTna(data map[string]any) ArgentinadatosEntity {
	return NewHipotecarioUvaTnaEntityFunc(sdk, data)
}


// IndiceInflacion returns a IndiceInflacion entity bound to this client.
// Idiomatic usage: client.IndiceInflacion(nil).List(nil, nil) or
// client.IndiceInflacion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) IndiceInflacion(data map[string]any) ArgentinadatosEntity {
	return NewIndiceInflacionEntityFunc(sdk, data)
}


// IndiceUva returns a IndiceUva entity bound to this client.
// Idiomatic usage: client.IndiceUva(nil).List(nil, nil) or
// client.IndiceUva(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) IndiceUva(data map[string]any) ArgentinadatosEntity {
	return NewIndiceUvaEntityFunc(sdk, data)
}


// Letra returns a Letra entity bound to this client.
// Idiomatic usage: client.Letra(nil).List(nil, nil) or
// client.Letra(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Letra(data map[string]any) ArgentinadatosEntity {
	return NewLetraEntityFunc(sdk, data)
}


// Presidente returns a Presidente entity bound to this client.
// Idiomatic usage: client.Presidente(nil).List(nil, nil) or
// client.Presidente(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Presidente(data map[string]any) ArgentinadatosEntity {
	return NewPresidenteEntityFunc(sdk, data)
}


// ProveedorPlazoFijoPrecancelable returns a ProveedorPlazoFijoPrecancelable entity bound to this client.
// Idiomatic usage: client.ProveedorPlazoFijoPrecancelable(nil).List(nil, nil) or
// client.ProveedorPlazoFijoPrecancelable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) ProveedorPlazoFijoPrecancelable(data map[string]any) ArgentinadatosEntity {
	return NewProveedorPlazoFijoPrecancelableEntityFunc(sdk, data)
}


// ProveedorPlazoFijoUvaPagoPeriodico returns a ProveedorPlazoFijoUvaPagoPeriodico entity bound to this client.
// Idiomatic usage: client.ProveedorPlazoFijoUvaPagoPeriodico(nil).List(nil, nil) or
// client.ProveedorPlazoFijoUvaPagoPeriodico(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) ProveedorPlazoFijoUvaPagoPeriodico(data map[string]any) ArgentinadatosEntity {
	return NewProveedorPlazoFijoUvaPagoPeriodicoEntityFunc(sdk, data)
}


// Rem returns a Rem entity bound to this client.
// Idiomatic usage: client.Rem(nil).List(nil, nil) or
// client.Rem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Rem(data map[string]any) ArgentinadatosEntity {
	return NewRemEntityFunc(sdk, data)
}


// RemExpectativa returns a RemExpectativa entity bound to this client.
// Idiomatic usage: client.RemExpectativa(nil).List(nil, nil) or
// client.RemExpectativa(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) RemExpectativa(data map[string]any) ArgentinadatosEntity {
	return NewRemExpectativaEntityFunc(sdk, data)
}


// Rendimiento returns a Rendimiento entity bound to this client.
// Idiomatic usage: client.Rendimiento(nil).List(nil, nil) or
// client.Rendimiento(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Rendimiento(data map[string]any) ArgentinadatosEntity {
	return NewRendimientoEntityFunc(sdk, data)
}


// RiesgoPai returns a RiesgoPai entity bound to this client.
// Idiomatic usage: client.RiesgoPai(nil).List(nil, nil) or
// client.RiesgoPai(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) RiesgoPai(data map[string]any) ArgentinadatosEntity {
	return NewRiesgoPaiEntityFunc(sdk, data)
}


// Senador returns a Senador entity bound to this client.
// Idiomatic usage: client.Senador(nil).List(nil, nil) or
// client.Senador(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) Senador(data map[string]any) ArgentinadatosEntity {
	return NewSenadorEntityFunc(sdk, data)
}


// TasaIntere returns a TasaIntere entity bound to this client.
// Idiomatic usage: client.TasaIntere(nil).List(nil, nil) or
// client.TasaIntere(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) TasaIntere(data map[string]any) ArgentinadatosEntity {
	return NewTasaIntereEntityFunc(sdk, data)
}


// TasaPlazoFijo returns a TasaPlazoFijo entity bound to this client.
// Idiomatic usage: client.TasaPlazoFijo(nil).List(nil, nil) or
// client.TasaPlazoFijo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *ArgentinadatosSDK) TasaPlazoFijo(data map[string]any) ArgentinadatosEntity {
	return NewTasaPlazoFijoEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *ArgentinadatosSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewArgentinadatosSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
