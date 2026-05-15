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

func TestEntidadRendimientoEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EntidadRendimiento(nil)
		if ent == nil {
			t.Fatal("expected non-nil EntidadRendimientoEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := entidad_rendimientoBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "entidad_rendimiento." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set ARGENTINADATOS_TEST_ENTIDAD_RENDIMIENTO_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		entidadRendimientoRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.entidad_rendimiento", setup.data)))
		var entidadRendimientoRef01Data map[string]any
		if len(entidadRendimientoRef01DataRaw) > 0 {
			entidadRendimientoRef01Data = core.ToMapAny(entidadRendimientoRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = entidadRendimientoRef01Data

		// LIST
		entidadRendimientoRef01Ent := client.EntidadRendimiento(nil)
		entidadRendimientoRef01Match := map[string]any{}

		entidadRendimientoRef01ListResult, err := entidadRendimientoRef01Ent.List(entidadRendimientoRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, entidadRendimientoRef01ListOk := entidadRendimientoRef01ListResult.([]any)
		if !entidadRendimientoRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", entidadRendimientoRef01ListResult)
		}

	})
}

func entidad_rendimientoBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "entidad_rendimiento", "EntidadRendimientoTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read entidad_rendimiento test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse entidad_rendimiento test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"entidad_rendimiento01", "entidad_rendimiento02", "entidad_rendimiento03"},
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
	entidEnvRaw := os.Getenv("ARGENTINADATOS_TEST_ENTIDAD_RENDIMIENTO_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"ARGENTINADATOS_TEST_ENTIDAD_RENDIMIENTO_ENTID": idmap,
		"ARGENTINADATOS_TEST_LIVE":      "FALSE",
		"ARGENTINADATOS_TEST_EXPLAIN":   "FALSE",
		"ARGENTINADATOS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["ARGENTINADATOS_TEST_ENTIDAD_RENDIMIENTO_ENTID"])
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
