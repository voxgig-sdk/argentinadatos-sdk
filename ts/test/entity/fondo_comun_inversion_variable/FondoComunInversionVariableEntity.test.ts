

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


describe('FondoComunInversionVariableEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.FondoComunInversionVariable()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'fondo_comun_inversion_variable.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"condiciones","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"condicionesCorto","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"fecha","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"fondo","req":false,"short":"Nombre del fondo común de inversión (clase o denominación oficial).","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"nombre","req":false,"short":"Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal).","type":"`$STRING`","index$":5},{"active":true,"name":"tea","req":false,"type":"`$NUMBER`","index$":6},{"active":true,"name":"tipo","req":false,"short":"Clasificación del instrumento.","type":"`$STRING`","index$":7},{"active":true,"name":"tna","req":false,"type":"`$NUMBER`","index$":8},{"active":true,"name":"tope","req":false,"type":"`$NUMBER`","index$":9}],"id":{"field":"id","name":"id"},"name":"fondo_comun_inversion_variable","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"ultimo","kind":"param","name":"id","orig":"fecha","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/finanzas/fci/variables/{fecha}","json":"{\"operationId\":\"get-finanzas-fci-variables-fecha\",\"parameters\":[{\"description\":\"Fecha de consulta\",\"example\":\"ultimo\",\"in\":\"path\",\"name\":\"fecha\",\"required\":true,\"schema\":{\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"condiciones\":{\"nullable\":true,\"type\":\"string\"},\"condicionesCorto\":{\"nullable\":true,\"type\":\"string\"},\"fecha\":{\"type\":\"string\"},\"fondo\":{\"description\":\"Nombre del fondo común de inversión (clase o denominación oficial).\",\"type\":\"string\"},\"nombre\":{\"description\":\"Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal).\",\"type\":\"string\"},\"tea\":{\"type\":\"number\"},\"tipo\":{\"description\":\"Clasificación del instrumento. Valor conocido: `billetera` (cuenta remunerada en billetera digital).\",\"enum\":[\"billetera\"],\"type\":\"string\"},\"tna\":{\"type\":\"number\"},\"tope\":{\"nullable\":true,\"type\":\"number\"}},\"title\":\"FondoComunInversionVariable\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de Fondos Comunes de Inversión\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/fci/variables/{fecha}","rename":{"param":{"fecha":"id"}},"segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"fci"},{"lit":"variables"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"fondo_comun_inversion_variable","name__orig":"fondo_comun_inversion_variable","Name":"FondoComunInversionVariable","name_":"fondo_comun_inversion_variable","name-":"fondo-comun-inversion-variable","NAME":"FONDO_COMUN_INVERSION_VARIABLE","index$":13}, {"active":true,"entity":"fondo_comun_inversion_variable","key$":"BasicFondoComunInversionVariableFlow","kind":"basic","name":"BasicFondoComunInversionVariableFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"fondo_comun_inversion_variable_ref01","srcdatavar":"fondo_comun_inversion_variable_ref01_data","suffix":"_dt0"},"match":{"id":"fondo_comun_inversion_variable01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-fondo_comun_inversion_variable_ref01"}}],"index$":0}]}, 'FondoComunInversionVariable')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let fondo_comun_inversion_variable_ref01_data = Object.values(setup.data.existing.fondo_comun_inversion_variable)[0] as any

    // LOAD
    const fondo_comun_inversion_variable_ref01_ent = client.FondoComunInversionVariable()
    const fondo_comun_inversion_variable_ref01_match_dt0: any = {}
    fondo_comun_inversion_variable_ref01_match_dt0.id = fondo_comun_inversion_variable_ref01_data.id
    const fondo_comun_inversion_variable_ref01_data_dt0 = (await fondo_comun_inversion_variable_ref01_ent.load(fondo_comun_inversion_variable_ref01_match_dt0)).data()
    assert(fondo_comun_inversion_variable_ref01_data_dt0.id === fondo_comun_inversion_variable_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/fondo_comun_inversion_variable/FondoComunInversionVariableTestData.json')

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
    ['fondo_comun_inversion_variable01','fondo_comun_inversion_variable02','fondo_comun_inversion_variable03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_FONDO_COMUN_INVERSION_VARIABLE_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_FONDO_COMUN_INVERSION_VARIABLE_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_FONDO_COMUN_INVERSION_VARIABLE_ENTID']
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
  
