

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


describe('RiesgoPaiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.RiesgoPai()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'riesgo_pai.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"fecha","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"valor","req":false,"type":"`$NUMBER`","index$":1}],"name":"riesgo_pai","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/finanzas/indices/riesgo-pais","json":"{\"operationId\":\"get-finanzas-indices-riesgo-pais\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"fecha\":{\"type\":\"string\"},\"valor\":{\"type\":\"number\"}},\"title\":\"RiesgoPais\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de riesgo país\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/indices/riesgo-pais","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"indices"},{"lit":"riesgo-pais"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/finanzas/indices/riesgo-pais/ultimo","json":"{\"operationId\":\"get-finanzas-indices-riesgo-pais-ultimo\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"fecha\":{\"type\":\"string\"},\"valor\":{\"type\":\"number\"}},\"title\":\"RiesgoPais\",\"type\":\"object\"}}},\"description\":\"Devuelve el último valor de riesgo país\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/indices/riesgo-pais/ultimo","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"indices"},{"lit":"riesgo-pais"},{"lit":"ultimo"}],"select":{"$action":"ultimo"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"riesgo_pai","name__orig":"riesgo_pai","Name":"RiesgoPai","name_":"riesgo_pai","name-":"riesgo-pai","NAME":"RIESGO_PAI","index$":24}, {"active":true,"entity":"riesgo_pai","key$":"BasicRiesgoPaiFlow","kind":"basic","name":"BasicRiesgoPaiFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"riesgo_pai_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"riesgo_pai_ref01","srcdatavar":"riesgo_pai_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-riesgo_pai_ref01"}}],"index$":1}]}, 'RiesgoPai')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let riesgo_pai_ref01_data = Object.values(setup.data.existing.riesgo_pai)[0] as any

    // LIST
    const riesgo_pai_ref01_ent = client.RiesgoPai()
    const riesgo_pai_ref01_match: any = {}

    const riesgo_pai_ref01_list = (await riesgo_pai_ref01_ent.list(riesgo_pai_ref01_match)).map((e: any) => e.data())


    // LOAD
    const riesgo_pai_ref01_match_dt0: any = {}
    const riesgo_pai_ref01_data_dt0 = (await riesgo_pai_ref01_ent.load(riesgo_pai_ref01_match_dt0)).data()
    assert(null != riesgo_pai_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/riesgo_pai/RiesgoPaiTestData.json')

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
    ['riesgo_pai01','riesgo_pai02','riesgo_pai03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_RIESGO_PAI_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_RIESGO_PAI_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_RIESGO_PAI_ENTID']
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
  
