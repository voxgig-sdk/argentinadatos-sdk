# Argentinadatos Golang SDK Reference

Complete API reference for the Argentinadatos Golang SDK.


## ArgentinadatosSDK

### Constructor

```go
func NewArgentinadatosSDK(options map[string]any) *ArgentinadatosSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *ArgentinadatosSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *ArgentinadatosSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Acta(data map[string]any) ArgentinadatosEntity`

Create a new `Acta` entity instance. Pass `nil` for no initial data.

#### `BonosCer(data map[string]any) ArgentinadatosEntity`

Create a new `BonosCer` entity instance. Pass `nil` for no initial data.

#### `Cotizacion(data map[string]any) ArgentinadatosEntity`

Create a new `Cotizacion` entity instance. Pass `nil` for no initial data.

#### `Criptopeso(data map[string]any) ArgentinadatosEntity`

Create a new `Criptopeso` entity instance. Pass `nil` for no initial data.

#### `CuentaRemuneradaUsd(data map[string]any) ArgentinadatosEntity`

Create a new `CuentaRemuneradaUsd` entity instance. Pass `nil` for no initial data.

#### `Diputado(data map[string]any) ArgentinadatosEntity`

Create a new `Diputado` entity instance. Pass `nil` for no initial data.

#### `EntidadRendimiento(data map[string]any) ArgentinadatosEntity`

Create a new `EntidadRendimiento` entity instance. Pass `nil` for no initial data.

#### `Estado(data map[string]any) ArgentinadatosEntity`

Create a new `Estado` entity instance. Pass `nil` for no initial data.

#### `EventoPresidencial(data map[string]any) ArgentinadatosEntity`

Create a new `EventoPresidencial` entity instance. Pass `nil` for no initial data.

#### `Feriado(data map[string]any) ArgentinadatosEntity`

Create a new `Feriado` entity instance. Pass `nil` for no initial data.

#### `Finanza(data map[string]any) ArgentinadatosEntity`

Create a new `Finanza` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversion(data map[string]any) ArgentinadatosEntity`

Create a new `FondoComunInversion` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversionOtro(data map[string]any) ArgentinadatosEntity`

Create a new `FondoComunInversionOtro` entity instance. Pass `nil` for no initial data.

#### `FondoComunInversionVariable(data map[string]any) ArgentinadatosEntity`

Create a new `FondoComunInversionVariable` entity instance. Pass `nil` for no initial data.

#### `HipotecarioUvaTna(data map[string]any) ArgentinadatosEntity`

Create a new `HipotecarioUvaTna` entity instance. Pass `nil` for no initial data.

#### `IndiceInflacion(data map[string]any) ArgentinadatosEntity`

Create a new `IndiceInflacion` entity instance. Pass `nil` for no initial data.

#### `IndiceUva(data map[string]any) ArgentinadatosEntity`

Create a new `IndiceUva` entity instance. Pass `nil` for no initial data.

#### `Letra(data map[string]any) ArgentinadatosEntity`

Create a new `Letra` entity instance. Pass `nil` for no initial data.

#### `Presidente(data map[string]any) ArgentinadatosEntity`

Create a new `Presidente` entity instance. Pass `nil` for no initial data.

#### `ProveedorPlazoFijoPrecancelable(data map[string]any) ArgentinadatosEntity`

Create a new `ProveedorPlazoFijoPrecancelable` entity instance. Pass `nil` for no initial data.

#### `ProveedorPlazoFijoUvaPagoPeriodico(data map[string]any) ArgentinadatosEntity`

Create a new `ProveedorPlazoFijoUvaPagoPeriodico` entity instance. Pass `nil` for no initial data.

#### `Rem(data map[string]any) ArgentinadatosEntity`

Create a new `Rem` entity instance. Pass `nil` for no initial data.

#### `RemExpectativa(data map[string]any) ArgentinadatosEntity`

Create a new `RemExpectativa` entity instance. Pass `nil` for no initial data.

#### `Rendimiento(data map[string]any) ArgentinadatosEntity`

Create a new `Rendimiento` entity instance. Pass `nil` for no initial data.

#### `RiesgoPai(data map[string]any) ArgentinadatosEntity`

Create a new `RiesgoPai` entity instance. Pass `nil` for no initial data.

#### `Senador(data map[string]any) ArgentinadatosEntity`

Create a new `Senador` entity instance. Pass `nil` for no initial data.

#### `TasaIntere(data map[string]any) ArgentinadatosEntity`

Create a new `TasaIntere` entity instance. Pass `nil` for no initial data.

#### `TasaPlazoFijo(data map[string]any) ArgentinadatosEntity`

Create a new `TasaPlazoFijo` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActaEntity

```go
acta := client.Acta(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstencione` | ``$INTEGER`` | No |  |
| `acta` | ``$STRING`` | No |  |
| `acta_id` | ``$INTEGER`` | No |  |
| `afirmativo` | ``$INTEGER`` | No |  |
| `amn` | ``$INTEGER`` | No |  |
| `ausente` | ``$INTEGER`` | No |  |
| `descripcion` | ``$STRING`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `mayoria` | ``$STRING`` | No |  |
| `miembro` | ``$INTEGER`` | No |  |
| `negativo` | ``$INTEGER`` | No |  |
| `numero_acta` | ``$STRING`` | No |  |
| `observacione` | ``$ARRAY`` | No |  |
| `periodo` | ``$STRING`` | No |  |
| `presente` | ``$INTEGER`` | No |  |
| `presidente` | ``$STRING`` | No |  |
| `proyecto` | ``$STRING`` | No |  |
| `quorum_tipo` | ``$STRING`` | No |  |
| `resultado` | ``$STRING`` | No |  |
| `reunion` | ``$STRING`` | No |  |
| `titulo` | ``$STRING`` | No |  |
| `voto` | ``$ARRAY`` | No |  |
| `votos_afirmativo` | ``$INTEGER`` | No |  |
| `votos_negativo` | ``$INTEGER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Acta(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Acta(nil).Load(map[string]any{"id": "acta_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BonosCerEntity

```go
bonos_cer := client.BonosCer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_vencimiento` | ``$STRING`` | Yes |  |
| `precio_ar` | ``$NUMBER`` | Yes |  |
| `ticker` | ``$STRING`` | Yes |  |
| `tir_porcentaje` | ``$NUMBER`` | Yes |  |
| `voluman` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BonosCer(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BonosCerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CotizacionEntity

```go
cotizacion := client.Cotizacion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | ``$STRING`` | No |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `moneda` | ``$STRING`` | No |  |
| `venta` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cotizacion(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Cotizacion(nil).Load(map[string]any{"id": "cotizacion_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CotizacionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CriptopesoEntity

```go
criptopeso := client.Criptopeso(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |
| `token` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Criptopeso(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CriptopesoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CuentaRemuneradaUsdEntity

```go
cuenta_remunerada_usd := client.CuentaRemuneradaUsd(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `tasa` | ``$NUMBER`` | No |  |
| `tope` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CuentaRemuneradaUsd(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CuentaRemuneradaUsdEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DiputadoEntity

```go
diputado := client.Diputado(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apellido` | ``$STRING`` | No |  |
| `bloque` | ``$STRING`` | No |  |
| `cese_fecha` | ``$STRING`` | No |  |
| `foto` | ``$STRING`` | No |  |
| `genero` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `juramento_fecha` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `periodo_bloque` | ``$OBJECT`` | No |  |
| `periodo_mandato` | ``$OBJECT`` | No |  |
| `provincia` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Diputado(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DiputadoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EntidadRendimientoEntity

```go
entidad_rendimiento := client.EntidadRendimiento(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `rendimiento` | ``$ARRAY`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EntidadRendimiento(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EntidadRendimientoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EstadoEntity

```go
estado := client.Estado(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | ``$INTEGER`` | No |  |
| `estado` | ``$STRING`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Estado(nil).Load(map[string]any{"id": "estado_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EventoPresidencialEntity

```go
evento_presidencial := client.EventoPresidencial(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | ``$STRING`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `tipo` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EventoPresidencial(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EventoPresidencialEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FeriadoEntity

```go
feriado := client.Feriado(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `tipo` | ``$STRING`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Feriado(nil).Load(map[string]any{"id": "feriado_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FeriadoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FinanzaEntity

```go
finanza := client.Finanza(nil)
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Finanza(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FinanzaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FondoComunInversionEntity

```go
fondo_comun_inversion := client.FondoComunInversion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ccp` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `fondo` | ``$STRING`` | No |  |
| `horizonte` | ``$STRING`` | No |  |
| `patrimonio` | ``$NUMBER`` | No |  |
| `tipo` | ``$STRING`` | No |  |
| `vcp` | ``$NUMBER`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FondoComunInversion(nil).Load(map[string]any{"id": "fondo_comun_inversion_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FondoComunInversionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FondoComunInversionOtroEntity

```go
fondo_comun_inversion_otro := client.FondoComunInversionOtro(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `fondo` | ``$STRING`` | No |  |
| `tea` | ``$NUMBER`` | No |  |
| `tna` | ``$NUMBER`` | No |  |
| `tope` | ``$NUMBER`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FondoComunInversionOtro(nil).Load(map[string]any{"id": "fondo_comun_inversion_otro_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FondoComunInversionOtroEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FondoComunInversionVariableEntity

```go
fondo_comun_inversion_variable := client.FondoComunInversionVariable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condicione` | ``$STRING`` | No |  |
| `condiciones_corto` | ``$STRING`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `fondo` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `tea` | ``$NUMBER`` | No |  |
| `tipo` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |
| `tope` | ``$NUMBER`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FondoComunInversionVariable(nil).Load(map[string]any{"id": "fondo_comun_inversion_variable_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FondoComunInversionVariableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## HipotecarioUvaTnaEntity

```go
hipotecario_uva_tna := client.HipotecarioUvaTna(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `metadata` | ``$OBJECT`` | No |  |
| `nombre_comercial` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.HipotecarioUvaTna(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HipotecarioUvaTnaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IndiceInflacionEntity

```go
indice_inflacion := client.IndiceInflacion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IndiceInflacion(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IndiceInflacionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IndiceUvaEntity

```go
indice_uva := client.IndiceUva(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IndiceUva(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IndiceUvaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LetraEntity

```go
letra := client.Letra(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_emision` | ``$STRING`` | No |  |
| `fecha_vencimiento` | ``$STRING`` | No |  |
| `tem` | ``$NUMBER`` | No |  |
| `ticker` | ``$STRING`` | No |  |
| `vpv` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Letra(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LetraEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PresidenteEntity

```go
presidente := client.Presidente(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fin` | ``$STRING`` | No |  |
| `imagen` | ``$STRING`` | No |  |
| `inicio` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `partido` | ``$STRING`` | No |  |
| `partido_imagen` | ``$STRING`` | No |  |
| `periodo_presidencial` | ``$STRING`` | No |  |
| `vicepresidente` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Presidente(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PresidenteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProveedorPlazoFijoPrecancelableEntity

```go
proveedor_plazo_fijo_precancelable := client.ProveedorPlazoFijoPrecancelable(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aviso_precancelacion_dia` | ``$INTEGER`` | No |  |
| `canal` | ``$STRING`` | No |  |
| `enlace` | ``$STRING`` | No |  |
| `entidad` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `modalidad` | ``$STRING`` | No |  |
| `moneda` | ``$STRING`` | No |  |
| `monto_maximo` | ``$NUMBER`` | No |  |
| `monto_minimo` | ``$NUMBER`` | No |  |
| `plazo_max_dia` | ``$INTEGER`` | No |  |
| `plazo_min_dia` | ``$INTEGER`` | No |  |
| `plazo_precancelacion_dia` | ``$INTEGER`` | No |  |
| `tea` | ``$NUMBER`` | No |  |
| `tea_precancelacion` | ``$NUMBER`` | No |  |
| `tna` | ``$NUMBER`` | No |  |
| `tna_precancelacion` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProveedorPlazoFijoPrecancelable(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProveedorPlazoFijoUvaPagoPeriodicoEntity

```go
proveedor_plazo_fijo_uva_pago_periodico := client.ProveedorPlazoFijoUvaPagoPeriodico(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `tasa` | ``$ARRAY`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProveedorPlazoFijoUvaPagoPeriodico(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RemEntity

```go
rem := client.Rem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `fuente` | ``$STRING`` | No |  |
| `indicador` | ``$STRING`` | No |  |
| `informe` | ``$STRING`` | No |  |
| `maximo` | ``$NUMBER`` | No |  |
| `mediana` | ``$NUMBER`` | No |  |
| `minimo` | ``$NUMBER`` | No |  |
| `muestra` | ``$STRING`` | No |  |
| `participante` | ``$INTEGER`` | No |  |
| `percentil10` | ``$NUMBER`` | No |  |
| `percentil25` | ``$NUMBER`` | No |  |
| `percentil75` | ``$NUMBER`` | No |  |
| `percentil90` | ``$NUMBER`` | No |  |
| `periodo` | ``$STRING`` | No |  |
| `periodo_desde` | ``$STRING`` | No |  |
| `periodo_hasta` | ``$STRING`` | No |  |
| `periodo_tipo` | ``$STRING`` | No |  |
| `promedio` | ``$NUMBER`` | No |  |
| `publicacion_url` | ``$STRING`` | No |  |
| `referencia` | ``$STRING`` | No |  |
| `referencia_fecha` | ``$STRING`` | No |  |
| `unidad` | ``$STRING`` | No |  |
| `xlsx_url` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Rem(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RemExpectativaEntity

```go
rem_expectativa := client.RemExpectativa(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `fuente` | ``$STRING`` | No |  |
| `indicador` | ``$STRING`` | No |  |
| `informe` | ``$STRING`` | No |  |
| `maximo` | ``$NUMBER`` | No |  |
| `mediana` | ``$NUMBER`` | No |  |
| `minimo` | ``$NUMBER`` | No |  |
| `muestra` | ``$STRING`` | No |  |
| `participante` | ``$INTEGER`` | No |  |
| `percentil10` | ``$NUMBER`` | No |  |
| `percentil25` | ``$NUMBER`` | No |  |
| `percentil75` | ``$NUMBER`` | No |  |
| `percentil90` | ``$NUMBER`` | No |  |
| `periodo` | ``$STRING`` | No |  |
| `periodo_desde` | ``$STRING`` | No |  |
| `periodo_hasta` | ``$STRING`` | No |  |
| `periodo_tipo` | ``$STRING`` | No |  |
| `promedio` | ``$NUMBER`` | No |  |
| `publicacion_url` | ``$STRING`` | No |  |
| `referencia` | ``$STRING`` | No |  |
| `referencia_fecha` | ``$STRING`` | No |  |
| `unidad` | ``$STRING`` | No |  |
| `xlsx_url` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RemExpectativa(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RemExpectativaEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RendimientoEntity

```go
rendimiento := client.Rendimiento(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `moneda` | ``$STRING`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Rendimiento(nil).Load(map[string]any{"id": "rendimiento_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RendimientoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RiesgoPaiEntity

```go
riesgo_pai := client.RiesgoPai(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RiesgoPai(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RiesgoPai(nil).Load(map[string]any{"id": "riesgo_pai_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RiesgoPaiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SenadorEntity

```go
senador := client.Senador(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | ``$STRING`` | No |  |
| `foto` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `observacione` | ``$STRING`` | No |  |
| `partido` | ``$STRING`` | No |  |
| `periodo_legal` | ``$OBJECT`` | No |  |
| `periodo_real` | ``$OBJECT`` | No |  |
| `provincia` | ``$STRING`` | No |  |
| `rede` | ``$ARRAY`` | No |  |
| `reemplazo` | ``$STRING`` | No |  |
| `telefono` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Senador(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SenadorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TasaIntereEntity

```go
tasa_intere := client.TasaIntere(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TasaIntere(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TasaIntereEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TasaPlazoFijoEntity

```go
tasa_plazo_fijo := client.TasaPlazoFijo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `tna_cliente` | ``$NUMBER`` | No |  |
| `tna_no_cliente` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TasaPlazoFijo(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TasaPlazoFijoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewArgentinadatosSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

