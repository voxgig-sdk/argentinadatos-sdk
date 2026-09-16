

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


describe('CuentaRemuneradaUsdEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.CuentaRemuneradaUsd()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cuenta_remunerada_usd.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"entidad","req":false,"short":"Identificador de la entidad (p.","type":"`$STRING`","index$":0},{"active":true,"format":"float","name":"tasa","req":false,"short":"Tasa de rendimiento anual en formato decimal (p.","type":"`$NUMBER`","index$":1},{"active":true,"format":"float","name":"tope","req":false,"short":"Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó","type":"`$NUMBER`","index$":2}],"name":"cuenta_remunerada_usd","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/finanzas/cuentas-remuneradas-usd","json":"{\"operationId\":\"get-finanzas-cuentas-remuneradas-usd\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"entidad\":{\"description\":\"Identificador de la entidad (p. ej. BNA, GALICIA, SUPERVIELLE)\",\"type\":\"string\"},\"tasa\":{\"description\":\"Tasa de rendimiento anual en formato decimal (p. ej. 0.02 = 2 % anual)\",\"format\":\"float\",\"type\":\"number\"},\"tope\":{\"description\":\"Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó\",\"format\":\"float\",\"nullable\":true,\"type\":\"number\"}},\"title\":\"CuentaRemuneradaUsd\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Lista de entidades con tasa y tope vigentes al último relevamiento\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/cuentas-remuneradas-usd","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"cuentas-remuneradas-usd"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"cuenta_remunerada_usd","name__orig":"cuenta_remunerada_usd","Name":"CuentaRemuneradaUsd","name_":"cuenta_remunerada_usd","name-":"cuenta-remunerada-usd","NAME":"CUENTA_REMUNERADA_USD","index$":4}, {"active":true,"entity":"cuenta_remunerada_usd","key$":"BasicCuentaRemuneradaUsdFlow","kind":"basic","name":"BasicCuentaRemuneradaUsdFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"cuenta_remunerada_usd_ref01"}}],"index$":0}]}, 'CuentaRemuneradaUsd')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cuenta_remunerada_usd_ref01_data = Object.values(setup.data.existing.cuenta_remunerada_usd)[0] as any

    // LIST
    const cuenta_remunerada_usd_ref01_ent = client.CuentaRemuneradaUsd()
    const cuenta_remunerada_usd_ref01_match: any = {}

    const cuenta_remunerada_usd_ref01_list = (await cuenta_remunerada_usd_ref01_ent.list(cuenta_remunerada_usd_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cuenta_remunerada_usd/CuentaRemuneradaUsdTestData.json')

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
    ['cuenta_remunerada_usd01','cuenta_remunerada_usd02','cuenta_remunerada_usd03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_CUENTA_REMUNERADA_USD_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_CUENTA_REMUNERADA_USD_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_CUENTA_REMUNERADA_USD_ENTID']
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
  
