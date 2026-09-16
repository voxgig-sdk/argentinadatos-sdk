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
(0, node_test_1.describe)('RemExpectativaEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ARGENTINADATOS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ArgentinadatosSDK.test();
        const ent = testsdk.RemExpectativa();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rem_expectativa.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "desvio", "req": false, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "format": "date", "name": "fecha", "req": false, "short": "Fecha ISO del primer día del mes del informe", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "fuente", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "indicador", "req": false, "short": "Indicador relevado", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "informe", "req": false, "short": "Informe REM en formato YYYY-MM", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "maximo", "req": false, "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "mediana", "req": false, "type": "`$NUMBER`", "index$": 6 }, { "active": true, "name": "minimo", "req": false, "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "muestra", "req": false, "short": "Muestra de participantes: todos o TOP 10", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "participantes", "req": false, "type": "`$INTEGER`", "index$": 9 }, { "active": true, "name": "percentil10", "req": false, "type": "`$NUMBER`", "index$": 10 }, { "active": true, "name": "percentil25", "req": false, "type": "`$NUMBER`", "index$": 11 }, { "active": true, "name": "percentil75", "req": false, "type": "`$NUMBER`", "index$": 12 }, { "active": true, "name": "percentil90", "req": false, "type": "`$NUMBER`", "index$": 13 }, { "active": true, "name": "periodo", "req": false, "short": "Período original informado por el BCRA", "type": "`$STRING`", "index$": 14 }, { "active": true, "format": "date", "name": "periodoDesde", "req": false, "short": "Fecha de inicio del período normalizado", "type": "`$STRING`", "index$": 15 }, { "active": true, "format": "date", "name": "periodoHasta", "req": false, "short": "Fecha de fin del período normalizado", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "periodoTipo", "req": false, "short": "Tipo de período normalizado", "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "promedio", "req": false, "type": "`$NUMBER`", "index$": 18 }, { "active": true, "name": "publicacionUrl", "req": false, "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "referencia", "req": false, "short": "Referencia original de la tabla", "type": "`$STRING`", "index$": 20 }, { "active": true, "format": "date", "name": "referenciaFecha", "req": false, "short": "Fecha detectada en la referencia, si corresponde", "type": "`$STRING`", "index$": 21 }, { "active": true, "name": "unidad", "req": false, "short": "Unidad inferida desde la referencia", "type": "`$STRING`", "index$": 22 }, { "active": true, "name": "xlsxUrl", "req": false, "type": "`$STRING`", "index$": 23 }], "name": "rem_expectativa", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /v1/rems/ultimo", "json": "{\"operationId\":\"get-rems-ultimo\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"desvio\":{\"nullable\":true,\"type\":\"number\"},\"fecha\":{\"description\":\"Fecha ISO del primer día del mes del informe\",\"format\":\"date\",\"type\":\"string\"},\"fuente\":{\"type\":\"string\"},\"indicador\":{\"description\":\"Indicador relevado\",\"type\":\"string\"},\"informe\":{\"description\":\"Informe REM en formato YYYY-MM\",\"type\":\"string\"},\"maximo\":{\"nullable\":true,\"type\":\"number\"},\"mediana\":{\"nullable\":true,\"type\":\"number\"},\"minimo\":{\"nullable\":true,\"type\":\"number\"},\"muestra\":{\"description\":\"Muestra de participantes: todos o TOP 10\",\"enum\":[\"todos\",\"top_10\"],\"type\":\"string\"},\"participantes\":{\"nullable\":true,\"type\":\"integer\"},\"percentil10\":{\"nullable\":true,\"type\":\"number\"},\"percentil25\":{\"nullable\":true,\"type\":\"number\"},\"percentil75\":{\"nullable\":true,\"type\":\"number\"},\"percentil90\":{\"nullable\":true,\"type\":\"number\"},\"periodo\":{\"description\":\"Período original informado por el BCRA\",\"type\":\"string\"},\"periodoDesde\":{\"description\":\"Fecha de inicio del período normalizado\",\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"periodoHasta\":{\"description\":\"Fecha de fin del período normalizado\",\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"periodoTipo\":{\"description\":\"Tipo de período normalizado\",\"type\":\"string\"},\"promedio\":{\"nullable\":true,\"type\":\"number\"},\"publicacionUrl\":{\"nullable\":true,\"type\":\"string\"},\"referencia\":{\"description\":\"Referencia original de la tabla\",\"type\":\"string\"},\"referenciaFecha\":{\"description\":\"Fecha detectada en la referencia, si corresponde\",\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"unidad\":{\"description\":\"Unidad inferida desde la referencia\",\"nullable\":true,\"type\":\"string\"},\"xlsxUrl\":{\"nullable\":true,\"type\":\"string\"}},\"title\":\"RemExpectativa\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de expectativas del último REM\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/rems/ultimo", "segments": [{ "lit": "v1" }, { "lit": "rems" }, { "lit": "ultimo" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "rem_expectativa", "name__orig": "rem_expectativa", "Name": "RemExpectativa", "name_": "rem_expectativa", "name-": "rem-expectativa", "NAME": "REM_EXPECTATIVA", "index$": 22 }, { "active": true, "entity": "rem_expectativa", "key$": "BasicRemExpectativaFlow", "kind": "basic", "name": "BasicRemExpectativaFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "rem_expectativa_ref01" } }], "index$": 0 }] }, 'RemExpectativa');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let rem_expectativa_ref01_data = Object.values(setup.data.existing.rem_expectativa)[0];
        // LIST
        const rem_expectativa_ref01_ent = client.RemExpectativa();
        const rem_expectativa_ref01_match = {};
        const rem_expectativa_ref01_list = (await rem_expectativa_ref01_ent.list(rem_expectativa_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rem_expectativa/RemExpectativaTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ArgentinadatosSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rem_expectativa01', 'rem_expectativa02', 'rem_expectativa03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ARGENTINADATOS_TEST_REM_EXPECTATIVA_ENTID': idmap,
        'ARGENTINADATOS_TEST_LIVE': 'FALSE',
        'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ARGENTINADATOS_TEST_REM_EXPECTATIVA_ENTID'];
    const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ARGENTINADATOS_TEST_REM_EXPECTATIVA_ENTID'];
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
//# sourceMappingURL=RemExpectativaEntity.test.js.map