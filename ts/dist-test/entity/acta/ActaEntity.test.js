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
(0, node_test_1.describe)('ActaEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ARGENTINADATOS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ArgentinadatosSDK.test();
        const ent = testsdk.Acta();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'acta.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "abstenciones", "req": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "acta", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "actaId", "req": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "afirmativos", "req": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "amn", "req": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "ausentes", "req": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "descripcion", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "date-time", "name": "fecha", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "mayoria", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "miembros", "req": false, "type": "`$INTEGER`", "index$": 10 }, { "active": true, "name": "negativos", "req": false, "type": "`$INTEGER`", "index$": 11 }, { "active": true, "name": "numeroActa", "req": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "observaciones", "req": false, "type": "`$ARRAY`", "index$": 13 }, { "active": true, "name": "periodo", "req": false, "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "presentes", "req": false, "type": "`$INTEGER`", "index$": 15 }, { "active": true, "name": "presidente", "req": false, "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "proyecto", "req": false, "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "quorumTipo", "req": false, "type": "`$STRING`", "index$": 18 }, { "active": true, "name": "resultado", "req": false, "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "reunion", "req": false, "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "titulo", "req": false, "type": "`$STRING`", "index$": 21 }, { "active": true, "name": "votos", "req": false, "type": "`$ARRAY`", "index$": 22 }, { "active": true, "name": "votosAfirmativos", "req": false, "type": "`$INTEGER`", "index$": 23 }, { "active": true, "name": "votosNegativos", "req": false, "type": "`$INTEGER`", "index$": 24 }], "id": { "field": "id", "name": "id" }, "name": "acta", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /v1/diputados/actas", "json": "{\"operationId\":\"get-diputados-actas\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"abstenciones\":{\"type\":\"integer\"},\"ausentes\":{\"type\":\"integer\"},\"fecha\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"numeroActa\":{\"type\":\"string\"},\"periodo\":{\"type\":\"string\"},\"presidente\":{\"type\":\"string\"},\"resultado\":{\"type\":\"string\"},\"reunion\":{\"type\":\"string\"},\"titulo\":{\"type\":\"string\"},\"votos\":{\"items\":{\"properties\":{\"diputado\":{\"type\":\"string\"},\"imagen\":{\"type\":\"string\"},\"tipoVoto\":{\"enum\":[\"afirmativo\",\"negativo\",\"abstencion\",\"ausente\",\"presidente\"],\"type\":\"string\"},\"videoDiscurso\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"votosAfirmativos\":{\"type\":\"integer\"},\"votosNegativos\":{\"type\":\"integer\"}},\"title\":\"ActaDiputados\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de actas de Diputados\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/diputados/actas", "segments": [{ "lit": "v1" }, { "lit": "diputados" }, { "lit": "actas" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /v1/senado/actas", "json": "{\"operationId\":\"get-senado-actas\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"abstenciones\":{\"type\":\"integer\"},\"acta\":{\"type\":\"string\"},\"actaId\":{\"nullable\":true,\"type\":\"integer\"},\"afirmativos\":{\"type\":\"integer\"},\"amn\":{\"type\":\"integer\"},\"ausentes\":{\"type\":\"integer\"},\"descripcion\":{\"type\":\"string\"},\"fecha\":{\"format\":\"date\",\"type\":\"string\"},\"mayoria\":{\"type\":\"string\"},\"miembros\":{\"type\":\"integer\"},\"negativos\":{\"type\":\"integer\"},\"observaciones\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"presentes\":{\"type\":\"integer\"},\"proyecto\":{\"type\":\"string\"},\"quorumTipo\":{\"type\":\"string\"},\"resultado\":{\"enum\":[\"afirmativa\",\"negativa\",\"cancelada lev.vot.\"],\"type\":\"string\"},\"titulo\":{\"nullable\":true,\"type\":\"string\"},\"votos\":{\"items\":{\"properties\":{\"banca\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"voto\":{\"enum\":[\"si\",\"no\",\"ausente\",\"abstencion\",\"no emite\",\"desconocido\"],\"type\":\"string\"}},\"title\":\"VotoData\",\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"ActaSenado\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de actas del Senado\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/senado/actas", "segments": [{ "lit": "v1" }, { "lit": "senado" }, { "lit": "actas" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 2026, "kind": "param", "name": "id", "orig": "año", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /v1/diputados/actas/{año}", "json": "{\"operationId\":\"get-diputados-actas-año\",\"parameters\":[{\"description\":\"Año de consulta\",\"example\":2026,\"in\":\"path\",\"name\":\"año\",\"required\":true,\"schema\":{\"maximum\":2026,\"minimum\":2016,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"abstenciones\":{\"type\":\"integer\"},\"ausentes\":{\"type\":\"integer\"},\"fecha\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"numeroActa\":{\"type\":\"string\"},\"periodo\":{\"type\":\"string\"},\"presidente\":{\"type\":\"string\"},\"resultado\":{\"type\":\"string\"},\"reunion\":{\"type\":\"string\"},\"titulo\":{\"type\":\"string\"},\"votos\":{\"items\":{\"properties\":{\"diputado\":{\"type\":\"string\"},\"imagen\":{\"type\":\"string\"},\"tipoVoto\":{\"enum\":[\"afirmativo\",\"negativo\",\"abstencion\",\"ausente\",\"presidente\"],\"type\":\"string\"},\"videoDiscurso\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"votosAfirmativos\":{\"type\":\"integer\"},\"votosNegativos\":{\"type\":\"integer\"}},\"title\":\"ActaDiputados\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de actas de Diputados\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/diputados/actas/{año}", "rename": { "param": { "año": "id" } }, "segments": [{ "lit": "v1" }, { "lit": "diputados" }, { "lit": "actas" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": 2026, "kind": "param", "name": "id", "orig": "año", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /v1/senado/actas/{año}", "json": "{\"operationId\":\"get-senado-actas-año\",\"parameters\":[{\"description\":\"Año de consulta\",\"example\":2026,\"in\":\"path\",\"name\":\"año\",\"required\":true,\"schema\":{\"maximum\":2026,\"minimum\":2016,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"abstenciones\":{\"type\":\"integer\"},\"acta\":{\"type\":\"string\"},\"actaId\":{\"nullable\":true,\"type\":\"integer\"},\"afirmativos\":{\"type\":\"integer\"},\"amn\":{\"type\":\"integer\"},\"ausentes\":{\"type\":\"integer\"},\"descripcion\":{\"type\":\"string\"},\"fecha\":{\"format\":\"date\",\"type\":\"string\"},\"mayoria\":{\"type\":\"string\"},\"miembros\":{\"type\":\"integer\"},\"negativos\":{\"type\":\"integer\"},\"observaciones\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"presentes\":{\"type\":\"integer\"},\"proyecto\":{\"type\":\"string\"},\"quorumTipo\":{\"type\":\"string\"},\"resultado\":{\"enum\":[\"afirmativa\",\"negativa\",\"cancelada lev.vot.\"],\"type\":\"string\"},\"titulo\":{\"nullable\":true,\"type\":\"string\"},\"votos\":{\"items\":{\"properties\":{\"banca\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"voto\":{\"enum\":[\"si\",\"no\",\"ausente\",\"abstencion\",\"no emite\",\"desconocido\"],\"type\":\"string\"}},\"title\":\"VotoData\",\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"ActaSenado\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de actas del Senado\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/senado/actas/{año}", "rename": { "param": { "año": "id" } }, "segments": [{ "lit": "v1" }, { "lit": "senado" }, { "lit": "actas" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "acta", "name__orig": "acta", "Name": "Acta", "name_": "acta", "name-": "acta", "NAME": "ACTA", "index$": 0 }, { "active": true, "entity": "acta", "key$": "BasicActaFlow", "kind": "basic", "name": "BasicActaFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "acta_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "acta_ref01", "srcdatavar": "acta_ref01_data", "suffix": "_dt0" }, "match": { "id": "acta01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-acta_ref01" } }], "index$": 1 }] }, 'Acta');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let acta_ref01_data = Object.values(setup.data.existing.acta)[0];
        // LIST
        const acta_ref01_ent = client.Acta();
        const acta_ref01_match = {};
        const acta_ref01_list = (await acta_ref01_ent.list(acta_ref01_match)).map((e) => e.data());
        // LOAD
        const acta_ref01_match_dt0 = {};
        acta_ref01_match_dt0.id = acta_ref01_data.id;
        const acta_ref01_data_dt0 = (await acta_ref01_ent.load(acta_ref01_match_dt0)).data();
        (0, node_assert_1.default)(acta_ref01_data_dt0.id === acta_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/acta/ActaTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ArgentinadatosSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['acta01', 'acta02', 'acta03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ARGENTINADATOS_TEST_ACTA_ENTID': idmap,
        'ARGENTINADATOS_TEST_LIVE': 'FALSE',
        'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ARGENTINADATOS_TEST_ACTA_ENTID'];
    const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ARGENTINADATOS_TEST_ACTA_ENTID'];
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
//# sourceMappingURL=ActaEntity.test.js.map