# Argentinadatos Ruby SDK



The Ruby SDK for the Argentinadatos API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Acta` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/argentinadatos-sdk/releases](https://github.com/voxgig-sdk/argentinadatos-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "Argentinadatos_sdk"

client = ArgentinadatosSDK.new
```

### 2. List acta records

```ruby
begin
  # list returns an Array of Acta records — iterate directly.
  actas = client.Acta.list
  actas.each do |item|
    puts "#{item["id"]} #{item["abstenciones"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load a cotizacion

Cotizacion is nested under casa, so provide the `casa`.

```ruby
begin
  # load returns the ENTITY — call data_get for the Cotizacion record (raises on error).
  cotizacion = client.Cotizacion.load({ "casa" => "example_casa" })
  puts cotizacion
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  cotizacions = client.Cotizacion.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = ArgentinadatosSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
cotizacion = client.Cotizacion.list()
puts cotizacion
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = ArgentinadatosSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
ARGENTINADATOS_TEST_LIVE=TRUE
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### ArgentinadatosSDK

```ruby
require_relative "Argentinadatos_sdk"
client = ArgentinadatosSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = ArgentinadatosSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ArgentinadatosSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Acta` | `(data) -> ActaEntity` | Create an Acta entity instance. |
| `BonosCer` | `(data) -> BonosCerEntity` | Create a BonosCer entity instance. |
| `Cotizacion` | `(data) -> CotizacionEntity` | Create a Cotizacion entity instance. |
| `Criptopeso` | `(data) -> CriptopesoEntity` | Create a Criptopeso entity instance. |
| `CuentaRemuneradaUsd` | `(data) -> CuentaRemuneradaUsdEntity` | Create a CuentaRemuneradaUsd entity instance. |
| `Diputado` | `(data) -> DiputadoEntity` | Create a Diputado entity instance. |
| `EntidadRendimiento` | `(data) -> EntidadRendimientoEntity` | Create an EntidadRendimiento entity instance. |
| `Estado` | `(data) -> EstadoEntity` | Create an Estado entity instance. |
| `EventoPresidencial` | `(data) -> EventoPresidencialEntity` | Create an EventoPresidencial entity instance. |
| `Feriado` | `(data) -> FeriadoEntity` | Create a Feriado entity instance. |
| `Finanza` | `(data) -> FinanzaEntity` | Create a Finanza entity instance. |
| `FondoComunInversion` | `(data) -> FondoComunInversionEntity` | Create a FondoComunInversion entity instance. |
| `FondoComunInversionOtro` | `(data) -> FondoComunInversionOtroEntity` | Create a FondoComunInversionOtro entity instance. |
| `FondoComunInversionVariable` | `(data) -> FondoComunInversionVariableEntity` | Create a FondoComunInversionVariable entity instance. |
| `HipotecarioUvaTna` | `(data) -> HipotecarioUvaTnaEntity` | Create a HipotecarioUvaTna entity instance. |
| `IndiceInflacion` | `(data) -> IndiceInflacionEntity` | Create an IndiceInflacion entity instance. |
| `IndiceUva` | `(data) -> IndiceUvaEntity` | Create an IndiceUva entity instance. |
| `Letra` | `(data) -> LetraEntity` | Create a Letra entity instance. |
| `Presidente` | `(data) -> PresidenteEntity` | Create a Presidente entity instance. |
| `ProveedorPlazoFijoPrecancelable` | `(data) -> ProveedorPlazoFijoPrecancelableEntity` | Create a ProveedorPlazoFijoPrecancelable entity instance. |
| `ProveedorPlazoFijoUvaPagoPeriodico` | `(data) -> ProveedorPlazoFijoUvaPagoPeriodicoEntity` | Create a ProveedorPlazoFijoUvaPagoPeriodico entity instance. |
| `Rem` | `(data) -> RemEntity` | Create a Rem entity instance. |
| `RemExpectativa` | `(data) -> RemExpectativaEntity` | Create a RemExpectativa entity instance. |
| `Rendimiento` | `(data) -> RendimientoEntity` | Create a Rendimiento entity instance. |
| `RiesgoPai` | `(data) -> RiesgoPaiEntity` | Create a RiesgoPai entity instance. |
| `Senador` | `(data) -> SenadorEntity` | Create a Senador entity instance. |
| `TasaIntere` | `(data) -> TasaIntereEntity` | Create a TasaIntere entity instance. |
| `TasaPlazoFijo` | `(data) -> TasaPlazoFijoEntity` | Create a TasaPlazoFijo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all). Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `ArgentinadatosError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Acta

| Field | Description |
| --- | --- |
| `abstenciones` |  |
| `acta` |  |
| `actaId` |  |
| `afirmativos` |  |
| `amn` |  |
| `ausentes` |  |
| `descripcion` |  |
| `fecha` |  |
| `id` |  |
| `mayoria` |  |
| `miembros` |  |
| `negativos` |  |
| `numeroActa` |  |
| `observaciones` |  |
| `periodo` |  |
| `presentes` |  |
| `presidente` |  |
| `proyecto` |  |
| `quorumTipo` |  |
| `resultado` |  |
| `reunion` |  |
| `titulo` |  |
| `votos` |  |
| `votosAfirmativos` |  |
| `votosNegativos` |  |

Operations: List, Load.

API path: `/v1/diputados/actas`

#### BonosCer

| Field | Description |
| --- | --- |
| `fechaVencimiento` | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `precioArs` | Precio de cotización en pesos argentinos |
| `ticker` | Código del bono (ej. |
| `tirPorcentaje` | Tasa interna de retorno (TIR) en porcentaje |
| `volumen` | Volumen nominal negociado, si la fuente lo publica |

Operations: List.

API path: `/v1/finanzas/bonos-cer`

#### Cotizacion

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha` |  |
| `moneda` |  |
| `venta` |  |

Operations: List, Load.

API path: `/v1/cotizaciones/dolares`

#### Criptopeso

| Field | Description |
| --- | --- |
| `entidad` | Nombre de la entidad que ofrece el criptopeso |
| `tna` | Tasa Nominal Anual en porcentaje |
| `token` | Token del criptopeso (ej: ARGt, wARS) |

Operations: List.

API path: `/v1/finanzas/criptopesos`

#### CuentaRemuneradaUsd

| Field | Description |
| --- | --- |
| `entidad` | Identificador de la entidad (p. |
| `tasa` | Tasa de rendimiento anual en formato decimal (p. |
| `tope` | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

Operations: List.

API path: `/v1/finanzas/cuentas-remuneradas-usd`

#### Diputado

| Field | Description |
| --- | --- |
| `apellido` |  |
| `bloque` |  |
| `ceseFecha` |  |
| `foto` |  |
| `genero` |  |
| `id` |  |
| `juramentoFecha` |  |
| `nombre` |  |
| `periodoBloque` |  |
| `periodoMandato` |  |
| `provincia` |  |

Operations: List.

API path: `/v1/diputados/diputados`

#### EntidadRendimiento

| Field | Description |
| --- | --- |
| `entidad` |  |
| `rendimientos` |  |

Operations: List.

API path: `/v1/finanzas/rendimientos`

#### Estado

| Field | Description |
| --- | --- |
| `aleatorio` |  |
| `estado` |  |

Operations: Load.

API path: `/v1/estado`

#### EventoPresidencial

| Field | Description |
| --- | --- |
| `evento` |  |
| `fecha` |  |
| `tipo` |  |

Operations: List.

API path: `/v1/eventos/presidenciales`

#### Feriado

| Field | Description |
| --- | --- |
| `fecha` |  |
| `nombre` |  |
| `tipo` |  |

Operations: Load.

API path: `/v1/feriados/{año}`

#### Finanza

| Field | Description |
| --- | --- |

Operations: List.

API path: `/v1/rems`

#### FondoComunInversion

| Field | Description |
| --- | --- |
| `ccp` |  |
| `fecha` |  |
| `fondo` |  |
| `horizonte` |  |
| `patrimonio` |  |
| `tipo` |  |
| `vcp` |  |

Operations: Load.

API path: `/v1/finanzas/fci/mercadoDinero/{fecha}`

#### FondoComunInversionOtro

| Field | Description |
| --- | --- |
| `fecha` |  |
| `fondo` |  |
| `tea` |  |
| `tna` |  |
| `tope` |  |

Operations: Load.

API path: `/v1/finanzas/fci/otros/{fecha}`

#### FondoComunInversionVariable

| Field | Description |
| --- | --- |
| `condiciones` |  |
| `condicionesCorto` |  |
| `fecha` |  |
| `fondo` | Nombre del fondo común de inversión (clase o denominación oficial). |
| `nombre` | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `tea` |  |
| `tipo` | Clasificación del instrumento. |
| `tna` |  |
| `tope` |  |

Operations: Load.

API path: `/v1/finanzas/fci/variables/{fecha}`

#### HipotecarioUvaTna

| Field | Description |
| --- | --- |
| `entidad` | Nombre del banco u oferente del crédito hipotecario UVA |
| `metadata` | Detalle de condiciones |
| `nombreComercial` | Nombre comercial |
| `tna` | Tasa Nominal Anual |

Operations: List.

API path: `/v1/finanzas/creditos/hipotecariosUva`

#### IndiceInflacion

| Field | Description |
| --- | --- |
| `fecha` |  |
| `valor` |  |

Operations: List.

API path: `/v1/finanzas/indices/inflacion`

#### IndiceUva

| Field | Description |
| --- | --- |
| `fecha` |  |
| `valor` |  |

Operations: List.

API path: `/v1/finanzas/indices/uva`

#### Letra

| Field | Description |
| --- | --- |
| `fechaEmision` | Fecha de emisión original (ISO 8601) |
| `fechaVencimiento` | Fecha de vencimiento (ISO 8601) |
| `tem` | Tasa Efectiva Mensual (%) |
| `ticker` | Código del instrumento (ej: S31G5, T17O5) |
| `vpv` | Valor de Pago al Vencimiento por cada $100 de valor nominal |

Operations: List.

API path: `/v1/finanzas/letras`

#### Presidente

| Field | Description |
| --- | --- |
| `fin` | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `imagen` | URL de la imagen del presidente |
| `inicio` | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `nombre` |  |
| `partido` |  |
| `partidoImagen` | URL de la imagen del logo del partido político |
| `periodoPresidencial` | Rango de años del período presidencial (ej: '2019-2023') |
| `vicepresidente` | Nombre del vicepresidente. |

Operations: List.

API path: `/v1/presidentes`

#### ProveedorPlazoFijoPrecancelable

| Field | Description |
| --- | --- |
| `avisoPrecancelacionDias` | Días hábiles de aviso previo para precancelar |
| `canal` | Canales publicados para constituir el plazo fijo |
| `enlace` | URL de la fuente |
| `entidad` | Nombre de la entidad |
| `id` | Identificador estable del proveedor |
| `logo` | URL del logo de la entidad |
| `modalidad` | Modalidad publicada por la entidad |
| `moneda` | Moneda de constitución |
| `montoMaximo` | Monto máximo de constitución |
| `montoMinimo` | Monto mínimo de constitución |
| `plazoMaxDias` | Plazo máximo en días |
| `plazoMinDias` | Plazo mínimo en días |
| `plazoPrecancelacionDias` | Días mínimos para ejercer la precancelación |
| `tea` | Tasa Efectiva Anual |
| `teaPrecancelacion` | Tasa Efectiva Anual aplicada ante precancelación |
| `tna` | Tasa Nominal Anual |
| `tnaPrecancelacion` | Tasa Nominal Anual aplicada ante precancelación |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoPrecancelable`

#### ProveedorPlazoFijoUvaPagoPeriodico

| Field | Description |
| --- | --- |
| `entidad` | Nombre de la entidad |
| `id` | Identificador estable del proveedor (p. |
| `logo` | URL del logo de la entidad |
| `tasas` | Tasas por rango de plazo |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico`

#### Rem

| Field | Description |
| --- | --- |
| `desvio` |  |
| `fecha` | Fecha ISO del primer día del mes del informe |
| `fuente` |  |
| `indicador` | Indicador relevado |
| `informe` | Informe REM en formato YYYY-MM |
| `maximo` |  |
| `mediana` |  |
| `minimo` |  |
| `muestra` | Muestra de participantes: todos o TOP 10 |
| `participantes` |  |
| `percentil10` |  |
| `percentil25` |  |
| `percentil75` |  |
| `percentil90` |  |
| `periodo` | Período original informado por el BCRA |
| `periodoDesde` | Fecha de inicio del período normalizado |
| `periodoHasta` | Fecha de fin del período normalizado |
| `periodoTipo` | Tipo de período normalizado |
| `promedio` |  |
| `publicacionUrl` |  |
| `referencia` | Referencia original de la tabla |
| `referenciaFecha` | Fecha detectada en la referencia, si corresponde |
| `unidad` | Unidad inferida desde la referencia |
| `xlsxUrl` |  |

Operations: List.

API path: `/v1/rems/{año}/{mes}`

#### RemExpectativa

| Field | Description |
| --- | --- |
| `desvio` |  |
| `fecha` | Fecha ISO del primer día del mes del informe |
| `fuente` |  |
| `indicador` | Indicador relevado |
| `informe` | Informe REM en formato YYYY-MM |
| `maximo` |  |
| `mediana` |  |
| `minimo` |  |
| `muestra` | Muestra de participantes: todos o TOP 10 |
| `participantes` |  |
| `percentil10` |  |
| `percentil25` |  |
| `percentil75` |  |
| `percentil90` |  |
| `periodo` | Período original informado por el BCRA |
| `periodoDesde` | Fecha de inicio del período normalizado |
| `periodoHasta` | Fecha de fin del período normalizado |
| `periodoTipo` | Tipo de período normalizado |
| `promedio` |  |
| `publicacionUrl` |  |
| `referencia` | Referencia original de la tabla |
| `referenciaFecha` | Fecha detectada en la referencia, si corresponde |
| `unidad` | Unidad inferida desde la referencia |
| `xlsxUrl` |  |

Operations: List.

API path: `/v1/rems/ultimo`

#### Rendimiento

| Field | Description |
| --- | --- |
| `apy` |  |
| `fecha` |  |
| `moneda` |  |

Operations: Load.

API path: `/v1/finanzas/rendimientos/{entidad}`

#### RiesgoPai

| Field | Description |
| --- | --- |
| `fecha` |  |
| `valor` |  |

Operations: List, Load.

API path: `/v1/finanzas/indices/riesgo-pais`

#### Senador

| Field | Description |
| --- | --- |
| `email` |  |
| `foto` |  |
| `id` |  |
| `nombre` |  |
| `observaciones` |  |
| `partido` |  |
| `periodoLegal` |  |
| `periodoReal` |  |
| `provincia` |  |
| `redes` |  |
| `reemplazo` |  |
| `telefono` |  |

Operations: List.

API path: `/v1/senado/senadores`

#### TasaIntere

| Field | Description |
| --- | --- |
| `fecha` |  |
| `valor` |  |

Operations: List.

API path: `/v1/finanzas/tasas/depositos30Dias`

#### TasaPlazoFijo

| Field | Description |
| --- | --- |
| `entidad` |  |
| `logo` | URL del logo de la entidad |
| `tnaClientes` | Tasa Nominal Anual para clientes, en porcentaje |
| `tnaNoClientes` | Tasa Nominal Anual para no clientes, en porcentaje |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijo`



## Entities


### Acta

Create an instance: `acta = client.Acta`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abstenciones` | `Integer` |  |
| `acta` | `String` |  |
| `actaId` | `Integer` |  |
| `afirmativos` | `Integer` |  |
| `amn` | `Integer` |  |
| `ausentes` | `Integer` |  |
| `descripcion` | `String` |  |
| `fecha` | `String` |  |
| `id` | `String` |  |
| `mayoria` | `String` |  |
| `miembros` | `Integer` |  |
| `negativos` | `Integer` |  |
| `numeroActa` | `String` |  |
| `observaciones` | `Array` |  |
| `periodo` | `String` |  |
| `presentes` | `Integer` |  |
| `presidente` | `String` |  |
| `proyecto` | `String` |  |
| `quorumTipo` | `String` |  |
| `resultado` | `String` |  |
| `reunion` | `String` |  |
| `titulo` | `String` |  |
| `votos` | `Array` |  |
| `votosAfirmativos` | `Integer` |  |
| `votosNegativos` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Acta record (raises on error).
acta = client.Acta.load({ "id" => 1 })
```

#### Example: List

```ruby
# list returns an Array of Acta records (raises on error).
actas = client.Acta.list
```


### BonosCer

Create an instance: `bonos_cer = client.BonosCer`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fechaVencimiento` | `String` | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `precioArs` | `Float` | Precio de cotización en pesos argentinos |
| `ticker` | `String` | Código del bono (ej. |
| `tirPorcentaje` | `Float` | Tasa interna de retorno (TIR) en porcentaje |
| `volumen` | `Float` | Volumen nominal negociado, si la fuente lo publica |

#### Example: List

```ruby
# list returns an Array of BonosCer records (raises on error).
bonos_cers = client.BonosCer.list
```


### Cotizacion

Create an instance: `cotizacion = client.Cotizacion`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `String` |  |
| `compra` | `Float` |  |
| `fecha` | `String` |  |
| `moneda` | `String` |  |
| `venta` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Cotizacion record (raises on error).
cotizacion = client.Cotizacion.load({ "casa" => "casa" })
```

#### Example: List

```ruby
# list returns an Array of Cotizacion records (raises on error).
cotizacions = client.Cotizacion.list
```


### Criptopeso

Create an instance: `criptopeso = client.Criptopeso`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `String` | Nombre de la entidad que ofrece el criptopeso |
| `tna` | `Float` | Tasa Nominal Anual en porcentaje |
| `token` | `String` | Token del criptopeso (ej: ARGt, wARS) |

#### Example: List

```ruby
# list returns an Array of Criptopeso records (raises on error).
criptopesos = client.Criptopeso.list
```


### CuentaRemuneradaUsd

Create an instance: `cuenta_remunerada_usd = client.CuentaRemuneradaUsd`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `String` | Identificador de la entidad (p. |
| `tasa` | `Float` | Tasa de rendimiento anual en formato decimal (p. |
| `tope` | `Float` | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

#### Example: List

```ruby
# list returns an Array of CuentaRemuneradaUsd records (raises on error).
cuenta_remunerada_usds = client.CuentaRemuneradaUsd.list
```


### Diputado

Create an instance: `diputado = client.Diputado`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apellido` | `String` |  |
| `bloque` | `String` |  |
| `ceseFecha` | `String` |  |
| `foto` | `String` |  |
| `genero` | `String` |  |
| `id` | `String` |  |
| `juramentoFecha` | `String` |  |
| `nombre` | `String` |  |
| `periodoBloque` | `Hash` |  |
| `periodoMandato` | `Hash` |  |
| `provincia` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Diputado records (raises on error).
diputados = client.Diputado.list
```


### EntidadRendimiento

Create an instance: `entidad_rendimiento = client.EntidadRendimiento`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `String` |  |
| `rendimientos` | `Array` |  |

#### Example: List

```ruby
# list returns an Array of EntidadRendimiento records (raises on error).
entidad_rendimientos = client.EntidadRendimiento.list
```


### Estado

Create an instance: `estado = client.Estado`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | `Integer` |  |
| `estado` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Estado record (raises on error).
estado = client.Estado.load()
```


### EventoPresidencial

Create an instance: `evento_presidencial = client.EventoPresidencial`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evento` | `String` |  |
| `fecha` | `String` |  |
| `tipo` | `String` |  |

#### Example: List

```ruby
# list returns an Array of EventoPresidencial records (raises on error).
evento_presidencials = client.EventoPresidencial.list
```


### Feriado

Create an instance: `feriado = client.Feriado`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `String` |  |
| `nombre` | `String` |  |
| `tipo` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Feriado record (raises on error).
feriado = client.Feriado.load({ "id" => 1 })
```


### Finanza

Create an instance: `finanza = client.Finanza`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ruby
# list returns an Array of Finanza records (raises on error).
finanzas = client.Finanza.list
```


### FondoComunInversion

Create an instance: `fondo_comun_inversion = client.FondoComunInversion`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ccp` | `Float` |  |
| `fecha` | `String` |  |
| `fondo` | `String` |  |
| `horizonte` | `String` |  |
| `patrimonio` | `Float` |  |
| `tipo` | `String` |  |
| `vcp` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FondoComunInversion record (raises on error).
fondo_comun_inversion = client.FondoComunInversion.load({ "fecha" => "fecha" })
```


### FondoComunInversionOtro

Create an instance: `fondo_comun_inversion_otro = client.FondoComunInversionOtro`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `String` |  |
| `fondo` | `String` |  |
| `tea` | `Float` |  |
| `tna` | `Float` |  |
| `tope` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FondoComunInversionOtro record (raises on error).
fondo_comun_inversion_otro = client.FondoComunInversionOtro.load({ "id" => "fondo_comun_inversion_otro_id" })
```


### FondoComunInversionVariable

Create an instance: `fondo_comun_inversion_variable = client.FondoComunInversionVariable`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condiciones` | `String` |  |
| `condicionesCorto` | `String` |  |
| `fecha` | `String` |  |
| `fondo` | `String` | Nombre del fondo común de inversión (clase o denominación oficial). |
| `nombre` | `String` | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `tea` | `Float` |  |
| `tipo` | `String` | Clasificación del instrumento. |
| `tna` | `Float` |  |
| `tope` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FondoComunInversionVariable record (raises on error).
fondo_comun_inversion_variable = client.FondoComunInversionVariable.load({ "id" => "fondo_comun_inversion_variable_id" })
```


### HipotecarioUvaTna

Create an instance: `hipotecario_uva_tna = client.HipotecarioUvaTna`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `String` | Nombre del banco u oferente del crédito hipotecario UVA |
| `metadata` | `Hash` | Detalle de condiciones |
| `nombreComercial` | `String` | Nombre comercial |
| `tna` | `Float` | Tasa Nominal Anual |

#### Example: List

```ruby
# list returns an Array of HipotecarioUvaTna records (raises on error).
hipotecario_uva_tnas = client.HipotecarioUvaTna.list
```


### IndiceInflacion

Create an instance: `indice_inflacion = client.IndiceInflacion`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `String` |  |
| `valor` | `Float` |  |

#### Example: List

```ruby
# list returns an Array of IndiceInflacion records (raises on error).
indice_inflacions = client.IndiceInflacion.list
```


### IndiceUva

Create an instance: `indice_uva = client.IndiceUva`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `String` |  |
| `valor` | `Float` |  |

#### Example: List

```ruby
# list returns an Array of IndiceUva records (raises on error).
indice_uvas = client.IndiceUva.list
```


### Letra

Create an instance: `letra = client.Letra`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fechaEmision` | `String` | Fecha de emisión original (ISO 8601) |
| `fechaVencimiento` | `String` | Fecha de vencimiento (ISO 8601) |
| `tem` | `Float` | Tasa Efectiva Mensual (%) |
| `ticker` | `String` | Código del instrumento (ej: S31G5, T17O5) |
| `vpv` | `Float` | Valor de Pago al Vencimiento por cada $100 de valor nominal |

#### Example: List

```ruby
# list returns an Array of Letra records (raises on error).
letras = client.Letra.list
```


### Presidente

Create an instance: `presidente = client.Presidente`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fin` | `String` | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `imagen` | `String` | URL de la imagen del presidente |
| `inicio` | `String` | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `nombre` | `String` |  |
| `partido` | `String` |  |
| `partidoImagen` | `String` | URL de la imagen del logo del partido político |
| `periodoPresidencial` | `String` | Rango de años del período presidencial (ej: '2019-2023') |
| `vicepresidente` | `String` | Nombre del vicepresidente. |

#### Example: List

```ruby
# list returns an Array of Presidente records (raises on error).
presidentes = client.Presidente.list
```


### ProveedorPlazoFijoPrecancelable

Create an instance: `proveedor_plazo_fijo_precancelable = client.ProveedorPlazoFijoPrecancelable`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avisoPrecancelacionDias` | `Integer` | Días hábiles de aviso previo para precancelar |
| `canal` | `String` | Canales publicados para constituir el plazo fijo |
| `enlace` | `String` | URL de la fuente |
| `entidad` | `String` | Nombre de la entidad |
| `id` | `String` | Identificador estable del proveedor |
| `logo` | `String` | URL del logo de la entidad |
| `modalidad` | `String` | Modalidad publicada por la entidad |
| `moneda` | `String` | Moneda de constitución |
| `montoMaximo` | `Float` | Monto máximo de constitución |
| `montoMinimo` | `Float` | Monto mínimo de constitución |
| `plazoMaxDias` | `Integer` | Plazo máximo en días |
| `plazoMinDias` | `Integer` | Plazo mínimo en días |
| `plazoPrecancelacionDias` | `Integer` | Días mínimos para ejercer la precancelación |
| `tea` | `Float` | Tasa Efectiva Anual |
| `teaPrecancelacion` | `Float` | Tasa Efectiva Anual aplicada ante precancelación |
| `tna` | `Float` | Tasa Nominal Anual |
| `tnaPrecancelacion` | `Float` | Tasa Nominal Anual aplicada ante precancelación |

#### Example: List

```ruby
# list returns an Array of ProveedorPlazoFijoPrecancelable records (raises on error).
proveedor_plazo_fijo_precancelables = client.ProveedorPlazoFijoPrecancelable.list
```


### ProveedorPlazoFijoUvaPagoPeriodico

Create an instance: `proveedor_plazo_fijo_uva_pago_periodico = client.ProveedorPlazoFijoUvaPagoPeriodico`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `String` | Nombre de la entidad |
| `id` | `String` | Identificador estable del proveedor (p. |
| `logo` | `String` | URL del logo de la entidad |
| `tasas` | `Array` | Tasas por rango de plazo |

#### Example: List

```ruby
# list returns an Array of ProveedorPlazoFijoUvaPagoPeriodico records (raises on error).
proveedor_plazo_fijo_uva_pago_periodicos = client.ProveedorPlazoFijoUvaPagoPeriodico.list
```


### Rem

Create an instance: `rem = client.Rem`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `Float` |  |
| `fecha` | `String` | Fecha ISO del primer día del mes del informe |
| `fuente` | `String` |  |
| `indicador` | `String` | Indicador relevado |
| `informe` | `String` | Informe REM en formato YYYY-MM |
| `maximo` | `Float` |  |
| `mediana` | `Float` |  |
| `minimo` | `Float` |  |
| `muestra` | `String` | Muestra de participantes: todos o TOP 10 |
| `participantes` | `Integer` |  |
| `percentil10` | `Float` |  |
| `percentil25` | `Float` |  |
| `percentil75` | `Float` |  |
| `percentil90` | `Float` |  |
| `periodo` | `String` | Período original informado por el BCRA |
| `periodoDesde` | `String` | Fecha de inicio del período normalizado |
| `periodoHasta` | `String` | Fecha de fin del período normalizado |
| `periodoTipo` | `String` | Tipo de período normalizado |
| `promedio` | `Float` |  |
| `publicacionUrl` | `String` |  |
| `referencia` | `String` | Referencia original de la tabla |
| `referenciaFecha` | `String` | Fecha detectada en la referencia, si corresponde |
| `unidad` | `String` | Unidad inferida desde la referencia |
| `xlsxUrl` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Rem records (raises on error).
rems = client.Rem.list
```


### RemExpectativa

Create an instance: `rem_expectativa = client.RemExpectativa`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `Float` |  |
| `fecha` | `String` | Fecha ISO del primer día del mes del informe |
| `fuente` | `String` |  |
| `indicador` | `String` | Indicador relevado |
| `informe` | `String` | Informe REM en formato YYYY-MM |
| `maximo` | `Float` |  |
| `mediana` | `Float` |  |
| `minimo` | `Float` |  |
| `muestra` | `String` | Muestra de participantes: todos o TOP 10 |
| `participantes` | `Integer` |  |
| `percentil10` | `Float` |  |
| `percentil25` | `Float` |  |
| `percentil75` | `Float` |  |
| `percentil90` | `Float` |  |
| `periodo` | `String` | Período original informado por el BCRA |
| `periodoDesde` | `String` | Fecha de inicio del período normalizado |
| `periodoHasta` | `String` | Fecha de fin del período normalizado |
| `periodoTipo` | `String` | Tipo de período normalizado |
| `promedio` | `Float` |  |
| `publicacionUrl` | `String` |  |
| `referencia` | `String` | Referencia original de la tabla |
| `referenciaFecha` | `String` | Fecha detectada en la referencia, si corresponde |
| `unidad` | `String` | Unidad inferida desde la referencia |
| `xlsxUrl` | `String` |  |

#### Example: List

```ruby
# list returns an Array of RemExpectativa records (raises on error).
rem_expectativas = client.RemExpectativa.list
```


### Rendimiento

Create an instance: `rendimiento = client.Rendimiento`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apy` | `Float` |  |
| `fecha` | `String` |  |
| `moneda` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Rendimiento record (raises on error).
rendimiento = client.Rendimiento.load({ "id" => "rendimiento_id" })
```


### RiesgoPai

Create an instance: `riesgo_pai = client.RiesgoPai`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `String` |  |
| `valor` | `Float` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the RiesgoPai record (raises on error).
riesgo_pai = client.RiesgoPai.load()
```

#### Example: List

```ruby
# list returns an Array of RiesgoPai records (raises on error).
riesgo_pais = client.RiesgoPai.list
```


### Senador

Create an instance: `senador = client.Senador`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `String` |  |
| `foto` | `String` |  |
| `id` | `String` |  |
| `nombre` | `String` |  |
| `observaciones` | `String` |  |
| `partido` | `String` |  |
| `periodoLegal` | `Hash` |  |
| `periodoReal` | `Hash` |  |
| `provincia` | `String` |  |
| `redes` | `Array` |  |
| `reemplazo` | `String` |  |
| `telefono` | `String` |  |

#### Example: List

```ruby
# list returns an Array of Senador records (raises on error).
senadors = client.Senador.list
```


### TasaIntere

Create an instance: `tasa_intere = client.TasaIntere`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `String` |  |
| `valor` | `Float` |  |

#### Example: List

```ruby
# list returns an Array of TasaIntere records (raises on error).
tasa_interes = client.TasaIntere.list
```


### TasaPlazoFijo

Create an instance: `tasa_plazo_fijo = client.TasaPlazoFijo`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `String` |  |
| `logo` | `String` | URL del logo de la entidad |
| `tnaClientes` | `Float` | Tasa Nominal Anual para clientes, en porcentaje |
| `tnaNoClientes` | `Float` | Tasa Nominal Anual para no clientes, en porcentaje |

#### Example: List

```ruby
# list returns an Array of TasaPlazoFijo records (raises on error).
tasa_plazo_fijos = client.TasaPlazoFijo.list
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── Argentinadatos_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`Argentinadatos_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
cotizacion = client.Cotizacion
cotizacion.list()

# cotizacion.data_get now returns the cotizacion data from the last list
# cotizacion.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
