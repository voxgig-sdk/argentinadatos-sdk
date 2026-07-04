# frozen_string_literal: true

# Typed models for the Argentinadatos SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Acta entity data model.
#
# @!attribute [rw] abstencione
#   @return [Integer, nil]
#
# @!attribute [rw] acta
#   @return [String, nil]
#
# @!attribute [rw] acta_id
#   @return [Integer, nil]
#
# @!attribute [rw] afirmativo
#   @return [Integer, nil]
#
# @!attribute [rw] amn
#   @return [Integer, nil]
#
# @!attribute [rw] ausente
#   @return [Integer, nil]
#
# @!attribute [rw] descripcion
#   @return [String, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] mayoria
#   @return [String, nil]
#
# @!attribute [rw] miembro
#   @return [Integer, nil]
#
# @!attribute [rw] negativo
#   @return [Integer, nil]
#
# @!attribute [rw] numero_acta
#   @return [String, nil]
#
# @!attribute [rw] observacione
#   @return [Array, nil]
#
# @!attribute [rw] periodo
#   @return [String, nil]
#
# @!attribute [rw] presente
#   @return [Integer, nil]
#
# @!attribute [rw] presidente
#   @return [String, nil]
#
# @!attribute [rw] proyecto
#   @return [String, nil]
#
# @!attribute [rw] quorum_tipo
#   @return [String, nil]
#
# @!attribute [rw] resultado
#   @return [String, nil]
#
# @!attribute [rw] reunion
#   @return [String, nil]
#
# @!attribute [rw] titulo
#   @return [String, nil]
#
# @!attribute [rw] voto
#   @return [Array, nil]
#
# @!attribute [rw] votos_afirmativo
#   @return [Integer, nil]
#
# @!attribute [rw] votos_negativo
#   @return [Integer, nil]
Acta = Struct.new(
  :abstencione,
  :acta,
  :acta_id,
  :afirmativo,
  :amn,
  :ausente,
  :descripcion,
  :fecha,
  :id,
  :mayoria,
  :miembro,
  :negativo,
  :numero_acta,
  :observacione,
  :periodo,
  :presente,
  :presidente,
  :proyecto,
  :quorum_tipo,
  :resultado,
  :reunion,
  :titulo,
  :voto,
  :votos_afirmativo,
  :votos_negativo,
  keyword_init: true
)

# Request payload for Acta#load.
#
# @!attribute [rw] id
#   @return [Integer]
ActaLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Acta#list (any subset of Acta fields).
#
# @!attribute [rw] abstencione
#   @return [Integer, nil]
#
# @!attribute [rw] acta
#   @return [String, nil]
#
# @!attribute [rw] acta_id
#   @return [Integer, nil]
#
# @!attribute [rw] afirmativo
#   @return [Integer, nil]
#
# @!attribute [rw] amn
#   @return [Integer, nil]
#
# @!attribute [rw] ausente
#   @return [Integer, nil]
#
# @!attribute [rw] descripcion
#   @return [String, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] mayoria
#   @return [String, nil]
#
# @!attribute [rw] miembro
#   @return [Integer, nil]
#
# @!attribute [rw] negativo
#   @return [Integer, nil]
#
# @!attribute [rw] numero_acta
#   @return [String, nil]
#
# @!attribute [rw] observacione
#   @return [Array, nil]
#
# @!attribute [rw] periodo
#   @return [String, nil]
#
# @!attribute [rw] presente
#   @return [Integer, nil]
#
# @!attribute [rw] presidente
#   @return [String, nil]
#
# @!attribute [rw] proyecto
#   @return [String, nil]
#
# @!attribute [rw] quorum_tipo
#   @return [String, nil]
#
# @!attribute [rw] resultado
#   @return [String, nil]
#
# @!attribute [rw] reunion
#   @return [String, nil]
#
# @!attribute [rw] titulo
#   @return [String, nil]
#
# @!attribute [rw] voto
#   @return [Array, nil]
#
# @!attribute [rw] votos_afirmativo
#   @return [Integer, nil]
#
# @!attribute [rw] votos_negativo
#   @return [Integer, nil]
ActaListMatch = Struct.new(
  :abstencione,
  :acta,
  :acta_id,
  :afirmativo,
  :amn,
  :ausente,
  :descripcion,
  :fecha,
  :id,
  :mayoria,
  :miembro,
  :negativo,
  :numero_acta,
  :observacione,
  :periodo,
  :presente,
  :presidente,
  :proyecto,
  :quorum_tipo,
  :resultado,
  :reunion,
  :titulo,
  :voto,
  :votos_afirmativo,
  :votos_negativo,
  keyword_init: true
)

# BonosCer entity data model.
#
# @!attribute [rw] fecha_vencimiento
#   @return [String]
#
# @!attribute [rw] precio_ar
#   @return [Float]
#
# @!attribute [rw] ticker
#   @return [String]
#
# @!attribute [rw] tir_porcentaje
#   @return [Float]
#
# @!attribute [rw] voluman
#   @return [Float, nil]
BonosCer = Struct.new(
  :fecha_vencimiento,
  :precio_ar,
  :ticker,
  :tir_porcentaje,
  :voluman,
  keyword_init: true
)

# Match filter for BonosCer#list (any subset of BonosCer fields).
#
# @!attribute [rw] fecha_vencimiento
#   @return [String, nil]
#
# @!attribute [rw] precio_ar
#   @return [Float, nil]
#
# @!attribute [rw] ticker
#   @return [String, nil]
#
# @!attribute [rw] tir_porcentaje
#   @return [Float, nil]
#
# @!attribute [rw] voluman
#   @return [Float, nil]
BonosCerListMatch = Struct.new(
  :fecha_vencimiento,
  :precio_ar,
  :ticker,
  :tir_porcentaje,
  :voluman,
  keyword_init: true
)

# Cotizacion entity data model.
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
Cotizacion = Struct.new(
  :casa,
  :compra,
  :fecha,
  :moneda,
  :venta,
  keyword_init: true
)

# Request payload for Cotizacion#load.
#
# @!attribute [rw] casa
#   @return [String]
#
# @!attribute [rw] fecha
#   @return [String]
CotizacionLoadMatch = Struct.new(
  :casa,
  :fecha,
  keyword_init: true
)

# Match filter for Cotizacion#list (any subset of Cotizacion fields).
#
# @!attribute [rw] casa
#   @return [String, nil]
#
# @!attribute [rw] compra
#   @return [Float, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] venta
#   @return [Float, nil]
CotizacionListMatch = Struct.new(
  :casa,
  :compra,
  :fecha,
  :moneda,
  :venta,
  keyword_init: true
)

# Criptopeso entity data model.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
Criptopeso = Struct.new(
  :entidad,
  :tna,
  :token,
  keyword_init: true
)

# Match filter for Criptopeso#list (any subset of Criptopeso fields).
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
CriptopesoListMatch = Struct.new(
  :entidad,
  :tna,
  :token,
  keyword_init: true
)

# CuentaRemuneradaUsd entity data model.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] tasa
#   @return [Float, nil]
#
# @!attribute [rw] tope
#   @return [Float, nil]
CuentaRemuneradaUsd = Struct.new(
  :entidad,
  :tasa,
  :tope,
  keyword_init: true
)

# Match filter for CuentaRemuneradaUsd#list (any subset of CuentaRemuneradaUsd fields).
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] tasa
#   @return [Float, nil]
#
# @!attribute [rw] tope
#   @return [Float, nil]
CuentaRemuneradaUsdListMatch = Struct.new(
  :entidad,
  :tasa,
  :tope,
  keyword_init: true
)

# Diputado entity data model.
#
# @!attribute [rw] apellido
#   @return [String, nil]
#
# @!attribute [rw] bloque
#   @return [String, nil]
#
# @!attribute [rw] cese_fecha
#   @return [String, nil]
#
# @!attribute [rw] foto
#   @return [String, nil]
#
# @!attribute [rw] genero
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] juramento_fecha
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] periodo_bloque
#   @return [Hash, nil]
#
# @!attribute [rw] periodo_mandato
#   @return [Hash, nil]
#
# @!attribute [rw] provincia
#   @return [String, nil]
Diputado = Struct.new(
  :apellido,
  :bloque,
  :cese_fecha,
  :foto,
  :genero,
  :id,
  :juramento_fecha,
  :nombre,
  :periodo_bloque,
  :periodo_mandato,
  :provincia,
  keyword_init: true
)

# Match filter for Diputado#list (any subset of Diputado fields).
#
# @!attribute [rw] apellido
#   @return [String, nil]
#
# @!attribute [rw] bloque
#   @return [String, nil]
#
# @!attribute [rw] cese_fecha
#   @return [String, nil]
#
# @!attribute [rw] foto
#   @return [String, nil]
#
# @!attribute [rw] genero
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] juramento_fecha
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] periodo_bloque
#   @return [Hash, nil]
#
# @!attribute [rw] periodo_mandato
#   @return [Hash, nil]
#
# @!attribute [rw] provincia
#   @return [String, nil]
DiputadoListMatch = Struct.new(
  :apellido,
  :bloque,
  :cese_fecha,
  :foto,
  :genero,
  :id,
  :juramento_fecha,
  :nombre,
  :periodo_bloque,
  :periodo_mandato,
  :provincia,
  keyword_init: true
)

# EntidadRendimiento entity data model.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] rendimiento
#   @return [Array, nil]
EntidadRendimiento = Struct.new(
  :entidad,
  :rendimiento,
  keyword_init: true
)

# Match filter for EntidadRendimiento#list (any subset of EntidadRendimiento fields).
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] rendimiento
#   @return [Array, nil]
EntidadRendimientoListMatch = Struct.new(
  :entidad,
  :rendimiento,
  keyword_init: true
)

# Estado entity data model.
#
# @!attribute [rw] aleatorio
#   @return [Integer, nil]
#
# @!attribute [rw] estado
#   @return [String, nil]
Estado = Struct.new(
  :aleatorio,
  :estado,
  keyword_init: true
)

# Match filter for Estado#load (any subset of Estado fields).
#
# @!attribute [rw] aleatorio
#   @return [Integer, nil]
#
# @!attribute [rw] estado
#   @return [String, nil]
EstadoLoadMatch = Struct.new(
  :aleatorio,
  :estado,
  keyword_init: true
)

# EventoPresidencial entity data model.
#
# @!attribute [rw] evento
#   @return [String, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] tipo
#   @return [String, nil]
EventoPresidencial = Struct.new(
  :evento,
  :fecha,
  :tipo,
  keyword_init: true
)

# Match filter for EventoPresidencial#list (any subset of EventoPresidencial fields).
#
# @!attribute [rw] evento
#   @return [String, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] tipo
#   @return [String, nil]
EventoPresidencialListMatch = Struct.new(
  :evento,
  :fecha,
  :tipo,
  keyword_init: true
)

# Feriado entity data model.
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] tipo
#   @return [String, nil]
Feriado = Struct.new(
  :fecha,
  :nombre,
  :tipo,
  keyword_init: true
)

# Request payload for Feriado#load.
#
# @!attribute [rw] id
#   @return [Integer]
FeriadoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Finanza entity data model.
class Finanza
end

# Match filter for Finanza#list (any subset of Finanza fields).
class FinanzaListMatch
end

# FondoComunInversion entity data model.
#
# @!attribute [rw] ccp
#   @return [Float, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] fondo
#   @return [String, nil]
#
# @!attribute [rw] horizonte
#   @return [String, nil]
#
# @!attribute [rw] patrimonio
#   @return [Float, nil]
#
# @!attribute [rw] tipo
#   @return [String, nil]
#
# @!attribute [rw] vcp
#   @return [Float, nil]
FondoComunInversion = Struct.new(
  :ccp,
  :fecha,
  :fondo,
  :horizonte,
  :patrimonio,
  :tipo,
  :vcp,
  keyword_init: true
)

# Request payload for FondoComunInversion#load.
#
# @!attribute [rw] fecha
#   @return [String]
FondoComunInversionLoadMatch = Struct.new(
  :fecha,
  keyword_init: true
)

# FondoComunInversionOtro entity data model.
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] fondo
#   @return [String, nil]
#
# @!attribute [rw] tea
#   @return [Float, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
#
# @!attribute [rw] tope
#   @return [Float, nil]
FondoComunInversionOtro = Struct.new(
  :fecha,
  :fondo,
  :tea,
  :tna,
  :tope,
  keyword_init: true
)

# Request payload for FondoComunInversionOtro#load.
#
# @!attribute [rw] id
#   @return [String]
FondoComunInversionOtroLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# FondoComunInversionVariable entity data model.
#
# @!attribute [rw] condicione
#   @return [String, nil]
#
# @!attribute [rw] condiciones_corto
#   @return [String, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] fondo
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] tea
#   @return [Float, nil]
#
# @!attribute [rw] tipo
#   @return [String, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
#
# @!attribute [rw] tope
#   @return [Float, nil]
FondoComunInversionVariable = Struct.new(
  :condicione,
  :condiciones_corto,
  :fecha,
  :fondo,
  :nombre,
  :tea,
  :tipo,
  :tna,
  :tope,
  keyword_init: true
)

# Request payload for FondoComunInversionVariable#load.
#
# @!attribute [rw] id
#   @return [String]
FondoComunInversionVariableLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# HipotecarioUvaTna entity data model.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] nombre_comercial
#   @return [String, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
HipotecarioUvaTna = Struct.new(
  :entidad,
  :metadata,
  :nombre_comercial,
  :tna,
  keyword_init: true
)

# Match filter for HipotecarioUvaTna#list (any subset of HipotecarioUvaTna fields).
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] nombre_comercial
#   @return [String, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
HipotecarioUvaTnaListMatch = Struct.new(
  :entidad,
  :metadata,
  :nombre_comercial,
  :tna,
  keyword_init: true
)

# IndiceInflacion entity data model.
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
IndiceInflacion = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# Match filter for IndiceInflacion#list (any subset of IndiceInflacion fields).
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
IndiceInflacionListMatch = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# IndiceUva entity data model.
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
IndiceUva = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# Match filter for IndiceUva#list (any subset of IndiceUva fields).
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
IndiceUvaListMatch = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# Letra entity data model.
#
# @!attribute [rw] fecha_emision
#   @return [String, nil]
#
# @!attribute [rw] fecha_vencimiento
#   @return [String, nil]
#
# @!attribute [rw] tem
#   @return [Float, nil]
#
# @!attribute [rw] ticker
#   @return [String, nil]
#
# @!attribute [rw] vpv
#   @return [Float, nil]
Letra = Struct.new(
  :fecha_emision,
  :fecha_vencimiento,
  :tem,
  :ticker,
  :vpv,
  keyword_init: true
)

# Match filter for Letra#list (any subset of Letra fields).
#
# @!attribute [rw] fecha_emision
#   @return [String, nil]
#
# @!attribute [rw] fecha_vencimiento
#   @return [String, nil]
#
# @!attribute [rw] tem
#   @return [Float, nil]
#
# @!attribute [rw] ticker
#   @return [String, nil]
#
# @!attribute [rw] vpv
#   @return [Float, nil]
LetraListMatch = Struct.new(
  :fecha_emision,
  :fecha_vencimiento,
  :tem,
  :ticker,
  :vpv,
  keyword_init: true
)

# Presidente entity data model.
#
# @!attribute [rw] fin
#   @return [String, nil]
#
# @!attribute [rw] imagen
#   @return [String, nil]
#
# @!attribute [rw] inicio
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] partido
#   @return [String, nil]
#
# @!attribute [rw] partido_imagen
#   @return [String, nil]
#
# @!attribute [rw] periodo_presidencial
#   @return [String, nil]
#
# @!attribute [rw] vicepresidente
#   @return [String, nil]
Presidente = Struct.new(
  :fin,
  :imagen,
  :inicio,
  :nombre,
  :partido,
  :partido_imagen,
  :periodo_presidencial,
  :vicepresidente,
  keyword_init: true
)

# Match filter for Presidente#list (any subset of Presidente fields).
#
# @!attribute [rw] fin
#   @return [String, nil]
#
# @!attribute [rw] imagen
#   @return [String, nil]
#
# @!attribute [rw] inicio
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] partido
#   @return [String, nil]
#
# @!attribute [rw] partido_imagen
#   @return [String, nil]
#
# @!attribute [rw] periodo_presidencial
#   @return [String, nil]
#
# @!attribute [rw] vicepresidente
#   @return [String, nil]
PresidenteListMatch = Struct.new(
  :fin,
  :imagen,
  :inicio,
  :nombre,
  :partido,
  :partido_imagen,
  :periodo_presidencial,
  :vicepresidente,
  keyword_init: true
)

# ProveedorPlazoFijoPrecancelable entity data model.
#
# @!attribute [rw] aviso_precancelacion_dia
#   @return [Integer, nil]
#
# @!attribute [rw] canal
#   @return [String, nil]
#
# @!attribute [rw] enlace
#   @return [String, nil]
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] modalidad
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] monto_maximo
#   @return [Float, nil]
#
# @!attribute [rw] monto_minimo
#   @return [Float, nil]
#
# @!attribute [rw] plazo_max_dia
#   @return [Integer, nil]
#
# @!attribute [rw] plazo_min_dia
#   @return [Integer, nil]
#
# @!attribute [rw] plazo_precancelacion_dia
#   @return [Integer, nil]
#
# @!attribute [rw] tea
#   @return [Float, nil]
#
# @!attribute [rw] tea_precancelacion
#   @return [Float, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
#
# @!attribute [rw] tna_precancelacion
#   @return [Float, nil]
ProveedorPlazoFijoPrecancelable = Struct.new(
  :aviso_precancelacion_dia,
  :canal,
  :enlace,
  :entidad,
  :id,
  :logo,
  :modalidad,
  :moneda,
  :monto_maximo,
  :monto_minimo,
  :plazo_max_dia,
  :plazo_min_dia,
  :plazo_precancelacion_dia,
  :tea,
  :tea_precancelacion,
  :tna,
  :tna_precancelacion,
  keyword_init: true
)

# Match filter for ProveedorPlazoFijoPrecancelable#list (any subset of ProveedorPlazoFijoPrecancelable fields).
#
# @!attribute [rw] aviso_precancelacion_dia
#   @return [Integer, nil]
#
# @!attribute [rw] canal
#   @return [String, nil]
#
# @!attribute [rw] enlace
#   @return [String, nil]
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] modalidad
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
#
# @!attribute [rw] monto_maximo
#   @return [Float, nil]
#
# @!attribute [rw] monto_minimo
#   @return [Float, nil]
#
# @!attribute [rw] plazo_max_dia
#   @return [Integer, nil]
#
# @!attribute [rw] plazo_min_dia
#   @return [Integer, nil]
#
# @!attribute [rw] plazo_precancelacion_dia
#   @return [Integer, nil]
#
# @!attribute [rw] tea
#   @return [Float, nil]
#
# @!attribute [rw] tea_precancelacion
#   @return [Float, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
#
# @!attribute [rw] tna_precancelacion
#   @return [Float, nil]
ProveedorPlazoFijoPrecancelableListMatch = Struct.new(
  :aviso_precancelacion_dia,
  :canal,
  :enlace,
  :entidad,
  :id,
  :logo,
  :modalidad,
  :moneda,
  :monto_maximo,
  :monto_minimo,
  :plazo_max_dia,
  :plazo_min_dia,
  :plazo_precancelacion_dia,
  :tea,
  :tea_precancelacion,
  :tna,
  :tna_precancelacion,
  keyword_init: true
)

# ProveedorPlazoFijoUvaPagoPeriodico entity data model.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] tasa
#   @return [Array, nil]
ProveedorPlazoFijoUvaPagoPeriodico = Struct.new(
  :entidad,
  :id,
  :logo,
  :tasa,
  keyword_init: true
)

# Match filter for ProveedorPlazoFijoUvaPagoPeriodico#list (any subset of ProveedorPlazoFijoUvaPagoPeriodico fields).
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] tasa
#   @return [Array, nil]
ProveedorPlazoFijoUvaPagoPeriodicoListMatch = Struct.new(
  :entidad,
  :id,
  :logo,
  :tasa,
  keyword_init: true
)

# Rem entity data model.
#
# @!attribute [rw] desvio
#   @return [Float, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] fuente
#   @return [String, nil]
#
# @!attribute [rw] indicador
#   @return [String, nil]
#
# @!attribute [rw] informe
#   @return [String, nil]
#
# @!attribute [rw] maximo
#   @return [Float, nil]
#
# @!attribute [rw] mediana
#   @return [Float, nil]
#
# @!attribute [rw] minimo
#   @return [Float, nil]
#
# @!attribute [rw] muestra
#   @return [String, nil]
#
# @!attribute [rw] participante
#   @return [Integer, nil]
#
# @!attribute [rw] percentil10
#   @return [Float, nil]
#
# @!attribute [rw] percentil25
#   @return [Float, nil]
#
# @!attribute [rw] percentil75
#   @return [Float, nil]
#
# @!attribute [rw] percentil90
#   @return [Float, nil]
#
# @!attribute [rw] periodo
#   @return [String, nil]
#
# @!attribute [rw] periodo_desde
#   @return [String, nil]
#
# @!attribute [rw] periodo_hasta
#   @return [String, nil]
#
# @!attribute [rw] periodo_tipo
#   @return [String, nil]
#
# @!attribute [rw] promedio
#   @return [Float, nil]
#
# @!attribute [rw] publicacion_url
#   @return [String, nil]
#
# @!attribute [rw] referencia
#   @return [String, nil]
#
# @!attribute [rw] referencia_fecha
#   @return [String, nil]
#
# @!attribute [rw] unidad
#   @return [String, nil]
#
# @!attribute [rw] xlsx_url
#   @return [String, nil]
Rem = Struct.new(
  :desvio,
  :fecha,
  :fuente,
  :indicador,
  :informe,
  :maximo,
  :mediana,
  :minimo,
  :muestra,
  :participante,
  :percentil10,
  :percentil25,
  :percentil75,
  :percentil90,
  :periodo,
  :periodo_desde,
  :periodo_hasta,
  :periodo_tipo,
  :promedio,
  :publicacion_url,
  :referencia,
  :referencia_fecha,
  :unidad,
  :xlsx_url,
  keyword_init: true
)

# Request payload for Rem#list.
#
# @!attribute [rw] año
#   @return [Integer]
#
# @!attribute [rw] mes
#   @return [String]
RemListMatch = Struct.new(
  :"año",
  :mes,
  keyword_init: true
)

# RemExpectativa entity data model.
#
# @!attribute [rw] desvio
#   @return [Float, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] fuente
#   @return [String, nil]
#
# @!attribute [rw] indicador
#   @return [String, nil]
#
# @!attribute [rw] informe
#   @return [String, nil]
#
# @!attribute [rw] maximo
#   @return [Float, nil]
#
# @!attribute [rw] mediana
#   @return [Float, nil]
#
# @!attribute [rw] minimo
#   @return [Float, nil]
#
# @!attribute [rw] muestra
#   @return [String, nil]
#
# @!attribute [rw] participante
#   @return [Integer, nil]
#
# @!attribute [rw] percentil10
#   @return [Float, nil]
#
# @!attribute [rw] percentil25
#   @return [Float, nil]
#
# @!attribute [rw] percentil75
#   @return [Float, nil]
#
# @!attribute [rw] percentil90
#   @return [Float, nil]
#
# @!attribute [rw] periodo
#   @return [String, nil]
#
# @!attribute [rw] periodo_desde
#   @return [String, nil]
#
# @!attribute [rw] periodo_hasta
#   @return [String, nil]
#
# @!attribute [rw] periodo_tipo
#   @return [String, nil]
#
# @!attribute [rw] promedio
#   @return [Float, nil]
#
# @!attribute [rw] publicacion_url
#   @return [String, nil]
#
# @!attribute [rw] referencia
#   @return [String, nil]
#
# @!attribute [rw] referencia_fecha
#   @return [String, nil]
#
# @!attribute [rw] unidad
#   @return [String, nil]
#
# @!attribute [rw] xlsx_url
#   @return [String, nil]
RemExpectativa = Struct.new(
  :desvio,
  :fecha,
  :fuente,
  :indicador,
  :informe,
  :maximo,
  :mediana,
  :minimo,
  :muestra,
  :participante,
  :percentil10,
  :percentil25,
  :percentil75,
  :percentil90,
  :periodo,
  :periodo_desde,
  :periodo_hasta,
  :periodo_tipo,
  :promedio,
  :publicacion_url,
  :referencia,
  :referencia_fecha,
  :unidad,
  :xlsx_url,
  keyword_init: true
)

# Match filter for RemExpectativa#list (any subset of RemExpectativa fields).
#
# @!attribute [rw] desvio
#   @return [Float, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] fuente
#   @return [String, nil]
#
# @!attribute [rw] indicador
#   @return [String, nil]
#
# @!attribute [rw] informe
#   @return [String, nil]
#
# @!attribute [rw] maximo
#   @return [Float, nil]
#
# @!attribute [rw] mediana
#   @return [Float, nil]
#
# @!attribute [rw] minimo
#   @return [Float, nil]
#
# @!attribute [rw] muestra
#   @return [String, nil]
#
# @!attribute [rw] participante
#   @return [Integer, nil]
#
# @!attribute [rw] percentil10
#   @return [Float, nil]
#
# @!attribute [rw] percentil25
#   @return [Float, nil]
#
# @!attribute [rw] percentil75
#   @return [Float, nil]
#
# @!attribute [rw] percentil90
#   @return [Float, nil]
#
# @!attribute [rw] periodo
#   @return [String, nil]
#
# @!attribute [rw] periodo_desde
#   @return [String, nil]
#
# @!attribute [rw] periodo_hasta
#   @return [String, nil]
#
# @!attribute [rw] periodo_tipo
#   @return [String, nil]
#
# @!attribute [rw] promedio
#   @return [Float, nil]
#
# @!attribute [rw] publicacion_url
#   @return [String, nil]
#
# @!attribute [rw] referencia
#   @return [String, nil]
#
# @!attribute [rw] referencia_fecha
#   @return [String, nil]
#
# @!attribute [rw] unidad
#   @return [String, nil]
#
# @!attribute [rw] xlsx_url
#   @return [String, nil]
RemExpectativaListMatch = Struct.new(
  :desvio,
  :fecha,
  :fuente,
  :indicador,
  :informe,
  :maximo,
  :mediana,
  :minimo,
  :muestra,
  :participante,
  :percentil10,
  :percentil25,
  :percentil75,
  :percentil90,
  :periodo,
  :periodo_desde,
  :periodo_hasta,
  :periodo_tipo,
  :promedio,
  :publicacion_url,
  :referencia,
  :referencia_fecha,
  :unidad,
  :xlsx_url,
  keyword_init: true
)

# Rendimiento entity data model.
#
# @!attribute [rw] apy
#   @return [Float, nil]
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] moneda
#   @return [String, nil]
Rendimiento = Struct.new(
  :apy,
  :fecha,
  :moneda,
  keyword_init: true
)

# Request payload for Rendimiento#load.
#
# @!attribute [rw] id
#   @return [String]
RendimientoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# RiesgoPai entity data model.
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
RiesgoPai = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# Match filter for RiesgoPai#load (any subset of RiesgoPai fields).
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
RiesgoPaiLoadMatch = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# Match filter for RiesgoPai#list (any subset of RiesgoPai fields).
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
RiesgoPaiListMatch = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# Senador entity data model.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] foto
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] observacione
#   @return [String, nil]
#
# @!attribute [rw] partido
#   @return [String, nil]
#
# @!attribute [rw] periodo_legal
#   @return [Hash, nil]
#
# @!attribute [rw] periodo_real
#   @return [Hash, nil]
#
# @!attribute [rw] provincia
#   @return [String, nil]
#
# @!attribute [rw] rede
#   @return [Array, nil]
#
# @!attribute [rw] reemplazo
#   @return [String, nil]
#
# @!attribute [rw] telefono
#   @return [String, nil]
Senador = Struct.new(
  :email,
  :foto,
  :id,
  :nombre,
  :observacione,
  :partido,
  :periodo_legal,
  :periodo_real,
  :provincia,
  :rede,
  :reemplazo,
  :telefono,
  keyword_init: true
)

# Match filter for Senador#list (any subset of Senador fields).
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] foto
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] observacione
#   @return [String, nil]
#
# @!attribute [rw] partido
#   @return [String, nil]
#
# @!attribute [rw] periodo_legal
#   @return [Hash, nil]
#
# @!attribute [rw] periodo_real
#   @return [Hash, nil]
#
# @!attribute [rw] provincia
#   @return [String, nil]
#
# @!attribute [rw] rede
#   @return [Array, nil]
#
# @!attribute [rw] reemplazo
#   @return [String, nil]
#
# @!attribute [rw] telefono
#   @return [String, nil]
SenadorListMatch = Struct.new(
  :email,
  :foto,
  :id,
  :nombre,
  :observacione,
  :partido,
  :periodo_legal,
  :periodo_real,
  :provincia,
  :rede,
  :reemplazo,
  :telefono,
  keyword_init: true
)

# TasaIntere entity data model.
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
TasaIntere = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# Match filter for TasaIntere#list (any subset of TasaIntere fields).
#
# @!attribute [rw] fecha
#   @return [String, nil]
#
# @!attribute [rw] valor
#   @return [Float, nil]
TasaIntereListMatch = Struct.new(
  :fecha,
  :valor,
  keyword_init: true
)

# TasaPlazoFijo entity data model.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] tna_cliente
#   @return [Float, nil]
#
# @!attribute [rw] tna_no_cliente
#   @return [Float, nil]
TasaPlazoFijo = Struct.new(
  :entidad,
  :logo,
  :tna_cliente,
  :tna_no_cliente,
  keyword_init: true
)

# Match filter for TasaPlazoFijo#list (any subset of TasaPlazoFijo fields).
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] tna_cliente
#   @return [Float, nil]
#
# @!attribute [rw] tna_no_cliente
#   @return [Float, nil]
TasaPlazoFijoListMatch = Struct.new(
  :entidad,
  :logo,
  :tna_cliente,
  :tna_no_cliente,
  keyword_init: true
)

