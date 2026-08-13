# Typed models for the Argentinadatos SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Acta(TypedDict, total=False):
    abstenciones: int
    acta: str
    actaId: int
    afirmativos: int
    amn: int
    ausentes: int
    descripcion: str
    fecha: str
    id: str
    mayoria: str
    miembros: int
    negativos: int
    numeroActa: str
    observaciones: list
    periodo: str
    presentes: int
    presidente: str
    proyecto: str
    quorumTipo: str
    resultado: str
    reunion: str
    titulo: str
    votos: list
    votosAfirmativos: int
    votosNegativos: int


class ActaLoadMatch(TypedDict):
    id: int


class ActaListMatch(TypedDict, total=False):
    abstenciones: int
    acta: str
    actaId: int
    afirmativos: int
    amn: int
    ausentes: int
    descripcion: str
    fecha: str
    id: str
    mayoria: str
    miembros: int
    negativos: int
    numeroActa: str
    observaciones: list
    periodo: str
    presentes: int
    presidente: str
    proyecto: str
    quorumTipo: str
    resultado: str
    reunion: str
    titulo: str
    votos: list
    votosAfirmativos: int
    votosNegativos: int


class BonosCerRequired(TypedDict):
    fechaVencimiento: str
    precioArs: float
    ticker: str
    tirPorcentaje: float


class BonosCer(BonosCerRequired, total=False):
    volumen: float


class BonosCerListMatch(TypedDict, total=False):
    fechaVencimiento: str
    precioArs: float
    ticker: str
    tirPorcentaje: float
    volumen: float


class Cotizacion(TypedDict, total=False):
    casa: str
    compra: float
    fecha: str
    moneda: str
    venta: float


class CotizacionLoadMatchRequired(TypedDict):
    casa: str


class CotizacionLoadMatch(CotizacionLoadMatchRequired, total=False):
    fecha: str


class CotizacionListMatch(TypedDict, total=False):
    casa: str
    compra: float
    fecha: str
    moneda: str
    venta: float


class Criptopeso(TypedDict, total=False):
    entidad: str
    tna: float
    token: str


class CriptopesoListMatch(TypedDict, total=False):
    entidad: str
    tna: float
    token: str


class CuentaRemuneradaUsd(TypedDict, total=False):
    entidad: str
    tasa: float
    tope: float


class CuentaRemuneradaUsdListMatch(TypedDict, total=False):
    entidad: str
    tasa: float
    tope: float


class Diputado(TypedDict, total=False):
    apellido: str
    bloque: str
    ceseFecha: str
    foto: str
    genero: str
    id: str
    juramentoFecha: str
    nombre: str
    periodoBloque: dict
    periodoMandato: dict
    provincia: str


class DiputadoListMatch(TypedDict, total=False):
    apellido: str
    bloque: str
    ceseFecha: str
    foto: str
    genero: str
    id: str
    juramentoFecha: str
    nombre: str
    periodoBloque: dict
    periodoMandato: dict
    provincia: str


class EntidadRendimiento(TypedDict, total=False):
    entidad: str
    rendimientos: list


class EntidadRendimientoListMatch(TypedDict, total=False):
    entidad: str
    rendimientos: list


class Estado(TypedDict, total=False):
    aleatorio: int
    estado: str


class EstadoLoadMatch(TypedDict, total=False):
    aleatorio: int
    estado: str


class EventoPresidencial(TypedDict, total=False):
    evento: str
    fecha: str
    tipo: str


class EventoPresidencialListMatch(TypedDict, total=False):
    evento: str
    fecha: str
    tipo: str


class Feriado(TypedDict, total=False):
    fecha: str
    nombre: str
    tipo: str


class FeriadoLoadMatch(TypedDict):
    id: int


class Finanza(TypedDict):
    pass


class FinanzaListMatch(TypedDict):
    pass


class FondoComunInversion(TypedDict, total=False):
    ccp: float
    fecha: str
    fondo: str
    horizonte: str
    patrimonio: float
    tipo: str
    vcp: float


class FondoComunInversionLoadMatch(TypedDict):
    fecha: str


class FondoComunInversionOtro(TypedDict, total=False):
    fecha: str
    fondo: str
    tea: float
    tna: float
    tope: float


class FondoComunInversionOtroLoadMatch(TypedDict):
    id: str


class FondoComunInversionVariable(TypedDict, total=False):
    condiciones: str
    condicionesCorto: str
    fecha: str
    fondo: str
    nombre: str
    tea: float
    tipo: str
    tna: float
    tope: float


class FondoComunInversionVariableLoadMatch(TypedDict):
    id: str


class HipotecarioUvaTna(TypedDict, total=False):
    entidad: str
    metadata: dict
    nombreComercial: str
    tna: float


class HipotecarioUvaTnaListMatch(TypedDict, total=False):
    entidad: str
    metadata: dict
    nombreComercial: str
    tna: float


class IndiceInflacion(TypedDict, total=False):
    fecha: str
    valor: float


class IndiceInflacionListMatch(TypedDict, total=False):
    fecha: str
    valor: float


class IndiceUva(TypedDict, total=False):
    fecha: str
    valor: float


class IndiceUvaListMatch(TypedDict, total=False):
    fecha: str
    valor: float


class Letra(TypedDict, total=False):
    fechaEmision: str
    fechaVencimiento: str
    tem: float
    ticker: str
    vpv: float


class LetraListMatch(TypedDict, total=False):
    fechaEmision: str
    fechaVencimiento: str
    tem: float
    ticker: str
    vpv: float


class Presidente(TypedDict, total=False):
    fin: str
    imagen: str
    inicio: str
    nombre: str
    partido: str
    partidoImagen: str
    periodoPresidencial: str
    vicepresidente: str


class PresidenteListMatch(TypedDict, total=False):
    fin: str
    imagen: str
    inicio: str
    nombre: str
    partido: str
    partidoImagen: str
    periodoPresidencial: str
    vicepresidente: str


class ProveedorPlazoFijoPrecancelable(TypedDict, total=False):
    avisoPrecancelacionDias: int
    canal: str
    enlace: str
    entidad: str
    id: str
    logo: str
    modalidad: str
    moneda: str
    montoMaximo: float
    montoMinimo: float
    plazoMaxDias: int
    plazoMinDias: int
    plazoPrecancelacionDias: int
    tea: float
    teaPrecancelacion: float
    tna: float
    tnaPrecancelacion: float


class ProveedorPlazoFijoPrecancelableListMatch(TypedDict, total=False):
    avisoPrecancelacionDias: int
    canal: str
    enlace: str
    entidad: str
    id: str
    logo: str
    modalidad: str
    moneda: str
    montoMaximo: float
    montoMinimo: float
    plazoMaxDias: int
    plazoMinDias: int
    plazoPrecancelacionDias: int
    tea: float
    teaPrecancelacion: float
    tna: float
    tnaPrecancelacion: float


class ProveedorPlazoFijoUvaPagoPeriodico(TypedDict, total=False):
    entidad: str
    id: str
    logo: str
    tasas: list


class ProveedorPlazoFijoUvaPagoPeriodicoListMatch(TypedDict, total=False):
    entidad: str
    id: str
    logo: str
    tasas: list


class Rem(TypedDict, total=False):
    desvio: float
    fecha: str
    fuente: str
    indicador: str
    informe: str
    maximo: float
    mediana: float
    minimo: float
    muestra: str
    participantes: int
    percentil10: float
    percentil25: float
    percentil75: float
    percentil90: float
    periodo: str
    periodoDesde: str
    periodoHasta: str
    periodoTipo: str
    promedio: float
    publicacionUrl: str
    referencia: str
    referenciaFecha: str
    unidad: str
    xlsxUrl: str


class RemListMatch(TypedDict):
    mes: str


class RemExpectativa(TypedDict, total=False):
    desvio: float
    fecha: str
    fuente: str
    indicador: str
    informe: str
    maximo: float
    mediana: float
    minimo: float
    muestra: str
    participantes: int
    percentil10: float
    percentil25: float
    percentil75: float
    percentil90: float
    periodo: str
    periodoDesde: str
    periodoHasta: str
    periodoTipo: str
    promedio: float
    publicacionUrl: str
    referencia: str
    referenciaFecha: str
    unidad: str
    xlsxUrl: str


class RemExpectativaListMatch(TypedDict, total=False):
    desvio: float
    fecha: str
    fuente: str
    indicador: str
    informe: str
    maximo: float
    mediana: float
    minimo: float
    muestra: str
    participantes: int
    percentil10: float
    percentil25: float
    percentil75: float
    percentil90: float
    periodo: str
    periodoDesde: str
    periodoHasta: str
    periodoTipo: str
    promedio: float
    publicacionUrl: str
    referencia: str
    referenciaFecha: str
    unidad: str
    xlsxUrl: str


class Rendimiento(TypedDict, total=False):
    apy: float
    fecha: str
    moneda: str


class RendimientoLoadMatch(TypedDict):
    id: str


class RiesgoPai(TypedDict, total=False):
    fecha: str
    valor: float


class RiesgoPaiLoadMatch(TypedDict, total=False):
    fecha: str
    valor: float


class RiesgoPaiListMatch(TypedDict, total=False):
    fecha: str
    valor: float


class Senador(TypedDict, total=False):
    email: str
    foto: str
    id: str
    nombre: str
    observaciones: str
    partido: str
    periodoLegal: dict
    periodoReal: dict
    provincia: str
    redes: list
    reemplazo: str
    telefono: str


class SenadorListMatch(TypedDict, total=False):
    email: str
    foto: str
    id: str
    nombre: str
    observaciones: str
    partido: str
    periodoLegal: dict
    periodoReal: dict
    provincia: str
    redes: list
    reemplazo: str
    telefono: str


class TasaIntere(TypedDict, total=False):
    fecha: str
    valor: float


class TasaIntereListMatch(TypedDict, total=False):
    fecha: str
    valor: float


class TasaPlazoFijo(TypedDict, total=False):
    entidad: str
    logo: str
    tnaClientes: float
    tnaNoClientes: float


class TasaPlazoFijoListMatch(TypedDict, total=False):
    entidad: str
    logo: str
    tnaClientes: float
    tnaNoClientes: float
