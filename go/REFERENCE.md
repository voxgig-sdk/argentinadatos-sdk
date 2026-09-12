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
fmt.Println(acta.GetName()) // "acta"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstenciones` | `int` | No |  |
| `acta` | `string` | No |  |
| `actaId` | `int` | No |  |
| `afirmativos` | `int` | No |  |
| `amn` | `int` | No |  |
| `ausentes` | `int` | No |  |
| `descripcion` | `string` | No |  |
| `fecha` | `string` | No |  |
| `id` | `string` | No |  |
| `mayoria` | `string` | No |  |
| `miembros` | `int` | No |  |
| `negativos` | `int` | No |  |
| `numeroActa` | `string` | No |  |
| `observaciones` | `[]any` | No |  |
| `periodo` | `string` | No |  |
| `presentes` | `int` | No |  |
| `presidente` | `string` | No |  |
| `proyecto` | `string` | No |  |
| `quorumTipo` | `string` | No |  |
| `resultado` | `string` | No |  |
| `reunion` | `string` | No |  |
| `titulo` | `string` | No |  |
| `votos` | `[]any` | No |  |
| `votosAfirmativos` | `int` | No |  |
| `votosNegativos` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Acta(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Acta(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
bonosCer := client.BonosCer(nil)
fmt.Println(bonosCer.GetName()) // "bonos_cer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fechaVencimiento` | `string` | Yes | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `precioArs` | `float64` | Yes | Precio de cotización en pesos argentinos |
| `ticker` | `string` | Yes | Código del bono (ej. |
| `tirPorcentaje` | `float64` | Yes | Tasa interna de retorno (TIR) en porcentaje |
| `volumen` | `float64` | No | Volumen nominal negociado, si la fuente lo publica |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BonosCer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(cotizacion.GetName()) // "cotizacion"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | No |  |
| `compra` | `float64` | No |  |
| `fecha` | `string` | No |  |
| `id` | `string` | No |  |
| `moneda` | `string` | No |  |
| `venta` | `float64` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Cotizacion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Cotizacion(nil).Load(map[string]any{"casa": "casa"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(criptopeso.GetName()) // "criptopeso"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No | Nombre de la entidad que ofrece el criptopeso |
| `tna` | `float64` | No | Tasa Nominal Anual en porcentaje |
| `token` | `string` | No | Token del criptopeso (ej: ARGt, wARS) |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Criptopeso(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
cuentaRemuneradaUsd := client.CuentaRemuneradaUsd(nil)
fmt.Println(cuentaRemuneradaUsd.GetName()) // "cuenta_remunerada_usd"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No | Identificador de la entidad (p. |
| `tasa` | `float64` | No | Tasa de rendimiento anual en formato decimal (p. |
| `tope` | `float64` | No | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CuentaRemuneradaUsd(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(diputado.GetName()) // "diputado"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apellido` | `string` | No |  |
| `bloque` | `string` | No |  |
| `ceseFecha` | `string` | No |  |
| `foto` | `string` | No |  |
| `genero` | `string` | No |  |
| `id` | `string` | No |  |
| `juramentoFecha` | `string` | No |  |
| `nombre` | `string` | No |  |
| `periodoBloque` | `map[string]any` | No |  |
| `periodoMandato` | `map[string]any` | No |  |
| `provincia` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Diputado(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
entidadRendimiento := client.EntidadRendimiento(nil)
fmt.Println(entidadRendimiento.GetName()) // "entidad_rendimiento"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `rendimientos` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EntidadRendimiento(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(estado.GetName()) // "estado"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `int` | No |  |
| `estado` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Estado(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
eventoPresidencial := client.EventoPresidencial(nil)
fmt.Println(eventoPresidencial.GetName()) // "evento_presidencial"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | `string` | No |  |
| `fecha` | `string` | No |  |
| `tipo` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EventoPresidencial(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(feriado.GetName()) // "feriado"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `id` | `string` | No |  |
| `nombre` | `string` | No |  |
| `tipo` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Feriado(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(finanza.GetName()) // "finanza"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Finanza(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fondoComunInversion := client.FondoComunInversion(nil)
fmt.Println(fondoComunInversion.GetName()) // "fondo_comun_inversion"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ccp` | `float64` | No |  |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No |  |
| `horizonte` | `string` | No |  |
| `patrimonio` | `float64` | No |  |
| `tipo` | `string` | No |  |
| `vcp` | `float64` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FondoComunInversion(nil).Load(map[string]any{"fecha": "fecha"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fondoComunInversionOtro := client.FondoComunInversionOtro(nil)
fmt.Println(fondoComunInversionOtro.GetName()) // "fondo_comun_inversion_otro"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No |  |
| `id` | `string` | No |  |
| `tea` | `float64` | No |  |
| `tna` | `float64` | No |  |
| `tope` | `float64` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FondoComunInversionOtro(nil).Load(map[string]any{"id": "fondo_comun_inversion_otro_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fondoComunInversionVariable := client.FondoComunInversionVariable(nil)
fmt.Println(fondoComunInversionVariable.GetName()) // "fondo_comun_inversion_variable"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condiciones` | `string` | No |  |
| `condicionesCorto` | `string` | No |  |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No | Nombre del fondo común de inversión (clase o denominación oficial). |
| `id` | `string` | No |  |
| `nombre` | `string` | No | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `tea` | `float64` | No |  |
| `tipo` | `string` | No | Clasificación del instrumento. |
| `tna` | `float64` | No |  |
| `tope` | `float64` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FondoComunInversionVariable(nil).Load(map[string]any{"id": "fondo_comun_inversion_variable_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
hipotecarioUvaTna := client.HipotecarioUvaTna(nil)
fmt.Println(hipotecarioUvaTna.GetName()) // "hipotecario_uva_tna"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No | Nombre del banco u oferente del crédito hipotecario UVA |
| `metadata` | `map[string]any` | No | Detalle de condiciones |
| `nombreComercial` | `string` | No | Nombre comercial |
| `tna` | `float64` | No | Tasa Nominal Anual |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.HipotecarioUvaTna(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
indiceInflacion := client.IndiceInflacion(nil)
fmt.Println(indiceInflacion.GetName()) // "indice_inflacion"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `float64` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IndiceInflacion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
indiceUva := client.IndiceUva(nil)
fmt.Println(indiceUva.GetName()) // "indice_uva"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `float64` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IndiceUva(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(letra.GetName()) // "letra"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fechaEmision` | `string` | No | Fecha de emisión original (ISO 8601) |
| `fechaVencimiento` | `string` | No | Fecha de vencimiento (ISO 8601) |
| `tem` | `float64` | No | Tasa Efectiva Mensual (%) |
| `ticker` | `string` | No | Código del instrumento (ej: S31G5, T17O5) |
| `vpv` | `float64` | No | Valor de Pago al Vencimiento por cada $100 de valor nominal |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Letra(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(presidente.GetName()) // "presidente"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fin` | `string` | No | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `imagen` | `string` | No | URL de la imagen del presidente |
| `inicio` | `string` | No | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `nombre` | `string` | No |  |
| `partido` | `string` | No |  |
| `partidoImagen` | `string` | No | URL de la imagen del logo del partido político |
| `periodoPresidencial` | `string` | No | Rango de años del período presidencial (ej: '2019-2023') |
| `vicepresidente` | `string` | No | Nombre del vicepresidente. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Presidente(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
proveedorPlazoFijoPrecancelable := client.ProveedorPlazoFijoPrecancelable(nil)
fmt.Println(proveedorPlazoFijoPrecancelable.GetName()) // "proveedor_plazo_fijo_precancelable"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avisoPrecancelacionDias` | `int` | No | Días hábiles de aviso previo para precancelar |
| `canal` | `string` | No | Canales publicados para constituir el plazo fijo |
| `enlace` | `string` | No | URL de la fuente |
| `entidad` | `string` | No | Nombre de la entidad |
| `id` | `string` | No | Identificador estable del proveedor |
| `logo` | `string` | No | URL del logo de la entidad |
| `modalidad` | `string` | No | Modalidad publicada por la entidad |
| `moneda` | `string` | No | Moneda de constitución |
| `montoMaximo` | `float64` | No | Monto máximo de constitución |
| `montoMinimo` | `float64` | No | Monto mínimo de constitución |
| `plazoMaxDias` | `int` | No | Plazo máximo en días |
| `plazoMinDias` | `int` | No | Plazo mínimo en días |
| `plazoPrecancelacionDias` | `int` | No | Días mínimos para ejercer la precancelación |
| `tea` | `float64` | No | Tasa Efectiva Anual |
| `teaPrecancelacion` | `float64` | No | Tasa Efectiva Anual aplicada ante precancelación |
| `tna` | `float64` | No | Tasa Nominal Anual |
| `tnaPrecancelacion` | `float64` | No | Tasa Nominal Anual aplicada ante precancelación |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProveedorPlazoFijoPrecancelable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
proveedorPlazoFijoUvaPagoPeriodico := client.ProveedorPlazoFijoUvaPagoPeriodico(nil)
fmt.Println(proveedorPlazoFijoUvaPagoPeriodico.GetName()) // "proveedor_plazo_fijo_uva_pago_periodico"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No | Nombre de la entidad |
| `id` | `string` | No | Identificador estable del proveedor (p. |
| `logo` | `string` | No | URL del logo de la entidad |
| `tasas` | `[]any` | No | Tasas por rango de plazo |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ProveedorPlazoFijoUvaPagoPeriodico(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(rem.GetName()) // "rem"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `float64` | No |  |
| `fecha` | `string` | No | Fecha ISO del primer día del mes del informe |
| `fuente` | `string` | No |  |
| `indicador` | `string` | No | Indicador relevado |
| `informe` | `string` | No | Informe REM en formato YYYY-MM |
| `maximo` | `float64` | No |  |
| `mediana` | `float64` | No |  |
| `minimo` | `float64` | No |  |
| `muestra` | `string` | No | Muestra de participantes: todos o TOP 10 |
| `participantes` | `int` | No |  |
| `percentil10` | `float64` | No |  |
| `percentil25` | `float64` | No |  |
| `percentil75` | `float64` | No |  |
| `percentil90` | `float64` | No |  |
| `periodo` | `string` | No | Período original informado por el BCRA |
| `periodoDesde` | `string` | No | Fecha de inicio del período normalizado |
| `periodoHasta` | `string` | No | Fecha de fin del período normalizado |
| `periodoTipo` | `string` | No | Tipo de período normalizado |
| `promedio` | `float64` | No |  |
| `publicacionUrl` | `string` | No |  |
| `referencia` | `string` | No | Referencia original de la tabla |
| `referenciaFecha` | `string` | No | Fecha detectada en la referencia, si corresponde |
| `unidad` | `string` | No | Unidad inferida desde la referencia |
| `xlsxUrl` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Rem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
remExpectativa := client.RemExpectativa(nil)
fmt.Println(remExpectativa.GetName()) // "rem_expectativa"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `float64` | No |  |
| `fecha` | `string` | No | Fecha ISO del primer día del mes del informe |
| `fuente` | `string` | No |  |
| `indicador` | `string` | No | Indicador relevado |
| `informe` | `string` | No | Informe REM en formato YYYY-MM |
| `maximo` | `float64` | No |  |
| `mediana` | `float64` | No |  |
| `minimo` | `float64` | No |  |
| `muestra` | `string` | No | Muestra de participantes: todos o TOP 10 |
| `participantes` | `int` | No |  |
| `percentil10` | `float64` | No |  |
| `percentil25` | `float64` | No |  |
| `percentil75` | `float64` | No |  |
| `percentil90` | `float64` | No |  |
| `periodo` | `string` | No | Período original informado por el BCRA |
| `periodoDesde` | `string` | No | Fecha de inicio del período normalizado |
| `periodoHasta` | `string` | No | Fecha de fin del período normalizado |
| `periodoTipo` | `string` | No | Tipo de período normalizado |
| `promedio` | `float64` | No |  |
| `publicacionUrl` | `string` | No |  |
| `referencia` | `string` | No | Referencia original de la tabla |
| `referenciaFecha` | `string` | No | Fecha detectada en la referencia, si corresponde |
| `unidad` | `string` | No | Unidad inferida desde la referencia |
| `xlsxUrl` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RemExpectativa(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
fmt.Println(rendimiento.GetName()) // "rendimiento"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | `float64` | No |  |
| `fecha` | `string` | No |  |
| `id` | `string` | No |  |
| `moneda` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Rendimiento(nil).Load(map[string]any{"id": "rendimiento_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
riesgoPai := client.RiesgoPai(nil)
fmt.Println(riesgoPai.GetName()) // "riesgo_pai"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `float64` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RiesgoPai(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.RiesgoPai(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(senador.GetName()) // "senador"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `foto` | `string` | No |  |
| `id` | `string` | No |  |
| `nombre` | `string` | No |  |
| `observaciones` | `string` | No |  |
| `partido` | `string` | No |  |
| `periodoLegal` | `map[string]any` | No |  |
| `periodoReal` | `map[string]any` | No |  |
| `provincia` | `string` | No |  |
| `redes` | `[]any` | No |  |
| `reemplazo` | `string` | No |  |
| `telefono` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Senador(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
tasaIntere := client.TasaIntere(nil)
fmt.Println(tasaIntere.GetName()) // "tasa_intere"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `float64` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TasaIntere(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
tasaPlazoFijo := client.TasaPlazoFijo(nil)
fmt.Println(tasaPlazoFijo.GetName()) // "tasa_plazo_fijo"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `logo` | `string` | No | URL del logo de la entidad |
| `tnaClientes` | `float64` | No | Tasa Nominal Anual para clientes, en porcentaje |
| `tnaNoClientes` | `float64` | No | Tasa Nominal Anual para no clientes, en porcentaje |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TasaPlazoFijo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

