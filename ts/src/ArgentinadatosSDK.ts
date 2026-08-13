// Argentinadatos Ts SDK

import { ActaEntity } from './entity/ActaEntity'
import { BonosCerEntity } from './entity/BonosCerEntity'
import { CotizacionEntity } from './entity/CotizacionEntity'
import { CriptopesoEntity } from './entity/CriptopesoEntity'
import { CuentaRemuneradaUsdEntity } from './entity/CuentaRemuneradaUsdEntity'
import { DiputadoEntity } from './entity/DiputadoEntity'
import { EntidadRendimientoEntity } from './entity/EntidadRendimientoEntity'
import { EstadoEntity } from './entity/EstadoEntity'
import { EventoPresidencialEntity } from './entity/EventoPresidencialEntity'
import { FeriadoEntity } from './entity/FeriadoEntity'
import { FinanzaEntity } from './entity/FinanzaEntity'
import { FondoComunInversionEntity } from './entity/FondoComunInversionEntity'
import { FondoComunInversionOtroEntity } from './entity/FondoComunInversionOtroEntity'
import { FondoComunInversionVariableEntity } from './entity/FondoComunInversionVariableEntity'
import { HipotecarioUvaTnaEntity } from './entity/HipotecarioUvaTnaEntity'
import { IndiceInflacionEntity } from './entity/IndiceInflacionEntity'
import { IndiceUvaEntity } from './entity/IndiceUvaEntity'
import { LetraEntity } from './entity/LetraEntity'
import { PresidenteEntity } from './entity/PresidenteEntity'
import { ProveedorPlazoFijoPrecancelableEntity } from './entity/ProveedorPlazoFijoPrecancelableEntity'
import { ProveedorPlazoFijoUvaPagoPeriodicoEntity } from './entity/ProveedorPlazoFijoUvaPagoPeriodicoEntity'
import { RemEntity } from './entity/RemEntity'
import { RemExpectativaEntity } from './entity/RemExpectativaEntity'
import { RendimientoEntity } from './entity/RendimientoEntity'
import { RiesgoPaiEntity } from './entity/RiesgoPaiEntity'
import { SenadorEntity } from './entity/SenadorEntity'
import { TasaIntereEntity } from './entity/TasaIntereEntity'
import { TasaPlazoFijoEntity } from './entity/TasaPlazoFijoEntity'

export type * from './ArgentinadatosTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { ArgentinadatosEntityBase } from './ArgentinadatosEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class ArgentinadatosSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('ArgentinadatosSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('ArgentinadatosSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('ArgentinadatosSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Acta().list()` / `client.Acta().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Acta(entopts?: Record<string, any>) {
    const self = this
    return new ActaEntity(self, entopts)
  }


  // Entity access: `client.BonosCer().list()` / `client.BonosCer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BonosCer(entopts?: Record<string, any>) {
    const self = this
    return new BonosCerEntity(self, entopts)
  }


  // Entity access: `client.Cotizacion().list()` / `client.Cotizacion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cotizacion(entopts?: Record<string, any>) {
    const self = this
    return new CotizacionEntity(self, entopts)
  }


  // Entity access: `client.Criptopeso().list()` / `client.Criptopeso().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Criptopeso(entopts?: Record<string, any>) {
    const self = this
    return new CriptopesoEntity(self, entopts)
  }


  // Entity access: `client.CuentaRemuneradaUsd().list()` / `client.CuentaRemuneradaUsd().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CuentaRemuneradaUsd(entopts?: Record<string, any>) {
    const self = this
    return new CuentaRemuneradaUsdEntity(self, entopts)
  }


  // Entity access: `client.Diputado().list()` / `client.Diputado().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Diputado(entopts?: Record<string, any>) {
    const self = this
    return new DiputadoEntity(self, entopts)
  }


  // Entity access: `client.EntidadRendimiento().list()` / `client.EntidadRendimiento().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EntidadRendimiento(entopts?: Record<string, any>) {
    const self = this
    return new EntidadRendimientoEntity(self, entopts)
  }


  // Entity access: `client.Estado().list()` / `client.Estado().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Estado(entopts?: Record<string, any>) {
    const self = this
    return new EstadoEntity(self, entopts)
  }


  // Entity access: `client.EventoPresidencial().list()` / `client.EventoPresidencial().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EventoPresidencial(entopts?: Record<string, any>) {
    const self = this
    return new EventoPresidencialEntity(self, entopts)
  }


  // Entity access: `client.Feriado().list()` / `client.Feriado().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Feriado(entopts?: Record<string, any>) {
    const self = this
    return new FeriadoEntity(self, entopts)
  }


  // Entity access: `client.Finanza().list()` / `client.Finanza().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Finanza(entopts?: Record<string, any>) {
    const self = this
    return new FinanzaEntity(self, entopts)
  }


  // Entity access: `client.FondoComunInversion().list()` / `client.FondoComunInversion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FondoComunInversion(entopts?: Record<string, any>) {
    const self = this
    return new FondoComunInversionEntity(self, entopts)
  }


  // Entity access: `client.FondoComunInversionOtro().list()` / `client.FondoComunInversionOtro().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FondoComunInversionOtro(entopts?: Record<string, any>) {
    const self = this
    return new FondoComunInversionOtroEntity(self, entopts)
  }


  // Entity access: `client.FondoComunInversionVariable().list()` / `client.FondoComunInversionVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FondoComunInversionVariable(entopts?: Record<string, any>) {
    const self = this
    return new FondoComunInversionVariableEntity(self, entopts)
  }


  // Entity access: `client.HipotecarioUvaTna().list()` / `client.HipotecarioUvaTna().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  HipotecarioUvaTna(entopts?: Record<string, any>) {
    const self = this
    return new HipotecarioUvaTnaEntity(self, entopts)
  }


  // Entity access: `client.IndiceInflacion().list()` / `client.IndiceInflacion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IndiceInflacion(entopts?: Record<string, any>) {
    const self = this
    return new IndiceInflacionEntity(self, entopts)
  }


  // Entity access: `client.IndiceUva().list()` / `client.IndiceUva().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IndiceUva(entopts?: Record<string, any>) {
    const self = this
    return new IndiceUvaEntity(self, entopts)
  }


  // Entity access: `client.Letra().list()` / `client.Letra().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Letra(entopts?: Record<string, any>) {
    const self = this
    return new LetraEntity(self, entopts)
  }


  // Entity access: `client.Presidente().list()` / `client.Presidente().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Presidente(entopts?: Record<string, any>) {
    const self = this
    return new PresidenteEntity(self, entopts)
  }


  // Entity access: `client.ProveedorPlazoFijoPrecancelable().list()` / `client.ProveedorPlazoFijoPrecancelable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProveedorPlazoFijoPrecancelable(entopts?: Record<string, any>) {
    const self = this
    return new ProveedorPlazoFijoPrecancelableEntity(self, entopts)
  }


  // Entity access: `client.ProveedorPlazoFijoUvaPagoPeriodico().list()` / `client.ProveedorPlazoFijoUvaPagoPeriodico().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProveedorPlazoFijoUvaPagoPeriodico(entopts?: Record<string, any>) {
    const self = this
    return new ProveedorPlazoFijoUvaPagoPeriodicoEntity(self, entopts)
  }


  // Entity access: `client.Rem().list()` / `client.Rem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rem(entopts?: Record<string, any>) {
    const self = this
    return new RemEntity(self, entopts)
  }


  // Entity access: `client.RemExpectativa().list()` / `client.RemExpectativa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemExpectativa(entopts?: Record<string, any>) {
    const self = this
    return new RemExpectativaEntity(self, entopts)
  }


  // Entity access: `client.Rendimiento().list()` / `client.Rendimiento().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rendimiento(entopts?: Record<string, any>) {
    const self = this
    return new RendimientoEntity(self, entopts)
  }


  // Entity access: `client.RiesgoPai().list()` / `client.RiesgoPai().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RiesgoPai(entopts?: Record<string, any>) {
    const self = this
    return new RiesgoPaiEntity(self, entopts)
  }


  // Entity access: `client.Senador().list()` / `client.Senador().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Senador(entopts?: Record<string, any>) {
    const self = this
    return new SenadorEntity(self, entopts)
  }


  // Entity access: `client.TasaIntere().list()` / `client.TasaIntere().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TasaIntere(entopts?: Record<string, any>) {
    const self = this
    return new TasaIntereEntity(self, entopts)
  }


  // Entity access: `client.TasaPlazoFijo().list()` / `client.TasaPlazoFijo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TasaPlazoFijo(entopts?: Record<string, any>) {
    const self = this
    return new TasaPlazoFijoEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new ArgentinadatosSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return ArgentinadatosSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Argentinadatos' }
  }

  toString() {
    return 'Argentinadatos ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = ArgentinadatosSDK


export {
  stdutil,
  config,

  BaseFeature,
  ArgentinadatosEntityBase,

  ArgentinadatosSDK,
  SDK,
}


