package voxgigargentinadatossdk

import (
	"github.com/voxgig-sdk/argentinadatos-sdk/go/core"
	"github.com/voxgig-sdk/argentinadatos-sdk/go/entity"
	"github.com/voxgig-sdk/argentinadatos-sdk/go/feature"
	_ "github.com/voxgig-sdk/argentinadatos-sdk/go/utility"
)

// Type aliases preserve external API.
type ArgentinadatosSDK = core.ArgentinadatosSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ArgentinadatosEntity = core.ArgentinadatosEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ArgentinadatosError = core.ArgentinadatosError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewActaEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewActaEntity(client, entopts)
	}
	core.NewBonosCerEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewBonosCerEntity(client, entopts)
	}
	core.NewCotizacionEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewCotizacionEntity(client, entopts)
	}
	core.NewCriptopesoEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewCriptopesoEntity(client, entopts)
	}
	core.NewCuentaRemuneradaUsdEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewCuentaRemuneradaUsdEntity(client, entopts)
	}
	core.NewDiputadoEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewDiputadoEntity(client, entopts)
	}
	core.NewEntidadRendimientoEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewEntidadRendimientoEntity(client, entopts)
	}
	core.NewEstadoEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewEstadoEntity(client, entopts)
	}
	core.NewEventoPresidencialEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewEventoPresidencialEntity(client, entopts)
	}
	core.NewFeriadoEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewFeriadoEntity(client, entopts)
	}
	core.NewFinanzaEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewFinanzaEntity(client, entopts)
	}
	core.NewFondoComunInversionEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewFondoComunInversionEntity(client, entopts)
	}
	core.NewFondoComunInversionOtroEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewFondoComunInversionOtroEntity(client, entopts)
	}
	core.NewFondoComunInversionVariableEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewFondoComunInversionVariableEntity(client, entopts)
	}
	core.NewHipotecarioUvaTnaEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewHipotecarioUvaTnaEntity(client, entopts)
	}
	core.NewIndiceInflacionEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewIndiceInflacionEntity(client, entopts)
	}
	core.NewIndiceUvaEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewIndiceUvaEntity(client, entopts)
	}
	core.NewLetraEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewLetraEntity(client, entopts)
	}
	core.NewPresidenteEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewPresidenteEntity(client, entopts)
	}
	core.NewProveedorPlazoFijoPrecancelableEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewProveedorPlazoFijoPrecancelableEntity(client, entopts)
	}
	core.NewProveedorPlazoFijoUvaPagoPeriodicoEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewProveedorPlazoFijoUvaPagoPeriodicoEntity(client, entopts)
	}
	core.NewRemEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewRemEntity(client, entopts)
	}
	core.NewRemExpectativaEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewRemExpectativaEntity(client, entopts)
	}
	core.NewRendimientoEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewRendimientoEntity(client, entopts)
	}
	core.NewRiesgoPaiEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewRiesgoPaiEntity(client, entopts)
	}
	core.NewSenadorEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewSenadorEntity(client, entopts)
	}
	core.NewTasaIntereEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewTasaIntereEntity(client, entopts)
	}
	core.NewTasaPlazoFijoEntityFunc = func(client *core.ArgentinadatosSDK, entopts map[string]any) core.ArgentinadatosEntity {
		return entity.NewTasaPlazoFijoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewArgentinadatosSDK = core.NewArgentinadatosSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewArgentinadatosSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ArgentinadatosSDK  { return NewArgentinadatosSDK(nil) }
func Test() *ArgentinadatosSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
