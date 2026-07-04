# BonosCer entity test

require "minitest/autorun"
require "json"
require_relative "../Argentinadatos_sdk"
require_relative "runner"

class BonosCerEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ArgentinadatosSDK.test(nil, nil)
    ent = testsdk.BonosCer(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = bonos_cer_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "bonos_cer." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set ARGENTINADATOS_TEST_BONOS_CER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    bonos_cer_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.bonos_cer")))
    bonos_cer_ref01_data = nil
    if bonos_cer_ref01_data_raw.length > 0
      bonos_cer_ref01_data = Helpers.to_map(bonos_cer_ref01_data_raw[0][1])
    end

    # LIST
    bonos_cer_ref01_ent = client.BonosCer(nil)
    bonos_cer_ref01_match = {}

    bonos_cer_ref01_list_result = bonos_cer_ref01_ent.list(bonos_cer_ref01_match, nil)
    assert bonos_cer_ref01_list_result.is_a?(Array)

  end
end

def bonos_cer_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "bonos_cer", "BonosCerTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ArgentinadatosSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["bonos_cer01", "bonos_cer02", "bonos_cer03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["ARGENTINADATOS_TEST_BONOS_CER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "ARGENTINADATOS_TEST_BONOS_CER_ENTID" => idmap,
    "ARGENTINADATOS_TEST_LIVE" => "FALSE",
    "ARGENTINADATOS_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["ARGENTINADATOS_TEST_BONOS_CER_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["ARGENTINADATOS_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = ArgentinadatosSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["ARGENTINADATOS_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["ARGENTINADATOS_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
