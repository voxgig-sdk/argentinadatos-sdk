
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ArgentinadatosSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ArgentinadatosSDK.test()
    equal(null !== testsdk, true)
  })

})
