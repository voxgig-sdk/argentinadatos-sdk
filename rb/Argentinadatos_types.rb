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
# @!attribute [rw] abstenciones
#   @return [Integer, nil]
#
# @!attribute [rw] acta
#   @return [String, nil]
#
# @!attribute [rw] actaId
#   @return [Integer, nil]
#
# @!attribute [rw] afirmativos
#   @return [Integer, nil]
#
# @!attribute [rw] amn
#   @return [Integer, nil]
#
# @!attribute [rw] ausentes
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
# @!attribute [rw] miembros
#   @return [Integer, nil]
#
# @!attribute [rw] negativos
#   @return [Integer, nil]
#
# @!attribute [rw] numeroActa
#   @return [String, nil]
#
# @!attribute [rw] observaciones
#   @return [Array, nil]
#
# @!attribute [rw] periodo
#   @return [String, nil]
#
# @!attribute [rw] presentes
#   @return [Integer, nil]
#
# @!attribute [rw] presidente
#   @return [String, nil]
#
# @!attribute [rw] proyecto
#   @return [String, nil]
#
# @!attribute [rw] quorumTipo
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
# @!attribute [rw] votos
#   @return [Array, nil]
#
# @!attribute [rw] votosAfirmativos
#   @return [Integer, nil]
#
# @!attribute [rw] votosNegativos
#   @return [Integer, nil]
Acta = Struct.new(
  :abstenciones,
  :acta,
  :actaId,
  :afirmativos,
  :amn,
  :ausentes,
  :descripcion,
  :fecha,
  :id,
  :mayoria,
  :miembros,
  :negativos,
  :numeroActa,
  :observaciones,
  :periodo,
  :presentes,
  :presidente,
  :proyecto,
  :quorumTipo,
  :resultado,
  :reunion,
  :titulo,
  :votos,
  :votosAfirmativos,
  :votosNegativos,
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

# Request payload for Acta#list.
#
# @!attribute [rw] abstenciones
#   @return [Integer, nil]
#
# @!attribute [rw] acta
#   @return [String, nil]
#
# @!attribute [rw] actaId
#   @return [Integer, nil]
#
# @!attribute [rw] afirmativos
#   @return [Integer, nil]
#
# @!attribute [rw] amn
#   @return [Integer, nil]
#
# @!attribute [rw] ausentes
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
# @!attribute [rw] miembros
#   @return [Integer, nil]
#
# @!attribute [rw] negativos
#   @return [Integer, nil]
#
# @!attribute [rw] numeroActa
#   @return [String, nil]
#
# @!attribute [rw] observaciones
#   @return [Array, nil]
#
# @!attribute [rw] periodo
#   @return [String, nil]
#
# @!attribute [rw] presentes
#   @return [Integer, nil]
#
# @!attribute [rw] presidente
#   @return [String, nil]
#
# @!attribute [rw] proyecto
#   @return [String, nil]
#
# @!attribute [rw] quorumTipo
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
# @!attribute [rw] votos
#   @return [Array, nil]
#
# @!attribute [rw] votosAfirmativos
#   @return [Integer, nil]
#
# @!attribute [rw] votosNegativos
#   @return [Integer, nil]
ActaListMatch = Struct.new(
  :abstenciones,
  :acta,
  :actaId,
  :afirmativos,
  :amn,
  :ausentes,
  :descripcion,
  :fecha,
  :id,
  :mayoria,
  :miembros,
  :negativos,
  :numeroActa,
  :observaciones,
  :periodo,
  :presentes,
  :presidente,
  :proyecto,
  :quorumTipo,
  :resultado,
  :reunion,
  :titulo,
  :votos,
  :votosAfirmativos,
  :votosNegativos,
  keyword_init: true
)

# BonosCer entity data model.
#
# @!attribute [rw] fechaVencimiento
#   @return [String]
#
# @!attribute [rw] precioArs
#   @return [Float]
#
# @!attribute [rw] ticker
#   @return [String]
#
# @!attribute [rw] tirPorcentaje
#   @return [Float]
#
# @!attribute [rw] volumen
#   @return [Float, nil]
BonosCer = Struct.new(
  :fechaVencimiento,
  :precioArs,
  :ticker,
  :tirPorcentaje,
  :volumen,
  keyword_init: true
)

# Request payload for BonosCer#list.
#
# @!attribute [rw] fechaVencimiento
#   @return [String, nil]
#
# @!attribute [rw] precioArs
#   @return [Float, nil]
#
# @!attribute [rw] ticker
#   @return [String, nil]
#
# @!attribute [rw] tirPorcentaje
#   @return [Float, nil]
#
# @!attribute [rw] volumen
#   @return [Float, nil]
BonosCerListMatch = Struct.new(
  :fechaVencimiento,
  :precioArs,
  :ticker,
  :tirPorcentaje,
  :volumen,
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
#   @return [String, nil]
CotizacionLoadMatch = Struct.new(
  :casa,
  :fecha,
  keyword_init: true
)

# Request payload for Cotizacion#list.
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

# Request payload for Criptopeso#list.
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

# Request payload for CuentaRemuneradaUsd#list.
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
# @!attribute [rw] ceseFecha
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
# @!attribute [rw] juramentoFecha
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] periodoBloque
#   @return [Hash, nil]
#
# @!attribute [rw] periodoMandato
#   @return [Hash, nil]
#
# @!attribute [rw] provincia
#   @return [String, nil]
Diputado = Struct.new(
  :apellido,
  :bloque,
  :ceseFecha,
  :foto,
  :genero,
  :id,
  :juramentoFecha,
  :nombre,
  :periodoBloque,
  :periodoMandato,
  :provincia,
  keyword_init: true
)

# Request payload for Diputado#list.
#
# @!attribute [rw] apellido
#   @return [String, nil]
#
# @!attribute [rw] bloque
#   @return [String, nil]
#
# @!attribute [rw] ceseFecha
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
# @!attribute [rw] juramentoFecha
#   @return [String, nil]
#
# @!attribute [rw] nombre
#   @return [String, nil]
#
# @!attribute [rw] periodoBloque
#   @return [Hash, nil]
#
# @!attribute [rw] periodoMandato
#   @return [Hash, nil]
#
# @!attribute [rw] provincia
#   @return [String, nil]
DiputadoListMatch = Struct.new(
  :apellido,
  :bloque,
  :ceseFecha,
  :foto,
  :genero,
  :id,
  :juramentoFecha,
  :nombre,
  :periodoBloque,
  :periodoMandato,
  :provincia,
  keyword_init: true
)

# EntidadRendimiento entity data model.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] rendimientos
#   @return [Array, nil]
EntidadRendimiento = Struct.new(
  :entidad,
  :rendimientos,
  keyword_init: true
)

# Request payload for EntidadRendimiento#list.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] rendimientos
#   @return [Array, nil]
EntidadRendimientoListMatch = Struct.new(
  :entidad,
  :rendimientos,
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

# Request payload for Estado#load.
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

# Request payload for EventoPresidencial#list.
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

# Request payload for Finanza#list.
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
# @!attribute [rw] condiciones
#   @return [String, nil]
#
# @!attribute [rw] condicionesCorto
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
  :condiciones,
  :condicionesCorto,
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
# @!attribute [rw] nombreComercial
#   @return [String, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
HipotecarioUvaTna = Struct.new(
  :entidad,
  :metadata,
  :nombreComercial,
  :tna,
  keyword_init: true
)

# Request payload for HipotecarioUvaTna#list.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] nombreComercial
#   @return [String, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
HipotecarioUvaTnaListMatch = Struct.new(
  :entidad,
  :metadata,
  :nombreComercial,
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

# Request payload for IndiceInflacion#list.
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

# Request payload for IndiceUva#list.
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
# @!attribute [rw] fechaEmision
#   @return [String, nil]
#
# @!attribute [rw] fechaVencimiento
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
  :fechaEmision,
  :fechaVencimiento,
  :tem,
  :ticker,
  :vpv,
  keyword_init: true
)

# Request payload for Letra#list.
#
# @!attribute [rw] fechaEmision
#   @return [String, nil]
#
# @!attribute [rw] fechaVencimiento
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
  :fechaEmision,
  :fechaVencimiento,
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
# @!attribute [rw] partidoImagen
#   @return [String, nil]
#
# @!attribute [rw] periodoPresidencial
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
  :partidoImagen,
  :periodoPresidencial,
  :vicepresidente,
  keyword_init: true
)

# Request payload for Presidente#list.
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
# @!attribute [rw] partidoImagen
#   @return [String, nil]
#
# @!attribute [rw] periodoPresidencial
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
  :partidoImagen,
  :periodoPresidencial,
  :vicepresidente,
  keyword_init: true
)

# ProveedorPlazoFijoPrecancelable entity data model.
#
# @!attribute [rw] avisoPrecancelacionDias
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
# @!attribute [rw] montoMaximo
#   @return [Float, nil]
#
# @!attribute [rw] montoMinimo
#   @return [Float, nil]
#
# @!attribute [rw] plazoMaxDias
#   @return [Integer, nil]
#
# @!attribute [rw] plazoMinDias
#   @return [Integer, nil]
#
# @!attribute [rw] plazoPrecancelacionDias
#   @return [Integer, nil]
#
# @!attribute [rw] tea
#   @return [Float, nil]
#
# @!attribute [rw] teaPrecancelacion
#   @return [Float, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
#
# @!attribute [rw] tnaPrecancelacion
#   @return [Float, nil]
ProveedorPlazoFijoPrecancelable = Struct.new(
  :avisoPrecancelacionDias,
  :canal,
  :enlace,
  :entidad,
  :id,
  :logo,
  :modalidad,
  :moneda,
  :montoMaximo,
  :montoMinimo,
  :plazoMaxDias,
  :plazoMinDias,
  :plazoPrecancelacionDias,
  :tea,
  :teaPrecancelacion,
  :tna,
  :tnaPrecancelacion,
  keyword_init: true
)

# Request payload for ProveedorPlazoFijoPrecancelable#list.
#
# @!attribute [rw] avisoPrecancelacionDias
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
# @!attribute [rw] montoMaximo
#   @return [Float, nil]
#
# @!attribute [rw] montoMinimo
#   @return [Float, nil]
#
# @!attribute [rw] plazoMaxDias
#   @return [Integer, nil]
#
# @!attribute [rw] plazoMinDias
#   @return [Integer, nil]
#
# @!attribute [rw] plazoPrecancelacionDias
#   @return [Integer, nil]
#
# @!attribute [rw] tea
#   @return [Float, nil]
#
# @!attribute [rw] teaPrecancelacion
#   @return [Float, nil]
#
# @!attribute [rw] tna
#   @return [Float, nil]
#
# @!attribute [rw] tnaPrecancelacion
#   @return [Float, nil]
ProveedorPlazoFijoPrecancelableListMatch = Struct.new(
  :avisoPrecancelacionDias,
  :canal,
  :enlace,
  :entidad,
  :id,
  :logo,
  :modalidad,
  :moneda,
  :montoMaximo,
  :montoMinimo,
  :plazoMaxDias,
  :plazoMinDias,
  :plazoPrecancelacionDias,
  :tea,
  :teaPrecancelacion,
  :tna,
  :tnaPrecancelacion,
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
# @!attribute [rw] tasas
#   @return [Array, nil]
ProveedorPlazoFijoUvaPagoPeriodico = Struct.new(
  :entidad,
  :id,
  :logo,
  :tasas,
  keyword_init: true
)

# Request payload for ProveedorPlazoFijoUvaPagoPeriodico#list.
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
# @!attribute [rw] tasas
#   @return [Array, nil]
ProveedorPlazoFijoUvaPagoPeriodicoListMatch = Struct.new(
  :entidad,
  :id,
  :logo,
  :tasas,
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
# @!attribute [rw] participantes
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
# @!attribute [rw] periodoDesde
#   @return [String, nil]
#
# @!attribute [rw] periodoHasta
#   @return [String, nil]
#
# @!attribute [rw] periodoTipo
#   @return [String, nil]
#
# @!attribute [rw] promedio
#   @return [Float, nil]
#
# @!attribute [rw] publicacionUrl
#   @return [String, nil]
#
# @!attribute [rw] referencia
#   @return [String, nil]
#
# @!attribute [rw] referenciaFecha
#   @return [String, nil]
#
# @!attribute [rw] unidad
#   @return [String, nil]
#
# @!attribute [rw] xlsxUrl
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
  :participantes,
  :percentil10,
  :percentil25,
  :percentil75,
  :percentil90,
  :periodo,
  :periodoDesde,
  :periodoHasta,
  :periodoTipo,
  :promedio,
  :publicacionUrl,
  :referencia,
  :referenciaFecha,
  :unidad,
  :xlsxUrl,
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
# @!attribute [rw] participantes
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
# @!attribute [rw] periodoDesde
#   @return [String, nil]
#
# @!attribute [rw] periodoHasta
#   @return [String, nil]
#
# @!attribute [rw] periodoTipo
#   @return [String, nil]
#
# @!attribute [rw] promedio
#   @return [Float, nil]
#
# @!attribute [rw] publicacionUrl
#   @return [String, nil]
#
# @!attribute [rw] referencia
#   @return [String, nil]
#
# @!attribute [rw] referenciaFecha
#   @return [String, nil]
#
# @!attribute [rw] unidad
#   @return [String, nil]
#
# @!attribute [rw] xlsxUrl
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
  :participantes,
  :percentil10,
  :percentil25,
  :percentil75,
  :percentil90,
  :periodo,
  :periodoDesde,
  :periodoHasta,
  :periodoTipo,
  :promedio,
  :publicacionUrl,
  :referencia,
  :referenciaFecha,
  :unidad,
  :xlsxUrl,
  keyword_init: true
)

# Request payload for RemExpectativa#list.
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
# @!attribute [rw] participantes
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
# @!attribute [rw] periodoDesde
#   @return [String, nil]
#
# @!attribute [rw] periodoHasta
#   @return [String, nil]
#
# @!attribute [rw] periodoTipo
#   @return [String, nil]
#
# @!attribute [rw] promedio
#   @return [Float, nil]
#
# @!attribute [rw] publicacionUrl
#   @return [String, nil]
#
# @!attribute [rw] referencia
#   @return [String, nil]
#
# @!attribute [rw] referenciaFecha
#   @return [String, nil]
#
# @!attribute [rw] unidad
#   @return [String, nil]
#
# @!attribute [rw] xlsxUrl
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
  :participantes,
  :percentil10,
  :percentil25,
  :percentil75,
  :percentil90,
  :periodo,
  :periodoDesde,
  :periodoHasta,
  :periodoTipo,
  :promedio,
  :publicacionUrl,
  :referencia,
  :referenciaFecha,
  :unidad,
  :xlsxUrl,
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

# Request payload for RiesgoPai#load.
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

# Request payload for RiesgoPai#list.
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
# @!attribute [rw] observaciones
#   @return [String, nil]
#
# @!attribute [rw] partido
#   @return [String, nil]
#
# @!attribute [rw] periodoLegal
#   @return [Hash, nil]
#
# @!attribute [rw] periodoReal
#   @return [Hash, nil]
#
# @!attribute [rw] provincia
#   @return [String, nil]
#
# @!attribute [rw] redes
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
  :observaciones,
  :partido,
  :periodoLegal,
  :periodoReal,
  :provincia,
  :redes,
  :reemplazo,
  :telefono,
  keyword_init: true
)

# Request payload for Senador#list.
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
# @!attribute [rw] observaciones
#   @return [String, nil]
#
# @!attribute [rw] partido
#   @return [String, nil]
#
# @!attribute [rw] periodoLegal
#   @return [Hash, nil]
#
# @!attribute [rw] periodoReal
#   @return [Hash, nil]
#
# @!attribute [rw] provincia
#   @return [String, nil]
#
# @!attribute [rw] redes
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
  :observaciones,
  :partido,
  :periodoLegal,
  :periodoReal,
  :provincia,
  :redes,
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

# Request payload for TasaIntere#list.
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
# @!attribute [rw] tnaClientes
#   @return [Float, nil]
#
# @!attribute [rw] tnaNoClientes
#   @return [Float, nil]
TasaPlazoFijo = Struct.new(
  :entidad,
  :logo,
  :tnaClientes,
  :tnaNoClientes,
  keyword_init: true
)

# Request payload for TasaPlazoFijo#list.
#
# @!attribute [rw] entidad
#   @return [String, nil]
#
# @!attribute [rw] logo
#   @return [String, nil]
#
# @!attribute [rw] tnaClientes
#   @return [Float, nil]
#
# @!attribute [rw] tnaNoClientes
#   @return [Float, nil]
TasaPlazoFijoListMatch = Struct.new(
  :entidad,
  :logo,
  :tnaClientes,
  :tnaNoClientes,
  keyword_init: true
)

