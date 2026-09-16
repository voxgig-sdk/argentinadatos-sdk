

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


describe('SenadorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ARGENTINADATOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ARGENTINADATOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ArgentinadatosSDK.test()
    const ent = testsdk.Senador()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ARGENTINADATOS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'senador.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"email","name":"email","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"uri","name":"foto","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"nombre","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"observaciones","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"partido","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"periodoLegal","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"periodoReal","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"provincia","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"redes","req":false,"type":"`$ARRAY`","index$":9},{"active":true,"name":"reemplazo","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"telefono","req":false,"type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"senador","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/senado/senadores","json":"{\"operationId\":\"get-senado-senadores\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"email\":{\"format\":\"email\",\"nullable\":true,\"type\":\"string\"},\"foto\":{\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"nombre\":{\"type\":\"string\"},\"observaciones\":{\"nullable\":true,\"type\":\"string\"},\"partido\":{\"type\":\"string\"},\"periodoLegal\":{\"properties\":{\"fin\":{\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"inicio\":{\"format\":\"date\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"periodoReal\":{\"properties\":{\"fin\":{\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"inicio\":{\"format\":\"date\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"provincia\":{\"type\":\"string\"},\"redes\":{\"items\":{\"type\":\"string\"},\"nullable\":true,\"type\":\"array\"},\"reemplazo\":{\"nullable\":true,\"type\":\"string\"},\"telefono\":{\"nullable\":true,\"type\":\"string\"}},\"title\":\"Senador\",\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Devuelve una lista de senadores\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/senado/senadores","segments":[{"lit":"v1"},{"lit":"senado"},{"lit":"senadores"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"senador","name__orig":"senador","Name":"Senador","name_":"senador","name-":"senador","NAME":"SENADOR","index$":25}, {"active":true,"entity":"senador","key$":"BasicSenadorFlow","kind":"basic","name":"BasicSenadorFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"senador_ref01"}}],"index$":0}]}, 'Senador')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let senador_ref01_data = Object.values(setup.data.existing.senador)[0] as any

    // LIST
    const senador_ref01_ent = client.Senador()
    const senador_ref01_match: any = {}

    const senador_ref01_list = (await senador_ref01_ent.list(senador_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/senador/SenadorTestData.json')

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
    ['senador01','senador02','senador03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ARGENTINADATOS_TEST_SENADOR_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ARGENTINADATOS_TEST_SENADOR_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ARGENTINADATOS_TEST_SENADOR_ENTID']
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
  
