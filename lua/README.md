# Argentinadatos Lua SDK



The Lua SDK for the Argentinadatos API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Acta()` — each with the same small set of operations (`list`, `load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/argentinadatos-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("argentinadatos_sdk")

local client = sdk.new()
```

### 2. List acta records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local actas, err = client:Acta():list()
if err then error(err) end

for _, item in ipairs(actas) do
  print(item["id"], item["acta"])
end
```

### 3. Load a cotizacion

Cotizacion is nested under casa, so provide the `casa`.

```lua
local cotizacion, err = client:Cotizacion():load({ casa = "example_casa" })
if err then error(err) end
print(cotizacion)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local rendimiento, err = client:Rendimiento():load({ id = "example_id" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Rendimiento():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### ArgentinadatosSDK

```lua
local sdk = require("argentinadatos_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ArgentinadatosSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local acta, err = client:Acta():load({ id = "example_id" })
    if err then error(err) end
    -- acta is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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
| `id` |  |
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
| `id` |  |
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
| `id` |  |
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
| `id` |  |
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
| `id` |  |
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

Create an instance: `local acta = client:Acta(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abstenciones` | `number` |  |
| `acta` | `string` |  |
| `actaId` | `number` |  |
| `afirmativos` | `number` |  |
| `amn` | `number` |  |
| `ausentes` | `number` |  |
| `descripcion` | `string` |  |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `mayoria` | `string` |  |
| `miembros` | `number` |  |
| `negativos` | `number` |  |
| `numeroActa` | `string` |  |
| `observaciones` | `table` |  |
| `periodo` | `string` |  |
| `presentes` | `number` |  |
| `presidente` | `string` |  |
| `proyecto` | `string` |  |
| `quorumTipo` | `string` |  |
| `resultado` | `string` |  |
| `reunion` | `string` |  |
| `titulo` | `string` |  |
| `votos` | `table` |  |
| `votosAfirmativos` | `number` |  |
| `votosNegativos` | `number` |  |

#### Example: Load

```lua
local acta, err = client:Acta():load({ id = 1 })
```

#### Example: List

```lua
local actas, err = client:Acta():list()
```


### BonosCer

Create an instance: `local bonos_cer = client:BonosCer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fechaVencimiento` | `string` | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `precioArs` | `number` | Precio de cotización en pesos argentinos |
| `ticker` | `string` | Código del bono (ej. |
| `tirPorcentaje` | `number` | Tasa interna de retorno (TIR) en porcentaje |
| `volumen` | `number` | Volumen nominal negociado, si la fuente lo publica |

#### Example: List

```lua
local bonos_cers, err = client:BonosCer():list()
```


### Cotizacion

Create an instance: `local cotizacion = client:Cotizacion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `number` |  |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `moneda` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```lua
local cotizacion, err = client:Cotizacion():load({ casa = "casa" })
```

#### Example: List

```lua
local cotizacions, err = client:Cotizacion():list()
```


### Criptopeso

Create an instance: `local criptopeso = client:Criptopeso(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` | Nombre de la entidad que ofrece el criptopeso |
| `tna` | `number` | Tasa Nominal Anual en porcentaje |
| `token` | `string` | Token del criptopeso (ej: ARGt, wARS) |

#### Example: List

```lua
local criptopesos, err = client:Criptopeso():list()
```


### CuentaRemuneradaUsd

Create an instance: `local cuenta_remunerada_usd = client:CuentaRemuneradaUsd(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` | Identificador de la entidad (p. |
| `tasa` | `number` | Tasa de rendimiento anual en formato decimal (p. |
| `tope` | `number` | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

#### Example: List

```lua
local cuenta_remunerada_usds, err = client:CuentaRemuneradaUsd():list()
```


### Diputado

Create an instance: `local diputado = client:Diputado(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apellido` | `string` |  |
| `bloque` | `string` |  |
| `ceseFecha` | `string` |  |
| `foto` | `string` |  |
| `genero` | `string` |  |
| `id` | `string` |  |
| `juramentoFecha` | `string` |  |
| `nombre` | `string` |  |
| `periodoBloque` | `table` |  |
| `periodoMandato` | `table` |  |
| `provincia` | `string` |  |

#### Example: List

```lua
local diputados, err = client:Diputado():list()
```


### EntidadRendimiento

Create an instance: `local entidad_rendimiento = client:EntidadRendimiento(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `rendimientos` | `table` |  |

#### Example: List

```lua
local entidad_rendimientos, err = client:EntidadRendimiento():list()
```


### Estado

Create an instance: `local estado = client:Estado(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | `number` |  |
| `estado` | `string` |  |

#### Example: Load

```lua
local estado, err = client:Estado():load()
```


### EventoPresidencial

Create an instance: `local evento_presidencial = client:EventoPresidencial(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evento` | `string` |  |
| `fecha` | `string` |  |
| `tipo` | `string` |  |

#### Example: List

```lua
local evento_presidencials, err = client:EventoPresidencial():list()
```


### Feriado

Create an instance: `local feriado = client:Feriado(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `nombre` | `string` |  |
| `tipo` | `string` |  |

#### Example: Load

```lua
local feriado, err = client:Feriado():load({ id = 1 })
```


### Finanza

Create an instance: `local finanza = client:Finanza(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```lua
local finanzas, err = client:Finanza():list()
```


### FondoComunInversion

Create an instance: `local fondo_comun_inversion = client:FondoComunInversion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ccp` | `number` |  |
| `fecha` | `string` |  |
| `fondo` | `string` |  |
| `horizonte` | `string` |  |
| `patrimonio` | `number` |  |
| `tipo` | `string` |  |
| `vcp` | `number` |  |

#### Example: Load

```lua
local fondo_comun_inversion, err = client:FondoComunInversion():load({ fecha = "fecha" })
```


### FondoComunInversionOtro

Create an instance: `local fondo_comun_inversion_otro = client:FondoComunInversionOtro(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `fondo` | `string` |  |
| `id` | `string` |  |
| `tea` | `number` |  |
| `tna` | `number` |  |
| `tope` | `number` |  |

#### Example: Load

```lua
local fondo_comun_inversion_otro, err = client:FondoComunInversionOtro():load({ id = "fondo_comun_inversion_otro_id" })
```


### FondoComunInversionVariable

Create an instance: `local fondo_comun_inversion_variable = client:FondoComunInversionVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condiciones` | `string` |  |
| `condicionesCorto` | `string` |  |
| `fecha` | `string` |  |
| `fondo` | `string` | Nombre del fondo común de inversión (clase o denominación oficial). |
| `id` | `string` |  |
| `nombre` | `string` | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `tea` | `number` |  |
| `tipo` | `string` | Clasificación del instrumento. |
| `tna` | `number` |  |
| `tope` | `number` |  |

#### Example: Load

```lua
local fondo_comun_inversion_variable, err = client:FondoComunInversionVariable():load({ id = "fondo_comun_inversion_variable_id" })
```


### HipotecarioUvaTna

Create an instance: `local hipotecario_uva_tna = client:HipotecarioUvaTna(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` | Nombre del banco u oferente del crédito hipotecario UVA |
| `metadata` | `table` | Detalle de condiciones |
| `nombreComercial` | `string` | Nombre comercial |
| `tna` | `number` | Tasa Nominal Anual |

#### Example: List

```lua
local hipotecario_uva_tnas, err = client:HipotecarioUvaTna():list()
```


### IndiceInflacion

Create an instance: `local indice_inflacion = client:IndiceInflacion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `number` |  |

#### Example: List

```lua
local indice_inflacions, err = client:IndiceInflacion():list()
```


### IndiceUva

Create an instance: `local indice_uva = client:IndiceUva(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `number` |  |

#### Example: List

```lua
local indice_uvas, err = client:IndiceUva():list()
```


### Letra

Create an instance: `local letra = client:Letra(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fechaEmision` | `string` | Fecha de emisión original (ISO 8601) |
| `fechaVencimiento` | `string` | Fecha de vencimiento (ISO 8601) |
| `tem` | `number` | Tasa Efectiva Mensual (%) |
| `ticker` | `string` | Código del instrumento (ej: S31G5, T17O5) |
| `vpv` | `number` | Valor de Pago al Vencimiento por cada $100 de valor nominal |

#### Example: List

```lua
local letras, err = client:Letra():list()
```


### Presidente

Create an instance: `local presidente = client:Presidente(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fin` | `string` | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `imagen` | `string` | URL de la imagen del presidente |
| `inicio` | `string` | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `nombre` | `string` |  |
| `partido` | `string` |  |
| `partidoImagen` | `string` | URL de la imagen del logo del partido político |
| `periodoPresidencial` | `string` | Rango de años del período presidencial (ej: '2019-2023') |
| `vicepresidente` | `string` | Nombre del vicepresidente. |

#### Example: List

```lua
local presidentes, err = client:Presidente():list()
```


### ProveedorPlazoFijoPrecancelable

Create an instance: `local proveedor_plazo_fijo_precancelable = client:ProveedorPlazoFijoPrecancelable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avisoPrecancelacionDias` | `number` | Días hábiles de aviso previo para precancelar |
| `canal` | `string` | Canales publicados para constituir el plazo fijo |
| `enlace` | `string` | URL de la fuente |
| `entidad` | `string` | Nombre de la entidad |
| `id` | `string` | Identificador estable del proveedor |
| `logo` | `string` | URL del logo de la entidad |
| `modalidad` | `string` | Modalidad publicada por la entidad |
| `moneda` | `string` | Moneda de constitución |
| `montoMaximo` | `number` | Monto máximo de constitución |
| `montoMinimo` | `number` | Monto mínimo de constitución |
| `plazoMaxDias` | `number` | Plazo máximo en días |
| `plazoMinDias` | `number` | Plazo mínimo en días |
| `plazoPrecancelacionDias` | `number` | Días mínimos para ejercer la precancelación |
| `tea` | `number` | Tasa Efectiva Anual |
| `teaPrecancelacion` | `number` | Tasa Efectiva Anual aplicada ante precancelación |
| `tna` | `number` | Tasa Nominal Anual |
| `tnaPrecancelacion` | `number` | Tasa Nominal Anual aplicada ante precancelación |

#### Example: List

```lua
local proveedor_plazo_fijo_precancelables, err = client:ProveedorPlazoFijoPrecancelable():list()
```


### ProveedorPlazoFijoUvaPagoPeriodico

Create an instance: `local proveedor_plazo_fijo_uva_pago_periodico = client:ProveedorPlazoFijoUvaPagoPeriodico(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` | Nombre de la entidad |
| `id` | `string` | Identificador estable del proveedor (p. |
| `logo` | `string` | URL del logo de la entidad |
| `tasas` | `table` | Tasas por rango de plazo |

#### Example: List

```lua
local proveedor_plazo_fijo_uva_pago_periodicos, err = client:ProveedorPlazoFijoUvaPagoPeriodico():list()
```


### Rem

Create an instance: `local rem = client:Rem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `number` |  |
| `fecha` | `string` | Fecha ISO del primer día del mes del informe |
| `fuente` | `string` |  |
| `indicador` | `string` | Indicador relevado |
| `informe` | `string` | Informe REM en formato YYYY-MM |
| `maximo` | `number` |  |
| `mediana` | `number` |  |
| `minimo` | `number` |  |
| `muestra` | `string` | Muestra de participantes: todos o TOP 10 |
| `participantes` | `number` |  |
| `percentil10` | `number` |  |
| `percentil25` | `number` |  |
| `percentil75` | `number` |  |
| `percentil90` | `number` |  |
| `periodo` | `string` | Período original informado por el BCRA |
| `periodoDesde` | `string` | Fecha de inicio del período normalizado |
| `periodoHasta` | `string` | Fecha de fin del período normalizado |
| `periodoTipo` | `string` | Tipo de período normalizado |
| `promedio` | `number` |  |
| `publicacionUrl` | `string` |  |
| `referencia` | `string` | Referencia original de la tabla |
| `referenciaFecha` | `string` | Fecha detectada en la referencia, si corresponde |
| `unidad` | `string` | Unidad inferida desde la referencia |
| `xlsxUrl` | `string` |  |

#### Example: List

```lua
local rems, err = client:Rem():list()
```


### RemExpectativa

Create an instance: `local rem_expectativa = client:RemExpectativa(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `number` |  |
| `fecha` | `string` | Fecha ISO del primer día del mes del informe |
| `fuente` | `string` |  |
| `indicador` | `string` | Indicador relevado |
| `informe` | `string` | Informe REM en formato YYYY-MM |
| `maximo` | `number` |  |
| `mediana` | `number` |  |
| `minimo` | `number` |  |
| `muestra` | `string` | Muestra de participantes: todos o TOP 10 |
| `participantes` | `number` |  |
| `percentil10` | `number` |  |
| `percentil25` | `number` |  |
| `percentil75` | `number` |  |
| `percentil90` | `number` |  |
| `periodo` | `string` | Período original informado por el BCRA |
| `periodoDesde` | `string` | Fecha de inicio del período normalizado |
| `periodoHasta` | `string` | Fecha de fin del período normalizado |
| `periodoTipo` | `string` | Tipo de período normalizado |
| `promedio` | `number` |  |
| `publicacionUrl` | `string` |  |
| `referencia` | `string` | Referencia original de la tabla |
| `referenciaFecha` | `string` | Fecha detectada en la referencia, si corresponde |
| `unidad` | `string` | Unidad inferida desde la referencia |
| `xlsxUrl` | `string` |  |

#### Example: List

```lua
local rem_expectativas, err = client:RemExpectativa():list()
```


### Rendimiento

Create an instance: `local rendimiento = client:Rendimiento(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apy` | `number` |  |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `moneda` | `string` |  |

#### Example: Load

```lua
local rendimiento, err = client:Rendimiento():load({ id = "rendimiento_id" })
```


### RiesgoPai

Create an instance: `local riesgo_pai = client:RiesgoPai(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `number` |  |

#### Example: Load

```lua
local riesgo_pai, err = client:RiesgoPai():load()
```

#### Example: List

```lua
local riesgo_pais, err = client:RiesgoPai():list()
```


### Senador

Create an instance: `local senador = client:Senador(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `foto` | `string` |  |
| `id` | `string` |  |
| `nombre` | `string` |  |
| `observaciones` | `string` |  |
| `partido` | `string` |  |
| `periodoLegal` | `table` |  |
| `periodoReal` | `table` |  |
| `provincia` | `string` |  |
| `redes` | `table` |  |
| `reemplazo` | `string` |  |
| `telefono` | `string` |  |

#### Example: List

```lua
local senadors, err = client:Senador():list()
```


### TasaIntere

Create an instance: `local tasa_intere = client:TasaIntere(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `number` |  |

#### Example: List

```lua
local tasa_interes, err = client:TasaIntere():list()
```


### TasaPlazoFijo

Create an instance: `local tasa_plazo_fijo = client:TasaPlazoFijo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `logo` | `string` | URL del logo de la entidad |
| `tnaClientes` | `number` | Tasa Nominal Anual para clientes, en porcentaje |
| `tnaNoClientes` | `number` | Tasa Nominal Anual para no clientes, en porcentaje |

#### Example: List

```lua
local tasa_plazo_fijos, err = client:TasaPlazoFijo():list()
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── argentinadatos_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`argentinadatos_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local rendimiento = client:Rendimiento()
rendimiento:load({ id = "example_id" })

-- rendimiento:data_get() now returns the rendimiento data from the last load
-- rendimiento:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
