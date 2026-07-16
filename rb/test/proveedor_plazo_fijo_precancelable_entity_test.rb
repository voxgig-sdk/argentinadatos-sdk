# ProveedorPlazoFijoPrecancelable entity test

require "minitest/autorun"
require "json"
require_relative "../Argentinadatos_sdk"
require_relative "runner"

class ProveedorPlazoFijoPrecancelableEntityTest < Minitest::Test
  def test_create_instance
    testsdk = ArgentinadatosSDK.test(nil, nil)
    ent = testsdk.ProveedorPlazoFijoPrecancelable(nil)
    assert !ent.nil?
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "proveedor_plazo_fijo_precancelable" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = ArgentinadatosSDK.test(seed, nil)
    seen = base.ProveedorPlazoFijoPrecancelable(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = ArgentinadatosConfig.make_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = ArgentinadatosSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.ProveedorPlazoFijoPrecancelable(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  def test_basic_flow
    setup = proveedor_plazo_fijo_precancelable_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "proveedor_plazo_fijo_precancelable." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_PRECANCELABLE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    proveedor_plazo_fijo_precancelable_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.proveedor_plazo_fijo_precancelable")))
    proveedor_plazo_fijo_precancelable_ref01_data = nil
    if proveedor_plazo_fijo_precancelable_ref01_data_raw.length > 0
      proveedor_plazo_fijo_precancelable_ref01_data = Helpers.to_map(proveedor_plazo_fijo_precancelable_ref01_data_raw[0][1])
    end

    # LIST
    proveedor_plazo_fijo_precancelable_ref01_ent = client.ProveedorPlazoFijoPrecancelable(nil)
    proveedor_plazo_fijo_precancelable_ref01_match = {}

    proveedor_plazo_fijo_precancelable_ref01_list_result = proveedor_plazo_fijo_precancelable_ref01_ent.list(proveedor_plazo_fijo_precancelable_ref01_match, nil)
    assert proveedor_plazo_fijo_precancelable_ref01_list_result.is_a?(Array)

  end
end

def proveedor_plazo_fijo_precancelable_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "proveedor_plazo_fijo_precancelable", "ProveedorPlazoFijoPrecancelableTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = ArgentinadatosSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["proveedor_plazo_fijo_precancelable01", "proveedor_plazo_fijo_precancelable02", "proveedor_plazo_fijo_precancelable03"],
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
  entid_env_raw = ENV["ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_PRECANCELABLE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_PRECANCELABLE_ENTID" => idmap,
    "ARGENTINADATOS_TEST_LIVE" => "FALSE",
    "ARGENTINADATOS_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_PRECANCELABLE_ENTID"])
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
