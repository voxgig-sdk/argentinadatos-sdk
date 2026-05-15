package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/argentinadatos-sdk"
	"github.com/voxgig-sdk/argentinadatos-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestProveedorPlazoFijoPrecancelableEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ProveedorPlazoFijoPrecancelable(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProveedorPlazoFijoPrecancelableEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := proveedor_plazo_fijo_precancelableBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "proveedor_plazo_fijo_precancelable." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_PRECANCELABLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		proveedorPlazoFijoPrecancelableRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.proveedor_plazo_fijo_precancelable", setup.data)))
		var proveedorPlazoFijoPrecancelableRef01Data map[string]any
		if len(proveedorPlazoFijoPrecancelableRef01DataRaw) > 0 {
			proveedorPlazoFijoPrecancelableRef01Data = core.ToMapAny(proveedorPlazoFijoPrecancelableRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = proveedorPlazoFijoPrecancelableRef01Data

		// LIST
		proveedorPlazoFijoPrecancelableRef01Ent := client.ProveedorPlazoFijoPrecancelable(nil)
		proveedorPlazoFijoPrecancelableRef01Match := map[string]any{}

		proveedorPlazoFijoPrecancelableRef01ListResult, err := proveedorPlazoFijoPrecancelableRef01Ent.List(proveedorPlazoFijoPrecancelableRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, proveedorPlazoFijoPrecancelableRef01ListOk := proveedorPlazoFijoPrecancelableRef01ListResult.([]any)
		if !proveedorPlazoFijoPrecancelableRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", proveedorPlazoFijoPrecancelableRef01ListResult)
		}

	})
}

func proveedor_plazo_fijo_precancelableBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "proveedor_plazo_fijo_precancelable", "ProveedorPlazoFijoPrecancelableTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read proveedor_plazo_fijo_precancelable test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse proveedor_plazo_fijo_precancelable test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"proveedor_plazo_fijo_precancelable01", "proveedor_plazo_fijo_precancelable02", "proveedor_plazo_fijo_precancelable03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_PRECANCELABLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_PRECANCELABLE_ENTID": idmap,
		"ARGENTINADATOS_TEST_LIVE":      "FALSE",
		"ARGENTINADATOS_TEST_EXPLAIN":   "FALSE",
		"ARGENTINADATOS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_PRECANCELABLE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["ARGENTINADATOS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["ARGENTINADATOS_APIKEY"],
			},
			extra,
		})
		client = sdk.NewArgentinadatosSDK(core.ToMapAny(mergedOpts))
	}

	live := env["ARGENTINADATOS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["ARGENTINADATOS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
