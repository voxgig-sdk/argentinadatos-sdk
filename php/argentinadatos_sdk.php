<?php
declare(strict_types=1);

// Argentinadatos SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class ArgentinadatosSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new ArgentinadatosUtility();
        $this->_utility = $utility;

        $config = ArgentinadatosConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = ArgentinadatosHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = ArgentinadatosHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, ArgentinadatosFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return ArgentinadatosUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = ArgentinadatosHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = ArgentinadatosHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = ArgentinadatosHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new ArgentinadatosSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = ArgentinadatosHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = ArgentinadatosHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_acta = null;

    // Canonical facade: $client->Acta()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->acta()
    // resolves here too.
    public function Acta($data = null)
    {
        require_once __DIR__ . '/entity/acta_entity.php';
        if ($data === null) {
            if ($this->_acta === null) {
                $this->_acta = new ActaEntity($this, null);
            }
            return $this->_acta;
        }
        return new ActaEntity($this, $data);
    }


    private $_bonos_cer = null;

    // Canonical facade: $client->BonosCer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bonos_cer()
    // resolves here too.
    public function BonosCer($data = null)
    {
        require_once __DIR__ . '/entity/bonos_cer_entity.php';
        if ($data === null) {
            if ($this->_bonos_cer === null) {
                $this->_bonos_cer = new BonosCerEntity($this, null);
            }
            return $this->_bonos_cer;
        }
        return new BonosCerEntity($this, $data);
    }


    private $_cotizacion = null;

    // Canonical facade: $client->Cotizacion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cotizacion()
    // resolves here too.
    public function Cotizacion($data = null)
    {
        require_once __DIR__ . '/entity/cotizacion_entity.php';
        if ($data === null) {
            if ($this->_cotizacion === null) {
                $this->_cotizacion = new CotizacionEntity($this, null);
            }
            return $this->_cotizacion;
        }
        return new CotizacionEntity($this, $data);
    }


    private $_criptopeso = null;

    // Canonical facade: $client->Criptopeso()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->criptopeso()
    // resolves here too.
    public function Criptopeso($data = null)
    {
        require_once __DIR__ . '/entity/criptopeso_entity.php';
        if ($data === null) {
            if ($this->_criptopeso === null) {
                $this->_criptopeso = new CriptopesoEntity($this, null);
            }
            return $this->_criptopeso;
        }
        return new CriptopesoEntity($this, $data);
    }


    private $_cuenta_remunerada_usd = null;

    // Canonical facade: $client->CuentaRemuneradaUsd()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cuenta_remunerada_usd()
    // resolves here too.
    public function CuentaRemuneradaUsd($data = null)
    {
        require_once __DIR__ . '/entity/cuenta_remunerada_usd_entity.php';
        if ($data === null) {
            if ($this->_cuenta_remunerada_usd === null) {
                $this->_cuenta_remunerada_usd = new CuentaRemuneradaUsdEntity($this, null);
            }
            return $this->_cuenta_remunerada_usd;
        }
        return new CuentaRemuneradaUsdEntity($this, $data);
    }


    private $_diputado = null;

    // Canonical facade: $client->Diputado()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->diputado()
    // resolves here too.
    public function Diputado($data = null)
    {
        require_once __DIR__ . '/entity/diputado_entity.php';
        if ($data === null) {
            if ($this->_diputado === null) {
                $this->_diputado = new DiputadoEntity($this, null);
            }
            return $this->_diputado;
        }
        return new DiputadoEntity($this, $data);
    }


    private $_entidad_rendimiento = null;

    // Canonical facade: $client->EntidadRendimiento()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->entidad_rendimiento()
    // resolves here too.
    public function EntidadRendimiento($data = null)
    {
        require_once __DIR__ . '/entity/entidad_rendimiento_entity.php';
        if ($data === null) {
            if ($this->_entidad_rendimiento === null) {
                $this->_entidad_rendimiento = new EntidadRendimientoEntity($this, null);
            }
            return $this->_entidad_rendimiento;
        }
        return new EntidadRendimientoEntity($this, $data);
    }


    private $_estado = null;

    // Canonical facade: $client->Estado()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->estado()
    // resolves here too.
    public function Estado($data = null)
    {
        require_once __DIR__ . '/entity/estado_entity.php';
        if ($data === null) {
            if ($this->_estado === null) {
                $this->_estado = new EstadoEntity($this, null);
            }
            return $this->_estado;
        }
        return new EstadoEntity($this, $data);
    }


    private $_evento_presidencial = null;

    // Canonical facade: $client->EventoPresidencial()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->evento_presidencial()
    // resolves here too.
    public function EventoPresidencial($data = null)
    {
        require_once __DIR__ . '/entity/evento_presidencial_entity.php';
        if ($data === null) {
            if ($this->_evento_presidencial === null) {
                $this->_evento_presidencial = new EventoPresidencialEntity($this, null);
            }
            return $this->_evento_presidencial;
        }
        return new EventoPresidencialEntity($this, $data);
    }


    private $_feriado = null;

    // Canonical facade: $client->Feriado()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->feriado()
    // resolves here too.
    public function Feriado($data = null)
    {
        require_once __DIR__ . '/entity/feriado_entity.php';
        if ($data === null) {
            if ($this->_feriado === null) {
                $this->_feriado = new FeriadoEntity($this, null);
            }
            return $this->_feriado;
        }
        return new FeriadoEntity($this, $data);
    }


    private $_finanza = null;

    // Canonical facade: $client->Finanza()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->finanza()
    // resolves here too.
    public function Finanza($data = null)
    {
        require_once __DIR__ . '/entity/finanza_entity.php';
        if ($data === null) {
            if ($this->_finanza === null) {
                $this->_finanza = new FinanzaEntity($this, null);
            }
            return $this->_finanza;
        }
        return new FinanzaEntity($this, $data);
    }


    private $_fondo_comun_inversion = null;

    // Canonical facade: $client->FondoComunInversion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->fondo_comun_inversion()
    // resolves here too.
    public function FondoComunInversion($data = null)
    {
        require_once __DIR__ . '/entity/fondo_comun_inversion_entity.php';
        if ($data === null) {
            if ($this->_fondo_comun_inversion === null) {
                $this->_fondo_comun_inversion = new FondoComunInversionEntity($this, null);
            }
            return $this->_fondo_comun_inversion;
        }
        return new FondoComunInversionEntity($this, $data);
    }


    private $_fondo_comun_inversion_otro = null;

    // Canonical facade: $client->FondoComunInversionOtro()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->fondo_comun_inversion_otro()
    // resolves here too.
    public function FondoComunInversionOtro($data = null)
    {
        require_once __DIR__ . '/entity/fondo_comun_inversion_otro_entity.php';
        if ($data === null) {
            if ($this->_fondo_comun_inversion_otro === null) {
                $this->_fondo_comun_inversion_otro = new FondoComunInversionOtroEntity($this, null);
            }
            return $this->_fondo_comun_inversion_otro;
        }
        return new FondoComunInversionOtroEntity($this, $data);
    }


    private $_fondo_comun_inversion_variable = null;

    // Canonical facade: $client->FondoComunInversionVariable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->fondo_comun_inversion_variable()
    // resolves here too.
    public function FondoComunInversionVariable($data = null)
    {
        require_once __DIR__ . '/entity/fondo_comun_inversion_variable_entity.php';
        if ($data === null) {
            if ($this->_fondo_comun_inversion_variable === null) {
                $this->_fondo_comun_inversion_variable = new FondoComunInversionVariableEntity($this, null);
            }
            return $this->_fondo_comun_inversion_variable;
        }
        return new FondoComunInversionVariableEntity($this, $data);
    }


    private $_hipotecario_uva_tna = null;

    // Canonical facade: $client->HipotecarioUvaTna()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->hipotecario_uva_tna()
    // resolves here too.
    public function HipotecarioUvaTna($data = null)
    {
        require_once __DIR__ . '/entity/hipotecario_uva_tna_entity.php';
        if ($data === null) {
            if ($this->_hipotecario_uva_tna === null) {
                $this->_hipotecario_uva_tna = new HipotecarioUvaTnaEntity($this, null);
            }
            return $this->_hipotecario_uva_tna;
        }
        return new HipotecarioUvaTnaEntity($this, $data);
    }


    private $_indice_inflacion = null;

    // Canonical facade: $client->IndiceInflacion()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->indice_inflacion()
    // resolves here too.
    public function IndiceInflacion($data = null)
    {
        require_once __DIR__ . '/entity/indice_inflacion_entity.php';
        if ($data === null) {
            if ($this->_indice_inflacion === null) {
                $this->_indice_inflacion = new IndiceInflacionEntity($this, null);
            }
            return $this->_indice_inflacion;
        }
        return new IndiceInflacionEntity($this, $data);
    }


    private $_indice_uva = null;

    // Canonical facade: $client->IndiceUva()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->indice_uva()
    // resolves here too.
    public function IndiceUva($data = null)
    {
        require_once __DIR__ . '/entity/indice_uva_entity.php';
        if ($data === null) {
            if ($this->_indice_uva === null) {
                $this->_indice_uva = new IndiceUvaEntity($this, null);
            }
            return $this->_indice_uva;
        }
        return new IndiceUvaEntity($this, $data);
    }


    private $_letra = null;

    // Canonical facade: $client->Letra()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->letra()
    // resolves here too.
    public function Letra($data = null)
    {
        require_once __DIR__ . '/entity/letra_entity.php';
        if ($data === null) {
            if ($this->_letra === null) {
                $this->_letra = new LetraEntity($this, null);
            }
            return $this->_letra;
        }
        return new LetraEntity($this, $data);
    }


    private $_presidente = null;

    // Canonical facade: $client->Presidente()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->presidente()
    // resolves here too.
    public function Presidente($data = null)
    {
        require_once __DIR__ . '/entity/presidente_entity.php';
        if ($data === null) {
            if ($this->_presidente === null) {
                $this->_presidente = new PresidenteEntity($this, null);
            }
            return $this->_presidente;
        }
        return new PresidenteEntity($this, $data);
    }


    private $_proveedor_plazo_fijo_precancelable = null;

    // Canonical facade: $client->ProveedorPlazoFijoPrecancelable()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->proveedor_plazo_fijo_precancelable()
    // resolves here too.
    public function ProveedorPlazoFijoPrecancelable($data = null)
    {
        require_once __DIR__ . '/entity/proveedor_plazo_fijo_precancelable_entity.php';
        if ($data === null) {
            if ($this->_proveedor_plazo_fijo_precancelable === null) {
                $this->_proveedor_plazo_fijo_precancelable = new ProveedorPlazoFijoPrecancelableEntity($this, null);
            }
            return $this->_proveedor_plazo_fijo_precancelable;
        }
        return new ProveedorPlazoFijoPrecancelableEntity($this, $data);
    }


    private $_proveedor_plazo_fijo_uva_pago_periodico = null;

    // Canonical facade: $client->ProveedorPlazoFijoUvaPagoPeriodico()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->proveedor_plazo_fijo_uva_pago_periodico()
    // resolves here too.
    public function ProveedorPlazoFijoUvaPagoPeriodico($data = null)
    {
        require_once __DIR__ . '/entity/proveedor_plazo_fijo_uva_pago_periodico_entity.php';
        if ($data === null) {
            if ($this->_proveedor_plazo_fijo_uva_pago_periodico === null) {
                $this->_proveedor_plazo_fijo_uva_pago_periodico = new ProveedorPlazoFijoUvaPagoPeriodicoEntity($this, null);
            }
            return $this->_proveedor_plazo_fijo_uva_pago_periodico;
        }
        return new ProveedorPlazoFijoUvaPagoPeriodicoEntity($this, $data);
    }


    private $_rem = null;

    // Canonical facade: $client->Rem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rem()
    // resolves here too.
    public function Rem($data = null)
    {
        require_once __DIR__ . '/entity/rem_entity.php';
        if ($data === null) {
            if ($this->_rem === null) {
                $this->_rem = new RemEntity($this, null);
            }
            return $this->_rem;
        }
        return new RemEntity($this, $data);
    }


    private $_rem_expectativa = null;

    // Canonical facade: $client->RemExpectativa()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rem_expectativa()
    // resolves here too.
    public function RemExpectativa($data = null)
    {
        require_once __DIR__ . '/entity/rem_expectativa_entity.php';
        if ($data === null) {
            if ($this->_rem_expectativa === null) {
                $this->_rem_expectativa = new RemExpectativaEntity($this, null);
            }
            return $this->_rem_expectativa;
        }
        return new RemExpectativaEntity($this, $data);
    }


    private $_rendimiento = null;

    // Canonical facade: $client->Rendimiento()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rendimiento()
    // resolves here too.
    public function Rendimiento($data = null)
    {
        require_once __DIR__ . '/entity/rendimiento_entity.php';
        if ($data === null) {
            if ($this->_rendimiento === null) {
                $this->_rendimiento = new RendimientoEntity($this, null);
            }
            return $this->_rendimiento;
        }
        return new RendimientoEntity($this, $data);
    }


    private $_riesgo_pai = null;

    // Canonical facade: $client->RiesgoPai()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->riesgo_pai()
    // resolves here too.
    public function RiesgoPai($data = null)
    {
        require_once __DIR__ . '/entity/riesgo_pai_entity.php';
        if ($data === null) {
            if ($this->_riesgo_pai === null) {
                $this->_riesgo_pai = new RiesgoPaiEntity($this, null);
            }
            return $this->_riesgo_pai;
        }
        return new RiesgoPaiEntity($this, $data);
    }


    private $_senador = null;

    // Canonical facade: $client->Senador()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->senador()
    // resolves here too.
    public function Senador($data = null)
    {
        require_once __DIR__ . '/entity/senador_entity.php';
        if ($data === null) {
            if ($this->_senador === null) {
                $this->_senador = new SenadorEntity($this, null);
            }
            return $this->_senador;
        }
        return new SenadorEntity($this, $data);
    }


    private $_tasa_intere = null;

    // Canonical facade: $client->TasaIntere()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tasa_intere()
    // resolves here too.
    public function TasaIntere($data = null)
    {
        require_once __DIR__ . '/entity/tasa_intere_entity.php';
        if ($data === null) {
            if ($this->_tasa_intere === null) {
                $this->_tasa_intere = new TasaIntereEntity($this, null);
            }
            return $this->_tasa_intere;
        }
        return new TasaIntereEntity($this, $data);
    }


    private $_tasa_plazo_fijo = null;

    // Canonical facade: $client->TasaPlazoFijo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tasa_plazo_fijo()
    // resolves here too.
    public function TasaPlazoFijo($data = null)
    {
        require_once __DIR__ . '/entity/tasa_plazo_fijo_entity.php';
        if ($data === null) {
            if ($this->_tasa_plazo_fijo === null) {
                $this->_tasa_plazo_fijo = new TasaPlazoFijoEntity($this, null);
            }
            return $this->_tasa_plazo_fijo;
        }
        return new TasaPlazoFijoEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new ArgentinadatosSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
