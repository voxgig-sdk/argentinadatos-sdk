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

    public function prepare(array $fetchargs = []): array
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
            return [null, $err];
        }

        return ($utility->make_fetch_def)($ctx);
    }

    public function direct(array $fetchargs = []): array
    {
        $utility = $this->_utility;

        [$fetchdef, $err] = $this->prepare($fetchargs);
        if ($err) {
            return [["ok" => false, "err" => $err], null];
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
            return [["ok" => false, "err" => $fetch_err], null];
        }

        if ($fetched === null) {
            return [[
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ], null];
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

            return [[
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ], null];
        }

        return [[
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ], null];
    }


    public function Acta($data = null)
    {
        require_once __DIR__ . '/entity/acta_entity.php';
        return new ActaEntity($this, $data);
    }


    public function BonosCer($data = null)
    {
        require_once __DIR__ . '/entity/bonos_cer_entity.php';
        return new BonosCerEntity($this, $data);
    }


    public function Cotizacion($data = null)
    {
        require_once __DIR__ . '/entity/cotizacion_entity.php';
        return new CotizacionEntity($this, $data);
    }


    public function Criptopeso($data = null)
    {
        require_once __DIR__ . '/entity/criptopeso_entity.php';
        return new CriptopesoEntity($this, $data);
    }


    public function CuentaRemuneradaUsd($data = null)
    {
        require_once __DIR__ . '/entity/cuenta_remunerada_usd_entity.php';
        return new CuentaRemuneradaUsdEntity($this, $data);
    }


    public function Diputado($data = null)
    {
        require_once __DIR__ . '/entity/diputado_entity.php';
        return new DiputadoEntity($this, $data);
    }


    public function EntidadRendimiento($data = null)
    {
        require_once __DIR__ . '/entity/entidad_rendimiento_entity.php';
        return new EntidadRendimientoEntity($this, $data);
    }


    public function Estado($data = null)
    {
        require_once __DIR__ . '/entity/estado_entity.php';
        return new EstadoEntity($this, $data);
    }


    public function EventoPresidencial($data = null)
    {
        require_once __DIR__ . '/entity/evento_presidencial_entity.php';
        return new EventoPresidencialEntity($this, $data);
    }


    public function Feriado($data = null)
    {
        require_once __DIR__ . '/entity/feriado_entity.php';
        return new FeriadoEntity($this, $data);
    }


    public function Finanza($data = null)
    {
        require_once __DIR__ . '/entity/finanza_entity.php';
        return new FinanzaEntity($this, $data);
    }


    public function FondoComunInversion($data = null)
    {
        require_once __DIR__ . '/entity/fondo_comun_inversion_entity.php';
        return new FondoComunInversionEntity($this, $data);
    }


    public function FondoComunInversionOtro($data = null)
    {
        require_once __DIR__ . '/entity/fondo_comun_inversion_otro_entity.php';
        return new FondoComunInversionOtroEntity($this, $data);
    }


    public function FondoComunInversionVariable($data = null)
    {
        require_once __DIR__ . '/entity/fondo_comun_inversion_variable_entity.php';
        return new FondoComunInversionVariableEntity($this, $data);
    }


    public function HipotecarioUvaTna($data = null)
    {
        require_once __DIR__ . '/entity/hipotecario_uva_tna_entity.php';
        return new HipotecarioUvaTnaEntity($this, $data);
    }


    public function IndiceInflacion($data = null)
    {
        require_once __DIR__ . '/entity/indice_inflacion_entity.php';
        return new IndiceInflacionEntity($this, $data);
    }


    public function IndiceUva($data = null)
    {
        require_once __DIR__ . '/entity/indice_uva_entity.php';
        return new IndiceUvaEntity($this, $data);
    }


    public function Letra($data = null)
    {
        require_once __DIR__ . '/entity/letra_entity.php';
        return new LetraEntity($this, $data);
    }


    public function Presidente($data = null)
    {
        require_once __DIR__ . '/entity/presidente_entity.php';
        return new PresidenteEntity($this, $data);
    }


    public function ProveedorPlazoFijoPrecancelable($data = null)
    {
        require_once __DIR__ . '/entity/proveedor_plazo_fijo_precancelable_entity.php';
        return new ProveedorPlazoFijoPrecancelableEntity($this, $data);
    }


    public function ProveedorPlazoFijoUvaPagoPeriodico($data = null)
    {
        require_once __DIR__ . '/entity/proveedor_plazo_fijo_uva_pago_periodico_entity.php';
        return new ProveedorPlazoFijoUvaPagoPeriodicoEntity($this, $data);
    }


    public function Rem($data = null)
    {
        require_once __DIR__ . '/entity/rem_entity.php';
        return new RemEntity($this, $data);
    }


    public function RemExpectativa($data = null)
    {
        require_once __DIR__ . '/entity/rem_expectativa_entity.php';
        return new RemExpectativaEntity($this, $data);
    }


    public function Rendimiento($data = null)
    {
        require_once __DIR__ . '/entity/rendimiento_entity.php';
        return new RendimientoEntity($this, $data);
    }


    public function RiesgoPai($data = null)
    {
        require_once __DIR__ . '/entity/riesgo_pai_entity.php';
        return new RiesgoPaiEntity($this, $data);
    }


    public function Senador($data = null)
    {
        require_once __DIR__ . '/entity/senador_entity.php';
        return new SenadorEntity($this, $data);
    }


    public function TasaIntere($data = null)
    {
        require_once __DIR__ . '/entity/tasa_intere_entity.php';
        return new TasaIntereEntity($this, $data);
    }


    public function TasaPlazoFijo($data = null)
    {
        require_once __DIR__ . '/entity/tasa_plazo_fijo_entity.php';
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
