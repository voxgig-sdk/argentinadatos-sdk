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
| `abstenciones` | `Integer` | No |  |
| `acta` | `String` | No |  |
| `actaId` | `Integer` | No |  |
| `afirmativos` | `Integer` | No |  |
| `amn` | `Integer` | No |  |
| `ausentes` | `Integer` | No |  |
| `descripcion` | `String` | No |  |
| `fecha` | `String` | No |  |
| `id` | `String` | No |  |
| `mayoria` | `String` | No |  |
| `miembros` | `Integer` | No |  |
| `negativos` | `Integer` | No |  |
| `numeroActa` | `String` | No |  |
| `observaciones` | `Array` | No |  |
| `periodo` | `String` | No |  |
| `presentes` | `Integer` | No |  |
| `presidente` | `String` | No |  |
| `proyecto` | `String` | No |  |
| `quorumTipo` | `String` | No |  |
| `resultado` | `String` | No |  |
| `reunion` | `String` | No |  |
| `titulo` | `String` | No |  |
| `votos` | `Array` | No |  |
| `votosAfirmativos` | `Integer` | No |  |
| `votosNegativos` | `Integer` | No |  |

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
| `fechaVencimiento` | `String` | Yes | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `precioArs` | `Float` | Yes | Precio de cotización en pesos argentinos |
| `ticker` | `String` | Yes | Código del bono (ej. |
| `tirPorcentaje` | `Float` | Yes | Tasa interna de retorno (TIR) en porcentaje |
| `volumen` | `Float` | No | Volumen nominal negociado, si la fuente lo publica |

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
| `id` | `String` | No |  |
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
| `entidad` | `String` | No | Nombre de la entidad que ofrece el criptopeso |
| `tna` | `Float` | No | Tasa Nominal Anual en porcentaje |
| `token` | `String` | No | Token del criptopeso (ej: ARGt, wARS) |

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
| `entidad` | `String` | No | Identificador de la entidad (p. |
| `tasa` | `Float` | No | Tasa de rendimiento anual en formato decimal (p. |
| `tope` | `Float` | No | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

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
| `ceseFecha` | `String` | No |  |
| `foto` | `String` | No |  |
| `genero` | `String` | No |  |
| `id` | `String` | No |  |
| `juramentoFecha` | `String` | No |  |
| `nombre` | `String` | No |  |
| `periodoBloque` | `Hash` | No |  |
| `periodoMandato` | `Hash` | No |  |
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
| `rendimientos` | `Array` | No |  |

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
| `id` | `String` | No |  |
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
| `id` | `String` | No |  |
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
| `condiciones` | `String` | No |  |
| `condicionesCorto` | `String` | No |  |
| `fecha` | `String` | No |  |
| `fondo` | `String` | No | Nombre del fondo común de inversión (clase o denominación oficial). |
| `id` | `String` | No |  |
| `nombre` | `String` | No | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `tea` | `Float` | No |  |
| `tipo` | `String` | No | Clasificación del instrumento. |
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
| `entidad` | `String` | No | Nombre del banco u oferente del crédito hipotecario UVA |
| `metadata` | `Hash` | No | Detalle de condiciones |
| `nombreComercial` | `String` | No | Nombre comercial |
| `tna` | `Float` | No | Tasa Nominal Anual |

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
| `fechaEmision` | `String` | No | Fecha de emisión original (ISO 8601) |
| `fechaVencimiento` | `String` | No | Fecha de vencimiento (ISO 8601) |
| `tem` | `Float` | No | Tasa Efectiva Mensual (%) |
| `ticker` | `String` | No | Código del instrumento (ej: S31G5, T17O5) |
| `vpv` | `Float` | No | Valor de Pago al Vencimiento por cada $100 de valor nominal |

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
| `fin` | `String` | No | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `imagen` | `String` | No | URL de la imagen del presidente |
| `inicio` | `String` | No | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `nombre` | `String` | No |  |
| `partido` | `String` | No |  |
| `partidoImagen` | `String` | No | URL de la imagen del logo del partido político |
| `periodoPresidencial` | `String` | No | Rango de años del período presidencial (ej: '2019-2023') |
| `vicepresidente` | `String` | No | Nombre del vicepresidente. |

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
| `avisoPrecancelacionDias` | `Integer` | No | Días hábiles de aviso previo para precancelar |
| `canal` | `String` | No | Canales publicados para constituir el plazo fijo |
| `enlace` | `String` | No | URL de la fuente |
| `entidad` | `String` | No | Nombre de la entidad |
| `id` | `String` | No | Identificador estable del proveedor |
| `logo` | `String` | No | URL del logo de la entidad |
| `modalidad` | `String` | No | Modalidad publicada por la entidad |
| `moneda` | `String` | No | Moneda de constitución |
| `montoMaximo` | `Float` | No | Monto máximo de constitución |
| `montoMinimo` | `Float` | No | Monto mínimo de constitución |
| `plazoMaxDias` | `Integer` | No | Plazo máximo en días |
| `plazoMinDias` | `Integer` | No | Plazo mínimo en días |
| `plazoPrecancelacionDias` | `Integer` | No | Días mínimos para ejercer la precancelación |
| `tea` | `Float` | No | Tasa Efectiva Anual |
| `teaPrecancelacion` | `Float` | No | Tasa Efectiva Anual aplicada ante precancelación |
| `tna` | `Float` | No | Tasa Nominal Anual |
| `tnaPrecancelacion` | `Float` | No | Tasa Nominal Anual aplicada ante precancelación |

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
| `entidad` | `String` | No | Nombre de la entidad |
| `id` | `String` | No | Identificador estable del proveedor (p. |
| `logo` | `String` | No | URL del logo de la entidad |
| `tasas` | `Array` | No | Tasas por rango de plazo |

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
| `fecha` | `String` | No | Fecha ISO del primer día del mes del informe |
| `fuente` | `String` | No |  |
| `indicador` | `String` | No | Indicador relevado |
| `informe` | `String` | No | Informe REM en formato YYYY-MM |
| `maximo` | `Float` | No |  |
| `mediana` | `Float` | No |  |
| `minimo` | `Float` | No |  |
| `muestra` | `String` | No | Muestra de participantes: todos o TOP 10 |
| `participantes` | `Integer` | No |  |
| `percentil10` | `Float` | No |  |
| `percentil25` | `Float` | No |  |
| `percentil75` | `Float` | No |  |
| `percentil90` | `Float` | No |  |
| `periodo` | `String` | No | Período original informado por el BCRA |
| `periodoDesde` | `String` | No | Fecha de inicio del período normalizado |
| `periodoHasta` | `String` | No | Fecha de fin del período normalizado |
| `periodoTipo` | `String` | No | Tipo de período normalizado |
| `promedio` | `Float` | No |  |
| `publicacionUrl` | `String` | No |  |
| `referencia` | `String` | No | Referencia original de la tabla |
| `referenciaFecha` | `String` | No | Fecha detectada en la referencia, si corresponde |
| `unidad` | `String` | No | Unidad inferida desde la referencia |
| `xlsxUrl` | `String` | No |  |

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
| `fecha` | `String` | No | Fecha ISO del primer día del mes del informe |
| `fuente` | `String` | No |  |
| `indicador` | `String` | No | Indicador relevado |
| `informe` | `String` | No | Informe REM en formato YYYY-MM |
| `maximo` | `Float` | No |  |
| `mediana` | `Float` | No |  |
| `minimo` | `Float` | No |  |
| `muestra` | `String` | No | Muestra de participantes: todos o TOP 10 |
| `participantes` | `Integer` | No |  |
| `percentil10` | `Float` | No |  |
| `percentil25` | `Float` | No |  |
| `percentil75` | `Float` | No |  |
| `percentil90` | `Float` | No |  |
| `periodo` | `String` | No | Período original informado por el BCRA |
| `periodoDesde` | `String` | No | Fecha de inicio del período normalizado |
| `periodoHasta` | `String` | No | Fecha de fin del período normalizado |
| `periodoTipo` | `String` | No | Tipo de período normalizado |
| `promedio` | `Float` | No |  |
| `publicacionUrl` | `String` | No |  |
| `referencia` | `String` | No | Referencia original de la tabla |
| `referenciaFecha` | `String` | No | Fecha detectada en la referencia, si corresponde |
| `unidad` | `String` | No | Unidad inferida desde la referencia |
| `xlsxUrl` | `String` | No |  |

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
| `id` | `String` | No |  |
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
| `observaciones` | `String` | No |  |
| `partido` | `String` | No |  |
| `periodoLegal` | `Hash` | No |  |
| `periodoReal` | `Hash` | No |  |
| `provincia` | `String` | No |  |
| `redes` | `Array` | No |  |
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
| `logo` | `String` | No | URL del logo de la entidad |
| `tnaClientes` | `Float` | No | Tasa Nominal Anual para clientes, en porcentaje |
| `tnaNoClientes` | `Float` | No | Tasa Nominal Anual para no clientes, en porcentaje |

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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ruby
client = ArgentinadatosSDK.new({
  "feature" => {
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

