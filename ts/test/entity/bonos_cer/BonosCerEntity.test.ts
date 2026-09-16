

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


describe('BonosCerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.BonosCer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bonos_cer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"fechaVencimiento","req":true,"short":"Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd)","type":"`$STRING`","index$":0},{"active":true,"name":"precioArs","req":true,"short":"Precio de cotización en pesos argentinos","type":"`$NUMBER`","index$":1},{"active":true,"name":"ticker","req":true,"short":"Código del bono (ej.","type":"`$STRING`","index$":2},{"active":true,"name":"tirPorcentaje","req":true,"short":"Tasa interna de retorno (TIR) en porcentaje","type":"`$NUMBER`","index$":3},{"active":true,"name":"volumen","req":false,"short":"Volumen nominal negociado, si la fuente lo publica","type":"`$NUMBER`","index$":4}],"name":"bonos_cer","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/finanzas/bonos-cer","json":"{\"operationId\":\"get-finanzas-bonos-cer\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"bonos\":{\"description\":\"Filas de la grilla soberanos CER\",\"items\":{\"properties\":{\"fechaVencimiento\":{\"description\":\"Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd)\",\"format\":\"date\",\"type\":\"string\"},\"precioArs\":{\"description\":\"Precio de cotización en pesos argentinos\",\"type\":\"number\"},\"ticker\":{\"description\":\"Código del bono (ej. TZX26, TX26)\",\"type\":\"string\"},\"tirPorcentaje\":{\"description\":\"Tasa interna de retorno (TIR) en porcentaje\",\"type\":\"number\"},\"volumen\":{\"description\":\"Volumen nominal negociado, si la fuente lo publica\",\"type\":\"number\"}},\"required\":[\"ticker\",\"precioArs\",\"tirPorcentaje\",\"fechaVencimiento\"],\"title\":\"BonoSoberanoCer\",\"type\":\"object\"},\"type\":\"array\"},\"errorExtraccion\":{\"description\":\"Solo si falló la extracción: mensaje de error\",\"type\":\"string\"},\"fechaActualizacion\":{\"description\":\"Instante en que se generó el recurso (UTC, ISO 8601 con sufijo Z)\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"fechaActualizacion\",\"bonos\"],\"title\":\"BonosCer\",\"type\":\"object\"}}},\"description\":\"Listado de bonos soberanos CER con marca temporal de actualización\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/bonos-cer","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"bonos-cer"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.bonos`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"bonos_cer","name__orig":"bonos_cer","Name":"BonosCer","name_":"bonos_cer","name-":"bonos-cer","NAME":"BONOS_CER","index$":1}, {"active":true,"entity":"bonos_cer","key$":"BasicBonosCerFlow","kind":"basic","name":"BasicBonosCerFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"bonos_cer_ref01"}}],"index$":0}]}, 'BonosCer')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bonos_cer_ref01_data = Object.values(setup.data.existing.bonos_cer)[0] as any

    // LIST
    const bonos_cer_ref01_ent = client.BonosCer()
    const bonos_cer_ref01_match: any = {}

    const bonos_cer_ref01_list = (await bonos_cer_ref01_ent.list(bonos_cer_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bonos_cer/BonosCerTestData.json')

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
    ['bonos_cer01','bonos_cer02','bonos_cer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_BONOS_CER_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_BONOS_CER_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_BONOS_CER_ENTID']
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
  
