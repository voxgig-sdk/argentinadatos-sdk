# Argentinadatos Ruby SDK Reference

Complete API reference for the Argentinadatos Ruby SDK.


## ArgentinadatosSDK

### Constructor

```ruby
require_relative 'Argentinadatos_sdk'

client = ArgentinadatosSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ArgentinadatosSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = ArgentinadatosSDK.test
```


### Instance Methods

#### `Acta(data = nil)`

Create a new `Acta` entity instance. Pass `nil` for no initial data.

#### `BonosCer(data = nil)`

Create a new `BonosCer` entity instance. Pass `nil` for no initial data.

#### `Cotizacion(data = nil)`

Create a new `Cotizacion` entity instance. Pass `nil` for no initial data.

#### `Criptopeso(data = nil)`

Create a new `Criptopeso` entity instance. Pass `nil` for no initial data.

#### `CuentaRemuneradaUsd(data = nil)`

Create a new `CuentaRemuneradaUsd` entity instance. Pass `nil` for no initial data.

#### `Diputado(data = nil)`

Create a new `Diputado` entity instance. Pass `nil` for no initial data.

#### `EntidadRendimiento(data = nil)`

Create a new `EntidadRendimiento` entity instance. Pass `nil` for no initial data.

#### `Estado(data = nil)`

Create a new `Estado` entity instance. Pass `nil` for no initial data.

#### `EventoPresidencial(data = nil)`

Create a new `EventoPresidencial` entity instance. Pass `nil` for no initial data.

#### `Feriado(data = nil)`

Create a new `Feriado` entity instance. Pass `nil` for no initial data.

#### `Finanza(data = nil)`

Create a new `Finanza` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversion(data = nil)`

Create a new `FondoComunInversion` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversionOtro(data = nil)`

Create a new `FondoComunInversionOtro` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversionVariable(data = nil)`

Create a new `FondoComunInversionVariable` entity instance. Pass `nil` for no initial data.

#### `HipotecarioUvaTna(data = nil)`

Create a new `HipotecarioUvaTna` entity instance. Pass `nil` for no initial data.

#### `IndiceInflacion(data = nil)`

Create a new `IndiceInflacion` entity instance. Pass `nil` for no initial data.

#### `IndiceUva(data = nil)`

Create a new `IndiceUva` entity instance. Pass `nil` for no initial data.

#### `Letra(data = nil)`

Create a new `Letra` entity instance. Pass `nil` for no initial data.

#### `Presidente(data = nil)`

Create a new `Presidente` entity instance. Pass `nil` for no initial data.

#### `ProveedorPlazoFijoPrecancelable(data = nil)`

Create a new `ProveedorPlazoFijoPrecancelable` entity instance. Pass `nil` for no initial data.

#### `ProveedorPlazoFijoUvaPagoPeriodico(data = nil)`

Create a new `ProveedorPlazoFijoUvaPagoPeriodico` entity instance. Pass `nil` for no initial data.

#### `Rem(data = nil)`

Create a new `Rem` entity instance. Pass `nil` for no initial data.

#### `RemExpectativa(data = nil)`

Create a new `RemExpectativa` entity instance. Pass `nil` for no initial data.

#### `Rendimiento(data = nil)`

Create a new `Rendimiento` entity instance. Pass `nil` for no initial data.

#### `RiesgoPai(data = nil)`

Create a new `RiesgoPai` entity instance. Pass `nil` for no initial data.

#### `Senador(data = nil)`

Create a new `Senador` entity instance. Pass `nil` for no initial data.

#### `TasaIntere(data = nil)`

Create a new `TasaIntere` entity instance. Pass `nil` for no initial data.

#### `TasaPlazoFijo(data = nil)`

Create a new `TasaPlazoFijo` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ActaEntity

```ruby
acta = client.Acta
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstencione` | `Integer` | No |  |
| `acta` | `String` | No |  |
| `acta_id` | `Integer` | No |  |
| `afirmativo` | `Integer` | No |  |
| `amn` | `Integer` | No |  |
| `ausente` | `Integer` | No |  |
| `descripcion` | `String` | No |  |
| `fecha` | `String` | No |  |
| `id` | `String` | No |  |
| `mayoria` | `String` | No |  |
| `miembro` | `Integer` | No |  |
| `negativo` | `Integer` | No |  |
| `numero_acta` | `String` | No |  |
| `observacione` | `Array` | No |  |
| `periodo` | `String` | No |  |
| `presente` | `Integer` | No |  |
| `presidente` | `String` | No |  |
| `proyecto` | `String` | No |  |
| `quorum_tipo` | `String` | No |  |
| `resultado` | `String` | No |  |
| `reunion` | `String` | No |  |
| `titulo` | `String` | No |  |
| `voto` | `Array` | No |  |
| `votos_afirmativo` | `Integer` | No |  |
| `votos_negativo` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Acta.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Acta.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ActaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BonosCerEntity

```ruby
bonos_cer = client.BonosCer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_vencimiento` | `String` | Yes |  |
| `precio_ar` | `Float` | Yes |  |
| `ticker` | `String` | Yes |  |
| `tir_porcentaje` | `Float` | Yes |  |
| `voluman` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.BonosCer.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BonosCerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CotizacionEntity

```ruby
cotizacion = client.Cotizacion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `String` | No |  |
| `compra` | `Float` | No |  |
| `fecha` | `String` | No |  |
| `moneda` | `String` | No |  |
| `venta` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Cotizacion.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Cotizacion.load({ "casa" => "casa" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CotizacionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CriptopesoEntity

```ruby
criptopeso = client.Criptopeso
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `String` | No |  |
| `tna` | `Float` | No |  |
| `token` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Criptopeso.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CriptopesoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CuentaRemuneradaUsdEntity

```ruby
cuenta_remunerada_usd = client.CuentaRemuneradaUsd
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `String` | No |  |
| `tasa` | `Float` | No |  |
| `tope` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CuentaRemuneradaUsd.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CuentaRemuneradaUsdEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DiputadoEntity

```ruby
diputado = client.Diputado
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apellido` | `String` | No |  |
| `bloque` | `String` | No |  |
| `cese_fecha` | `String` | No |  |
| `foto` | `String` | No |  |
| `genero` | `String` | No |  |
| `id` | `String` | No |  |
| `juramento_fecha` | `String` | No |  |
| `nombre` | `String` | No |  |
| `periodo_bloque` | `Hash` | No |  |
| `periodo_mandato` | `Hash` | No |  |
| `provincia` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Diputado.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DiputadoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EntidadRendimientoEntity

```ruby
entidad_rendimiento = client.EntidadRendimiento
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `String` | No |  |
| `rendimiento` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EntidadRendimiento.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EntidadRendimientoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EstadoEntity

```ruby
estado = client.Estado
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `Integer` | No |  |
| `estado` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Estado.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EventoPresidencialEntity

```ruby
evento_presidencial = client.EventoPresidencial
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | `String` | No |  |
| `fecha` | `String` | No |  |
| `tipo` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.EventoPresidencial.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EventoPresidencialEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FeriadoEntity

```ruby
feriado = client.Feriado
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `String` | No |  |
| `nombre` | `String` | No |  |
| `tipo` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Feriado.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FeriadoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FinanzaEntity

```ruby
finanza = client.Finanza
```

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Finanza.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FinanzaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FondoComunInversionEntity

```ruby
fondo_comun_inversion = client.FondoComunInversion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ccp` | `Float` | No |  |
| `fecha` | `String` | No |  |
| `fondo` | `String` | No |  |
| `horizonte` | `String` | No |  |
| `patrimonio` | `Float` | No |  |
| `tipo` | `String` | No |  |
| `vcp` | `Float` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FondoComunInversion.load({ "fecha" => "fecha" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FondoComunInversionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FondoComunInversionOtroEntity

```ruby
fondo_comun_inversion_otro = client.FondoComunInversionOtro
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `String` | No |  |
| `fondo` | `String` | No |  |
| `tea` | `Float` | No |  |
| `tna` | `Float` | No |  |
| `tope` | `Float` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FondoComunInversionOtro.load({ "id" => "fondo_comun_inversion_otro_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FondoComunInversionOtroEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FondoComunInversionVariableEntity

```ruby
fondo_comun_inversion_variable = client.FondoComunInversionVariable
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condicione` | `String` | No |  |
| `condiciones_corto` | `String` | No |  |
| `fecha` | `String` | No |  |
| `fondo` | `String` | No |  |
| `nombre` | `String` | No |  |
| `tea` | `Float` | No |  |
| `tipo` | `String` | No |  |
| `tna` | `Float` | No |  |
| `tope` | `Float` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.FondoComunInversionVariable.load({ "id" => "fondo_comun_inversion_variable_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FondoComunInversionVariableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HipotecarioUvaTnaEntity

```ruby
hipotecario_uva_tna = client.HipotecarioUvaTna
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `String` | No |  |
| `metadata` | `Hash` | No |  |
| `nombre_comercial` | `String` | No |  |
| `tna` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.HipotecarioUvaTna.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HipotecarioUvaTnaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IndiceInflacionEntity

```ruby
indice_inflacion = client.IndiceInflacion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `String` | No |  |
| `valor` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IndiceInflacion.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IndiceInflacionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IndiceUvaEntity

```ruby
indice_uva = client.IndiceUva
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `String` | No |  |
| `valor` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.IndiceUva.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IndiceUvaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LetraEntity

```ruby
letra = client.Letra
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_emision` | `String` | No |  |
| `fecha_vencimiento` | `String` | No |  |
| `tem` | `Float` | No |  |
| `ticker` | `String` | No |  |
| `vpv` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Letra.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LetraEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PresidenteEntity

```ruby
presidente = client.Presidente
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fin` | `String` | No |  |
| `imagen` | `String` | No |  |
| `inicio` | `String` | No |  |
| `nombre` | `String` | No |  |
| `partido` | `String` | No |  |
| `partido_imagen` | `String` | No |  |
| `periodo_presidencial` | `String` | No |  |
| `vicepresidente` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Presidente.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PresidenteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProveedorPlazoFijoPrecancelableEntity

```ruby
proveedor_plazo_fijo_precancelable = client.ProveedorPlazoFijoPrecancelable
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aviso_precancelacion_dia` | `Integer` | No |  |
| `canal` | `String` | No |  |
| `enlace` | `String` | No |  |
| `entidad` | `String` | No |  |
| `id` | `String` | No |  |
| `logo` | `String` | No |  |
| `modalidad` | `String` | No |  |
| `moneda` | `String` | No |  |
| `monto_maximo` | `Float` | No |  |
| `monto_minimo` | `Float` | No |  |
| `plazo_max_dia` | `Integer` | No |  |
| `plazo_min_dia` | `Integer` | No |  |
| `plazo_precancelacion_dia` | `Integer` | No |  |
| `tea` | `Float` | No |  |
| `tea_precancelacion` | `Float` | No |  |
| `tna` | `Float` | No |  |
| `tna_precancelacion` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProveedorPlazoFijoPrecancelable.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProveedorPlazoFijoUvaPagoPeriodicoEntity

```ruby
proveedor_plazo_fijo_uva_pago_periodico = client.ProveedorPlazoFijoUvaPagoPeriodico
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `String` | No |  |
| `id` | `String` | No |  |
| `logo` | `String` | No |  |
| `tasa` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProveedorPlazoFijoUvaPagoPeriodico.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RemEntity

```ruby
rem = client.Rem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `Float` | No |  |
| `fecha` | `String` | No |  |
| `fuente` | `String` | No |  |
| `indicador` | `String` | No |  |
| `informe` | `String` | No |  |
| `maximo` | `Float` | No |  |
| `mediana` | `Float` | No |  |
| `minimo` | `Float` | No |  |
| `muestra` | `String` | No |  |
| `participante` | `Integer` | No |  |
| `percentil10` | `Float` | No |  |
| `percentil25` | `Float` | No |  |
| `percentil75` | `Float` | No |  |
| `percentil90` | `Float` | No |  |
| `periodo` | `String` | No |  |
| `periodo_desde` | `String` | No |  |
| `periodo_hasta` | `String` | No |  |
| `periodo_tipo` | `String` | No |  |
| `promedio` | `Float` | No |  |
| `publicacion_url` | `String` | No |  |
| `referencia` | `String` | No |  |
| `referencia_fecha` | `String` | No |  |
| `unidad` | `String` | No |  |
| `xlsx_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Rem.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RemExpectativaEntity

```ruby
rem_expectativa = client.RemExpectativa
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `Float` | No |  |
| `fecha` | `String` | No |  |
| `fuente` | `String` | No |  |
| `indicador` | `String` | No |  |
| `informe` | `String` | No |  |
| `maximo` | `Float` | No |  |
| `mediana` | `Float` | No |  |
| `minimo` | `Float` | No |  |
| `muestra` | `String` | No |  |
| `participante` | `Integer` | No |  |
| `percentil10` | `Float` | No |  |
| `percentil25` | `Float` | No |  |
| `percentil75` | `Float` | No |  |
| `percentil90` | `Float` | No |  |
| `periodo` | `String` | No |  |
| `periodo_desde` | `String` | No |  |
| `periodo_hasta` | `String` | No |  |
| `periodo_tipo` | `String` | No |  |
| `promedio` | `Float` | No |  |
| `publicacion_url` | `String` | No |  |
| `referencia` | `String` | No |  |
| `referencia_fecha` | `String` | No |  |
| `unidad` | `String` | No |  |
| `xlsx_url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RemExpectativa.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RemExpectativaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RendimientoEntity

```ruby
rendimiento = client.Rendimiento
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | `Float` | No |  |
| `fecha` | `String` | No |  |
| `moneda` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Rendimiento.load({ "id" => "rendimiento_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RendimientoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RiesgoPaiEntity

```ruby
riesgo_pai = client.RiesgoPai
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `String` | No |  |
| `valor` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RiesgoPai.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RiesgoPai.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RiesgoPaiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SenadorEntity

```ruby
senador = client.Senador
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | No |  |
| `foto` | `String` | No |  |
| `id` | `String` | No |  |
| `nombre` | `String` | No |  |
| `observacione` | `String` | No |  |
| `partido` | `String` | No |  |
| `periodo_legal` | `Hash` | No |  |
| `periodo_real` | `Hash` | No |  |
| `provincia` | `String` | No |  |
| `rede` | `Array` | No |  |
| `reemplazo` | `String` | No |  |
| `telefono` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Senador.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SenadorEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TasaIntereEntity

```ruby
tasa_intere = client.TasaIntere
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `String` | No |  |
| `valor` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TasaIntere.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TasaIntereEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TasaPlazoFijoEntity

```ruby
tasa_plazo_fijo = client.TasaPlazoFijo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `String` | No |  |
| `logo` | `String` | No |  |
| `tna_cliente` | `Float` | No |  |
| `tna_no_cliente` | `Float` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TasaPlazoFijo.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TasaPlazoFijoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = ArgentinadatosSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

