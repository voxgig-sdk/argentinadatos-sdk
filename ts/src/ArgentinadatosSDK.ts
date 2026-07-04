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
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

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


  async direct(fetchargs?: any) {
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



  // Entity access: `client.Acta().list()` / `client.Acta().load({ id })`.
  Acta(data?: any) {
    const self = this
    return new ActaEntity(self,data)
  }


  // Entity access: `client.BonosCer().list()` / `client.BonosCer().load({ id })`.
  BonosCer(data?: any) {
    const self = this
    return new BonosCerEntity(self,data)
  }


  // Entity access: `client.Cotizacion().list()` / `client.Cotizacion().load({ id })`.
  Cotizacion(data?: any) {
    const self = this
    return new CotizacionEntity(self,data)
  }


  // Entity access: `client.Criptopeso().list()` / `client.Criptopeso().load({ id })`.
  Criptopeso(data?: any) {
    const self = this
    return new CriptopesoEntity(self,data)
  }


  // Entity access: `client.CuentaRemuneradaUsd().list()` / `client.CuentaRemuneradaUsd().load({ id })`.
  CuentaRemuneradaUsd(data?: any) {
    const self = this
    return new CuentaRemuneradaUsdEntity(self,data)
  }


  // Entity access: `client.Diputado().list()` / `client.Diputado().load({ id })`.
  Diputado(data?: any) {
    const self = this
    return new DiputadoEntity(self,data)
  }


  // Entity access: `client.EntidadRendimiento().list()` / `client.EntidadRendimiento().load({ id })`.
  EntidadRendimiento(data?: any) {
    const self = this
    return new EntidadRendimientoEntity(self,data)
  }


  // Entity access: `client.Estado().list()` / `client.Estado().load({ id })`.
  Estado(data?: any) {
    const self = this
    return new EstadoEntity(self,data)
  }


  // Entity access: `client.EventoPresidencial().list()` / `client.EventoPresidencial().load({ id })`.
  EventoPresidencial(data?: any) {
    const self = this
    return new EventoPresidencialEntity(self,data)
  }


  // Entity access: `client.Feriado().list()` / `client.Feriado().load({ id })`.
  Feriado(data?: any) {
    const self = this
    return new FeriadoEntity(self,data)
  }


  // Entity access: `client.Finanza().list()` / `client.Finanza().load({ id })`.
  Finanza(data?: any) {
    const self = this
    return new FinanzaEntity(self,data)
  }


  // Entity access: `client.FondoComunInversion().list()` / `client.FondoComunInversion().load({ id })`.
  FondoComunInversion(data?: any) {
    const self = this
    return new FondoComunInversionEntity(self,data)
  }


  // Entity access: `client.FondoComunInversionOtro().list()` / `client.FondoComunInversionOtro().load({ id })`.
  FondoComunInversionOtro(data?: any) {
    const self = this
    return new FondoComunInversionOtroEntity(self,data)
  }


  // Entity access: `client.FondoComunInversionVariable().list()` / `client.FondoComunInversionVariable().load({ id })`.
  FondoComunInversionVariable(data?: any) {
    const self = this
    return new FondoComunInversionVariableEntity(self,data)
  }


  // Entity access: `client.HipotecarioUvaTna().list()` / `client.HipotecarioUvaTna().load({ id })`.
  HipotecarioUvaTna(data?: any) {
    const self = this
    return new HipotecarioUvaTnaEntity(self,data)
  }


  // Entity access: `client.IndiceInflacion().list()` / `client.IndiceInflacion().load({ id })`.
  IndiceInflacion(data?: any) {
    const self = this
    return new IndiceInflacionEntity(self,data)
  }


  // Entity access: `client.IndiceUva().list()` / `client.IndiceUva().load({ id })`.
  IndiceUva(data?: any) {
    const self = this
    return new IndiceUvaEntity(self,data)
  }


  // Entity access: `client.Letra().list()` / `client.Letra().load({ id })`.
  Letra(data?: any) {
    const self = this
    return new LetraEntity(self,data)
  }


  // Entity access: `client.Presidente().list()` / `client.Presidente().load({ id })`.
  Presidente(data?: any) {
    const self = this
    return new PresidenteEntity(self,data)
  }


  // Entity access: `client.ProveedorPlazoFijoPrecancelable().list()` / `client.ProveedorPlazoFijoPrecancelable().load({ id })`.
  ProveedorPlazoFijoPrecancelable(data?: any) {
    const self = this
    return new ProveedorPlazoFijoPrecancelableEntity(self,data)
  }


  // Entity access: `client.ProveedorPlazoFijoUvaPagoPeriodico().list()` / `client.ProveedorPlazoFijoUvaPagoPeriodico().load({ id })`.
  ProveedorPlazoFijoUvaPagoPeriodico(data?: any) {
    const self = this
    return new ProveedorPlazoFijoUvaPagoPeriodicoEntity(self,data)
  }


  // Entity access: `client.Rem().list()` / `client.Rem().load({ id })`.
  Rem(data?: any) {
    const self = this
    return new RemEntity(self,data)
  }


  // Entity access: `client.RemExpectativa().list()` / `client.RemExpectativa().load({ id })`.
  RemExpectativa(data?: any) {
    const self = this
    return new RemExpectativaEntity(self,data)
  }


  // Entity access: `client.Rendimiento().list()` / `client.Rendimiento().load({ id })`.
  Rendimiento(data?: any) {
    const self = this
    return new RendimientoEntity(self,data)
  }


  // Entity access: `client.RiesgoPai().list()` / `client.RiesgoPai().load({ id })`.
  RiesgoPai(data?: any) {
    const self = this
    return new RiesgoPaiEntity(self,data)
  }


  // Entity access: `client.Senador().list()` / `client.Senador().load({ id })`.
  Senador(data?: any) {
    const self = this
    return new SenadorEntity(self,data)
  }


  // Entity access: `client.TasaIntere().list()` / `client.TasaIntere().load({ id })`.
  TasaIntere(data?: any) {
    const self = this
    return new TasaIntereEntity(self,data)
  }


  // Entity access: `client.TasaPlazoFijo().list()` / `client.TasaPlazoFijo().load({ id })`.
  TasaPlazoFijo(data?: any) {
    const self = this
    return new TasaPlazoFijoEntity(self,data)
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

  BaseFeature,
  ArgentinadatosEntityBase,

  ArgentinadatosSDK,
  SDK,
}


