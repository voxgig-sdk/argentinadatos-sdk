
import { Context } from './Context'


class ArgentinadatosError extends Error {

  isArgentinadatosError = true

  sdk = 'Argentinadatos'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ArgentinadatosError
}

