

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


describe('ProveedorPlazoFijoUvaPagoPeriodicoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.ProveedorPlazoFijoUvaPagoPeriodico()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'proveedor_plazo_fijo_uva_pago_periodico.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"entidad","req":false,"short":"Nombre de la entidad","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"Identificador estable del proveedor (p.","type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"logo","req":false,"short":"URL del logo de la entidad","type":"`$STRING`","index$":2},{"active":true,"name":"tasas","req":false,"short":"Tasas por rango de plazo","type":"`$ARRAY`","index$":3}],"id":{"field":"id","name":"id"},"name":"proveedor_plazo_fijo_uva_pago_periodico","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/finanzas/tasas/plazoFijoUvaPagoPeriodico","json":"{\"operationId\":\"get-finanzas-tasas-plazo-fijo-uva-pago-periodico\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"entidad\":{\"description\":\"Nombre de la entidad\",\"type\":\"string\"},\"id\":{\"description\":\"Identificador estable del proveedor (p. ej. bna)\",\"type\":\"string\"},\"logo\":{\"description\":\"URL del logo de la entidad\",\"format\":\"uri\",\"type\":\"string\"},\"tasas\":{\"description\":\"Tasas por rango de plazo\",\"items\":{\"description\":\"Tasa para un rango de plazo dentro de un proveedor\",\"properties\":{\"nombre\":{\"description\":\"Nombre del tipo de plazo fijo\",\"type\":\"string\"},\"plazoMaxDias\":{\"description\":\"Máximo de días del rango de plazo\",\"type\":\"integer\"},\"plazoMinDias\":{\"description\":\"Mínimo de días del rango de plazo\",\"type\":\"integer\"},\"tea\":{\"description\":\"Tasa Efectiva Anual\",\"format\":\"float\",\"type\":\"number\"},\"tna\":{\"description\":\"Tasa Nominal Anual\",\"format\":\"float\",\"type\":\"number\"}},\"title\":\"TasaPlazoFijoUvaPagoPeriodico\",\"type\":\"object\"},\"type\":\"array\"}},\"title\":\"ProveedorPlazoFijoUvaPagoPeriodico\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de proveedores, cada uno con sus tasas por rango de plazo\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"tasas"},{"lit":"plazoFijoUvaPagoPeriodico"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"proveedor_plazo_fijo_uva_pago_periodico","name__orig":"proveedor_plazo_fijo_uva_pago_periodico","Name":"ProveedorPlazoFijoUvaPagoPeriodico","name_":"proveedor_plazo_fijo_uva_pago_periodico","name-":"proveedor-plazo-fijo-uva-pago-periodico","NAME":"PROVEEDOR_PLAZO_FIJO_UVA_PAGO_PERIODICO","index$":20}, {"active":true,"entity":"proveedor_plazo_fijo_uva_pago_periodico","key$":"BasicProveedorPlazoFijoUvaPagoPeriodicoFlow","kind":"basic","name":"BasicProveedorPlazoFijoUvaPagoPeriodicoFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"proveedor_plazo_fijo_uva_pago_periodico_ref01"}}],"index$":0}]}, 'ProveedorPlazoFijoUvaPagoPeriodico')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let proveedor_plazo_fijo_uva_pago_periodico_ref01_data = Object.values(setup.data.existing.proveedor_plazo_fijo_uva_pago_periodico)[0] as any

    // LIST
    const proveedor_plazo_fijo_uva_pago_periodico_ref01_ent = client.ProveedorPlazoFijoUvaPagoPeriodico()
    const proveedor_plazo_fijo_uva_pago_periodico_ref01_match: any = {}

    const proveedor_plazo_fijo_uva_pago_periodico_ref01_list = (await proveedor_plazo_fijo_uva_pago_periodico_ref01_ent.list(proveedor_plazo_fijo_uva_pago_periodico_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/proveedor_plazo_fijo_uva_pago_periodico/ProveedorPlazoFijoUvaPagoPeriodicoTestData.json')

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
    ['proveedor_plazo_fijo_uva_pago_periodico01','proveedor_plazo_fijo_uva_pago_periodico02','proveedor_plazo_fijo_uva_pago_periodico03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_UVA_PAGO_PERIODICO_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_UVA_PAGO_PERIODICO_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_PROVEEDOR_PLAZO_FIJO_UVA_PAGO_PERIODICO_ENTID']
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
  
