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
    public ?int $abstenciones = null;
    public ?string $acta = null;
    public ?int $actaId = null;
    public ?int $afirmativos = null;
    public ?int $amn = null;
    public ?int $ausentes = null;
    public ?string $descripcion = null;
    public ?string $fecha = null;
    public ?string $id = null;
    public ?string $mayoria = null;
    public ?int $miembros = null;
    public ?int $negativos = null;
    public ?string $numeroActa = null;
    public ?array $observaciones = null;
    public ?string $periodo = null;
    public ?int $presentes = null;
    public ?string $presidente = null;
    public ?string $proyecto = null;
    public ?string $quorumTipo = null;
    public ?string $resultado = null;
    public ?string $reunion = null;
    public ?string $titulo = null;
    public ?array $votos = null;
    public ?int $votosAfirmativos = null;
    public ?int $votosNegativos = null;
}

/** Request payload for Acta#load. */
class ActaLoadMatch
{
    public int $id;
}

/** Request payload for Acta#list. */
class ActaListMatch
{
    public ?int $abstenciones = null;
    public ?string $acta = null;
    public ?int $actaId = null;
    public ?int $afirmativos = null;
    public ?int $amn = null;
    public ?int $ausentes = null;
    public ?string $descripcion = null;
    public ?string $fecha = null;
    public ?string $id = null;
    public ?string $mayoria = null;
    public ?int $miembros = null;
    public ?int $negativos = null;
    public ?string $numeroActa = null;
    public ?array $observaciones = null;
    public ?string $periodo = null;
    public ?int $presentes = null;
    public ?string $presidente = null;
    public ?string $proyecto = null;
    public ?string $quorumTipo = null;
    public ?string $resultado = null;
    public ?string $reunion = null;
    public ?string $titulo = null;
    public ?array $votos = null;
    public ?int $votosAfirmativos = null;
    public ?int $votosNegativos = null;
}

/** BonosCer entity data model. */
class BonosCer
{
    public string $fechaVencimiento;
    public float $precioArs;
    public string $ticker;
    public float $tirPorcentaje;
    public ?float $volumen = null;
}

/** Request payload for BonosCer#list. */
class BonosCerListMatch
{
    public ?string $fechaVencimiento = null;
    public ?float $precioArs = null;
    public ?string $ticker = null;
    public ?float $tirPorcentaje = null;
    public ?float $volumen = null;
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
    public ?string $fecha = null;
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
    public ?string $ceseFecha = null;
    public ?string $foto = null;
    public ?string $genero = null;
    public ?string $id = null;
    public ?string $juramentoFecha = null;
    public ?string $nombre = null;
    public ?array $periodoBloque = null;
    public ?array $periodoMandato = null;
    public ?string $provincia = null;
}

/** Request payload for Diputado#list. */
class DiputadoListMatch
{
    public ?string $apellido = null;
    public ?string $bloque = null;
    public ?string $ceseFecha = null;
    public ?string $foto = null;
    public ?string $genero = null;
    public ?string $id = null;
    public ?string $juramentoFecha = null;
    public ?string $nombre = null;
    public ?array $periodoBloque = null;
    public ?array $periodoMandato = null;
    public ?string $provincia = null;
}

/** EntidadRendimiento entity data model. */
class EntidadRendimiento
{
    public ?string $entidad = null;
    public ?array $rendimientos = null;
}

/** Request payload for EntidadRendimiento#list. */
class EntidadRendimientoListMatch
{
    public ?string $entidad = null;
    public ?array $rendimientos = null;
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
    public ?string $condiciones = null;
    public ?string $condicionesCorto = null;
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
    public ?string $nombreComercial = null;
    public ?float $tna = null;
}

/** Request payload for HipotecarioUvaTna#list. */
class HipotecarioUvaTnaListMatch
{
    public ?string $entidad = null;
    public ?array $metadata = null;
    public ?string $nombreComercial = null;
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
    public ?string $fechaEmision = null;
    public ?string $fechaVencimiento = null;
    public ?float $tem = null;
    public ?string $ticker = null;
    public ?float $vpv = null;
}

/** Request payload for Letra#list. */
class LetraListMatch
{
    public ?string $fechaEmision = null;
    public ?string $fechaVencimiento = null;
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
    public ?string $partidoImagen = null;
    public ?string $periodoPresidencial = null;
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
    public ?string $partidoImagen = null;
    public ?string $periodoPresidencial = null;
    public ?string $vicepresidente = null;
}

/** ProveedorPlazoFijoPrecancelable entity data model. */
class ProveedorPlazoFijoPrecancelable
{
    public ?int $avisoPrecancelacionDias = null;
    public ?string $canal = null;
    public ?string $enlace = null;
    public ?string $entidad = null;
    public ?string $id = null;
    public ?string $logo = null;
    public ?string $modalidad = null;
    public ?string $moneda = null;
    public ?float $montoMaximo = null;
    public ?float $montoMinimo = null;
    public ?int $plazoMaxDias = null;
    public ?int $plazoMinDias = null;
    public ?int $plazoPrecancelacionDias = null;
    public ?float $tea = null;
    public ?float $teaPrecancelacion = null;
    public ?float $tna = null;
    public ?float $tnaPrecancelacion = null;
}

/** Request payload for ProveedorPlazoFijoPrecancelable#list. */
class ProveedorPlazoFijoPrecancelableListMatch
{
    public ?int $avisoPrecancelacionDias = null;
    public ?string $canal = null;
    public ?string $enlace = null;
    public ?string $entidad = null;
    public ?string $id = null;
    public ?string $logo = null;
    public ?string $modalidad = null;
    public ?string $moneda = null;
    public ?float $montoMaximo = null;
    public ?float $montoMinimo = null;
    public ?int $plazoMaxDias = null;
    public ?int $plazoMinDias = null;
    public ?int $plazoPrecancelacionDias = null;
    public ?float $tea = null;
    public ?float $teaPrecancelacion = null;
    public ?float $tna = null;
    public ?float $tnaPrecancelacion = null;
}

/** ProveedorPlazoFijoUvaPagoPeriodico entity data model. */
class ProveedorPlazoFijoUvaPagoPeriodico
{
    public ?string $entidad = null;
    public ?string $id = null;
    public ?string $logo = null;
    public ?array $tasas = null;
}

/** Request payload for ProveedorPlazoFijoUvaPagoPeriodico#list. */
class ProveedorPlazoFijoUvaPagoPeriodicoListMatch
{
    public ?string $entidad = null;
    public ?string $id = null;
    public ?string $logo = null;
    public ?array $tasas = null;
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
    public ?int $participantes = null;
    public ?float $percentil10 = null;
    public ?float $percentil25 = null;
    public ?float $percentil75 = null;
    public ?float $percentil90 = null;
    public ?string $periodo = null;
    public ?string $periodoDesde = null;
    public ?string $periodoHasta = null;
    public ?string $periodoTipo = null;
    public ?float $promedio = null;
    public ?string $publicacionUrl = null;
    public ?string $referencia = null;
    public ?string $referenciaFecha = null;
    public ?string $unidad = null;
    public ?string $xlsxUrl = null;
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
    public ?int $participantes = null;
    public ?float $percentil10 = null;
    public ?float $percentil25 = null;
    public ?float $percentil75 = null;
    public ?float $percentil90 = null;
    public ?string $periodo = null;
    public ?string $periodoDesde = null;
    public ?string $periodoHasta = null;
    public ?string $periodoTipo = null;
    public ?float $promedio = null;
    public ?string $publicacionUrl = null;
    public ?string $referencia = null;
    public ?string $referenciaFecha = null;
    public ?string $unidad = null;
    public ?string $xlsxUrl = null;
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
    public ?int $participantes = null;
    public ?float $percentil10 = null;
    public ?float $percentil25 = null;
    public ?float $percentil75 = null;
    public ?float $percentil90 = null;
    public ?string $periodo = null;
    public ?string $periodoDesde = null;
    public ?string $periodoHasta = null;
    public ?string $periodoTipo = null;
    public ?float $promedio = null;
    public ?string $publicacionUrl = null;
    public ?string $referencia = null;
    public ?string $referenciaFecha = null;
    public ?string $unidad = null;
    public ?string $xlsxUrl = null;
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
    public ?string $observaciones = null;
    public ?string $partido = null;
    public ?array $periodoLegal = null;
    public ?array $periodoReal = null;
    public ?string $provincia = null;
    public ?array $redes = null;
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
    public ?string $observaciones = null;
    public ?string $partido = null;
    public ?array $periodoLegal = null;
    public ?array $periodoReal = null;
    public ?string $provincia = null;
    public ?array $redes = null;
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
    public ?float $tnaClientes = null;
    public ?float $tnaNoClientes = null;
}

/** Request payload for TasaPlazoFijo#list. */
class TasaPlazoFijoListMatch
{
    public ?string $entidad = null;
    public ?string $logo = null;
    public ?float $tnaClientes = null;
    public ?float $tnaNoClientes = null;
}

