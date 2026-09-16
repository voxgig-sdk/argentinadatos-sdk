

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


describe('CotizacionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.Cotizacion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cotizacion.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"casa","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"compra","req":false,"type":"`$NUMBER`","index$":1},{"active":true,"name":"fecha","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"moneda","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"venta","req":false,"type":"`$NUMBER`","index$":5}],"id":{"field":"id","from":{"casa":"casa","fecha":"fecha"},"name":"id","parts":["casa","fecha"],"sep":"/"},"name":"cotizacion","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/cotizaciones/dolares","json":"{\"operationId\":\"get-cotizaciones-dolares\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fecha\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"venta\":{\"type\":\"number\"}},\"title\":\"Cotizacion\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de cotizaciones del dólar\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/cotizaciones/dolares","segments":[{"lit":"v1"},{"lit":"cotizaciones"},{"lit":"dolares"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"blue","kind":"param","name":"casa","orig":"casa","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"2024/01/01","kind":"param","name":"fecha","orig":"fecha","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v1/cotizaciones/dolares/{casa}/{fecha}","json":"{\"operationId\":\"get-cotizaciones-dolares-casa-fecha\",\"parameters\":[{\"description\":\"Casa de cambio\",\"example\":\"blue\",\"in\":\"path\",\"name\":\"casa\",\"required\":true,\"schema\":{\"enum\":[\"oficial\",\"blue\",\"bolsa\",\"contadoconliqui\",\"cripto\",\"mayorista\",\"solidario\",\"turista\"],\"type\":\"string\"}},{\"description\":\"Fecha de consulta\",\"example\":\"2024/01/01\",\"in\":\"path\",\"name\":\"fecha\",\"required\":true,\"schema\":{\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fecha\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"venta\":{\"type\":\"number\"}},\"title\":\"Cotizacion\",\"type\":\"object\"}}},\"description\":\"Devuelve una lista de cotizaciones del dólar\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/cotizaciones/dolares/{casa}/{fecha}","segments":[{"lit":"v1"},{"lit":"cotizaciones"},{"lit":"dolares"},{"var":"casa"},{"var":"fecha"}],"select":{"exist":["casa","fecha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"blue","kind":"param","name":"casa","orig":"casa","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/cotizaciones/dolares/{casa}","json":"{\"operationId\":\"get-cotizaciones-dolares-casa\",\"parameters\":[{\"description\":\"Casa de cambio\",\"example\":\"blue\",\"in\":\"path\",\"name\":\"casa\",\"required\":true,\"schema\":{\"enum\":[\"oficial\",\"blue\",\"bolsa\",\"contadoconliqui\",\"cripto\",\"mayorista\",\"solidario\",\"turista\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"casa\":{\"type\":\"string\"},\"compra\":{\"type\":\"number\"},\"fecha\":{\"type\":\"string\"},\"moneda\":{\"type\":\"string\"},\"venta\":{\"type\":\"number\"}},\"title\":\"Cotizacion\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de cotizaciones del dólar\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/cotizaciones/dolares/{casa}","segments":[{"lit":"v1"},{"lit":"cotizaciones"},{"lit":"dolares"},{"var":"casa"}],"select":{"exist":["casa"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["dolare"]]},"key$":"cotizacion","name__orig":"cotizacion","Name":"Cotizacion","name_":"cotizacion","name-":"cotizacion","NAME":"COTIZACION","index$":2}, {"active":true,"entity":"cotizacion","key$":"BasicCotizacionFlow","kind":"basic","name":"BasicCotizacionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"cotizacion_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"cotizacion_ref01","srcdatavar":"cotizacion_ref01_data","suffix":"_dt0"},"match":{"id":"cotizacion01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cotizacion_ref01"}}],"index$":1}]}, 'Cotizacion')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cotizacion_ref01_data = Object.values(setup.data.existing.cotizacion)[0] as any

    // LIST
    const cotizacion_ref01_ent = client.Cotizacion()
    const cotizacion_ref01_match: any = {}

    const cotizacion_ref01_list = (await cotizacion_ref01_ent.list(cotizacion_ref01_match)).map((e: any) => e.data())


    // LOAD
    const cotizacion_ref01_match_dt0: any = {}
    cotizacion_ref01_match_dt0.id = cotizacion_ref01_data.id
    const cotizacion_ref01_data_dt0 = (await cotizacion_ref01_ent.load(cotizacion_ref01_match_dt0)).data()
    assert(cotizacion_ref01_data_dt0.id === cotizacion_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cotizacion/CotizacionTestData.json')

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
    ['cotizacion01','cotizacion02','cotizacion03','dolare01','dolare02','dolare03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_COTIZACION_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_COTIZACION_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_COTIZACION_ENTID']
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
  
