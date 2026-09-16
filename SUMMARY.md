# ArgentinaDatos API

API pública, **no oficial**, desarrollada en [EsJS](https://es.js.org?ref=argentinadatos.com) que brinda información actualizada sobre diferentes datos de Argentina. ¿Encontraste útil esta API? **¡Dejá tu ⭐ en [GitHub](https://github.com/enzonotario/esjs-argentina-datos-api)!**

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 28 entities and 39 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Acta

Results: Devuelve una lista de actas de Diputados; Devuelve una lista de actas del Senado.

SDK operations: `list`, `load`.

### BonosCer

Results: Listado de bonos soberanos CER con marca temporal de actualización.

SDK operations: `list`.

Key fields to recognise:

- `fechaVencimiento`: Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd)
- `precioArs`: Precio de cotización en pesos argentinos
- `ticker`: Código del bono (ej. TZX26, TX26)
- `tirPorcentaje`: Tasa interna de retorno (TIR) en porcentaje
- `volumen`: Volumen nominal negociado, si la fuente lo publica

### Cotizacion

Results: Devuelve una lista de cotizaciones del dólar.

SDK operations: `list`, `load`.

### Criptopeso

Results: Devuelve una lista de tasas de criptopesos.

SDK operations: `list`.

Key fields to recognise:

- `entidad`: Nombre de la entidad que ofrece el criptopeso
- `tna`: Tasa Nominal Anual en porcentaje
- `token`: Token del criptopeso (ej: ARGt, wARS)

### CuentaRemuneradaUsd

Results: Lista de entidades con tasa y tope vigentes al último relevamiento.

SDK operations: `list`.

Key fields to recognise:

- `entidad`: Identificador de la entidad (p. ej. BNA, GALICIA, SUPERVIELLE)
- `tasa`: Tasa de rendimiento anual en formato decimal (p. ej. 0.02 = 2 % anual)
- `tope`: Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó

### Diputado

Results: Devuelve una lista de diputados.

SDK operations: `list`.

### EntidadRendimiento

Results: Devuelve una lista de rendimientos.

SDK operations: `list`.

### Estado

Results: Devuelve el estado de la API.

SDK operations: `load`.

### EventoPresidencial

Results: Devuelve una lista de eventos presidenciales.

SDK operations: `list`.

### Feriado

Results: Devuelve los feriados del año actual.

SDK operations: `load`.

### Finanza

Results: Devuelve una lista de endpoints relativos disponibles.

SDK operations: `list`.

### FondoComunInversion

Results: Devuelve una lista de Fondos Comunes de Inversión.

SDK operations: `load`.

### FondoComunInversionOtro

Results: Devuelve una lista de Fondos Comunes de Inversión.

SDK operations: `load`.

### FondoComunInversionVariable

Results: Devuelve una lista de Fondos Comunes de Inversión.

SDK operations: `load`.

Key fields to recognise:

- `fondo`: Nombre del fondo común de inversión (clase o denominación oficial).
- `nombre`: Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal).
- `tipo`: Clasificación del instrumento. Valor conocido: `billetera` (cuenta remunerada en billetera digital).

### HipotecarioUvaTna

Results: Devuelve una lista de TNA de créditos hipotecarios UVA.

SDK operations: `list`.

Key fields to recognise:

- `entidad`: Nombre del banco u oferente del crédito hipotecario UVA
- `metadata`: Detalle de condiciones
- `nombreComercial`: Nombre comercial
- `tna`: Tasa Nominal Anual

### IndiceInflacion

Results: Devuelve una lista de índices de inflación.

SDK operations: `list`.

### IndiceUva

Results: Devuelve una lista de índices UVA.

SDK operations: `list`.

### Letra

Results: Devuelve una lista de letras capitalizables activas.

SDK operations: `list`.

Key fields to recognise:

- `fechaEmision`: Fecha de emisión original (ISO 8601)
- `fechaVencimiento`: Fecha de vencimiento (ISO 8601)
- `tem`: Tasa Efectiva Mensual (%)
- `ticker`: Código del instrumento (ej: S31G5, T17O5)
- `vpv`: Valor de Pago al Vencimiento por cada $100 de valor nominal

### Presidente

Results: Devuelve una lista de presidentes.

SDK operations: `list`.

Key fields to recognise:

- `fin`: Fecha de fin del mandato (formato yyyy-MM-dd). Null si es el presidente actual.
- `imagen`: URL de la imagen del presidente
- `inicio`: Fecha de inicio del mandato (formato yyyy-MM-dd)
- `partidoImagen`: URL de la imagen del logo del partido político
- `periodoPresidencial`: Rango de años del período presidencial (ej: &#39;2019-2023&#39;)

### ProveedorPlazoFijoPrecancelable

Results: Devuelve una lista de proveedores con condiciones de plazo fijo UVA precancelable.

SDK operations: `list`.

Key fields to recognise:

- `avisoPrecancelacionDias`: Días hábiles de aviso previo para precancelar
- `canal`: Canales publicados para constituir el plazo fijo
- `enlace`: URL de la fuente
- `entidad`: Nombre de la entidad
- `id`: Identificador estable del proveedor

### ProveedorPlazoFijoUvaPagoPeriodico

Results: Devuelve una lista de proveedores, cada uno con sus tasas por rango de plazo.

SDK operations: `list`.

Key fields to recognise:

- `entidad`: Nombre de la entidad
- `id`: Identificador estable del proveedor (p. ej. bna)
- `logo`: URL del logo de la entidad
- `tasas`: Tasas por rango de plazo

### Rem

Results: Devuelve una lista de expectativas del REM para el período indicado.

SDK operations: `list`.

Key fields to recognise:

- `fecha`: Fecha ISO del primer día del mes del informe
- `indicador`: Indicador relevado
- `informe`: Informe REM en formato YYYY-MM
- `muestra`: Muestra de participantes: todos o TOP 10
- `periodo`: Período original informado por el BCRA

### RemExpectativa

Results: Devuelve una lista de expectativas del último REM.

SDK operations: `list`.

Key fields to recognise:

- `fecha`: Fecha ISO del primer día del mes del informe
- `indicador`: Indicador relevado
- `informe`: Informe REM en formato YYYY-MM
- `muestra`: Muestra de participantes: todos o TOP 10
- `periodo`: Período original informado por el BCRA

### Rendimiento

Results: Devuelve una lista de rendimientos.

SDK operations: `load`.

### RiesgoPai

Results: Devuelve una lista de riesgo país; Devuelve el último valor de riesgo país.

SDK operations: `list`, `load`.

### Senador

Results: Devuelve una lista de senadores.

SDK operations: `list`.

### TasaIntere

Results: Devuelve una lista de tasas de interés por depósitos a 30 días.

SDK operations: `list`.

### TasaPlazoFijo

Results: Devuelve una lista de tasas de plazo fijo.

SDK operations: `list`.

Key fields to recognise:

- `logo`: URL del logo de la entidad
- `tnaClientes`: Tasa Nominal Anual para clientes, en porcentaje
- `tnaNoClientes`: Tasa Nominal Anual para no clientes, en porcentaje

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Acta | `list` | `GET /v1/diputados/actas` | See reference |
| Acta | `list` | `GET /v1/senado/actas` | See reference |
| Acta | `load` | `GET /v1/diputados/actas/{año}` | See reference |
| Acta | `load` | `GET /v1/senado/actas/{año}` | See reference |
| BonosCer | `list` | `GET /v1/finanzas/bonos-cer` | See reference |
| Cotizacion | `list` | `GET /v1/cotizaciones/dolares` | See reference |
| Cotizacion | `load` | `GET /v1/cotizaciones/dolares/{casa}/{fecha}` | See reference |
| Cotizacion | `load` | `GET /v1/cotizaciones/dolares/{casa}` | See reference |
| Criptopeso | `list` | `GET /v1/finanzas/criptopesos` | See reference |
| CuentaRemuneradaUsd | `list` | `GET /v1/finanzas/cuentas-remuneradas-usd` | See reference |
| Diputado | `list` | `GET /v1/diputados/diputados` | See reference |
| EntidadRendimiento | `list` | `GET /v1/finanzas/rendimientos` | See reference |
| Estado | `load` | `GET /v1/estado` | See reference |
| EventoPresidencial | `list` | `GET /v1/eventos/presidenciales` | See reference |
| Feriado | `load` | `GET /v1/feriados/{año}` | See reference |
| Finanza | `list` | `GET /v1/rems` | See reference |
| FondoComunInversion | `load` | `GET /v1/finanzas/fci/mercadoDinero/{fecha}` | See reference |
| FondoComunInversion | `load` | `GET /v1/finanzas/fci/rentaFija/{fecha}` | See reference |
| FondoComunInversion | `load` | `GET /v1/finanzas/fci/rentaMixta/{fecha}` | See reference |
| FondoComunInversion | `load` | `GET /v1/finanzas/fci/rentaVariable/{fecha}` | See reference |
| FondoComunInversion | `load` | `GET /v1/finanzas/fci/retornoTotal/{fecha}` | See reference |
| FondoComunInversionOtro | `load` | `GET /v1/finanzas/fci/otros/{fecha}` | See reference |
| FondoComunInversionVariable | `load` | `GET /v1/finanzas/fci/variables/{fecha}` | See reference |
| HipotecarioUvaTna | `list` | `GET /v1/finanzas/creditos/hipotecariosUva` | See reference |
| IndiceInflacion | `list` | `GET /v1/finanzas/indices/inflacion` | See reference |
| IndiceInflacion | `list` | `GET /v1/finanzas/indices/inflacionInteranual` | See reference |
| IndiceUva | `list` | `GET /v1/finanzas/indices/uva` | See reference |
| Letra | `list` | `GET /v1/finanzas/letras` | See reference |
| Presidente | `list` | `GET /v1/presidentes` | See reference |
| ProveedorPlazoFijoPrecancelable | `list` | `GET /v1/finanzas/tasas/plazoFijoPrecancelable` | See reference |
| ProveedorPlazoFijoUvaPagoPeriodico | `list` | `GET /v1/finanzas/tasas/plazoFijoUvaPagoPeriodico` | See reference |
| Rem | `list` | `GET /v1/rems/{año}/{mes}` | See reference |
| RemExpectativa | `list` | `GET /v1/rems/ultimo` | See reference |
| Rendimiento | `load` | `GET /v1/finanzas/rendimientos/{entidad}` | See reference |
| RiesgoPai | `list` | `GET /v1/finanzas/indices/riesgo-pais` | See reference |
| RiesgoPai | `load` | `GET /v1/finanzas/indices/riesgo-pais/ultimo` | See reference |
| Senador | `list` | `GET /v1/senado/senadores` | See reference |
| TasaIntere | `list` | `GET /v1/finanzas/tasas/depositos30Dias` | See reference |
| TasaPlazoFijo | `list` | `GET /v1/finanzas/tasas/plazoFijo` | See reference |

## Connect to the API

- Servidor principal: `https://api.argentinadatos.com`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `argentinadatos_list`: List records for an entity. Supported entities: `acta`, `bonos_cer`, `cotizacion`, `criptopeso`, `cuenta_remunerada_usd`, `diputado`, `entidad_rendimiento`, `evento_presidencial`, `finanza`, `hipotecario_uva_tna`, `indice_inflacion`, `indice_uva`, `letra`, `presidente`, `proveedor_plazo_fijo_precancelable`, `proveedor_plazo_fijo_uva_pago_periodico`, `rem`, `rem_expectativa`, `riesgo_pai`, `senador`, `tasa_intere`, `tasa_plazo_fijo`.
- `argentinadatos_load`: Load one record for an entity. Supported entities: `acta`, `cotizacion`, `estado`, `feriado`, `fondo_comun_inversion`, `fondo_comun_inversion_otro`, `fondo_comun_inversion_variable`, `rendimiento`, `riesgo_pai`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

