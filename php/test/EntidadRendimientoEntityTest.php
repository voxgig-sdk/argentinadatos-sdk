<?php
declare(strict_types=1);

// EntidadRendimiento entity test

require_once __DIR__ . '/../argentinadatos_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EntidadRendimientoEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ArgentinadatosSDK::test(null, null);
        $ent = $testsdk->EntidadRendimiento(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = entidad_rendimiento_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "entidad_rendimiento." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set ARGENTINADATOS_TEST_ENTIDAD_RENDIMIENTO_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $entidad_rendimiento_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.entidad_rendimiento")));
        $entidad_rendimiento_ref01_data = null;
        if (count($entidad_rendimiento_ref01_data_raw) > 0) {
            $entidad_rendimiento_ref01_data = Helpers::to_map($entidad_rendimiento_ref01_data_raw[0][1]);
        }

        // LIST
        $entidad_rendimiento_ref01_ent = $client->EntidadRendimiento(null);
        $entidad_rendimiento_ref01_match = [];

        [$entidad_rendimiento_ref01_list_result, $err] = $entidad_rendimiento_ref01_ent->list($entidad_rendimiento_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($entidad_rendimiento_ref01_list_result);

    }
}

function entidad_rendimiento_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/entidad_rendimiento/EntidadRendimientoTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ArgentinadatosSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["entidad_rendimiento01", "entidad_rendimiento02", "entidad_rendimiento03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("ARGENTINADATOS_TEST_ENTIDAD_RENDIMIENTO_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "ARGENTINADATOS_TEST_ENTIDAD_RENDIMIENTO_ENTID" => $idmap,
        "ARGENTINADATOS_TEST_LIVE" => "FALSE",
        "ARGENTINADATOS_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["ARGENTINADATOS_TEST_ENTIDAD_RENDIMIENTO_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["ARGENTINADATOS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new ArgentinadatosSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["ARGENTINADATOS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["ARGENTINADATOS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
