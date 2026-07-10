// Typed models for the Argentinadatos SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Acta is the typed data model for the acta entity.
type Acta struct {
	Abstencione *int `json:"abstencione,omitempty"`
	Acta *string `json:"acta,omitempty"`
	ActaId *int `json:"acta_id,omitempty"`
	Afirmativo *int `json:"afirmativo,omitempty"`
	Amn *int `json:"amn,omitempty"`
	Ausente *int `json:"ausente,omitempty"`
	Descripcion *string `json:"descripcion,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Id *string `json:"id,omitempty"`
	Mayoria *string `json:"mayoria,omitempty"`
	Miembro *int `json:"miembro,omitempty"`
	Negativo *int `json:"negativo,omitempty"`
	NumeroActa *string `json:"numero_acta,omitempty"`
	Observacione *[]any `json:"observacione,omitempty"`
	Periodo *string `json:"periodo,omitempty"`
	Presente *int `json:"presente,omitempty"`
	Presidente *string `json:"presidente,omitempty"`
	Proyecto *string `json:"proyecto,omitempty"`
	QuorumTipo *string `json:"quorum_tipo,omitempty"`
	Resultado *string `json:"resultado,omitempty"`
	Reunion *string `json:"reunion,omitempty"`
	Titulo *string `json:"titulo,omitempty"`
	Voto *[]any `json:"voto,omitempty"`
	VotosAfirmativo *int `json:"votos_afirmativo,omitempty"`
	VotosNegativo *int `json:"votos_negativo,omitempty"`
}

// ActaLoadMatch is the typed request payload for Acta.LoadTyped.
type ActaLoadMatch struct {
	Id int `json:"id"`
}

// ActaListMatch is the typed request payload for Acta.ListTyped.
type ActaListMatch struct {
	Abstencione *int `json:"abstencione,omitempty"`
	Acta *string `json:"acta,omitempty"`
	ActaId *int `json:"acta_id,omitempty"`
	Afirmativo *int `json:"afirmativo,omitempty"`
	Amn *int `json:"amn,omitempty"`
	Ausente *int `json:"ausente,omitempty"`
	Descripcion *string `json:"descripcion,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Id *string `json:"id,omitempty"`
	Mayoria *string `json:"mayoria,omitempty"`
	Miembro *int `json:"miembro,omitempty"`
	Negativo *int `json:"negativo,omitempty"`
	NumeroActa *string `json:"numero_acta,omitempty"`
	Observacione *[]any `json:"observacione,omitempty"`
	Periodo *string `json:"periodo,omitempty"`
	Presente *int `json:"presente,omitempty"`
	Presidente *string `json:"presidente,omitempty"`
	Proyecto *string `json:"proyecto,omitempty"`
	QuorumTipo *string `json:"quorum_tipo,omitempty"`
	Resultado *string `json:"resultado,omitempty"`
	Reunion *string `json:"reunion,omitempty"`
	Titulo *string `json:"titulo,omitempty"`
	Voto *[]any `json:"voto,omitempty"`
	VotosAfirmativo *int `json:"votos_afirmativo,omitempty"`
	VotosNegativo *int `json:"votos_negativo,omitempty"`
}

// BonosCer is the typed data model for the bonos_cer entity.
type BonosCer struct {
	FechaVencimiento string `json:"fecha_vencimiento"`
	PrecioAr float64 `json:"precio_ar"`
	Ticker string `json:"ticker"`
	TirPorcentaje float64 `json:"tir_porcentaje"`
	Voluman *float64 `json:"voluman,omitempty"`
}

// BonosCerListMatch is the typed request payload for BonosCer.ListTyped.
type BonosCerListMatch struct {
	FechaVencimiento *string `json:"fecha_vencimiento,omitempty"`
	PrecioAr *float64 `json:"precio_ar,omitempty"`
	Ticker *string `json:"ticker,omitempty"`
	TirPorcentaje *float64 `json:"tir_porcentaje,omitempty"`
	Voluman *float64 `json:"voluman,omitempty"`
}

// Cotizacion is the typed data model for the cotizacion entity.
type Cotizacion struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// CotizacionLoadMatch is the typed request payload for Cotizacion.LoadTyped.
type CotizacionLoadMatch struct {
	Casa string `json:"casa"`
	Fecha *string `json:"fecha,omitempty"`
}

// CotizacionListMatch is the typed request payload for Cotizacion.ListTyped.
type CotizacionListMatch struct {
	Casa *string `json:"casa,omitempty"`
	Compra *float64 `json:"compra,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	Venta *float64 `json:"venta,omitempty"`
}

// Criptopeso is the typed data model for the criptopeso entity.
type Criptopeso struct {
	Entidad *string `json:"entidad,omitempty"`
	Tna *float64 `json:"tna,omitempty"`
	Token *string `json:"token,omitempty"`
}

// CriptopesoListMatch is the typed request payload for Criptopeso.ListTyped.
type CriptopesoListMatch struct {
	Entidad *string `json:"entidad,omitempty"`
	Tna *float64 `json:"tna,omitempty"`
	Token *string `json:"token,omitempty"`
}

// CuentaRemuneradaUsd is the typed data model for the cuenta_remunerada_usd entity.
type CuentaRemuneradaUsd struct {
	Entidad *string `json:"entidad,omitempty"`
	Tasa *float64 `json:"tasa,omitempty"`
	Tope *float64 `json:"tope,omitempty"`
}

// CuentaRemuneradaUsdListMatch is the typed request payload for CuentaRemuneradaUsd.ListTyped.
type CuentaRemuneradaUsdListMatch struct {
	Entidad *string `json:"entidad,omitempty"`
	Tasa *float64 `json:"tasa,omitempty"`
	Tope *float64 `json:"tope,omitempty"`
}

// Diputado is the typed data model for the diputado entity.
type Diputado struct {
	Apellido *string `json:"apellido,omitempty"`
	Bloque *string `json:"bloque,omitempty"`
	CeseFecha *string `json:"cese_fecha,omitempty"`
	Foto *string `json:"foto,omitempty"`
	Genero *string `json:"genero,omitempty"`
	Id *string `json:"id,omitempty"`
	JuramentoFecha *string `json:"juramento_fecha,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	PeriodoBloque *map[string]any `json:"periodo_bloque,omitempty"`
	PeriodoMandato *map[string]any `json:"periodo_mandato,omitempty"`
	Provincia *string `json:"provincia,omitempty"`
}

// DiputadoListMatch is the typed request payload for Diputado.ListTyped.
type DiputadoListMatch struct {
	Apellido *string `json:"apellido,omitempty"`
	Bloque *string `json:"bloque,omitempty"`
	CeseFecha *string `json:"cese_fecha,omitempty"`
	Foto *string `json:"foto,omitempty"`
	Genero *string `json:"genero,omitempty"`
	Id *string `json:"id,omitempty"`
	JuramentoFecha *string `json:"juramento_fecha,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	PeriodoBloque *map[string]any `json:"periodo_bloque,omitempty"`
	PeriodoMandato *map[string]any `json:"periodo_mandato,omitempty"`
	Provincia *string `json:"provincia,omitempty"`
}

// EntidadRendimiento is the typed data model for the entidad_rendimiento entity.
type EntidadRendimiento struct {
	Entidad *string `json:"entidad,omitempty"`
	Rendimiento *[]any `json:"rendimiento,omitempty"`
}

// EntidadRendimientoListMatch is the typed request payload for EntidadRendimiento.ListTyped.
type EntidadRendimientoListMatch struct {
	Entidad *string `json:"entidad,omitempty"`
	Rendimiento *[]any `json:"rendimiento,omitempty"`
}

// Estado is the typed data model for the estado entity.
type Estado struct {
	Aleatorio *int `json:"aleatorio,omitempty"`
	Estado *string `json:"estado,omitempty"`
}

// EstadoLoadMatch is the typed request payload for Estado.LoadTyped.
type EstadoLoadMatch struct {
	Aleatorio *int `json:"aleatorio,omitempty"`
	Estado *string `json:"estado,omitempty"`
}

// EventoPresidencial is the typed data model for the evento_presidencial entity.
type EventoPresidencial struct {
	Evento *string `json:"evento,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Tipo *string `json:"tipo,omitempty"`
}

// EventoPresidencialListMatch is the typed request payload for EventoPresidencial.ListTyped.
type EventoPresidencialListMatch struct {
	Evento *string `json:"evento,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Tipo *string `json:"tipo,omitempty"`
}

// Feriado is the typed data model for the feriado entity.
type Feriado struct {
	Fecha *string `json:"fecha,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Tipo *string `json:"tipo,omitempty"`
}

// FeriadoLoadMatch is the typed request payload for Feriado.LoadTyped.
type FeriadoLoadMatch struct {
	Id int `json:"id"`
}

// Finanza is the typed data model for the finanza entity.
type Finanza struct {
}

// FinanzaListMatch is the typed request payload for Finanza.ListTyped.
type FinanzaListMatch struct {
}

// FondoComunInversion is the typed data model for the fondo_comun_inversion entity.
type FondoComunInversion struct {
	Ccp *float64 `json:"ccp,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Fondo *string `json:"fondo,omitempty"`
	Horizonte *string `json:"horizonte,omitempty"`
	Patrimonio *float64 `json:"patrimonio,omitempty"`
	Tipo *string `json:"tipo,omitempty"`
	Vcp *float64 `json:"vcp,omitempty"`
}

// FondoComunInversionLoadMatch is the typed request payload for FondoComunInversion.LoadTyped.
type FondoComunInversionLoadMatch struct {
	Fecha string `json:"fecha"`
}

// FondoComunInversionOtro is the typed data model for the fondo_comun_inversion_otro entity.
type FondoComunInversionOtro struct {
	Fecha *string `json:"fecha,omitempty"`
	Fondo *string `json:"fondo,omitempty"`
	Tea *float64 `json:"tea,omitempty"`
	Tna *float64 `json:"tna,omitempty"`
	Tope *float64 `json:"tope,omitempty"`
}

// FondoComunInversionOtroLoadMatch is the typed request payload for FondoComunInversionOtro.LoadTyped.
type FondoComunInversionOtroLoadMatch struct {
	Id string `json:"id"`
}

// FondoComunInversionVariable is the typed data model for the fondo_comun_inversion_variable entity.
type FondoComunInversionVariable struct {
	Condicione *string `json:"condicione,omitempty"`
	CondicionesCorto *string `json:"condiciones_corto,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Fondo *string `json:"fondo,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Tea *float64 `json:"tea,omitempty"`
	Tipo *string `json:"tipo,omitempty"`
	Tna *float64 `json:"tna,omitempty"`
	Tope *float64 `json:"tope,omitempty"`
}

// FondoComunInversionVariableLoadMatch is the typed request payload for FondoComunInversionVariable.LoadTyped.
type FondoComunInversionVariableLoadMatch struct {
	Id string `json:"id"`
}

// HipotecarioUvaTna is the typed data model for the hipotecario_uva_tna entity.
type HipotecarioUvaTna struct {
	Entidad *string `json:"entidad,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NombreComercial *string `json:"nombre_comercial,omitempty"`
	Tna *float64 `json:"tna,omitempty"`
}

// HipotecarioUvaTnaListMatch is the typed request payload for HipotecarioUvaTna.ListTyped.
type HipotecarioUvaTnaListMatch struct {
	Entidad *string `json:"entidad,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	NombreComercial *string `json:"nombre_comercial,omitempty"`
	Tna *float64 `json:"tna,omitempty"`
}

// IndiceInflacion is the typed data model for the indice_inflacion entity.
type IndiceInflacion struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// IndiceInflacionListMatch is the typed request payload for IndiceInflacion.ListTyped.
type IndiceInflacionListMatch struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// IndiceUva is the typed data model for the indice_uva entity.
type IndiceUva struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// IndiceUvaListMatch is the typed request payload for IndiceUva.ListTyped.
type IndiceUvaListMatch struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// Letra is the typed data model for the letra entity.
type Letra struct {
	FechaEmision *string `json:"fecha_emision,omitempty"`
	FechaVencimiento *string `json:"fecha_vencimiento,omitempty"`
	Tem *float64 `json:"tem,omitempty"`
	Ticker *string `json:"ticker,omitempty"`
	Vpv *float64 `json:"vpv,omitempty"`
}

// LetraListMatch is the typed request payload for Letra.ListTyped.
type LetraListMatch struct {
	FechaEmision *string `json:"fecha_emision,omitempty"`
	FechaVencimiento *string `json:"fecha_vencimiento,omitempty"`
	Tem *float64 `json:"tem,omitempty"`
	Ticker *string `json:"ticker,omitempty"`
	Vpv *float64 `json:"vpv,omitempty"`
}

// Presidente is the typed data model for the presidente entity.
type Presidente struct {
	Fin *string `json:"fin,omitempty"`
	Imagen *string `json:"imagen,omitempty"`
	Inicio *string `json:"inicio,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Partido *string `json:"partido,omitempty"`
	PartidoImagen *string `json:"partido_imagen,omitempty"`
	PeriodoPresidencial *string `json:"periodo_presidencial,omitempty"`
	Vicepresidente *string `json:"vicepresidente,omitempty"`
}

// PresidenteListMatch is the typed request payload for Presidente.ListTyped.
type PresidenteListMatch struct {
	Fin *string `json:"fin,omitempty"`
	Imagen *string `json:"imagen,omitempty"`
	Inicio *string `json:"inicio,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Partido *string `json:"partido,omitempty"`
	PartidoImagen *string `json:"partido_imagen,omitempty"`
	PeriodoPresidencial *string `json:"periodo_presidencial,omitempty"`
	Vicepresidente *string `json:"vicepresidente,omitempty"`
}

// ProveedorPlazoFijoPrecancelable is the typed data model for the proveedor_plazo_fijo_precancelable entity.
type ProveedorPlazoFijoPrecancelable struct {
	AvisoPrecancelacionDia *int `json:"aviso_precancelacion_dia,omitempty"`
	Canal *string `json:"canal,omitempty"`
	Enlace *string `json:"enlace,omitempty"`
	Entidad *string `json:"entidad,omitempty"`
	Id *string `json:"id,omitempty"`
	Logo *string `json:"logo,omitempty"`
	Modalidad *string `json:"modalidad,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	MontoMaximo *float64 `json:"monto_maximo,omitempty"`
	MontoMinimo *float64 `json:"monto_minimo,omitempty"`
	PlazoMaxDia *int `json:"plazo_max_dia,omitempty"`
	PlazoMinDia *int `json:"plazo_min_dia,omitempty"`
	PlazoPrecancelacionDia *int `json:"plazo_precancelacion_dia,omitempty"`
	Tea *float64 `json:"tea,omitempty"`
	TeaPrecancelacion *float64 `json:"tea_precancelacion,omitempty"`
	Tna *float64 `json:"tna,omitempty"`
	TnaPrecancelacion *float64 `json:"tna_precancelacion,omitempty"`
}

// ProveedorPlazoFijoPrecancelableListMatch is the typed request payload for ProveedorPlazoFijoPrecancelable.ListTyped.
type ProveedorPlazoFijoPrecancelableListMatch struct {
	AvisoPrecancelacionDia *int `json:"aviso_precancelacion_dia,omitempty"`
	Canal *string `json:"canal,omitempty"`
	Enlace *string `json:"enlace,omitempty"`
	Entidad *string `json:"entidad,omitempty"`
	Id *string `json:"id,omitempty"`
	Logo *string `json:"logo,omitempty"`
	Modalidad *string `json:"modalidad,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
	MontoMaximo *float64 `json:"monto_maximo,omitempty"`
	MontoMinimo *float64 `json:"monto_minimo,omitempty"`
	PlazoMaxDia *int `json:"plazo_max_dia,omitempty"`
	PlazoMinDia *int `json:"plazo_min_dia,omitempty"`
	PlazoPrecancelacionDia *int `json:"plazo_precancelacion_dia,omitempty"`
	Tea *float64 `json:"tea,omitempty"`
	TeaPrecancelacion *float64 `json:"tea_precancelacion,omitempty"`
	Tna *float64 `json:"tna,omitempty"`
	TnaPrecancelacion *float64 `json:"tna_precancelacion,omitempty"`
}

// ProveedorPlazoFijoUvaPagoPeriodico is the typed data model for the proveedor_plazo_fijo_uva_pago_periodico entity.
type ProveedorPlazoFijoUvaPagoPeriodico struct {
	Entidad *string `json:"entidad,omitempty"`
	Id *string `json:"id,omitempty"`
	Logo *string `json:"logo,omitempty"`
	Tasa *[]any `json:"tasa,omitempty"`
}

// ProveedorPlazoFijoUvaPagoPeriodicoListMatch is the typed request payload for ProveedorPlazoFijoUvaPagoPeriodico.ListTyped.
type ProveedorPlazoFijoUvaPagoPeriodicoListMatch struct {
	Entidad *string `json:"entidad,omitempty"`
	Id *string `json:"id,omitempty"`
	Logo *string `json:"logo,omitempty"`
	Tasa *[]any `json:"tasa,omitempty"`
}

// Rem is the typed data model for the rem entity.
type Rem struct {
	Desvio *float64 `json:"desvio,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Fuente *string `json:"fuente,omitempty"`
	Indicador *string `json:"indicador,omitempty"`
	Informe *string `json:"informe,omitempty"`
	Maximo *float64 `json:"maximo,omitempty"`
	Mediana *float64 `json:"mediana,omitempty"`
	Minimo *float64 `json:"minimo,omitempty"`
	Muestra *string `json:"muestra,omitempty"`
	Participante *int `json:"participante,omitempty"`
	Percentil10 *float64 `json:"percentil10,omitempty"`
	Percentil25 *float64 `json:"percentil25,omitempty"`
	Percentil75 *float64 `json:"percentil75,omitempty"`
	Percentil90 *float64 `json:"percentil90,omitempty"`
	Periodo *string `json:"periodo,omitempty"`
	PeriodoDesde *string `json:"periodo_desde,omitempty"`
	PeriodoHasta *string `json:"periodo_hasta,omitempty"`
	PeriodoTipo *string `json:"periodo_tipo,omitempty"`
	Promedio *float64 `json:"promedio,omitempty"`
	PublicacionUrl *string `json:"publicacion_url,omitempty"`
	Referencia *string `json:"referencia,omitempty"`
	ReferenciaFecha *string `json:"referencia_fecha,omitempty"`
	Unidad *string `json:"unidad,omitempty"`
	XlsxUrl *string `json:"xlsx_url,omitempty"`
}

// RemListMatch is the typed request payload for Rem.ListTyped.
type RemListMatch struct {
	AO int `json:"año"`
	Mes string `json:"mes"`
}

// RemExpectativa is the typed data model for the rem_expectativa entity.
type RemExpectativa struct {
	Desvio *float64 `json:"desvio,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Fuente *string `json:"fuente,omitempty"`
	Indicador *string `json:"indicador,omitempty"`
	Informe *string `json:"informe,omitempty"`
	Maximo *float64 `json:"maximo,omitempty"`
	Mediana *float64 `json:"mediana,omitempty"`
	Minimo *float64 `json:"minimo,omitempty"`
	Muestra *string `json:"muestra,omitempty"`
	Participante *int `json:"participante,omitempty"`
	Percentil10 *float64 `json:"percentil10,omitempty"`
	Percentil25 *float64 `json:"percentil25,omitempty"`
	Percentil75 *float64 `json:"percentil75,omitempty"`
	Percentil90 *float64 `json:"percentil90,omitempty"`
	Periodo *string `json:"periodo,omitempty"`
	PeriodoDesde *string `json:"periodo_desde,omitempty"`
	PeriodoHasta *string `json:"periodo_hasta,omitempty"`
	PeriodoTipo *string `json:"periodo_tipo,omitempty"`
	Promedio *float64 `json:"promedio,omitempty"`
	PublicacionUrl *string `json:"publicacion_url,omitempty"`
	Referencia *string `json:"referencia,omitempty"`
	ReferenciaFecha *string `json:"referencia_fecha,omitempty"`
	Unidad *string `json:"unidad,omitempty"`
	XlsxUrl *string `json:"xlsx_url,omitempty"`
}

// RemExpectativaListMatch is the typed request payload for RemExpectativa.ListTyped.
type RemExpectativaListMatch struct {
	Desvio *float64 `json:"desvio,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Fuente *string `json:"fuente,omitempty"`
	Indicador *string `json:"indicador,omitempty"`
	Informe *string `json:"informe,omitempty"`
	Maximo *float64 `json:"maximo,omitempty"`
	Mediana *float64 `json:"mediana,omitempty"`
	Minimo *float64 `json:"minimo,omitempty"`
	Muestra *string `json:"muestra,omitempty"`
	Participante *int `json:"participante,omitempty"`
	Percentil10 *float64 `json:"percentil10,omitempty"`
	Percentil25 *float64 `json:"percentil25,omitempty"`
	Percentil75 *float64 `json:"percentil75,omitempty"`
	Percentil90 *float64 `json:"percentil90,omitempty"`
	Periodo *string `json:"periodo,omitempty"`
	PeriodoDesde *string `json:"periodo_desde,omitempty"`
	PeriodoHasta *string `json:"periodo_hasta,omitempty"`
	PeriodoTipo *string `json:"periodo_tipo,omitempty"`
	Promedio *float64 `json:"promedio,omitempty"`
	PublicacionUrl *string `json:"publicacion_url,omitempty"`
	Referencia *string `json:"referencia,omitempty"`
	ReferenciaFecha *string `json:"referencia_fecha,omitempty"`
	Unidad *string `json:"unidad,omitempty"`
	XlsxUrl *string `json:"xlsx_url,omitempty"`
}

// Rendimiento is the typed data model for the rendimiento entity.
type Rendimiento struct {
	Apy *float64 `json:"apy,omitempty"`
	Fecha *string `json:"fecha,omitempty"`
	Moneda *string `json:"moneda,omitempty"`
}

// RendimientoLoadMatch is the typed request payload for Rendimiento.LoadTyped.
type RendimientoLoadMatch struct {
	Id string `json:"id"`
}

// RiesgoPai is the typed data model for the riesgo_pai entity.
type RiesgoPai struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// RiesgoPaiLoadMatch is the typed request payload for RiesgoPai.LoadTyped.
type RiesgoPaiLoadMatch struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// RiesgoPaiListMatch is the typed request payload for RiesgoPai.ListTyped.
type RiesgoPaiListMatch struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// Senador is the typed data model for the senador entity.
type Senador struct {
	Email *string `json:"email,omitempty"`
	Foto *string `json:"foto,omitempty"`
	Id *string `json:"id,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Observacione *string `json:"observacione,omitempty"`
	Partido *string `json:"partido,omitempty"`
	PeriodoLegal *map[string]any `json:"periodo_legal,omitempty"`
	PeriodoReal *map[string]any `json:"periodo_real,omitempty"`
	Provincia *string `json:"provincia,omitempty"`
	Rede *[]any `json:"rede,omitempty"`
	Reemplazo *string `json:"reemplazo,omitempty"`
	Telefono *string `json:"telefono,omitempty"`
}

// SenadorListMatch is the typed request payload for Senador.ListTyped.
type SenadorListMatch struct {
	Email *string `json:"email,omitempty"`
	Foto *string `json:"foto,omitempty"`
	Id *string `json:"id,omitempty"`
	Nombre *string `json:"nombre,omitempty"`
	Observacione *string `json:"observacione,omitempty"`
	Partido *string `json:"partido,omitempty"`
	PeriodoLegal *map[string]any `json:"periodo_legal,omitempty"`
	PeriodoReal *map[string]any `json:"periodo_real,omitempty"`
	Provincia *string `json:"provincia,omitempty"`
	Rede *[]any `json:"rede,omitempty"`
	Reemplazo *string `json:"reemplazo,omitempty"`
	Telefono *string `json:"telefono,omitempty"`
}

// TasaIntere is the typed data model for the tasa_intere entity.
type TasaIntere struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// TasaIntereListMatch is the typed request payload for TasaIntere.ListTyped.
type TasaIntereListMatch struct {
	Fecha *string `json:"fecha,omitempty"`
	Valor *float64 `json:"valor,omitempty"`
}

// TasaPlazoFijo is the typed data model for the tasa_plazo_fijo entity.
type TasaPlazoFijo struct {
	Entidad *string `json:"entidad,omitempty"`
	Logo *string `json:"logo,omitempty"`
	TnaCliente *float64 `json:"tna_cliente,omitempty"`
	TnaNoCliente *float64 `json:"tna_no_cliente,omitempty"`
}

// TasaPlazoFijoListMatch is the typed request payload for TasaPlazoFijo.ListTyped.
type TasaPlazoFijoListMatch struct {
	Entidad *string `json:"entidad,omitempty"`
	Logo *string `json:"logo,omitempty"`
	TnaCliente *float64 `json:"tna_cliente,omitempty"`
	TnaNoCliente *float64 `json:"tna_no_cliente,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
