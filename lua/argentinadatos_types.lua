-- Typed models for the Argentinadatos SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Acta
---@field abstenciones? number
---@field acta? string
---@field actaId? number
---@field afirmativos? number
---@field amn? number
---@field ausentes? number
---@field descripcion? string
---@field fecha? string
---@field id? string
---@field mayoria? string
---@field miembros? number
---@field negativos? number
---@field numeroActa? string
---@field observaciones? table
---@field periodo? string
---@field presentes? number
---@field presidente? string
---@field proyecto? string
---@field quorumTipo? string
---@field resultado? string
---@field reunion? string
---@field titulo? string
---@field votos? table
---@field votosAfirmativos? number
---@field votosNegativos? number

---@class ActaLoadMatch
---@field id number

---@class ActaListMatch
---@field abstenciones? number
---@field acta? string
---@field actaId? number
---@field afirmativos? number
---@field amn? number
---@field ausentes? number
---@field descripcion? string
---@field fecha? string
---@field id? string
---@field mayoria? string
---@field miembros? number
---@field negativos? number
---@field numeroActa? string
---@field observaciones? table
---@field periodo? string
---@field presentes? number
---@field presidente? string
---@field proyecto? string
---@field quorumTipo? string
---@field resultado? string
---@field reunion? string
---@field titulo? string
---@field votos? table
---@field votosAfirmativos? number
---@field votosNegativos? number

---@class BonosCer
---@field fechaVencimiento string
---@field precioArs number
---@field ticker string
---@field tirPorcentaje number
---@field volumen? number

---@class BonosCerListMatch
---@field fechaVencimiento? string
---@field precioArs? number
---@field ticker? string
---@field tirPorcentaje? number
---@field volumen? number

---@class Cotizacion
---@field casa? string
---@field compra? number
---@field fecha? string
---@field moneda? string
---@field venta? number

---@class CotizacionLoadMatch
---@field casa string
---@field fecha? string

---@class CotizacionListMatch
---@field casa? string
---@field compra? number
---@field fecha? string
---@field moneda? string
---@field venta? number

---@class Criptopeso
---@field entidad? string
---@field tna? number
---@field token? string

---@class CriptopesoListMatch
---@field entidad? string
---@field tna? number
---@field token? string

---@class CuentaRemuneradaUsd
---@field entidad? string
---@field tasa? number
---@field tope? number

---@class CuentaRemuneradaUsdListMatch
---@field entidad? string
---@field tasa? number
---@field tope? number

---@class Diputado
---@field apellido? string
---@field bloque? string
---@field ceseFecha? string
---@field foto? string
---@field genero? string
---@field id? string
---@field juramentoFecha? string
---@field nombre? string
---@field periodoBloque? table
---@field periodoMandato? table
---@field provincia? string

---@class DiputadoListMatch
---@field apellido? string
---@field bloque? string
---@field ceseFecha? string
---@field foto? string
---@field genero? string
---@field id? string
---@field juramentoFecha? string
---@field nombre? string
---@field periodoBloque? table
---@field periodoMandato? table
---@field provincia? string

---@class EntidadRendimiento
---@field entidad? string
---@field rendimientos? table

---@class EntidadRendimientoListMatch
---@field entidad? string
---@field rendimientos? table

---@class Estado
---@field aleatorio? number
---@field estado? string

---@class EstadoLoadMatch
---@field aleatorio? number
---@field estado? string

---@class EventoPresidencial
---@field evento? string
---@field fecha? string
---@field tipo? string

---@class EventoPresidencialListMatch
---@field evento? string
---@field fecha? string
---@field tipo? string

---@class Feriado
---@field fecha? string
---@field nombre? string
---@field tipo? string

---@class FeriadoLoadMatch
---@field id number

---@class Finanza

---@class FinanzaListMatch

---@class FondoComunInversion
---@field ccp? number
---@field fecha? string
---@field fondo? string
---@field horizonte? string
---@field patrimonio? number
---@field tipo? string
---@field vcp? number

---@class FondoComunInversionLoadMatch
---@field fecha string

---@class FondoComunInversionOtro
---@field fecha? string
---@field fondo? string
---@field tea? number
---@field tna? number
---@field tope? number

---@class FondoComunInversionOtroLoadMatch
---@field id string

---@class FondoComunInversionVariable
---@field condiciones? string
---@field condicionesCorto? string
---@field fecha? string
---@field fondo? string
---@field nombre? string
---@field tea? number
---@field tipo? string
---@field tna? number
---@field tope? number

---@class FondoComunInversionVariableLoadMatch
---@field id string

---@class HipotecarioUvaTna
---@field entidad? string
---@field metadata? table
---@field nombreComercial? string
---@field tna? number

---@class HipotecarioUvaTnaListMatch
---@field entidad? string
---@field metadata? table
---@field nombreComercial? string
---@field tna? number

---@class IndiceInflacion
---@field fecha? string
---@field valor? number

---@class IndiceInflacionListMatch
---@field fecha? string
---@field valor? number

---@class IndiceUva
---@field fecha? string
---@field valor? number

---@class IndiceUvaListMatch
---@field fecha? string
---@field valor? number

---@class Letra
---@field fechaEmision? string
---@field fechaVencimiento? string
---@field tem? number
---@field ticker? string
---@field vpv? number

---@class LetraListMatch
---@field fechaEmision? string
---@field fechaVencimiento? string
---@field tem? number
---@field ticker? string
---@field vpv? number

---@class Presidente
---@field fin? string
---@field imagen? string
---@field inicio? string
---@field nombre? string
---@field partido? string
---@field partidoImagen? string
---@field periodoPresidencial? string
---@field vicepresidente? string

---@class PresidenteListMatch
---@field fin? string
---@field imagen? string
---@field inicio? string
---@field nombre? string
---@field partido? string
---@field partidoImagen? string
---@field periodoPresidencial? string
---@field vicepresidente? string

---@class ProveedorPlazoFijoPrecancelable
---@field avisoPrecancelacionDias? number
---@field canal? string
---@field enlace? string
---@field entidad? string
---@field id? string
---@field logo? string
---@field modalidad? string
---@field moneda? string
---@field montoMaximo? number
---@field montoMinimo? number
---@field plazoMaxDias? number
---@field plazoMinDias? number
---@field plazoPrecancelacionDias? number
---@field tea? number
---@field teaPrecancelacion? number
---@field tna? number
---@field tnaPrecancelacion? number

---@class ProveedorPlazoFijoPrecancelableListMatch
---@field avisoPrecancelacionDias? number
---@field canal? string
---@field enlace? string
---@field entidad? string
---@field id? string
---@field logo? string
---@field modalidad? string
---@field moneda? string
---@field montoMaximo? number
---@field montoMinimo? number
---@field plazoMaxDias? number
---@field plazoMinDias? number
---@field plazoPrecancelacionDias? number
---@field tea? number
---@field teaPrecancelacion? number
---@field tna? number
---@field tnaPrecancelacion? number

---@class ProveedorPlazoFijoUvaPagoPeriodico
---@field entidad? string
---@field id? string
---@field logo? string
---@field tasas? table

---@class ProveedorPlazoFijoUvaPagoPeriodicoListMatch
---@field entidad? string
---@field id? string
---@field logo? string
---@field tasas? table

---@class Rem
---@field desvio? number
---@field fecha? string
---@field fuente? string
---@field indicador? string
---@field informe? string
---@field maximo? number
---@field mediana? number
---@field minimo? number
---@field muestra? string
---@field participantes? number
---@field percentil10? number
---@field percentil25? number
---@field percentil75? number
---@field percentil90? number
---@field periodo? string
---@field periodoDesde? string
---@field periodoHasta? string
---@field periodoTipo? string
---@field promedio? number
---@field publicacionUrl? string
---@field referencia? string
---@field referenciaFecha? string
---@field unidad? string
---@field xlsxUrl? string

---@class RemListMatch
---@field ["año"] number
---@field mes string

---@class RemExpectativa
---@field desvio? number
---@field fecha? string
---@field fuente? string
---@field indicador? string
---@field informe? string
---@field maximo? number
---@field mediana? number
---@field minimo? number
---@field muestra? string
---@field participantes? number
---@field percentil10? number
---@field percentil25? number
---@field percentil75? number
---@field percentil90? number
---@field periodo? string
---@field periodoDesde? string
---@field periodoHasta? string
---@field periodoTipo? string
---@field promedio? number
---@field publicacionUrl? string
---@field referencia? string
---@field referenciaFecha? string
---@field unidad? string
---@field xlsxUrl? string

---@class RemExpectativaListMatch
---@field desvio? number
---@field fecha? string
---@field fuente? string
---@field indicador? string
---@field informe? string
---@field maximo? number
---@field mediana? number
---@field minimo? number
---@field muestra? string
---@field participantes? number
---@field percentil10? number
---@field percentil25? number
---@field percentil75? number
---@field percentil90? number
---@field periodo? string
---@field periodoDesde? string
---@field periodoHasta? string
---@field periodoTipo? string
---@field promedio? number
---@field publicacionUrl? string
---@field referencia? string
---@field referenciaFecha? string
---@field unidad? string
---@field xlsxUrl? string

---@class Rendimiento
---@field apy? number
---@field fecha? string
---@field moneda? string

---@class RendimientoLoadMatch
---@field id string

---@class RiesgoPai
---@field fecha? string
---@field valor? number

---@class RiesgoPaiLoadMatch
---@field fecha? string
---@field valor? number

---@class RiesgoPaiListMatch
---@field fecha? string
---@field valor? number

---@class Senador
---@field email? string
---@field foto? string
---@field id? string
---@field nombre? string
---@field observaciones? string
---@field partido? string
---@field periodoLegal? table
---@field periodoReal? table
---@field provincia? string
---@field redes? table
---@field reemplazo? string
---@field telefono? string

---@class SenadorListMatch
---@field email? string
---@field foto? string
---@field id? string
---@field nombre? string
---@field observaciones? string
---@field partido? string
---@field periodoLegal? table
---@field periodoReal? table
---@field provincia? string
---@field redes? table
---@field reemplazo? string
---@field telefono? string

---@class TasaIntere
---@field fecha? string
---@field valor? number

---@class TasaIntereListMatch
---@field fecha? string
---@field valor? number

---@class TasaPlazoFijo
---@field entidad? string
---@field logo? string
---@field tnaClientes? number
---@field tnaNoClientes? number

---@class TasaPlazoFijoListMatch
---@field entidad? string
---@field logo? string
---@field tnaClientes? number
---@field tnaNoClientes? number

local M = {}

return M
