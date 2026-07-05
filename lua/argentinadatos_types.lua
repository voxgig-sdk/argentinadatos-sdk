-- Typed models for the Argentinadatos SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Acta
---@field abstencione? number
---@field acta? string
---@field acta_id? number
---@field afirmativo? number
---@field amn? number
---@field ausente? number
---@field descripcion? string
---@field fecha? string
---@field id? string
---@field mayoria? string
---@field miembro? number
---@field negativo? number
---@field numero_acta? string
---@field observacione? table
---@field periodo? string
---@field presente? number
---@field presidente? string
---@field proyecto? string
---@field quorum_tipo? string
---@field resultado? string
---@field reunion? string
---@field titulo? string
---@field voto? table
---@field votos_afirmativo? number
---@field votos_negativo? number

---@class ActaLoadMatch
---@field id number

---@class ActaListMatch
---@field abstencione? number
---@field acta? string
---@field acta_id? number
---@field afirmativo? number
---@field amn? number
---@field ausente? number
---@field descripcion? string
---@field fecha? string
---@field id? string
---@field mayoria? string
---@field miembro? number
---@field negativo? number
---@field numero_acta? string
---@field observacione? table
---@field periodo? string
---@field presente? number
---@field presidente? string
---@field proyecto? string
---@field quorum_tipo? string
---@field resultado? string
---@field reunion? string
---@field titulo? string
---@field voto? table
---@field votos_afirmativo? number
---@field votos_negativo? number

---@class BonosCer
---@field fecha_vencimiento string
---@field precio_ar number
---@field ticker string
---@field tir_porcentaje number
---@field voluman? number

---@class BonosCerListMatch
---@field fecha_vencimiento? string
---@field precio_ar? number
---@field ticker? string
---@field tir_porcentaje? number
---@field voluman? number

---@class Cotizacion
---@field casa? string
---@field compra? number
---@field fecha? string
---@field moneda? string
---@field venta? number

---@class CotizacionLoadMatch
---@field casa string
---@field fecha string

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
---@field cese_fecha? string
---@field foto? string
---@field genero? string
---@field id? string
---@field juramento_fecha? string
---@field nombre? string
---@field periodo_bloque? table
---@field periodo_mandato? table
---@field provincia? string

---@class DiputadoListMatch
---@field apellido? string
---@field bloque? string
---@field cese_fecha? string
---@field foto? string
---@field genero? string
---@field id? string
---@field juramento_fecha? string
---@field nombre? string
---@field periodo_bloque? table
---@field periodo_mandato? table
---@field provincia? string

---@class EntidadRendimiento
---@field entidad? string
---@field rendimiento? table

---@class EntidadRendimientoListMatch
---@field entidad? string
---@field rendimiento? table

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
---@field condicione? string
---@field condiciones_corto? string
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
---@field nombre_comercial? string
---@field tna? number

---@class HipotecarioUvaTnaListMatch
---@field entidad? string
---@field metadata? table
---@field nombre_comercial? string
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
---@field fecha_emision? string
---@field fecha_vencimiento? string
---@field tem? number
---@field ticker? string
---@field vpv? number

---@class LetraListMatch
---@field fecha_emision? string
---@field fecha_vencimiento? string
---@field tem? number
---@field ticker? string
---@field vpv? number

---@class Presidente
---@field fin? string
---@field imagen? string
---@field inicio? string
---@field nombre? string
---@field partido? string
---@field partido_imagen? string
---@field periodo_presidencial? string
---@field vicepresidente? string

---@class PresidenteListMatch
---@field fin? string
---@field imagen? string
---@field inicio? string
---@field nombre? string
---@field partido? string
---@field partido_imagen? string
---@field periodo_presidencial? string
---@field vicepresidente? string

---@class ProveedorPlazoFijoPrecancelable
---@field aviso_precancelacion_dia? number
---@field canal? string
---@field enlace? string
---@field entidad? string
---@field id? string
---@field logo? string
---@field modalidad? string
---@field moneda? string
---@field monto_maximo? number
---@field monto_minimo? number
---@field plazo_max_dia? number
---@field plazo_min_dia? number
---@field plazo_precancelacion_dia? number
---@field tea? number
---@field tea_precancelacion? number
---@field tna? number
---@field tna_precancelacion? number

---@class ProveedorPlazoFijoPrecancelableListMatch
---@field aviso_precancelacion_dia? number
---@field canal? string
---@field enlace? string
---@field entidad? string
---@field id? string
---@field logo? string
---@field modalidad? string
---@field moneda? string
---@field monto_maximo? number
---@field monto_minimo? number
---@field plazo_max_dia? number
---@field plazo_min_dia? number
---@field plazo_precancelacion_dia? number
---@field tea? number
---@field tea_precancelacion? number
---@field tna? number
---@field tna_precancelacion? number

---@class ProveedorPlazoFijoUvaPagoPeriodico
---@field entidad? string
---@field id? string
---@field logo? string
---@field tasa? table

---@class ProveedorPlazoFijoUvaPagoPeriodicoListMatch
---@field entidad? string
---@field id? string
---@field logo? string
---@field tasa? table

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
---@field participante? number
---@field percentil10? number
---@field percentil25? number
---@field percentil75? number
---@field percentil90? number
---@field periodo? string
---@field periodo_desde? string
---@field periodo_hasta? string
---@field periodo_tipo? string
---@field promedio? number
---@field publicacion_url? string
---@field referencia? string
---@field referencia_fecha? string
---@field unidad? string
---@field xlsx_url? string

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
---@field participante? number
---@field percentil10? number
---@field percentil25? number
---@field percentil75? number
---@field percentil90? number
---@field periodo? string
---@field periodo_desde? string
---@field periodo_hasta? string
---@field periodo_tipo? string
---@field promedio? number
---@field publicacion_url? string
---@field referencia? string
---@field referencia_fecha? string
---@field unidad? string
---@field xlsx_url? string

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
---@field participante? number
---@field percentil10? number
---@field percentil25? number
---@field percentil75? number
---@field percentil90? number
---@field periodo? string
---@field periodo_desde? string
---@field periodo_hasta? string
---@field periodo_tipo? string
---@field promedio? number
---@field publicacion_url? string
---@field referencia? string
---@field referencia_fecha? string
---@field unidad? string
---@field xlsx_url? string

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
---@field observacione? string
---@field partido? string
---@field periodo_legal? table
---@field periodo_real? table
---@field provincia? string
---@field rede? table
---@field reemplazo? string
---@field telefono? string

---@class SenadorListMatch
---@field email? string
---@field foto? string
---@field id? string
---@field nombre? string
---@field observacione? string
---@field partido? string
---@field periodo_legal? table
---@field periodo_real? table
---@field provincia? string
---@field rede? table
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
---@field tna_cliente? number
---@field tna_no_cliente? number

---@class TasaPlazoFijoListMatch
---@field entidad? string
---@field logo? string
---@field tna_cliente? number
---@field tna_no_cliente? number

local M = {}

return M
