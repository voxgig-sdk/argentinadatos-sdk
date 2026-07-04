# Argentinadatos Lua SDK



The Lua SDK for the Argentinadatos API — an entity-oriented client using Lua conventions.

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
  print(item["id"], item["name"])
end
```

### 3. Load an acta

```lua
local acta, err = client:Acta():load({ id = "example_id" })
if err then error(err) end
print(acta)
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

local result, err = client:Acta():load({ id = "test01" })
-- result is the loaded data; err is set on failure
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
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
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
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
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

Create an instance: `local acta = client:Acta(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abstencione` | ``$INTEGER`` |  |
| `acta` | ``$STRING`` |  |
| `acta_id` | ``$INTEGER`` |  |
| `afirmativo` | ``$INTEGER`` |  |
| `amn` | ``$INTEGER`` |  |
| `ausente` | ``$INTEGER`` |  |
| `descripcion` | ``$STRING`` |  |
| `fecha` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `mayoria` | ``$STRING`` |  |
| `miembro` | ``$INTEGER`` |  |
| `negativo` | ``$INTEGER`` |  |
| `numero_acta` | ``$STRING`` |  |
| `observacione` | ``$ARRAY`` |  |
| `periodo` | ``$STRING`` |  |
| `presente` | ``$INTEGER`` |  |
| `presidente` | ``$STRING`` |  |
| `proyecto` | ``$STRING`` |  |
| `quorum_tipo` | ``$STRING`` |  |
| `resultado` | ``$STRING`` |  |
| `reunion` | ``$STRING`` |  |
| `titulo` | ``$STRING`` |  |
| `voto` | ``$ARRAY`` |  |
| `votos_afirmativo` | ``$INTEGER`` |  |
| `votos_negativo` | ``$INTEGER`` |  |

#### Example: Load

```lua
local acta, err = client:Acta():load({ id = "acta_id" })
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
| `fecha_vencimiento` | ``$STRING`` |  |
| `precio_ar` | ``$NUMBER`` |  |
| `ticker` | ``$STRING`` |  |
| `tir_porcentaje` | ``$NUMBER`` |  |
| `voluman` | ``$NUMBER`` |  |

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
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```lua
local cotizacion, err = client:Cotizacion():load({ id = "cotizacion_id" })
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
| `entidad` | ``$STRING`` |  |
| `tna` | ``$NUMBER`` |  |
| `token` | ``$STRING`` |  |

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
| `entidad` | ``$STRING`` |  |
| `tasa` | ``$NUMBER`` |  |
| `tope` | ``$NUMBER`` |  |

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
| `apellido` | ``$STRING`` |  |
| `bloque` | ``$STRING`` |  |
| `cese_fecha` | ``$STRING`` |  |
| `foto` | ``$STRING`` |  |
| `genero` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `juramento_fecha` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `periodo_bloque` | ``$OBJECT`` |  |
| `periodo_mandato` | ``$OBJECT`` |  |
| `provincia` | ``$STRING`` |  |

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
| `entidad` | ``$STRING`` |  |
| `rendimiento` | ``$ARRAY`` |  |

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
| `aleatorio` | ``$INTEGER`` |  |
| `estado` | ``$STRING`` |  |

#### Example: Load

```lua
local estado, err = client:Estado():load({ id = "estado_id" })
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
| `evento` | ``$STRING`` |  |
| `fecha` | ``$STRING`` |  |
| `tipo` | ``$STRING`` |  |

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
| `fecha` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `tipo` | ``$STRING`` |  |

#### Example: Load

```lua
local feriado, err = client:Feriado():load({ id = "feriado_id" })
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
| `ccp` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `fondo` | ``$STRING`` |  |
| `horizonte` | ``$STRING`` |  |
| `patrimonio` | ``$NUMBER`` |  |
| `tipo` | ``$STRING`` |  |
| `vcp` | ``$NUMBER`` |  |

#### Example: Load

```lua
local fondo_comun_inversion, err = client:FondoComunInversion():load({ id = "fondo_comun_inversion_id" })
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
| `fecha` | ``$STRING`` |  |
| `fondo` | ``$STRING`` |  |
| `tea` | ``$NUMBER`` |  |
| `tna` | ``$NUMBER`` |  |
| `tope` | ``$NUMBER`` |  |

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
| `condicione` | ``$STRING`` |  |
| `condiciones_corto` | ``$STRING`` |  |
| `fecha` | ``$STRING`` |  |
| `fondo` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `tea` | ``$NUMBER`` |  |
| `tipo` | ``$STRING`` |  |
| `tna` | ``$NUMBER`` |  |
| `tope` | ``$NUMBER`` |  |

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
| `entidad` | ``$STRING`` |  |
| `metadata` | ``$OBJECT`` |  |
| `nombre_comercial` | ``$STRING`` |  |
| `tna` | ``$NUMBER`` |  |

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
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

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
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

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
| `fecha_emision` | ``$STRING`` |  |
| `fecha_vencimiento` | ``$STRING`` |  |
| `tem` | ``$NUMBER`` |  |
| `ticker` | ``$STRING`` |  |
| `vpv` | ``$NUMBER`` |  |

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
| `fin` | ``$STRING`` |  |
| `imagen` | ``$STRING`` |  |
| `inicio` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `partido` | ``$STRING`` |  |
| `partido_imagen` | ``$STRING`` |  |
| `periodo_presidencial` | ``$STRING`` |  |
| `vicepresidente` | ``$STRING`` |  |

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
| `aviso_precancelacion_dia` | ``$INTEGER`` |  |
| `canal` | ``$STRING`` |  |
| `enlace` | ``$STRING`` |  |
| `entidad` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `logo` | ``$STRING`` |  |
| `modalidad` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `monto_maximo` | ``$NUMBER`` |  |
| `monto_minimo` | ``$NUMBER`` |  |
| `plazo_max_dia` | ``$INTEGER`` |  |
| `plazo_min_dia` | ``$INTEGER`` |  |
| `plazo_precancelacion_dia` | ``$INTEGER`` |  |
| `tea` | ``$NUMBER`` |  |
| `tea_precancelacion` | ``$NUMBER`` |  |
| `tna` | ``$NUMBER`` |  |
| `tna_precancelacion` | ``$NUMBER`` |  |

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
| `entidad` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `logo` | ``$STRING`` |  |
| `tasa` | ``$ARRAY`` |  |

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
| `desvio` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `fuente` | ``$STRING`` |  |
| `indicador` | ``$STRING`` |  |
| `informe` | ``$STRING`` |  |
| `maximo` | ``$NUMBER`` |  |
| `mediana` | ``$NUMBER`` |  |
| `minimo` | ``$NUMBER`` |  |
| `muestra` | ``$STRING`` |  |
| `participante` | ``$INTEGER`` |  |
| `percentil10` | ``$NUMBER`` |  |
| `percentil25` | ``$NUMBER`` |  |
| `percentil75` | ``$NUMBER`` |  |
| `percentil90` | ``$NUMBER`` |  |
| `periodo` | ``$STRING`` |  |
| `periodo_desde` | ``$STRING`` |  |
| `periodo_hasta` | ``$STRING`` |  |
| `periodo_tipo` | ``$STRING`` |  |
| `promedio` | ``$NUMBER`` |  |
| `publicacion_url` | ``$STRING`` |  |
| `referencia` | ``$STRING`` |  |
| `referencia_fecha` | ``$STRING`` |  |
| `unidad` | ``$STRING`` |  |
| `xlsx_url` | ``$STRING`` |  |

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
| `desvio` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `fuente` | ``$STRING`` |  |
| `indicador` | ``$STRING`` |  |
| `informe` | ``$STRING`` |  |
| `maximo` | ``$NUMBER`` |  |
| `mediana` | ``$NUMBER`` |  |
| `minimo` | ``$NUMBER`` |  |
| `muestra` | ``$STRING`` |  |
| `participante` | ``$INTEGER`` |  |
| `percentil10` | ``$NUMBER`` |  |
| `percentil25` | ``$NUMBER`` |  |
| `percentil75` | ``$NUMBER`` |  |
| `percentil90` | ``$NUMBER`` |  |
| `periodo` | ``$STRING`` |  |
| `periodo_desde` | ``$STRING`` |  |
| `periodo_hasta` | ``$STRING`` |  |
| `periodo_tipo` | ``$STRING`` |  |
| `promedio` | ``$NUMBER`` |  |
| `publicacion_url` | ``$STRING`` |  |
| `referencia` | ``$STRING`` |  |
| `referencia_fecha` | ``$STRING`` |  |
| `unidad` | ``$STRING`` |  |
| `xlsx_url` | ``$STRING`` |  |

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
| `apy` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |

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
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

#### Example: Load

```lua
local riesgo_pai, err = client:RiesgoPai():load({ id = "riesgo_pai_id" })
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
| `email` | ``$STRING`` |  |
| `foto` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `observacione` | ``$STRING`` |  |
| `partido` | ``$STRING`` |  |
| `periodo_legal` | ``$OBJECT`` |  |
| `periodo_real` | ``$OBJECT`` |  |
| `provincia` | ``$STRING`` |  |
| `rede` | ``$ARRAY`` |  |
| `reemplazo` | ``$STRING`` |  |
| `telefono` | ``$STRING`` |  |

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
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

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
| `entidad` | ``$STRING`` |  |
| `logo` | ``$STRING`` |  |
| `tna_cliente` | ``$NUMBER`` |  |
| `tna_no_cliente` | ``$NUMBER`` |  |

#### Example: List

```lua
local tasa_plazo_fijos, err = client:TasaPlazoFijo():list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

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

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

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
local acta = client:Acta()
acta:load({ id = "example_id" })

-- acta:data_get() now returns the loaded acta data
-- acta:match_get() returns the last match criteria
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
