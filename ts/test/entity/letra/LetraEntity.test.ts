

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


describe('LetraEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.Letra()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'letra.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"fechaEmision","req":false,"short":"Fecha de emisión original (ISO 8601)","type":"`$STRING`","index$":0},{"active":true,"name":"fechaVencimiento","req":false,"short":"Fecha de vencimiento (ISO 8601)","type":"`$STRING`","index$":1},{"active":true,"name":"tem","req":false,"short":"Tasa Efectiva Mensual (%)","type":"`$NUMBER`","index$":2},{"active":true,"name":"ticker","req":false,"short":"Código del instrumento (ej: S31G5, T17O5)","type":"`$STRING`","index$":3},{"active":true,"name":"vpv","req":false,"short":"Valor de Pago al Vencimiento por cada $100 de valor nominal","type":"`$NUMBER`","index$":4}],"name":"letra","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/finanzas/letras","json":"{\"operationId\":\"get-finanzas-letras\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"fechaEmision\":{\"description\":\"Fecha de emisión original (ISO 8601)\",\"type\":\"string\"},\"fechaVencimiento\":{\"description\":\"Fecha de vencimiento (ISO 8601)\",\"type\":\"string\"},\"tem\":{\"description\":\"Tasa Efectiva Mensual (%)\",\"type\":\"number\"},\"ticker\":{\"description\":\"Código del instrumento (ej: S31G5, T17O5)\",\"type\":\"string\"},\"vpv\":{\"description\":\"Valor de Pago al Vencimiento por cada $100 de valor nominal\",\"type\":\"number\"}},\"title\":\"LetraCapitalizable\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de letras capitalizables activas\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/letras","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"letras"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"letra","name__orig":"letra","Name":"Letra","name_":"letra","name-":"letra","NAME":"LETRA","index$":17}, {"active":true,"entity":"letra","key$":"BasicLetraFlow","kind":"basic","name":"BasicLetraFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"letra_ref01"}}],"index$":0}]}, 'Letra')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let letra_ref01_data = Object.values(setup.data.existing.letra)[0] as any

    // LIST
    const letra_ref01_ent = client.Letra()
    const letra_ref01_match: any = {}

    const letra_ref01_list = (await letra_ref01_ent.list(letra_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/letra/LetraTestData.json')

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
    ['letra01','letra02','letra03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_LETRA_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_LETRA_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_LETRA_ENTID']
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
  
