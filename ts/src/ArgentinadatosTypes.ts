// Typed models for the Argentinadatos SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Acta {
  abstencione?: number
  acta?: string
  acta_id?: number
  afirmativo?: number
  amn?: number
  ausente?: number
  descripcion?: string
  fecha?: string
  id?: string
  mayoria?: string
  miembro?: number
  negativo?: number
  numero_acta?: string
  observacione?: any[]
  periodo?: string
  presente?: number
  presidente?: string
  proyecto?: string
  quorum_tipo?: string
  resultado?: string
  reunion?: string
  titulo?: string
  voto?: any[]
  votos_afirmativo?: number
  votos_negativo?: number
}

export interface ActaLoadMatch {
  id: number
}

export type ActaListMatch = Partial<Acta>

export interface BonosCer {
  fecha_vencimiento: string
  precio_ar: number
  ticker: string
  tir_porcentaje: number
  voluman?: number
}

export type BonosCerListMatch = Partial<BonosCer>

export interface Cotizacion {
  casa?: string
  compra?: number
  fecha?: string
  moneda?: string
  venta?: number
}

export interface CotizacionLoadMatch {
  casa: string
  fecha: string
}

export type CotizacionListMatch = Partial<Cotizacion>

export interface Criptopeso {
  entidad?: string
  tna?: number
  token?: string
}

export type CriptopesoListMatch = Partial<Criptopeso>

export interface CuentaRemuneradaUsd {
  entidad?: string
  tasa?: number
  tope?: number
}

export type CuentaRemuneradaUsdListMatch = Partial<CuentaRemuneradaUsd>

export interface Diputado {
  apellido?: string
  bloque?: string
  cese_fecha?: string
  foto?: string
  genero?: string
  id?: string
  juramento_fecha?: string
  nombre?: string
  periodo_bloque?: Record<string, any>
  periodo_mandato?: Record<string, any>
  provincia?: string
}

export type DiputadoListMatch = Partial<Diputado>

export interface EntidadRendimiento {
  entidad?: string
  rendimiento?: any[]
}

export type EntidadRendimientoListMatch = Partial<EntidadRendimiento>

export interface Estado {
  aleatorio?: number
  estado?: string
}

export type EstadoLoadMatch = Partial<Estado>

export interface EventoPresidencial {
  evento?: string
  fecha?: string
  tipo?: string
}

export type EventoPresidencialListMatch = Partial<EventoPresidencial>

export interface Feriado {
  fecha?: string
  nombre?: string
  tipo?: string
}

export interface FeriadoLoadMatch {
  id: number
}

export interface Finanza {
}

export type FinanzaListMatch = Partial<Finanza>

export interface FondoComunInversion {
  ccp?: number
  fecha?: string
  fondo?: string
  horizonte?: string
  patrimonio?: number
  tipo?: string
  vcp?: number
}

export interface FondoComunInversionLoadMatch {
  fecha: string
}

export interface FondoComunInversionOtro {
  fecha?: string
  fondo?: string
  tea?: number
  tna?: number
  tope?: number
}

export interface FondoComunInversionOtroLoadMatch {
  id: string
}

export interface FondoComunInversionVariable {
  condicione?: string
  condiciones_corto?: string
  fecha?: string
  fondo?: string
  nombre?: string
  tea?: number
  tipo?: string
  tna?: number
  tope?: number
}

export interface FondoComunInversionVariableLoadMatch {
  id: string
}

export interface HipotecarioUvaTna {
  entidad?: string
  metadata?: Record<string, any>
  nombre_comercial?: string
  tna?: number
}

export type HipotecarioUvaTnaListMatch = Partial<HipotecarioUvaTna>

export interface IndiceInflacion {
  fecha?: string
  valor?: number
}

export type IndiceInflacionListMatch = Partial<IndiceInflacion>

export interface IndiceUva {
  fecha?: string
  valor?: number
}

export type IndiceUvaListMatch = Partial<IndiceUva>

export interface Letra {
  fecha_emision?: string
  fecha_vencimiento?: string
  tem?: number
  ticker?: string
  vpv?: number
}

export type LetraListMatch = Partial<Letra>

export interface Presidente {
  fin?: string
  imagen?: string
  inicio?: string
  nombre?: string
  partido?: string
  partido_imagen?: string
  periodo_presidencial?: string
  vicepresidente?: string
}

export type PresidenteListMatch = Partial<Presidente>

export interface ProveedorPlazoFijoPrecancelable {
  aviso_precancelacion_dia?: number
  canal?: string
  enlace?: string
  entidad?: string
  id?: string
  logo?: string
  modalidad?: string
  moneda?: string
  monto_maximo?: number
  monto_minimo?: number
  plazo_max_dia?: number
  plazo_min_dia?: number
  plazo_precancelacion_dia?: number
  tea?: number
  tea_precancelacion?: number
  tna?: number
  tna_precancelacion?: number
}

export type ProveedorPlazoFijoPrecancelableListMatch = Partial<ProveedorPlazoFijoPrecancelable>

export interface ProveedorPlazoFijoUvaPagoPeriodico {
  entidad?: string
  id?: string
  logo?: string
  tasa?: any[]
}

export type ProveedorPlazoFijoUvaPagoPeriodicoListMatch = Partial<ProveedorPlazoFijoUvaPagoPeriodico>

export interface Rem {
  desvio?: number
  fecha?: string
  fuente?: string
  indicador?: string
  informe?: string
  maximo?: number
  mediana?: number
  minimo?: number
  muestra?: string
  participante?: number
  percentil10?: number
  percentil25?: number
  percentil75?: number
  percentil90?: number
  periodo?: string
  periodo_desde?: string
  periodo_hasta?: string
  periodo_tipo?: string
  promedio?: number
  publicacion_url?: string
  referencia?: string
  referencia_fecha?: string
  unidad?: string
  xlsx_url?: string
}

export interface RemListMatch {
  "año": number
  mes: string
}

export interface RemExpectativa {
  desvio?: number
  fecha?: string
  fuente?: string
  indicador?: string
  informe?: string
  maximo?: number
  mediana?: number
  minimo?: number
  muestra?: string
  participante?: number
  percentil10?: number
  percentil25?: number
  percentil75?: number
  percentil90?: number
  periodo?: string
  periodo_desde?: string
  periodo_hasta?: string
  periodo_tipo?: string
  promedio?: number
  publicacion_url?: string
  referencia?: string
  referencia_fecha?: string
  unidad?: string
  xlsx_url?: string
}

export type RemExpectativaListMatch = Partial<RemExpectativa>

export interface Rendimiento {
  apy?: number
  fecha?: string
  moneda?: string
}

export interface RendimientoLoadMatch {
  id: string
}

export interface RiesgoPai {
  fecha?: string
  valor?: number
}

export type RiesgoPaiLoadMatch = Partial<RiesgoPai>

export type RiesgoPaiListMatch = Partial<RiesgoPai>

export interface Senador {
  email?: string
  foto?: string
  id?: string
  nombre?: string
  observacione?: string
  partido?: string
  periodo_legal?: Record<string, any>
  periodo_real?: Record<string, any>
  provincia?: string
  rede?: any[]
  reemplazo?: string
  telefono?: string
}

export type SenadorListMatch = Partial<Senador>

export interface TasaIntere {
  fecha?: string
  valor?: number
}

export type TasaIntereListMatch = Partial<TasaIntere>

export interface TasaPlazoFijo {
  entidad?: string
  logo?: string
  tna_cliente?: number
  tna_no_cliente?: number
}

export type TasaPlazoFijoListMatch = Partial<TasaPlazoFijo>

