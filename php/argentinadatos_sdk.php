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

        // Add features from config.
        $feature_opts = ArgentinadatosHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $items = Struct::items($feature_opts);
            if ($items) {
                foreach ($items as $item) {
                    $fname = $item[0];
                    $fopts = ArgentinadatosHelpers::to_map($item[1]);
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

    // Idiomatic facade: $client->acta()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Acta() (PHP method
    // names are case-insensitive).
    public function acta($data = null)
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

    // Idiomatic facade: $client->bonos_cer()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias BonosCer() (PHP method
    // names are case-insensitive).
    public function bonos_cer($data = null)
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

    // Idiomatic facade: $client->cotizacion()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Cotizacion() (PHP method
    // names are case-insensitive).
    public function cotizacion($data = null)
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

    // Idiomatic facade: $client->criptopeso()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Criptopeso() (PHP method
    // names are case-insensitive).
    public function criptopeso($data = null)
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

    // Idiomatic facade: $client->cuenta_remunerada_usd()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias CuentaRemuneradaUsd() (PHP method
    // names are case-insensitive).
    public function cuenta_remunerada_usd($data = null)
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

    // Idiomatic facade: $client->diputado()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Diputado() (PHP method
    // names are case-insensitive).
    public function diputado($data = null)
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

    // Idiomatic facade: $client->entidad_rendimiento()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias EntidadRendimiento() (PHP method
    // names are case-insensitive).
    public function entidad_rendimiento($data = null)
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

    // Idiomatic facade: $client->estado()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Estado() (PHP method
    // names are case-insensitive).
    public function estado($data = null)
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

    // Idiomatic facade: $client->evento_presidencial()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias EventoPresidencial() (PHP method
    // names are case-insensitive).
    public function evento_presidencial($data = null)
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

    // Idiomatic facade: $client->feriado()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Feriado() (PHP method
    // names are case-insensitive).
    public function feriado($data = null)
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

    // Idiomatic facade: $client->finanza()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Finanza() (PHP method
    // names are case-insensitive).
    public function finanza($data = null)
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

    // Idiomatic facade: $client->fondo_comun_inversion()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias FondoComunInversion() (PHP method
    // names are case-insensitive).
    public function fondo_comun_inversion($data = null)
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

    // Idiomatic facade: $client->fondo_comun_inversion_otro()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias FondoComunInversionOtro() (PHP method
    // names are case-insensitive).
    public function fondo_comun_inversion_otro($data = null)
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

    // Idiomatic facade: $client->fondo_comun_inversion_variable()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias FondoComunInversionVariable() (PHP method
    // names are case-insensitive).
    public function fondo_comun_inversion_variable($data = null)
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

    // Idiomatic facade: $client->hipotecario_uva_tna()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias HipotecarioUvaTna() (PHP method
    // names are case-insensitive).
    public function hipotecario_uva_tna($data = null)
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

    // Idiomatic facade: $client->indice_inflacion()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias IndiceInflacion() (PHP method
    // names are case-insensitive).
    public function indice_inflacion($data = null)
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

    // Idiomatic facade: $client->indice_uva()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias IndiceUva() (PHP method
    // names are case-insensitive).
    public function indice_uva($data = null)
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

    // Idiomatic facade: $client->letra()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Letra() (PHP method
    // names are case-insensitive).
    public function letra($data = null)
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

    // Idiomatic facade: $client->presidente()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Presidente() (PHP method
    // names are case-insensitive).
    public function presidente($data = null)
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

    // Idiomatic facade: $client->proveedor_plazo_fijo_precancelable()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias ProveedorPlazoFijoPrecancelable() (PHP method
    // names are case-insensitive).
    public function proveedor_plazo_fijo_precancelable($data = null)
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

    // Idiomatic facade: $client->proveedor_plazo_fijo_uva_pago_periodico()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias ProveedorPlazoFijoUvaPagoPeriodico() (PHP method
    // names are case-insensitive).
    public function proveedor_plazo_fijo_uva_pago_periodico($data = null)
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

    // Idiomatic facade: $client->rem()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Rem() (PHP method
    // names are case-insensitive).
    public function rem($data = null)
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

    // Idiomatic facade: $client->rem_expectativa()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias RemExpectativa() (PHP method
    // names are case-insensitive).
    public function rem_expectativa($data = null)
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

    // Idiomatic facade: $client->rendimiento()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Rendimiento() (PHP method
    // names are case-insensitive).
    public function rendimiento($data = null)
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

    // Idiomatic facade: $client->riesgo_pai()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias RiesgoPai() (PHP method
    // names are case-insensitive).
    public function riesgo_pai($data = null)
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

    // Idiomatic facade: $client->senador()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias Senador() (PHP method
    // names are case-insensitive).
    public function senador($data = null)
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

    // Idiomatic facade: $client->tasa_intere()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias TasaIntere() (PHP method
    // names are case-insensitive).
    public function tasa_intere($data = null)
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

    // Idiomatic facade: $client->tasa_plazo_fijo()->list() / ->load(["id" => ...]).
    // Also serves the deprecated PascalCase alias TasaPlazoFijo() (PHP method
    // names are case-insensitive).
    public function tasa_plazo_fijo($data = null)
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
