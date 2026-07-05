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
    puts "#{item["id"]} #{item["abstencione"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load an acta

```ruby
begin
  # load returns the bare Acta record (raises on error).
  acta = client.Acta.load({ "id" => "example_id" })
  puts acta
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  actas = client.Acta.list()
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

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = ArgentinadatosSDK.test({
  "entity" => { "acta" => { "test01" => { "id" => "test01" } } },
})

# Entity ops return the bare mock record (raises on error).
acta = client.Acta.list()
puts acta
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
| `abstencione` |  |
| `acta` |  |
| `acta_id` |  |
| `afirmativo` |  |
| `amn` |  |
| `ausente` |  |
| `descripcion` |  |
| `fecha` |  |
| `id` |  |
| `mayoria` |  |
| `miembro` |  |
| `negativo` |  |
| `numero_acta` |  |
| `observacione` |  |
| `periodo` |  |
| `presente` |  |
| `presidente` |  |
| `proyecto` |  |
| `quorum_tipo` |  |
| `resultado` |  |
| `reunion` |  |
| `titulo` |  |
| `voto` |  |
| `votos_afirmativo` |  |
| `votos_negativo` |  |

Operations: List, Load.

API path: `/v1/diputados/actas`

#### BonosCer

| Field | Description |
| --- | --- |
| `fecha_vencimiento` |  |
| `precio_ar` |  |
| `ticker` |  |
| `tir_porcentaje` |  |
| `voluman` |  |

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
| `entidad` |  |
| `tna` |  |
| `token` |  |

Operations: List.

API path: `/v1/finanzas/criptopesos`

#### CuentaRemuneradaUsd

| Field | Description |
| --- | --- |
| `entidad` |  |
| `tasa` |  |
| `tope` |  |

Operations: List.

API path: `/v1/finanzas/cuentas-remuneradas-usd`

#### Diputado

| Field | Description |
| --- | --- |
| `apellido` |  |
| `bloque` |  |
| `cese_fecha` |  |
| `foto` |  |
| `genero` |  |
| `id` |  |
| `juramento_fecha` |  |
| `nombre` |  |
| `periodo_bloque` |  |
| `periodo_mandato` |  |
| `provincia` |  |

Operations: List.

API path: `/v1/diputados/diputados`

#### EntidadRendimiento

| Field | Description |
| --- | --- |
| `entidad` |  |
| `rendimiento` |  |

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
| `condicione` |  |
| `condiciones_corto` |  |
| `fecha` |  |
| `fondo` |  |
| `nombre` |  |
| `tea` |  |
| `tipo` |  |
| `tna` |  |
| `tope` |  |

Operations: Load.

API path: `/v1/finanzas/fci/variables/{fecha}`

#### HipotecarioUvaTna

| Field | Description |
| --- | --- |
| `entidad` |  |
| `metadata` |  |
| `nombre_comercial` |  |
| `tna` |  |

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
| `fecha_emision` |  |
| `fecha_vencimiento` |  |
| `tem` |  |
| `ticker` |  |
| `vpv` |  |

Operations: List.

API path: `/v1/finanzas/letras`

#### Presidente

| Field | Description |
| --- | --- |
| `fin` |  |
| `imagen` |  |
| `inicio` |  |
| `nombre` |  |
| `partido` |  |
| `partido_imagen` |  |
| `periodo_presidencial` |  |
| `vicepresidente` |  |

Operations: List.

API path: `/v1/presidentes`

#### ProveedorPlazoFijoPrecancelable

| Field | Description |
| --- | --- |
| `aviso_precancelacion_dia` |  |
| `canal` |  |
| `enlace` |  |
| `entidad` |  |
| `id` |  |
| `logo` |  |
| `modalidad` |  |
| `moneda` |  |
| `monto_maximo` |  |
| `monto_minimo` |  |
| `plazo_max_dia` |  |
| `plazo_min_dia` |  |
| `plazo_precancelacion_dia` |  |
| `tea` |  |
| `tea_precancelacion` |  |
| `tna` |  |
| `tna_precancelacion` |  |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoPrecancelable`

#### ProveedorPlazoFijoUvaPagoPeriodico

| Field | Description |
| --- | --- |
| `entidad` |  |
| `id` |  |
| `logo` |  |
| `tasa` |  |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico`

#### Rem

| Field | Description |
| --- | --- |
| `desvio` |  |
| `fecha` |  |
| `fuente` |  |
| `indicador` |  |
| `informe` |  |
| `maximo` |  |
| `mediana` |  |
| `minimo` |  |
| `muestra` |  |
| `participante` |  |
| `percentil10` |  |
| `percentil25` |  |
| `percentil75` |  |
| `percentil90` |  |
| `periodo` |  |
| `periodo_desde` |  |
| `periodo_hasta` |  |
| `periodo_tipo` |  |
| `promedio` |  |
| `publicacion_url` |  |
| `referencia` |  |
| `referencia_fecha` |  |
| `unidad` |  |
| `xlsx_url` |  |

Operations: List.

API path: `/v1/rems/{año}/{mes}`

#### RemExpectativa

| Field | Description |
| --- | --- |
| `desvio` |  |
| `fecha` |  |
| `fuente` |  |
| `indicador` |  |
| `informe` |  |
| `maximo` |  |
| `mediana` |  |
| `minimo` |  |
| `muestra` |  |
| `participante` |  |
| `percentil10` |  |
| `percentil25` |  |
| `percentil75` |  |
| `percentil90` |  |
| `periodo` |  |
| `periodo_desde` |  |
| `periodo_hasta` |  |
| `periodo_tipo` |  |
| `promedio` |  |
| `publicacion_url` |  |
| `referencia` |  |
| `referencia_fecha` |  |
| `unidad` |  |
| `xlsx_url` |  |

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
| `observacione` |  |
| `partido` |  |
| `periodo_legal` |  |
| `periodo_real` |  |
| `provincia` |  |
| `rede` |  |
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
| `logo` |  |
| `tna_cliente` |  |
| `tna_no_cliente` |  |

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
| `abstencione` | `Integer` |  |
| `acta` | `String` |  |
| `acta_id` | `Integer` |  |
| `afirmativo` | `Integer` |  |
| `amn` | `Integer` |  |
| `ausente` | `Integer` |  |
| `descripcion` | `String` |  |
| `fecha` | `String` |  |
| `id` | `String` |  |
| `mayoria` | `String` |  |
| `miembro` | `Integer` |  |
| `negativo` | `Integer` |  |
| `numero_acta` | `String` |  |
| `observacione` | `Array` |  |
| `periodo` | `String` |  |
| `presente` | `Integer` |  |
| `presidente` | `String` |  |
| `proyecto` | `String` |  |
| `quorum_tipo` | `String` |  |
| `resultado` | `String` |  |
| `reunion` | `String` |  |
| `titulo` | `String` |  |
| `voto` | `Array` |  |
| `votos_afirmativo` | `Integer` |  |
| `votos_negativo` | `Integer` |  |

#### Example: Load

```ruby
# load returns the bare Acta record (raises on error).
acta = client.Acta.load({ "id" => "acta_id" })
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
| `fecha_vencimiento` | `String` |  |
| `precio_ar` | `Float` |  |
| `ticker` | `String` |  |
| `tir_porcentaje` | `Float` |  |
| `voluman` | `Float` |  |

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
# load returns the bare Cotizacion record (raises on error).
cotizacion = client.Cotizacion.load()
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
| `entidad` | `String` |  |
| `tna` | `Float` |  |
| `token` | `String` |  |

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
| `entidad` | `String` |  |
| `tasa` | `Float` |  |
| `tope` | `Float` |  |

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
| `cese_fecha` | `String` |  |
| `foto` | `String` |  |
| `genero` | `String` |  |
| `id` | `String` |  |
| `juramento_fecha` | `String` |  |
| `nombre` | `String` |  |
| `periodo_bloque` | `Hash` |  |
| `periodo_mandato` | `Hash` |  |
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
| `rendimiento` | `Array` |  |

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
# load returns the bare Estado record (raises on error).
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
# load returns the bare Feriado record (raises on error).
feriado = client.Feriado.load({ "id" => "feriado_id" })
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
# load returns the bare FondoComunInversion record (raises on error).
fondo_comun_inversion = client.FondoComunInversion.load()
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
# load returns the bare FondoComunInversionOtro record (raises on error).
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
| `condicione` | `String` |  |
| `condiciones_corto` | `String` |  |
| `fecha` | `String` |  |
| `fondo` | `String` |  |
| `nombre` | `String` |  |
| `tea` | `Float` |  |
| `tipo` | `String` |  |
| `tna` | `Float` |  |
| `tope` | `Float` |  |

#### Example: Load

```ruby
# load returns the bare FondoComunInversionVariable record (raises on error).
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
| `entidad` | `String` |  |
| `metadata` | `Hash` |  |
| `nombre_comercial` | `String` |  |
| `tna` | `Float` |  |

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
| `fecha_emision` | `String` |  |
| `fecha_vencimiento` | `String` |  |
| `tem` | `Float` |  |
| `ticker` | `String` |  |
| `vpv` | `Float` |  |

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
| `fin` | `String` |  |
| `imagen` | `String` |  |
| `inicio` | `String` |  |
| `nombre` | `String` |  |
| `partido` | `String` |  |
| `partido_imagen` | `String` |  |
| `periodo_presidencial` | `String` |  |
| `vicepresidente` | `String` |  |

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
| `aviso_precancelacion_dia` | `Integer` |  |
| `canal` | `String` |  |
| `enlace` | `String` |  |
| `entidad` | `String` |  |
| `id` | `String` |  |
| `logo` | `String` |  |
| `modalidad` | `String` |  |
| `moneda` | `String` |  |
| `monto_maximo` | `Float` |  |
| `monto_minimo` | `Float` |  |
| `plazo_max_dia` | `Integer` |  |
| `plazo_min_dia` | `Integer` |  |
| `plazo_precancelacion_dia` | `Integer` |  |
| `tea` | `Float` |  |
| `tea_precancelacion` | `Float` |  |
| `tna` | `Float` |  |
| `tna_precancelacion` | `Float` |  |

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
| `entidad` | `String` |  |
| `id` | `String` |  |
| `logo` | `String` |  |
| `tasa` | `Array` |  |

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
| `fecha` | `String` |  |
| `fuente` | `String` |  |
| `indicador` | `String` |  |
| `informe` | `String` |  |
| `maximo` | `Float` |  |
| `mediana` | `Float` |  |
| `minimo` | `Float` |  |
| `muestra` | `String` |  |
| `participante` | `Integer` |  |
| `percentil10` | `Float` |  |
| `percentil25` | `Float` |  |
| `percentil75` | `Float` |  |
| `percentil90` | `Float` |  |
| `periodo` | `String` |  |
| `periodo_desde` | `String` |  |
| `periodo_hasta` | `String` |  |
| `periodo_tipo` | `String` |  |
| `promedio` | `Float` |  |
| `publicacion_url` | `String` |  |
| `referencia` | `String` |  |
| `referencia_fecha` | `String` |  |
| `unidad` | `String` |  |
| `xlsx_url` | `String` |  |

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
| `fecha` | `String` |  |
| `fuente` | `String` |  |
| `indicador` | `String` |  |
| `informe` | `String` |  |
| `maximo` | `Float` |  |
| `mediana` | `Float` |  |
| `minimo` | `Float` |  |
| `muestra` | `String` |  |
| `participante` | `Integer` |  |
| `percentil10` | `Float` |  |
| `percentil25` | `Float` |  |
| `percentil75` | `Float` |  |
| `percentil90` | `Float` |  |
| `periodo` | `String` |  |
| `periodo_desde` | `String` |  |
| `periodo_hasta` | `String` |  |
| `periodo_tipo` | `String` |  |
| `promedio` | `Float` |  |
| `publicacion_url` | `String` |  |
| `referencia` | `String` |  |
| `referencia_fecha` | `String` |  |
| `unidad` | `String` |  |
| `xlsx_url` | `String` |  |

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
# load returns the bare Rendimiento record (raises on error).
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
# load returns the bare RiesgoPai record (raises on error).
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
| `observacione` | `String` |  |
| `partido` | `String` |  |
| `periodo_legal` | `Hash` |  |
| `periodo_real` | `Hash` |  |
| `provincia` | `String` |  |
| `rede` | `Array` |  |
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
| `logo` | `String` |  |
| `tna_cliente` | `Float` |  |
| `tna_no_cliente` | `Float` |  |

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
acta = client.Acta
acta.list()

# acta.data_get now returns the acta data from the last list
# acta.match_get returns the last match criteria
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
