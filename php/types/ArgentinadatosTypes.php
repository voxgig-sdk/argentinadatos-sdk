<?php
declare(strict_types=1);

// Typed models for the Argentinadatos SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Acta entity data model. */
class Acta
{
    public ?int $abstencione = null;
    public ?string $acta = null;
    public ?int $acta_id = null;
    public ?int $afirmativo = null;
    public ?int $amn = null;
    public ?int $ausente = null;
    public ?string $descripcion = null;
    public ?string $fecha = null;
    public ?string $id = null;
    public ?string $mayoria = null;
    public ?int $miembro = null;
    public ?int $negativo = null;
    public ?string $numero_acta = null;
    public ?array $observacione = null;
    public ?string $periodo = null;
    public ?int $presente = null;
    public ?string $presidente = null;
    public ?string $proyecto = null;
    public ?string $quorum_tipo = null;
    public ?string $resultado = null;
    public ?string $reunion = null;
    public ?string $titulo = null;
    public ?array $voto = null;
    public ?int $votos_afirmativo = null;
    public ?int $votos_negativo = null;
}

/** Request payload for Acta#load. */
class ActaLoadMatch
{
    public int $id;
}

/** Request payload for Acta#list. */
class ActaListMatch
{
    public ?int $abstencione = null;
    public ?string $acta = null;
    public ?int $acta_id = null;
    public ?int $afirmativo = null;
    public ?int $amn = null;
    public ?int $ausente = null;
    public ?string $descripcion = null;
    public ?string $fecha = null;
    public ?string $id = null;
    public ?string $mayoria = null;
    public ?int $miembro = null;
    public ?int $negativo = null;
    public ?string $numero_acta = null;
    public ?array $observacione = null;
    public ?string $periodo = null;
    public ?int $presente = null;
    public ?string $presidente = null;
    public ?string $proyecto = null;
    public ?string $quorum_tipo = null;
    public ?string $resultado = null;
    public ?string $reunion = null;
    public ?string $titulo = null;
    public ?array $voto = null;
    public ?int $votos_afirmativo = null;
    public ?int $votos_negativo = null;
}

/** BonosCer entity data model. */
class BonosCer
{
    public string $fecha_vencimiento;
    public float $precio_ar;
    public string $ticker;
    public float $tir_porcentaje;
    public ?float $voluman = null;
}

/** Request payload for BonosCer#list. */
class BonosCerListMatch
{
    public ?string $fecha_vencimiento = null;
    public ?float $precio_ar = null;
    public ?string $ticker = null;
    public ?float $tir_porcentaje = null;
    public ?float $voluman = null;
}

/** Cotizacion entity data model. */
class Cotizacion
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha = null;
    public ?string $moneda = null;
    public ?float $venta = null;
}

/** Request payload for Cotizacion#load. */
class CotizacionLoadMatch
{
    public string $casa;
    public string $fecha;
}

/** Request payload for Cotizacion#list. */
class CotizacionListMatch
{
    public ?string $casa = null;
    public ?float $compra = null;
    public ?string $fecha = null;
    public ?string $moneda = null;
    public ?float $venta = null;
}

/** Criptopeso entity data model. */
class Criptopeso
{
    public ?string $entidad = null;
    public ?float $tna = null;
    public ?string $token = null;
}

/** Request payload for Criptopeso#list. */
class CriptopesoListMatch
{
    public ?string $entidad = null;
    public ?float $tna = null;
    public ?string $token = null;
}

/** CuentaRemuneradaUsd entity data model. */
class CuentaRemuneradaUsd
{
    public ?string $entidad = null;
    public ?float $tasa = null;
    public ?float $tope = null;
}

/** Request payload for CuentaRemuneradaUsd#list. */
class CuentaRemuneradaUsdListMatch
{
    public ?string $entidad = null;
    public ?float $tasa = null;
    public ?float $tope = null;
}

/** Diputado entity data model. */
class Diputado
{
    public ?string $apellido = null;
    public ?string $bloque = null;
    public ?string $cese_fecha = null;
    public ?string $foto = null;
    public ?string $genero = null;
    public ?string $id = null;
    public ?string $juramento_fecha = null;
    public ?string $nombre = null;
    public ?array $periodo_bloque = null;
    public ?array $periodo_mandato = null;
    public ?string $provincia = null;
}

/** Request payload for Diputado#list. */
class DiputadoListMatch
{
    public ?string $apellido = null;
    public ?string $bloque = null;
    public ?string $cese_fecha = null;
    public ?string $foto = null;
    public ?string $genero = null;
    public ?string $id = null;
    public ?string $juramento_fecha = null;
    public ?string $nombre = null;
    public ?array $periodo_bloque = null;
    public ?array $periodo_mandato = null;
    public ?string $provincia = null;
}

/** EntidadRendimiento entity data model. */
class EntidadRendimiento
{
    public ?string $entidad = null;
    public ?array $rendimiento = null;
}

/** Request payload for EntidadRendimiento#list. */
class EntidadRendimientoListMatch
{
    public ?string $entidad = null;
    public ?array $rendimiento = null;
}

/** Estado entity data model. */
class Estado
{
    public ?int $aleatorio = null;
    public ?string $estado = null;
}

/** Request payload for Estado#load. */
class EstadoLoadMatch
{
    public ?int $aleatorio = null;
    public ?string $estado = null;
}

/** EventoPresidencial entity data model. */
class EventoPresidencial
{
    public ?string $evento = null;
    public ?string $fecha = null;
    public ?string $tipo = null;
}

/** Request payload for EventoPresidencial#list. */
class EventoPresidencialListMatch
{
    public ?string $evento = null;
    public ?string $fecha = null;
    public ?string $tipo = null;
}

/** Feriado entity data model. */
class Feriado
{
    public ?string $fecha = null;
    public ?string $nombre = null;
    public ?string $tipo = null;
}

/** Request payload for Feriado#load. */
class FeriadoLoadMatch
{
    public int $id;
}

/** Finanza entity data model. */
class Finanza
{
}

/** Request payload for Finanza#list. */
class FinanzaListMatch
{
}

/** FondoComunInversion entity data model. */
class FondoComunInversion
{
    public ?float $ccp = null;
    public ?string $fecha = null;
    public ?string $fondo = null;
    public ?string $horizonte = null;
    public ?float $patrimonio = null;
    public ?string $tipo = null;
    public ?float $vcp = null;
}

/** Request payload for FondoComunInversion#load. */
class FondoComunInversionLoadMatch
{
    public string $fecha;
}

/** FondoComunInversionOtro entity data model. */
class FondoComunInversionOtro
{
    public ?string $fecha = null;
    public ?string $fondo = null;
    public ?float $tea = null;
    public ?float $tna = null;
    public ?float $tope = null;
}

/** Request payload for FondoComunInversionOtro#load. */
class FondoComunInversionOtroLoadMatch
{
    public string $id;
}

/** FondoComunInversionVariable entity data model. */
class FondoComunInversionVariable
{
    public ?string $condicione = null;
    public ?string $condiciones_corto = null;
    public ?string $fecha = null;
    public ?string $fondo = null;
    public ?string $nombre = null;
    public ?float $tea = null;
    public ?string $tipo = null;
    public ?float $tna = null;
    public ?float $tope = null;
}

/** Request payload for FondoComunInversionVariable#load. */
class FondoComunInversionVariableLoadMatch
{
    public string $id;
}

/** HipotecarioUvaTna entity data model. */
class HipotecarioUvaTna
{
    public ?string $entidad = null;
    public ?array $metadata = null;
    public ?string $nombre_comercial = null;
    public ?float $tna = null;
}

/** Request payload for HipotecarioUvaTna#list. */
class HipotecarioUvaTnaListMatch
{
    public ?string $entidad = null;
    public ?array $metadata = null;
    public ?string $nombre_comercial = null;
    public ?float $tna = null;
}

/** IndiceInflacion entity data model. */
class IndiceInflacion
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** Request payload for IndiceInflacion#list. */
class IndiceInflacionListMatch
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** IndiceUva entity data model. */
class IndiceUva
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** Request payload for IndiceUva#list. */
class IndiceUvaListMatch
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** Letra entity data model. */
class Letra
{
    public ?string $fecha_emision = null;
    public ?string $fecha_vencimiento = null;
    public ?float $tem = null;
    public ?string $ticker = null;
    public ?float $vpv = null;
}

/** Request payload for Letra#list. */
class LetraListMatch
{
    public ?string $fecha_emision = null;
    public ?string $fecha_vencimiento = null;
    public ?float $tem = null;
    public ?string $ticker = null;
    public ?float $vpv = null;
}

/** Presidente entity data model. */
class Presidente
{
    public ?string $fin = null;
    public ?string $imagen = null;
    public ?string $inicio = null;
    public ?string $nombre = null;
    public ?string $partido = null;
    public ?string $partido_imagen = null;
    public ?string $periodo_presidencial = null;
    public ?string $vicepresidente = null;
}

/** Request payload for Presidente#list. */
class PresidenteListMatch
{
    public ?string $fin = null;
    public ?string $imagen = null;
    public ?string $inicio = null;
    public ?string $nombre = null;
    public ?string $partido = null;
    public ?string $partido_imagen = null;
    public ?string $periodo_presidencial = null;
    public ?string $vicepresidente = null;
}

/** ProveedorPlazoFijoPrecancelable entity data model. */
class ProveedorPlazoFijoPrecancelable
{
    public ?int $aviso_precancelacion_dia = null;
    public ?string $canal = null;
    public ?string $enlace = null;
    public ?string $entidad = null;
    public ?string $id = null;
    public ?string $logo = null;
    public ?string $modalidad = null;
    public ?string $moneda = null;
    public ?float $monto_maximo = null;
    public ?float $monto_minimo = null;
    public ?int $plazo_max_dia = null;
    public ?int $plazo_min_dia = null;
    public ?int $plazo_precancelacion_dia = null;
    public ?float $tea = null;
    public ?float $tea_precancelacion = null;
    public ?float $tna = null;
    public ?float $tna_precancelacion = null;
}

/** Request payload for ProveedorPlazoFijoPrecancelable#list. */
class ProveedorPlazoFijoPrecancelableListMatch
{
    public ?int $aviso_precancelacion_dia = null;
    public ?string $canal = null;
    public ?string $enlace = null;
    public ?string $entidad = null;
    public ?string $id = null;
    public ?string $logo = null;
    public ?string $modalidad = null;
    public ?string $moneda = null;
    public ?float $monto_maximo = null;
    public ?float $monto_minimo = null;
    public ?int $plazo_max_dia = null;
    public ?int $plazo_min_dia = null;
    public ?int $plazo_precancelacion_dia = null;
    public ?float $tea = null;
    public ?float $tea_precancelacion = null;
    public ?float $tna = null;
    public ?float $tna_precancelacion = null;
}

/** ProveedorPlazoFijoUvaPagoPeriodico entity data model. */
class ProveedorPlazoFijoUvaPagoPeriodico
{
    public ?string $entidad = null;
    public ?string $id = null;
    public ?string $logo = null;
    public ?array $tasa = null;
}

/** Request payload for ProveedorPlazoFijoUvaPagoPeriodico#list. */
class ProveedorPlazoFijoUvaPagoPeriodicoListMatch
{
    public ?string $entidad = null;
    public ?string $id = null;
    public ?string $logo = null;
    public ?array $tasa = null;
}

/** Rem entity data model. */
class Rem
{
    public ?float $desvio = null;
    public ?string $fecha = null;
    public ?string $fuente = null;
    public ?string $indicador = null;
    public ?string $informe = null;
    public ?float $maximo = null;
    public ?float $mediana = null;
    public ?float $minimo = null;
    public ?string $muestra = null;
    public ?int $participante = null;
    public ?float $percentil10 = null;
    public ?float $percentil25 = null;
    public ?float $percentil75 = null;
    public ?float $percentil90 = null;
    public ?string $periodo = null;
    public ?string $periodo_desde = null;
    public ?string $periodo_hasta = null;
    public ?string $periodo_tipo = null;
    public ?float $promedio = null;
    public ?string $publicacion_url = null;
    public ?string $referencia = null;
    public ?string $referencia_fecha = null;
    public ?string $unidad = null;
    public ?string $xlsx_url = null;
}

/** Request payload for Rem#list. */
class RemListMatch
{
    public int $año;
    public string $mes;
}

/** RemExpectativa entity data model. */
class RemExpectativa
{
    public ?float $desvio = null;
    public ?string $fecha = null;
    public ?string $fuente = null;
    public ?string $indicador = null;
    public ?string $informe = null;
    public ?float $maximo = null;
    public ?float $mediana = null;
    public ?float $minimo = null;
    public ?string $muestra = null;
    public ?int $participante = null;
    public ?float $percentil10 = null;
    public ?float $percentil25 = null;
    public ?float $percentil75 = null;
    public ?float $percentil90 = null;
    public ?string $periodo = null;
    public ?string $periodo_desde = null;
    public ?string $periodo_hasta = null;
    public ?string $periodo_tipo = null;
    public ?float $promedio = null;
    public ?string $publicacion_url = null;
    public ?string $referencia = null;
    public ?string $referencia_fecha = null;
    public ?string $unidad = null;
    public ?string $xlsx_url = null;
}

/** Request payload for RemExpectativa#list. */
class RemExpectativaListMatch
{
    public ?float $desvio = null;
    public ?string $fecha = null;
    public ?string $fuente = null;
    public ?string $indicador = null;
    public ?string $informe = null;
    public ?float $maximo = null;
    public ?float $mediana = null;
    public ?float $minimo = null;
    public ?string $muestra = null;
    public ?int $participante = null;
    public ?float $percentil10 = null;
    public ?float $percentil25 = null;
    public ?float $percentil75 = null;
    public ?float $percentil90 = null;
    public ?string $periodo = null;
    public ?string $periodo_desde = null;
    public ?string $periodo_hasta = null;
    public ?string $periodo_tipo = null;
    public ?float $promedio = null;
    public ?string $publicacion_url = null;
    public ?string $referencia = null;
    public ?string $referencia_fecha = null;
    public ?string $unidad = null;
    public ?string $xlsx_url = null;
}

/** Rendimiento entity data model. */
class Rendimiento
{
    public ?float $apy = null;
    public ?string $fecha = null;
    public ?string $moneda = null;
}

/** Request payload for Rendimiento#load. */
class RendimientoLoadMatch
{
    public string $id;
}

/** RiesgoPai entity data model. */
class RiesgoPai
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** Request payload for RiesgoPai#load. */
class RiesgoPaiLoadMatch
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** Request payload for RiesgoPai#list. */
class RiesgoPaiListMatch
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** Senador entity data model. */
class Senador
{
    public ?string $email = null;
    public ?string $foto = null;
    public ?string $id = null;
    public ?string $nombre = null;
    public ?string $observacione = null;
    public ?string $partido = null;
    public ?array $periodo_legal = null;
    public ?array $periodo_real = null;
    public ?string $provincia = null;
    public ?array $rede = null;
    public ?string $reemplazo = null;
    public ?string $telefono = null;
}

/** Request payload for Senador#list. */
class SenadorListMatch
{
    public ?string $email = null;
    public ?string $foto = null;
    public ?string $id = null;
    public ?string $nombre = null;
    public ?string $observacione = null;
    public ?string $partido = null;
    public ?array $periodo_legal = null;
    public ?array $periodo_real = null;
    public ?string $provincia = null;
    public ?array $rede = null;
    public ?string $reemplazo = null;
    public ?string $telefono = null;
}

/** TasaIntere entity data model. */
class TasaIntere
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** Request payload for TasaIntere#list. */
class TasaIntereListMatch
{
    public ?string $fecha = null;
    public ?float $valor = null;
}

/** TasaPlazoFijo entity data model. */
class TasaPlazoFijo
{
    public ?string $entidad = null;
    public ?string $logo = null;
    public ?float $tna_cliente = null;
    public ?float $tna_no_cliente = null;
}

/** Request payload for TasaPlazoFijo#list. */
class TasaPlazoFijoListMatch
{
    public ?string $entidad = null;
    public ?string $logo = null;
    public ?float $tna_cliente = null;
    public ?float $tna_no_cliente = null;
}

