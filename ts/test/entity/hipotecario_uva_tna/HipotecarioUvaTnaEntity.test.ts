

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ArgentinadatosSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('HipotecarioUvaTnaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.HipotecarioUvaTna()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'hipotecario_uva_tna.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"entidad","req":false,"short":"Nombre del banco u oferente del crédito hipotecario UVA","type":"`$STRING`","index$":0},{"active":true,"name":"metadata","req":false,"short":"Detalle de condiciones","type":"`$OBJECT`","index$":1},{"active":true,"name":"nombreComercial","req":false,"short":"Nombre comercial","type":"`$STRING`","index$":2},{"active":true,"format":"float","name":"tna","req":false,"short":"Tasa Nominal Anual","type":"`$NUMBER`","index$":3}],"name":"hipotecario_uva_tna","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/finanzas/creditos/hipotecariosUva","json":"{\"operationId\":\"get-finanzas-creditos-hipotecarios-uva\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"entidad\":{\"description\":\"Nombre del banco u oferente del crédito hipotecario UVA\",\"type\":\"string\"},\"metadata\":{\"description\":\"Detalle de condiciones\",\"properties\":{\"financiamiento\":{\"description\":\"Porcentaje o condición de financiamiento\",\"type\":\"string\"},\"plazo_max_anios\":{\"description\":\"Plazo máximo del préstamo en años\",\"type\":\"integer\"},\"relacion_cuota_ingreso\":{\"description\":\"Relación cuota–ingreso indicada en la fuente (p. ej. porcentaje del ingreso)\",\"type\":\"string\"}},\"type\":\"object\"},\"nombreComercial\":{\"description\":\"Nombre comercial\",\"type\":\"string\"},\"tna\":{\"description\":\"Tasa Nominal Anual\",\"format\":\"float\",\"maximum\":1,\"minimum\":0,\"type\":\"number\"}},\"title\":\"HipotecarioUvaTna\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de TNA de créditos hipotecarios UVA\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/creditos/hipotecariosUva","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"creditos"},{"lit":"hipotecariosUva"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"hipotecario_uva_tna","name__orig":"hipotecario_uva_tna","Name":"HipotecarioUvaTna","name_":"hipotecario_uva_tna","name-":"hipotecario-uva-tna","NAME":"HIPOTECARIO_UVA_TNA","index$":14}, {"active":true,"entity":"hipotecario_uva_tna","key$":"BasicHipotecarioUvaTnaFlow","kind":"basic","name":"BasicHipotecarioUvaTnaFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"hipotecario_uva_tna_ref01"}}],"index$":0}]}, 'HipotecarioUvaTna')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let hipotecario_uva_tna_ref01_data = Object.values(setup.data.existing.hipotecario_uva_tna)[0] as any

    // LIST
    const hipotecario_uva_tna_ref01_ent = client.HipotecarioUvaTna()
    const hipotecario_uva_tna_ref01_match: any = {}

    const hipotecario_uva_tna_ref01_list = (await hipotecario_uva_tna_ref01_ent.list(hipotecario_uva_tna_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/hipotecario_uva_tna/HipotecarioUvaTnaTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ArgentinadatosSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['hipotecario_uva_tna01','hipotecario_uva_tna02','hipotecario_uva_tna03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_HIPOTECARIO_UVA_TNA_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_HIPOTECARIO_UVA_TNA_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_HIPOTECARIO_UVA_TNA_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ArgentinadatosSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
