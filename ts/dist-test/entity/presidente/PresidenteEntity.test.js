"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PresidenteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ARGENTINADATOS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ArgentinadatosSDK.test();
        const ent = testsdk.Presidente();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'presidente.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "fin", "req": false, "short": "Fecha de fin del mandato (formato yyyy-MM-dd).", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "uri", "name": "imagen", "req": false, "short": "URL de la imagen del presidente", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "inicio", "req": false, "short": "Fecha de inicio del mandato (formato yyyy-MM-dd)", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "nombre", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "partido", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "uri", "name": "partidoImagen", "req": false, "short": "URL de la imagen del logo del partido político", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "periodoPresidencial", "req": false, "short": "Rango de años del período presidencial (ej: '2019-2023')", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "vicepresidente", "req": false, "short": "Nombre del vicepresidente.", "type": "`$STRING`", "index$": 7 }], "name": "presidente", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /v1/presidentes", "json": "{\"operationId\":\"get-presidentes\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"fin\":{\"description\":\"Fecha de fin del mandato (formato yyyy-MM-dd). Null si es el presidente actual.\",\"nullable\":true,\"type\":\"string\"},\"imagen\":{\"description\":\"URL de la imagen del presidente\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"inicio\":{\"description\":\"Fecha de inicio del mandato (formato yyyy-MM-dd)\",\"nullable\":true,\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"partido\":{\"nullable\":true,\"type\":\"string\"},\"partidoImagen\":{\"description\":\"URL de la imagen del logo del partido político\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"periodoPresidencial\":{\"description\":\"Rango de años del período presidencial (ej: '2019-2023')\",\"nullable\":true,\"type\":\"string\"},\"vicepresidente\":{\"description\":\"Nombre del vicepresidente. Puede ser 'Cargo inexistente' o 'vacante' en ciertos periodos.\",\"nullable\":true,\"type\":\"string\"}},\"title\":\"Presidente\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de presidentes\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/presidentes", "segments": [{ "lit": "v1" }, { "lit": "presidentes" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "presidente", "name__orig": "presidente", "Name": "Presidente", "name_": "presidente", "name-": "presidente", "NAME": "PRESIDENTE", "index$": 18 }, { "active": true, "entity": "presidente", "key$": "BasicPresidenteFlow", "kind": "basic", "name": "BasicPresidenteFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "presidente_ref01" } }], "index$": 0 }] }, 'Presidente');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let presidente_ref01_data = Object.values(setup.data.existing.presidente)[0];
        // LIST
        const presidente_ref01_ent = client.Presidente();
        const presidente_ref01_match = {};
        const presidente_ref01_list = (await presidente_ref01_ent.list(presidente_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/presidente/PresidenteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ArgentinadatosSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['presidente01', 'presidente02', 'presidente03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ARGENTINADATOS_TEST_PRESIDENTE_ENTID': idmap,
        'ARGENTINADATOS_TEST_LIVE': 'FALSE',
        'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ARGENTINADATOS_TEST_PRESIDENTE_ENTID'];
    const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ARGENTINADATOS_TEST_PRESIDENTE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ArgentinadatosSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.ARGENTINADATOS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=PresidenteEntity.test.js.map