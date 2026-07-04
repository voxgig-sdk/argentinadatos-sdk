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



  _acta?: ActaEntity

  // Idiomatic facade: `client.acta.list()` / `client.acta.load({ id })`.
  get acta(): ActaEntity {
    return (this._acta ??= new ActaEntity(this, undefined))
  }

  /** @deprecated Use `client.acta` instead. */
  Acta(data?: any) {
    const self = this
    return new ActaEntity(self,data)
  }


  _bonos_cer?: BonosCerEntity

  // Idiomatic facade: `client.bonos_cer.list()` / `client.bonos_cer.load({ id })`.
  get bonos_cer(): BonosCerEntity {
    return (this._bonos_cer ??= new BonosCerEntity(this, undefined))
  }

  /** @deprecated Use `client.bonos_cer` instead. */
  BonosCer(data?: any) {
    const self = this
    return new BonosCerEntity(self,data)
  }


  _cotizacion?: CotizacionEntity

  // Idiomatic facade: `client.cotizacion.list()` / `client.cotizacion.load({ id })`.
  get cotizacion(): CotizacionEntity {
    return (this._cotizacion ??= new CotizacionEntity(this, undefined))
  }

  /** @deprecated Use `client.cotizacion` instead. */
  Cotizacion(data?: any) {
    const self = this
    return new CotizacionEntity(self,data)
  }


  _criptopeso?: CriptopesoEntity

  // Idiomatic facade: `client.criptopeso.list()` / `client.criptopeso.load({ id })`.
  get criptopeso(): CriptopesoEntity {
    return (this._criptopeso ??= new CriptopesoEntity(this, undefined))
  }

  /** @deprecated Use `client.criptopeso` instead. */
  Criptopeso(data?: any) {
    const self = this
    return new CriptopesoEntity(self,data)
  }


  _cuenta_remunerada_usd?: CuentaRemuneradaUsdEntity

  // Idiomatic facade: `client.cuenta_remunerada_usd.list()` / `client.cuenta_remunerada_usd.load({ id })`.
  get cuenta_remunerada_usd(): CuentaRemuneradaUsdEntity {
    return (this._cuenta_remunerada_usd ??= new CuentaRemuneradaUsdEntity(this, undefined))
  }

  /** @deprecated Use `client.cuenta_remunerada_usd` instead. */
  CuentaRemuneradaUsd(data?: any) {
    const self = this
    return new CuentaRemuneradaUsdEntity(self,data)
  }


  _diputado?: DiputadoEntity

  // Idiomatic facade: `client.diputado.list()` / `client.diputado.load({ id })`.
  get diputado(): DiputadoEntity {
    return (this._diputado ??= new DiputadoEntity(this, undefined))
  }

  /** @deprecated Use `client.diputado` instead. */
  Diputado(data?: any) {
    const self = this
    return new DiputadoEntity(self,data)
  }


  _entidad_rendimiento?: EntidadRendimientoEntity

  // Idiomatic facade: `client.entidad_rendimiento.list()` / `client.entidad_rendimiento.load({ id })`.
  get entidad_rendimiento(): EntidadRendimientoEntity {
    return (this._entidad_rendimiento ??= new EntidadRendimientoEntity(this, undefined))
  }

  /** @deprecated Use `client.entidad_rendimiento` instead. */
  EntidadRendimiento(data?: any) {
    const self = this
    return new EntidadRendimientoEntity(self,data)
  }


  _estado?: EstadoEntity

  // Idiomatic facade: `client.estado.list()` / `client.estado.load({ id })`.
  get estado(): EstadoEntity {
    return (this._estado ??= new EstadoEntity(this, undefined))
  }

  /** @deprecated Use `client.estado` instead. */
  Estado(data?: any) {
    const self = this
    return new EstadoEntity(self,data)
  }


  _evento_presidencial?: EventoPresidencialEntity

  // Idiomatic facade: `client.evento_presidencial.list()` / `client.evento_presidencial.load({ id })`.
  get evento_presidencial(): EventoPresidencialEntity {
    return (this._evento_presidencial ??= new EventoPresidencialEntity(this, undefined))
  }

  /** @deprecated Use `client.evento_presidencial` instead. */
  EventoPresidencial(data?: any) {
    const self = this
    return new EventoPresidencialEntity(self,data)
  }


  _feriado?: FeriadoEntity

  // Idiomatic facade: `client.feriado.list()` / `client.feriado.load({ id })`.
  get feriado(): FeriadoEntity {
    return (this._feriado ??= new FeriadoEntity(this, undefined))
  }

  /** @deprecated Use `client.feriado` instead. */
  Feriado(data?: any) {
    const self = this
    return new FeriadoEntity(self,data)
  }


  _finanza?: FinanzaEntity

  // Idiomatic facade: `client.finanza.list()` / `client.finanza.load({ id })`.
  get finanza(): FinanzaEntity {
    return (this._finanza ??= new FinanzaEntity(this, undefined))
  }

  /** @deprecated Use `client.finanza` instead. */
  Finanza(data?: any) {
    const self = this
    return new FinanzaEntity(self,data)
  }


  _fondo_comun_inversion?: FondoComunInversionEntity

  // Idiomatic facade: `client.fondo_comun_inversion.list()` / `client.fondo_comun_inversion.load({ id })`.
  get fondo_comun_inversion(): FondoComunInversionEntity {
    return (this._fondo_comun_inversion ??= new FondoComunInversionEntity(this, undefined))
  }

  /** @deprecated Use `client.fondo_comun_inversion` instead. */
  FondoComunInversion(data?: any) {
    const self = this
    return new FondoComunInversionEntity(self,data)
  }


  _fondo_comun_inversion_otro?: FondoComunInversionOtroEntity

  // Idiomatic facade: `client.fondo_comun_inversion_otro.list()` / `client.fondo_comun_inversion_otro.load({ id })`.
  get fondo_comun_inversion_otro(): FondoComunInversionOtroEntity {
    return (this._fondo_comun_inversion_otro ??= new FondoComunInversionOtroEntity(this, undefined))
  }

  /** @deprecated Use `client.fondo_comun_inversion_otro` instead. */
  FondoComunInversionOtro(data?: any) {
    const self = this
    return new FondoComunInversionOtroEntity(self,data)
  }


  _fondo_comun_inversion_variable?: FondoComunInversionVariableEntity

  // Idiomatic facade: `client.fondo_comun_inversion_variable.list()` / `client.fondo_comun_inversion_variable.load({ id })`.
  get fondo_comun_inversion_variable(): FondoComunInversionVariableEntity {
    return (this._fondo_comun_inversion_variable ??= new FondoComunInversionVariableEntity(this, undefined))
  }

  /** @deprecated Use `client.fondo_comun_inversion_variable` instead. */
  FondoComunInversionVariable(data?: any) {
    const self = this
    return new FondoComunInversionVariableEntity(self,data)
  }


  _hipotecario_uva_tna?: HipotecarioUvaTnaEntity

  // Idiomatic facade: `client.hipotecario_uva_tna.list()` / `client.hipotecario_uva_tna.load({ id })`.
  get hipotecario_uva_tna(): HipotecarioUvaTnaEntity {
    return (this._hipotecario_uva_tna ??= new HipotecarioUvaTnaEntity(this, undefined))
  }

  /** @deprecated Use `client.hipotecario_uva_tna` instead. */
  HipotecarioUvaTna(data?: any) {
    const self = this
    return new HipotecarioUvaTnaEntity(self,data)
  }


  _indice_inflacion?: IndiceInflacionEntity

  // Idiomatic facade: `client.indice_inflacion.list()` / `client.indice_inflacion.load({ id })`.
  get indice_inflacion(): IndiceInflacionEntity {
    return (this._indice_inflacion ??= new IndiceInflacionEntity(this, undefined))
  }

  /** @deprecated Use `client.indice_inflacion` instead. */
  IndiceInflacion(data?: any) {
    const self = this
    return new IndiceInflacionEntity(self,data)
  }


  _indice_uva?: IndiceUvaEntity

  // Idiomatic facade: `client.indice_uva.list()` / `client.indice_uva.load({ id })`.
  get indice_uva(): IndiceUvaEntity {
    return (this._indice_uva ??= new IndiceUvaEntity(this, undefined))
  }

  /** @deprecated Use `client.indice_uva` instead. */
  IndiceUva(data?: any) {
    const self = this
    return new IndiceUvaEntity(self,data)
  }


  _letra?: LetraEntity

  // Idiomatic facade: `client.letra.list()` / `client.letra.load({ id })`.
  get letra(): LetraEntity {
    return (this._letra ??= new LetraEntity(this, undefined))
  }

  /** @deprecated Use `client.letra` instead. */
  Letra(data?: any) {
    const self = this
    return new LetraEntity(self,data)
  }


  _presidente?: PresidenteEntity

  // Idiomatic facade: `client.presidente.list()` / `client.presidente.load({ id })`.
  get presidente(): PresidenteEntity {
    return (this._presidente ??= new PresidenteEntity(this, undefined))
  }

  /** @deprecated Use `client.presidente` instead. */
  Presidente(data?: any) {
    const self = this
    return new PresidenteEntity(self,data)
  }


  _proveedor_plazo_fijo_precancelable?: ProveedorPlazoFijoPrecancelableEntity

  // Idiomatic facade: `client.proveedor_plazo_fijo_precancelable.list()` / `client.proveedor_plazo_fijo_precancelable.load({ id })`.
  get proveedor_plazo_fijo_precancelable(): ProveedorPlazoFijoPrecancelableEntity {
    return (this._proveedor_plazo_fijo_precancelable ??= new ProveedorPlazoFijoPrecancelableEntity(this, undefined))
  }

  /** @deprecated Use `client.proveedor_plazo_fijo_precancelable` instead. */
  ProveedorPlazoFijoPrecancelable(data?: any) {
    const self = this
    return new ProveedorPlazoFijoPrecancelableEntity(self,data)
  }


  _proveedor_plazo_fijo_uva_pago_periodico?: ProveedorPlazoFijoUvaPagoPeriodicoEntity

  // Idiomatic facade: `client.proveedor_plazo_fijo_uva_pago_periodico.list()` / `client.proveedor_plazo_fijo_uva_pago_periodico.load({ id })`.
  get proveedor_plazo_fijo_uva_pago_periodico(): ProveedorPlazoFijoUvaPagoPeriodicoEntity {
    return (this._proveedor_plazo_fijo_uva_pago_periodico ??= new ProveedorPlazoFijoUvaPagoPeriodicoEntity(this, undefined))
  }

  /** @deprecated Use `client.proveedor_plazo_fijo_uva_pago_periodico` instead. */
  ProveedorPlazoFijoUvaPagoPeriodico(data?: any) {
    const self = this
    return new ProveedorPlazoFijoUvaPagoPeriodicoEntity(self,data)
  }


  _rem?: RemEntity

  // Idiomatic facade: `client.rem.list()` / `client.rem.load({ id })`.
  get rem(): RemEntity {
    return (this._rem ??= new RemEntity(this, undefined))
  }

  /** @deprecated Use `client.rem` instead. */
  Rem(data?: any) {
    const self = this
    return new RemEntity(self,data)
  }


  _rem_expectativa?: RemExpectativaEntity

  // Idiomatic facade: `client.rem_expectativa.list()` / `client.rem_expectativa.load({ id })`.
  get rem_expectativa(): RemExpectativaEntity {
    return (this._rem_expectativa ??= new RemExpectativaEntity(this, undefined))
  }

  /** @deprecated Use `client.rem_expectativa` instead. */
  RemExpectativa(data?: any) {
    const self = this
    return new RemExpectativaEntity(self,data)
  }


  _rendimiento?: RendimientoEntity

  // Idiomatic facade: `client.rendimiento.list()` / `client.rendimiento.load({ id })`.
  get rendimiento(): RendimientoEntity {
    return (this._rendimiento ??= new RendimientoEntity(this, undefined))
  }

  /** @deprecated Use `client.rendimiento` instead. */
  Rendimiento(data?: any) {
    const self = this
    return new RendimientoEntity(self,data)
  }


  _riesgo_pai?: RiesgoPaiEntity

  // Idiomatic facade: `client.riesgo_pai.list()` / `client.riesgo_pai.load({ id })`.
  get riesgo_pai(): RiesgoPaiEntity {
    return (this._riesgo_pai ??= new RiesgoPaiEntity(this, undefined))
  }

  /** @deprecated Use `client.riesgo_pai` instead. */
  RiesgoPai(data?: any) {
    const self = this
    return new RiesgoPaiEntity(self,data)
  }


  _senador?: SenadorEntity

  // Idiomatic facade: `client.senador.list()` / `client.senador.load({ id })`.
  get senador(): SenadorEntity {
    return (this._senador ??= new SenadorEntity(this, undefined))
  }

  /** @deprecated Use `client.senador` instead. */
  Senador(data?: any) {
    const self = this
    return new SenadorEntity(self,data)
  }


  _tasa_intere?: TasaIntereEntity

  // Idiomatic facade: `client.tasa_intere.list()` / `client.tasa_intere.load({ id })`.
  get tasa_intere(): TasaIntereEntity {
    return (this._tasa_intere ??= new TasaIntereEntity(this, undefined))
  }

  /** @deprecated Use `client.tasa_intere` instead. */
  TasaIntere(data?: any) {
    const self = this
    return new TasaIntereEntity(self,data)
  }


  _tasa_plazo_fijo?: TasaPlazoFijoEntity

  // Idiomatic facade: `client.tasa_plazo_fijo.list()` / `client.tasa_plazo_fijo.load({ id })`.
  get tasa_plazo_fijo(): TasaPlazoFijoEntity {
    return (this._tasa_plazo_fijo ??= new TasaPlazoFijoEntity(this, undefined))
  }

  /** @deprecated Use `client.tasa_plazo_fijo` instead. */
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


