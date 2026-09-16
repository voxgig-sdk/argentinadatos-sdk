

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


describe('TasaIntereEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.TasaIntere()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tasa_intere.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"fecha","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"valor","req":false,"type":"`$NUMBER`","index$":1}],"name":"tasa_intere","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/finanzas/tasas/depositos30Dias","json":"{\"operationId\":\"get-finanzas-tasas-depositos-30-dias\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"fecha\":{\"type\":\"string\"},\"valor\":{\"type\":\"number\"}},\"title\":\"TasaInteres\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de tasas de interés por depósitos a 30 días\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/tasas/depositos30Dias","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"tasas"},{"lit":"depositos30Dias"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tasa_intere","name__orig":"tasa_intere","Name":"TasaIntere","name_":"tasa_intere","name-":"tasa-intere","NAME":"TASA_INTERE","index$":26}, {"active":true,"entity":"tasa_intere","key$":"BasicTasaIntereFlow","kind":"basic","name":"BasicTasaIntereFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"tasa_intere_ref01"}}],"index$":0}]}, 'TasaIntere')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tasa_intere_ref01_data = Object.values(setup.data.existing.tasa_intere)[0] as any

    // LIST
    const tasa_intere_ref01_ent = client.TasaIntere()
    const tasa_intere_ref01_match: any = {}

    const tasa_intere_ref01_list = (await tasa_intere_ref01_ent.list(tasa_intere_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tasa_intere/TasaIntereTestData.json')

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
    ['tasa_intere01','tasa_intere02','tasa_intere03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_TASA_INTERE_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_TASA_INTERE_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_TASA_INTERE_ENTID']
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
  
