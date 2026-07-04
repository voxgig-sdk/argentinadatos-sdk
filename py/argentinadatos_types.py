# Typed models for the Argentinadatos SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Acta:
    abstencione: Optional[int] = None
    acta: Optional[str] = None
    acta_id: Optional[int] = None
    afirmativo: Optional[int] = None
    amn: Optional[int] = None
    ausente: Optional[int] = None
    descripcion: Optional[str] = None
    fecha: Optional[str] = None
    id: Optional[str] = None
    mayoria: Optional[str] = None
    miembro: Optional[int] = None
    negativo: Optional[int] = None
    numero_acta: Optional[str] = None
    observacione: Optional[list] = None
    periodo: Optional[str] = None
    presente: Optional[int] = None
    presidente: Optional[str] = None
    proyecto: Optional[str] = None
    quorum_tipo: Optional[str] = None
    resultado: Optional[str] = None
    reunion: Optional[str] = None
    titulo: Optional[str] = None
    voto: Optional[list] = None
    votos_afirmativo: Optional[int] = None
    votos_negativo: Optional[int] = None


@dataclass
class ActaLoadMatch:
    id: int


@dataclass
class ActaListMatch:
    abstencione: Optional[int] = None
    acta: Optional[str] = None
    acta_id: Optional[int] = None
    afirmativo: Optional[int] = None
    amn: Optional[int] = None
    ausente: Optional[int] = None
    descripcion: Optional[str] = None
    fecha: Optional[str] = None
    id: Optional[str] = None
    mayoria: Optional[str] = None
    miembro: Optional[int] = None
    negativo: Optional[int] = None
    numero_acta: Optional[str] = None
    observacione: Optional[list] = None
    periodo: Optional[str] = None
    presente: Optional[int] = None
    presidente: Optional[str] = None
    proyecto: Optional[str] = None
    quorum_tipo: Optional[str] = None
    resultado: Optional[str] = None
    reunion: Optional[str] = None
    titulo: Optional[str] = None
    voto: Optional[list] = None
    votos_afirmativo: Optional[int] = None
    votos_negativo: Optional[int] = None


@dataclass
class BonosCer:
    fecha_vencimiento: str
    precio_ar: float
    ticker: str
    tir_porcentaje: float
    voluman: Optional[float] = None


@dataclass
class BonosCerListMatch:
    fecha_vencimiento: Optional[str] = None
    precio_ar: Optional[float] = None
    ticker: Optional[str] = None
    tir_porcentaje: Optional[float] = None
    voluman: Optional[float] = None


@dataclass
class Cotizacion:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha: Optional[str] = None
    moneda: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class CotizacionLoadMatch:
    casa: str
    fecha: str


@dataclass
class CotizacionListMatch:
    casa: Optional[str] = None
    compra: Optional[float] = None
    fecha: Optional[str] = None
    moneda: Optional[str] = None
    venta: Optional[float] = None


@dataclass
class Criptopeso:
    entidad: Optional[str] = None
    tna: Optional[float] = None
    token: Optional[str] = None


@dataclass
class CriptopesoListMatch:
    entidad: Optional[str] = None
    tna: Optional[float] = None
    token: Optional[str] = None


@dataclass
class CuentaRemuneradaUsd:
    entidad: Optional[str] = None
    tasa: Optional[float] = None
    tope: Optional[float] = None


@dataclass
class CuentaRemuneradaUsdListMatch:
    entidad: Optional[str] = None
    tasa: Optional[float] = None
    tope: Optional[float] = None


@dataclass
class Diputado:
    apellido: Optional[str] = None
    bloque: Optional[str] = None
    cese_fecha: Optional[str] = None
    foto: Optional[str] = None
    genero: Optional[str] = None
    id: Optional[str] = None
    juramento_fecha: Optional[str] = None
    nombre: Optional[str] = None
    periodo_bloque: Optional[dict] = None
    periodo_mandato: Optional[dict] = None
    provincia: Optional[str] = None


@dataclass
class DiputadoListMatch:
    apellido: Optional[str] = None
    bloque: Optional[str] = None
    cese_fecha: Optional[str] = None
    foto: Optional[str] = None
    genero: Optional[str] = None
    id: Optional[str] = None
    juramento_fecha: Optional[str] = None
    nombre: Optional[str] = None
    periodo_bloque: Optional[dict] = None
    periodo_mandato: Optional[dict] = None
    provincia: Optional[str] = None


@dataclass
class EntidadRendimiento:
    entidad: Optional[str] = None
    rendimiento: Optional[list] = None


@dataclass
class EntidadRendimientoListMatch:
    entidad: Optional[str] = None
    rendimiento: Optional[list] = None


@dataclass
class Estado:
    aleatorio: Optional[int] = None
    estado: Optional[str] = None


@dataclass
class EstadoLoadMatch:
    aleatorio: Optional[int] = None
    estado: Optional[str] = None


@dataclass
class EventoPresidencial:
    evento: Optional[str] = None
    fecha: Optional[str] = None
    tipo: Optional[str] = None


@dataclass
class EventoPresidencialListMatch:
    evento: Optional[str] = None
    fecha: Optional[str] = None
    tipo: Optional[str] = None


@dataclass
class Feriado:
    fecha: Optional[str] = None
    nombre: Optional[str] = None
    tipo: Optional[str] = None


@dataclass
class FeriadoLoadMatch:
    id: int


@dataclass
class Finanza:
    pass


@dataclass
class FinanzaListMatch:
    pass


@dataclass
class FondoComunInversion:
    ccp: Optional[float] = None
    fecha: Optional[str] = None
    fondo: Optional[str] = None
    horizonte: Optional[str] = None
    patrimonio: Optional[float] = None
    tipo: Optional[str] = None
    vcp: Optional[float] = None


@dataclass
class FondoComunInversionLoadMatch:
    fecha: str


@dataclass
class FondoComunInversionOtro:
    fecha: Optional[str] = None
    fondo: Optional[str] = None
    tea: Optional[float] = None
    tna: Optional[float] = None
    tope: Optional[float] = None


@dataclass
class FondoComunInversionOtroLoadMatch:
    id: str


@dataclass
class FondoComunInversionVariable:
    condicione: Optional[str] = None
    condiciones_corto: Optional[str] = None
    fecha: Optional[str] = None
    fondo: Optional[str] = None
    nombre: Optional[str] = None
    tea: Optional[float] = None
    tipo: Optional[str] = None
    tna: Optional[float] = None
    tope: Optional[float] = None


@dataclass
class FondoComunInversionVariableLoadMatch:
    id: str


@dataclass
class HipotecarioUvaTna:
    entidad: Optional[str] = None
    metadata: Optional[dict] = None
    nombre_comercial: Optional[str] = None
    tna: Optional[float] = None


@dataclass
class HipotecarioUvaTnaListMatch:
    entidad: Optional[str] = None
    metadata: Optional[dict] = None
    nombre_comercial: Optional[str] = None
    tna: Optional[float] = None


@dataclass
class IndiceInflacion:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class IndiceInflacionListMatch:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class IndiceUva:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class IndiceUvaListMatch:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class Letra:
    fecha_emision: Optional[str] = None
    fecha_vencimiento: Optional[str] = None
    tem: Optional[float] = None
    ticker: Optional[str] = None
    vpv: Optional[float] = None


@dataclass
class LetraListMatch:
    fecha_emision: Optional[str] = None
    fecha_vencimiento: Optional[str] = None
    tem: Optional[float] = None
    ticker: Optional[str] = None
    vpv: Optional[float] = None


@dataclass
class Presidente:
    fin: Optional[str] = None
    imagen: Optional[str] = None
    inicio: Optional[str] = None
    nombre: Optional[str] = None
    partido: Optional[str] = None
    partido_imagen: Optional[str] = None
    periodo_presidencial: Optional[str] = None
    vicepresidente: Optional[str] = None


@dataclass
class PresidenteListMatch:
    fin: Optional[str] = None
    imagen: Optional[str] = None
    inicio: Optional[str] = None
    nombre: Optional[str] = None
    partido: Optional[str] = None
    partido_imagen: Optional[str] = None
    periodo_presidencial: Optional[str] = None
    vicepresidente: Optional[str] = None


@dataclass
class ProveedorPlazoFijoPrecancelable:
    aviso_precancelacion_dia: Optional[int] = None
    canal: Optional[str] = None
    enlace: Optional[str] = None
    entidad: Optional[str] = None
    id: Optional[str] = None
    logo: Optional[str] = None
    modalidad: Optional[str] = None
    moneda: Optional[str] = None
    monto_maximo: Optional[float] = None
    monto_minimo: Optional[float] = None
    plazo_max_dia: Optional[int] = None
    plazo_min_dia: Optional[int] = None
    plazo_precancelacion_dia: Optional[int] = None
    tea: Optional[float] = None
    tea_precancelacion: Optional[float] = None
    tna: Optional[float] = None
    tna_precancelacion: Optional[float] = None


@dataclass
class ProveedorPlazoFijoPrecancelableListMatch:
    aviso_precancelacion_dia: Optional[int] = None
    canal: Optional[str] = None
    enlace: Optional[str] = None
    entidad: Optional[str] = None
    id: Optional[str] = None
    logo: Optional[str] = None
    modalidad: Optional[str] = None
    moneda: Optional[str] = None
    monto_maximo: Optional[float] = None
    monto_minimo: Optional[float] = None
    plazo_max_dia: Optional[int] = None
    plazo_min_dia: Optional[int] = None
    plazo_precancelacion_dia: Optional[int] = None
    tea: Optional[float] = None
    tea_precancelacion: Optional[float] = None
    tna: Optional[float] = None
    tna_precancelacion: Optional[float] = None


@dataclass
class ProveedorPlazoFijoUvaPagoPeriodico:
    entidad: Optional[str] = None
    id: Optional[str] = None
    logo: Optional[str] = None
    tasa: Optional[list] = None


@dataclass
class ProveedorPlazoFijoUvaPagoPeriodicoListMatch:
    entidad: Optional[str] = None
    id: Optional[str] = None
    logo: Optional[str] = None
    tasa: Optional[list] = None


@dataclass
class Rem:
    desvio: Optional[float] = None
    fecha: Optional[str] = None
    fuente: Optional[str] = None
    indicador: Optional[str] = None
    informe: Optional[str] = None
    maximo: Optional[float] = None
    mediana: Optional[float] = None
    minimo: Optional[float] = None
    muestra: Optional[str] = None
    participante: Optional[int] = None
    percentil10: Optional[float] = None
    percentil25: Optional[float] = None
    percentil75: Optional[float] = None
    percentil90: Optional[float] = None
    periodo: Optional[str] = None
    periodo_desde: Optional[str] = None
    periodo_hasta: Optional[str] = None
    periodo_tipo: Optional[str] = None
    promedio: Optional[float] = None
    publicacion_url: Optional[str] = None
    referencia: Optional[str] = None
    referencia_fecha: Optional[str] = None
    unidad: Optional[str] = None
    xlsx_url: Optional[str] = None


@dataclass
class RemListMatch:
    mes: str


@dataclass
class RemExpectativa:
    desvio: Optional[float] = None
    fecha: Optional[str] = None
    fuente: Optional[str] = None
    indicador: Optional[str] = None
    informe: Optional[str] = None
    maximo: Optional[float] = None
    mediana: Optional[float] = None
    minimo: Optional[float] = None
    muestra: Optional[str] = None
    participante: Optional[int] = None
    percentil10: Optional[float] = None
    percentil25: Optional[float] = None
    percentil75: Optional[float] = None
    percentil90: Optional[float] = None
    periodo: Optional[str] = None
    periodo_desde: Optional[str] = None
    periodo_hasta: Optional[str] = None
    periodo_tipo: Optional[str] = None
    promedio: Optional[float] = None
    publicacion_url: Optional[str] = None
    referencia: Optional[str] = None
    referencia_fecha: Optional[str] = None
    unidad: Optional[str] = None
    xlsx_url: Optional[str] = None


@dataclass
class RemExpectativaListMatch:
    desvio: Optional[float] = None
    fecha: Optional[str] = None
    fuente: Optional[str] = None
    indicador: Optional[str] = None
    informe: Optional[str] = None
    maximo: Optional[float] = None
    mediana: Optional[float] = None
    minimo: Optional[float] = None
    muestra: Optional[str] = None
    participante: Optional[int] = None
    percentil10: Optional[float] = None
    percentil25: Optional[float] = None
    percentil75: Optional[float] = None
    percentil90: Optional[float] = None
    periodo: Optional[str] = None
    periodo_desde: Optional[str] = None
    periodo_hasta: Optional[str] = None
    periodo_tipo: Optional[str] = None
    promedio: Optional[float] = None
    publicacion_url: Optional[str] = None
    referencia: Optional[str] = None
    referencia_fecha: Optional[str] = None
    unidad: Optional[str] = None
    xlsx_url: Optional[str] = None


@dataclass
class Rendimiento:
    apy: Optional[float] = None
    fecha: Optional[str] = None
    moneda: Optional[str] = None


@dataclass
class RendimientoLoadMatch:
    id: str


@dataclass
class RiesgoPai:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class RiesgoPaiLoadMatch:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class RiesgoPaiListMatch:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class Senador:
    email: Optional[str] = None
    foto: Optional[str] = None
    id: Optional[str] = None
    nombre: Optional[str] = None
    observacione: Optional[str] = None
    partido: Optional[str] = None
    periodo_legal: Optional[dict] = None
    periodo_real: Optional[dict] = None
    provincia: Optional[str] = None
    rede: Optional[list] = None
    reemplazo: Optional[str] = None
    telefono: Optional[str] = None


@dataclass
class SenadorListMatch:
    email: Optional[str] = None
    foto: Optional[str] = None
    id: Optional[str] = None
    nombre: Optional[str] = None
    observacione: Optional[str] = None
    partido: Optional[str] = None
    periodo_legal: Optional[dict] = None
    periodo_real: Optional[dict] = None
    provincia: Optional[str] = None
    rede: Optional[list] = None
    reemplazo: Optional[str] = None
    telefono: Optional[str] = None


@dataclass
class TasaIntere:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class TasaIntereListMatch:
    fecha: Optional[str] = None
    valor: Optional[float] = None


@dataclass
class TasaPlazoFijo:
    entidad: Optional[str] = None
    logo: Optional[str] = None
    tna_cliente: Optional[float] = None
    tna_no_cliente: Optional[float] = None


@dataclass
class TasaPlazoFijoListMatch:
    entidad: Optional[str] = None
    logo: Optional[str] = None
    tna_cliente: Optional[float] = None
    tna_no_cliente: Optional[float] = None

