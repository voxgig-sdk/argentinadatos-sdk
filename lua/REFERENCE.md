# Argentinadatos Lua SDK Reference

Complete API reference for the Argentinadatos Lua SDK.


## ArgentinadatosSDK

### Constructor

```lua
local sdk = require("argentinadatos_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Acta(data)`

Create a new `Acta` entity instance. Pass `nil` for no initial data.

#### `BonosCer(data)`

Create a new `BonosCer` entity instance. Pass `nil` for no initial data.

#### `Cotizacion(data)`

Create a new `Cotizacion` entity instance. Pass `nil` for no initial data.

#### `Criptopeso(data)`

Create a new `Criptopeso` entity instance. Pass `nil` for no initial data.

#### `CuentaRemuneradaUsd(data)`

Create a new `CuentaRemuneradaUsd` entity instance. Pass `nil` for no initial data.

#### `Diputado(data)`

Create a new `Diputado` entity instance. Pass `nil` for no initial data.

#### `EntidadRendimiento(data)`

Create a new `EntidadRendimiento` entity instance. Pass `nil` for no initial data.

#### `Estado(data)`

Create a new `Estado` entity instance. Pass `nil` for no initial data.

#### `EventoPresidencial(data)`

Create a new `EventoPresidencial` entity instance. Pass `nil` for no initial data.

#### `Feriado(data)`

Create a new `Feriado` entity instance. Pass `nil` for no initial data.

#### `Finanza(data)`

Create a new `Finanza` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversion(data)`

Create a new `FondoComunInversion` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversionOtro(data)`

Create a new `FondoComunInversionOtro` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversionVariable(data)`

Create a new `FondoComunInversionVariable` entity instance. Pass `nil` for no initial data.

#### `HipotecarioUvaTna(data)`

Create a new `HipotecarioUvaTna` entity instance. Pass `nil` for no initial data.

#### `IndiceInflacion(data)`

Create a new `IndiceInflacion` entity instance. Pass `nil` for no initial data.

#### `IndiceUva(data)`

Create a new `IndiceUva` entity instance. Pass `nil` for no initial data.

#### `Letra(data)`

Create a new `Letra` entity instance. Pass `nil` for no initial data.

#### `Presidente(data)`

Create a new `Presidente` entity instance. Pass `nil` for no initial data.

#### `ProveedorPlazoFijoPrecancelable(data)`

Create a new `ProveedorPlazoFijoPrecancelable` entity instance. Pass `nil` for no initial data.

#### `ProveedorPlazoFijoUvaPagoPeriodico(data)`

Create a new `ProveedorPlazoFijoUvaPagoPeriodico` entity instance. Pass `nil` for no initial data.

#### `Rem(data)`

Create a new `Rem` entity instance. Pass `nil` for no initial data.

#### `RemExpectativa(data)`

Create a new `RemExpectativa` entity instance. Pass `nil` for no initial data.

#### `Rendimiento(data)`

Create a new `Rendimiento` entity instance. Pass `nil` for no initial data.

#### `RiesgoPai(data)`

Create a new `RiesgoPai` entity instance. Pass `nil` for no initial data.

#### `Senador(data)`

Create a new `Senador` entity instance. Pass `nil` for no initial data.

#### `TasaIntere(data)`

Create a new `TasaIntere` entity instance. Pass `nil` for no initial data.

#### `TasaPlazoFijo(data)`

Create a new `TasaPlazoFijo` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActaEntity

```lua
local acta = client:Acta(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstencione` | `number` | No |  |
| `acta` | `string` | No |  |
| `acta_id` | `number` | No |  |
| `afirmativo` | `number` | No |  |
| `amn` | `number` | No |  |
| `ausente` | `number` | No |  |
| `descripcion` | `string` | No |  |
| `fecha` | `string` | No |  |
| `id` | `string` | No |  |
| `mayoria` | `string` | No |  |
| `miembro` | `number` | No |  |
| `negativo` | `number` | No |  |
| `numero_acta` | `string` | No |  |
| `observacione` | `table` | No |  |
| `periodo` | `string` | No |  |
| `presente` | `number` | No |  |
| `presidente` | `string` | No |  |
| `proyecto` | `string` | No |  |
| `quorum_tipo` | `string` | No |  |
| `resultado` | `string` | No |  |
| `reunion` | `string` | No |  |
| `titulo` | `string` | No |  |
| `voto` | `table` | No |  |
| `votos_afirmativo` | `number` | No |  |
| `votos_negativo` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Acta():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Acta():load({ id = "acta_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BonosCerEntity

```lua
local bonos_cer = client:BonosCer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_vencimiento` | `string` | Yes |  |
| `precio_ar` | `number` | Yes |  |
| `ticker` | `string` | Yes |  |
| `tir_porcentaje` | `number` | Yes |  |
| `voluman` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BonosCer():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BonosCerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CotizacionEntity

```lua
local cotizacion = client:Cotizacion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | No |  |
| `compra` | `number` | No |  |
| `fecha` | `string` | No |  |
| `moneda` | `string` | No |  |
| `venta` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cotizacion():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Cotizacion():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CotizacionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CriptopesoEntity

```lua
local criptopeso = client:Criptopeso(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `tna` | `number` | No |  |
| `token` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Criptopeso():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CriptopesoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CuentaRemuneradaUsdEntity

```lua
local cuenta_remunerada_usd = client:CuentaRemuneradaUsd(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `tasa` | `number` | No |  |
| `tope` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CuentaRemuneradaUsd():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CuentaRemuneradaUsdEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DiputadoEntity

```lua
local diputado = client:Diputado(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apellido` | `string` | No |  |
| `bloque` | `string` | No |  |
| `cese_fecha` | `string` | No |  |
| `foto` | `string` | No |  |
| `genero` | `string` | No |  |
| `id` | `string` | No |  |
| `juramento_fecha` | `string` | No |  |
| `nombre` | `string` | No |  |
| `periodo_bloque` | `table` | No |  |
| `periodo_mandato` | `table` | No |  |
| `provincia` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Diputado():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiputadoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EntidadRendimientoEntity

```lua
local entidad_rendimiento = client:EntidadRendimiento(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `rendimiento` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EntidadRendimiento():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntidadRendimientoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EstadoEntity

```lua
local estado = client:Estado(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `number` | No |  |
| `estado` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Estado():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EventoPresidencialEntity

```lua
local evento_presidencial = client:EventoPresidencial(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | `string` | No |  |
| `fecha` | `string` | No |  |
| `tipo` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EventoPresidencial():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventoPresidencialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FeriadoEntity

```lua
local feriado = client:Feriado(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `nombre` | `string` | No |  |
| `tipo` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Feriado():load({ id = "feriado_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeriadoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FinanzaEntity

```lua
local finanza = client:Finanza(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Finanza():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinanzaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FondoComunInversionEntity

```lua
local fondo_comun_inversion = client:FondoComunInversion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ccp` | `number` | No |  |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No |  |
| `horizonte` | `string` | No |  |
| `patrimonio` | `number` | No |  |
| `tipo` | `string` | No |  |
| `vcp` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FondoComunInversion():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FondoComunInversionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FondoComunInversionOtroEntity

```lua
local fondo_comun_inversion_otro = client:FondoComunInversionOtro(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No |  |
| `tea` | `number` | No |  |
| `tna` | `number` | No |  |
| `tope` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FondoComunInversionOtro():load({ id = "fondo_comun_inversion_otro_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FondoComunInversionOtroEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FondoComunInversionVariableEntity

```lua
local fondo_comun_inversion_variable = client:FondoComunInversionVariable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condicione` | `string` | No |  |
| `condiciones_corto` | `string` | No |  |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No |  |
| `nombre` | `string` | No |  |
| `tea` | `number` | No |  |
| `tipo` | `string` | No |  |
| `tna` | `number` | No |  |
| `tope` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FondoComunInversionVariable():load({ id = "fondo_comun_inversion_variable_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FondoComunInversionVariableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HipotecarioUvaTnaEntity

```lua
local hipotecario_uva_tna = client:HipotecarioUvaTna(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `metadata` | `table` | No |  |
| `nombre_comercial` | `string` | No |  |
| `tna` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:HipotecarioUvaTna():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HipotecarioUvaTnaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IndiceInflacionEntity

```lua
local indice_inflacion = client:IndiceInflacion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IndiceInflacion():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndiceInflacionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IndiceUvaEntity

```lua
local indice_uva = client:IndiceUva(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IndiceUva():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndiceUvaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LetraEntity

```lua
local letra = client:Letra(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_emision` | `string` | No |  |
| `fecha_vencimiento` | `string` | No |  |
| `tem` | `number` | No |  |
| `ticker` | `string` | No |  |
| `vpv` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Letra():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LetraEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PresidenteEntity

```lua
local presidente = client:Presidente(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fin` | `string` | No |  |
| `imagen` | `string` | No |  |
| `inicio` | `string` | No |  |
| `nombre` | `string` | No |  |
| `partido` | `string` | No |  |
| `partido_imagen` | `string` | No |  |
| `periodo_presidencial` | `string` | No |  |
| `vicepresidente` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Presidente():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PresidenteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProveedorPlazoFijoPrecancelableEntity

```lua
local proveedor_plazo_fijo_precancelable = client:ProveedorPlazoFijoPrecancelable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aviso_precancelacion_dia` | `number` | No |  |
| `canal` | `string` | No |  |
| `enlace` | `string` | No |  |
| `entidad` | `string` | No |  |
| `id` | `string` | No |  |
| `logo` | `string` | No |  |
| `modalidad` | `string` | No |  |
| `moneda` | `string` | No |  |
| `monto_maximo` | `number` | No |  |
| `monto_minimo` | `number` | No |  |
| `plazo_max_dia` | `number` | No |  |
| `plazo_min_dia` | `number` | No |  |
| `plazo_precancelacion_dia` | `number` | No |  |
| `tea` | `number` | No |  |
| `tea_precancelacion` | `number` | No |  |
| `tna` | `number` | No |  |
| `tna_precancelacion` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProveedorPlazoFijoPrecancelable():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProveedorPlazoFijoUvaPagoPeriodicoEntity

```lua
local proveedor_plazo_fijo_uva_pago_periodico = client:ProveedorPlazoFijoUvaPagoPeriodico(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `id` | `string` | No |  |
| `logo` | `string` | No |  |
| `tasa` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProveedorPlazoFijoUvaPagoPeriodico():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RemEntity

```lua
local rem = client:Rem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `number` | No |  |
| `fecha` | `string` | No |  |
| `fuente` | `string` | No |  |
| `indicador` | `string` | No |  |
| `informe` | `string` | No |  |
| `maximo` | `number` | No |  |
| `mediana` | `number` | No |  |
| `minimo` | `number` | No |  |
| `muestra` | `string` | No |  |
| `participante` | `number` | No |  |
| `percentil10` | `number` | No |  |
| `percentil25` | `number` | No |  |
| `percentil75` | `number` | No |  |
| `percentil90` | `number` | No |  |
| `periodo` | `string` | No |  |
| `periodo_desde` | `string` | No |  |
| `periodo_hasta` | `string` | No |  |
| `periodo_tipo` | `string` | No |  |
| `promedio` | `number` | No |  |
| `publicacion_url` | `string` | No |  |
| `referencia` | `string` | No |  |
| `referencia_fecha` | `string` | No |  |
| `unidad` | `string` | No |  |
| `xlsx_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Rem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RemExpectativaEntity

```lua
local rem_expectativa = client:RemExpectativa(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `number` | No |  |
| `fecha` | `string` | No |  |
| `fuente` | `string` | No |  |
| `indicador` | `string` | No |  |
| `informe` | `string` | No |  |
| `maximo` | `number` | No |  |
| `mediana` | `number` | No |  |
| `minimo` | `number` | No |  |
| `muestra` | `string` | No |  |
| `participante` | `number` | No |  |
| `percentil10` | `number` | No |  |
| `percentil25` | `number` | No |  |
| `percentil75` | `number` | No |  |
| `percentil90` | `number` | No |  |
| `periodo` | `string` | No |  |
| `periodo_desde` | `string` | No |  |
| `periodo_hasta` | `string` | No |  |
| `periodo_tipo` | `string` | No |  |
| `promedio` | `number` | No |  |
| `publicacion_url` | `string` | No |  |
| `referencia` | `string` | No |  |
| `referencia_fecha` | `string` | No |  |
| `unidad` | `string` | No |  |
| `xlsx_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RemExpectativa():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemExpectativaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RendimientoEntity

```lua
local rendimiento = client:Rendimiento(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | `number` | No |  |
| `fecha` | `string` | No |  |
| `moneda` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Rendimiento():load({ id = "rendimiento_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RendimientoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RiesgoPaiEntity

```lua
local riesgo_pai = client:RiesgoPai(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RiesgoPai():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RiesgoPai():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RiesgoPaiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SenadorEntity

```lua
local senador = client:Senador(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `foto` | `string` | No |  |
| `id` | `string` | No |  |
| `nombre` | `string` | No |  |
| `observacione` | `string` | No |  |
| `partido` | `string` | No |  |
| `periodo_legal` | `table` | No |  |
| `periodo_real` | `table` | No |  |
| `provincia` | `string` | No |  |
| `rede` | `table` | No |  |
| `reemplazo` | `string` | No |  |
| `telefono` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Senador():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SenadorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TasaIntereEntity

```lua
local tasa_intere = client:TasaIntere(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TasaIntere():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TasaIntereEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TasaPlazoFijoEntity

```lua
local tasa_plazo_fijo = client:TasaPlazoFijo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `logo` | `string` | No |  |
| `tna_cliente` | `number` | No |  |
| `tna_no_cliente` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TasaPlazoFijo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TasaPlazoFijoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

