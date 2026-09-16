

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


describe('FondoComunInversionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.FondoComunInversion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'fondo_comun_inversion.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"ccp","req":false,"type":"`$NUMBER`","index$":0},{"active":true,"name":"fecha","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"fondo","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"horizonte","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"patrimonio","req":false,"type":"`$NUMBER`","index$":4},{"active":true,"name":"tipo","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"vcp","req":false,"type":"`$NUMBER`","index$":6}],"name":"fondo_comun_inversion","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"ultimo","kind":"param","name":"fecha","orig":"fecha","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/finanzas/fci/mercadoDinero/{fecha}","json":"{\"operationId\":\"get-finanzas-fci-mercado-dinero-fecha\",\"parameters\":[{\"description\":\"Fecha de consulta\",\"example\":\"ultimo\",\"in\":\"path\",\"name\":\"fecha\",\"required\":true,\"schema\":{\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"ccp\":{\"type\":\"number\"},\"fecha\":{\"type\":\"string\"},\"fondo\":{\"type\":\"string\"},\"horizonte\":{\"enum\":[\"corto\",\"medio\",\"largo\"],\"type\":\"string\"},\"patrimonio\":{\"type\":\"number\"},\"tipo\":{\"type\":\"string\"},\"vcp\":{\"type\":\"number\"}},\"title\":\"FondoComunInversion\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de Fondos Comunes de Inversión\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/fci/mercadoDinero/{fecha}","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"fci"},{"lit":"mercadoDinero"},{"var":"fecha"}],"select":{"exist":["fecha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"ultimo","kind":"param","name":"fecha","orig":"fecha","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/finanzas/fci/rentaFija/{fecha}","json":"{\"operationId\":\"get-finanzas-fci-renta-fija-fecha\",\"parameters\":[{\"description\":\"Fecha de consulta\",\"example\":\"ultimo\",\"in\":\"path\",\"name\":\"fecha\",\"required\":true,\"schema\":{\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"ccp\":{\"type\":\"number\"},\"fecha\":{\"type\":\"string\"},\"fondo\":{\"type\":\"string\"},\"horizonte\":{\"enum\":[\"corto\",\"medio\",\"largo\"],\"type\":\"string\"},\"patrimonio\":{\"type\":\"number\"},\"tipo\":{\"type\":\"string\"},\"vcp\":{\"type\":\"number\"}},\"title\":\"FondoComunInversion\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de Fondos Comunes de Inversión\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/fci/rentaFija/{fecha}","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"fci"},{"lit":"rentaFija"},{"var":"fecha"}],"select":{"exist":["fecha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":"ultimo","kind":"param","name":"fecha","orig":"fecha","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/finanzas/fci/rentaMixta/{fecha}","json":"{\"operationId\":\"get-finanzas-fci-renta-mixta-fecha\",\"parameters\":[{\"description\":\"Fecha de consulta\",\"example\":\"ultimo\",\"in\":\"path\",\"name\":\"fecha\",\"required\":true,\"schema\":{\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"ccp\":{\"type\":\"number\"},\"fecha\":{\"type\":\"string\"},\"fondo\":{\"type\":\"string\"},\"horizonte\":{\"enum\":[\"corto\",\"medio\",\"largo\"],\"type\":\"string\"},\"patrimonio\":{\"type\":\"number\"},\"tipo\":{\"type\":\"string\"},\"vcp\":{\"type\":\"number\"}},\"title\":\"FondoComunInversion\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de Fondos Comunes de Inversión\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/fci/rentaMixta/{fecha}","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"fci"},{"lit":"rentaMixta"},{"var":"fecha"}],"select":{"exist":["fecha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"example":"ultimo","kind":"param","name":"fecha","orig":"fecha","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/finanzas/fci/rentaVariable/{fecha}","json":"{\"operationId\":\"get-finanzas-fci-renta-variable-fecha\",\"parameters\":[{\"description\":\"Fecha de consulta\",\"example\":\"ultimo\",\"in\":\"path\",\"name\":\"fecha\",\"required\":true,\"schema\":{\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"ccp\":{\"type\":\"number\"},\"fecha\":{\"type\":\"string\"},\"fondo\":{\"type\":\"string\"},\"horizonte\":{\"enum\":[\"corto\",\"medio\",\"largo\"],\"type\":\"string\"},\"patrimonio\":{\"type\":\"number\"},\"tipo\":{\"type\":\"string\"},\"vcp\":{\"type\":\"number\"}},\"title\":\"FondoComunInversion\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de Fondos Comunes de Inversión\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/fci/rentaVariable/{fecha}","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"fci"},{"lit":"rentaVariable"},{"var":"fecha"}],"select":{"exist":["fecha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{"params":[{"active":true,"example":"ultimo","kind":"param","name":"fecha","orig":"fecha","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/finanzas/fci/retornoTotal/{fecha}","json":"{\"operationId\":\"get-finanzas-fci-retorno-total-fecha\",\"parameters\":[{\"description\":\"Fecha de consulta\",\"example\":\"ultimo\",\"in\":\"path\",\"name\":\"fecha\",\"required\":true,\"schema\":{\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"ccp\":{\"type\":\"number\"},\"fecha\":{\"type\":\"string\"},\"fondo\":{\"type\":\"string\"},\"horizonte\":{\"enum\":[\"corto\",\"medio\",\"largo\"],\"type\":\"string\"},\"patrimonio\":{\"type\":\"number\"},\"tipo\":{\"type\":\"string\"},\"vcp\":{\"type\":\"number\"}},\"title\":\"FondoComunInversion\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de Fondos Comunes de Inversión\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/finanzas/fci/retornoTotal/{fecha}","segments":[{"lit":"v1"},{"lit":"finanzas"},{"lit":"fci"},{"lit":"retornoTotal"},{"var":"fecha"}],"select":{"exist":["fecha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"load"}},"relations":{"ancestors":[["mercado_dinero"],["renta_fija"],["renta_mixta"],["renta_variable"],["retorno_total"]]},"key$":"fondo_comun_inversion","name__orig":"fondo_comun_inversion","Name":"FondoComunInversion","name_":"fondo_comun_inversion","name-":"fondo-comun-inversion","NAME":"FONDO_COMUN_INVERSION","index$":11}, {"active":true,"entity":"fondo_comun_inversion","key$":"BasicFondoComunInversionFlow","kind":"basic","name":"BasicFondoComunInversionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"fondo_comun_inversion_ref01","srcdatavar":"fondo_comun_inversion_ref01_data","suffix":"_dt0"},"match":{"id":"fondo_comun_inversion01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-fondo_comun_inversion_ref01"}}],"index$":0}]}, 'FondoComunInversion')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let fondo_comun_inversion_ref01_data = Object.values(setup.data.existing.fondo_comun_inversion)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const fondo_comun_inversion_ref01_ent = client.FondoComunInversion()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/fondo_comun_inversion/FondoComunInversionTestData.json')

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
    ['fondo_comun_inversion01','fondo_comun_inversion02','fondo_comun_inversion03','mercado_dinero01','mercado_dinero02','mercado_dinero03','renta_fija01','renta_fija02','renta_fija03','renta_mixta01','renta_mixta02','renta_mixta03','renta_variable01','renta_variable02','renta_variable03','retorno_total01','retorno_total02','retorno_total03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_FONDO_COMUN_INVERSION_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_FONDO_COMUN_INVERSION_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_FONDO_COMUN_INVERSION_ENTID']
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
  
