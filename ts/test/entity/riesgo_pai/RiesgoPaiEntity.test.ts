
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { ArgentinadatosSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


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
      if (maybeSkipControl(t, 'entityOp', 'riesgo_pai.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set ARGENTINADATOS_TEST_RIESGO_PAI_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let riesgo_pai_ref01_data = Object.values(setup.data.existing.riesgo_pai)[0] as any

    // LIST
    const riesgo_pai_ref01_ent = client.RiesgoPai()
    const riesgo_pai_ref01_match: any = {}

    const riesgo_pai_ref01_list = await riesgo_pai_ref01_ent.list(riesgo_pai_ref01_match)


    // LOAD
    const riesgo_pai_ref01_match_dt0: any = {}
    const riesgo_pai_ref01_data_dt0 = await riesgo_pai_ref01_ent.load(riesgo_pai_ref01_match_dt0)
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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['ARGENTINADATOS_TEST_RIESGO_PAI_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'ARGENTINADATOS_TEST_RIESGO_PAI_ENTID': idmap,
    'ARGENTINADATOS_TEST_LIVE': 'FALSE',
    'ARGENTINADATOS_TEST_EXPLAIN': 'FALSE',
    'ARGENTINADATOS_APIKEY': 'NONE',
  })

  idmap = env['ARGENTINADATOS_TEST_RIESGO_PAI_ENTID']

  const live = 'TRUE' === env.ARGENTINADATOS_TEST_LIVE

  if (live) {
    client = new ArgentinadatosSDK(merge([
      {
        apikey: env.ARGENTINADATOS_APIKEY,
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
