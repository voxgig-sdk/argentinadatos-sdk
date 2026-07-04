<?php
declare(strict_types=1);

// RiesgoPai entity test

require_once __DIR__ . '/../argentinadatos_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RiesgoPaiEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ArgentinadatosSDK::test(null, null);
        $ent = $testsdk->RiesgoPai(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = riesgo_pai_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "riesgo_pai." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set ARGENTINADATOS_TEST_RIESGO_PAI_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $riesgo_pai_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.riesgo_pai")));
        $riesgo_pai_ref01_data = null;
        if (count($riesgo_pai_ref01_data_raw) > 0) {
            $riesgo_pai_ref01_data = Helpers::to_map($riesgo_pai_ref01_data_raw[0][1]);
        }

        // LIST
        $riesgo_pai_ref01_ent = $client->RiesgoPai(null);
        $riesgo_pai_ref01_match = [];

        $riesgo_pai_ref01_list_result = $riesgo_pai_ref01_ent->list($riesgo_pai_ref01_match, null);
        $this->assertIsArray($riesgo_pai_ref01_list_result);

        // LOAD
        $riesgo_pai_ref01_match_dt0 = [];
        $riesgo_pai_ref01_data_dt0_loaded = $riesgo_pai_ref01_ent->load($riesgo_pai_ref01_match_dt0, null);
        $this->assertNotNull($riesgo_pai_ref01_data_dt0_loaded);

    }
}

function riesgo_pai_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/riesgo_pai/RiesgoPaiTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ArgentinadatosSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["riesgo_pai01", "riesgo_pai02", "riesgo_pai03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("ARGENTINADATOS_TEST_RIESGO_PAI_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "ARGENTINADATOS_TEST_RIESGO_PAI_ENTID" => $idmap,
        "ARGENTINADATOS_TEST_LIVE" => "FALSE",
        "ARGENTINADATOS_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["ARGENTINADATOS_TEST_RIESGO_PAI_ENTID"]);
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
