# Argentinadatos TypeScript SDK Reference

Complete API reference for the Argentinadatos TypeScript SDK.


## ArgentinadatosSDK

### Constructor

```ts
new ArgentinadatosSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ArgentinadatosSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ArgentinadatosSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ArgentinadatosSDK` instance in test mode.


### Instance Methods

#### `Acta(data?: object)`

Create a new `Acta` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActaEntity` instance.

#### `BonosCer(data?: object)`

Create a new `BonosCer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BonosCerEntity` instance.

#### `Cotizacion(data?: object)`

Create a new `Cotizacion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CotizacionEntity` instance.

#### `Criptopeso(data?: object)`

Create a new `Criptopeso` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CriptopesoEntity` instance.

#### `CuentaRemuneradaUsd(data?: object)`

Create a new `CuentaRemuneradaUsd` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CuentaRemuneradaUsdEntity` instance.

#### `Diputado(data?: object)`

Create a new `Diputado` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DiputadoEntity` instance.

#### `EntidadRendimiento(data?: object)`

Create a new `EntidadRendimiento` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EntidadRendimientoEntity` instance.

#### `Estado(data?: object)`

Create a new `Estado` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EstadoEntity` instance.

#### `EventoPresidencial(data?: object)`

Create a new `EventoPresidencial` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventoPresidencialEntity` instance.

#### `Feriado(data?: object)`

Create a new `Feriado` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FeriadoEntity` instance.

#### `Finanza(data?: object)`

Create a new `Finanza` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FinanzaEntity` instance.

#### `FondoComunInversion(data?: object)`

Create a new `FondoComunInversion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FondoComunInversionEntity` instance.

#### `FondoComunInversionOtro(data?: object)`

Create a new `FondoComunInversionOtro` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FondoComunInversionOtroEntity` instance.

#### `FondoComunInversionVariable(data?: object)`

Create a new `FondoComunInversionVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FondoComunInversionVariableEntity` instance.

#### `HipotecarioUvaTna(data?: object)`

Create a new `HipotecarioUvaTna` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HipotecarioUvaTnaEntity` instance.

#### `IndiceInflacion(data?: object)`

Create a new `IndiceInflacion` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IndiceInflacionEntity` instance.

#### `IndiceUva(data?: object)`

Create a new `IndiceUva` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IndiceUvaEntity` instance.

#### `Letra(data?: object)`

Create a new `Letra` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LetraEntity` instance.

#### `Presidente(data?: object)`

Create a new `Presidente` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PresidenteEntity` instance.

#### `ProveedorPlazoFijoPrecancelable(data?: object)`

Create a new `ProveedorPlazoFijoPrecancelable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProveedorPlazoFijoPrecancelableEntity` instance.

#### `ProveedorPlazoFijoUvaPagoPeriodico(data?: object)`

Create a new `ProveedorPlazoFijoUvaPagoPeriodico` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance.

#### `Rem(data?: object)`

Create a new `Rem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemEntity` instance.

#### `RemExpectativa(data?: object)`

Create a new `RemExpectativa` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemExpectativaEntity` instance.

#### `Rendimiento(data?: object)`

Create a new `Rendimiento` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RendimientoEntity` instance.

#### `RiesgoPai(data?: object)`

Create a new `RiesgoPai` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RiesgoPaiEntity` instance.

#### `Senador(data?: object)`

Create a new `Senador` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SenadorEntity` instance.

#### `TasaIntere(data?: object)`

Create a new `TasaIntere` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TasaIntereEntity` instance.

#### `TasaPlazoFijo(data?: object)`

Create a new `TasaPlazoFijo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TasaPlazoFijoEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ArgentinadatosSDK.test()`.

**Returns:** `ArgentinadatosSDK` instance in test mode.


---

## ActaEntity

```ts
const acta = client.Acta()
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
| `observacione` | `any[]` | No |  |
| `periodo` | `string` | No |  |
| `presente` | `number` | No |  |
| `presidente` | `string` | No |  |
| `proyecto` | `string` | No |  |
| `quorum_tipo` | `string` | No |  |
| `resultado` | `string` | No |  |
| `reunion` | `string` | No |  |
| `titulo` | `string` | No |  |
| `voto` | `any[]` | No |  |
| `votos_afirmativo` | `number` | No |  |
| `votos_negativo` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Acta().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Acta().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActaEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BonosCerEntity

```ts
const bonos_cer = client.BonosCer()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BonosCer().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BonosCerEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CotizacionEntity

```ts
const cotizacion = client.Cotizacion()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cotizacion().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Cotizacion().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CotizacionEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CriptopesoEntity

```ts
const criptopeso = client.Criptopeso()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `tna` | `number` | No |  |
| `token` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Criptopeso().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CriptopesoEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CuentaRemuneradaUsdEntity

```ts
const cuenta_remunerada_usd = client.CuentaRemuneradaUsd()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `tasa` | `number` | No |  |
| `tope` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CuentaRemuneradaUsd().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CuentaRemuneradaUsdEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DiputadoEntity

```ts
const diputado = client.Diputado()
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
| `periodo_bloque` | `Record<string, any>` | No |  |
| `periodo_mandato` | `Record<string, any>` | No |  |
| `provincia` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Diputado().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DiputadoEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EntidadRendimientoEntity

```ts
const entidad_rendimiento = client.EntidadRendimiento()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `rendimiento` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EntidadRendimiento().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EntidadRendimientoEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EstadoEntity

```ts
const estado = client.Estado()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `number` | No |  |
| `estado` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Estado().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EstadoEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventoPresidencialEntity

```ts
const evento_presidencial = client.EventoPresidencial()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | `string` | No |  |
| `fecha` | `string` | No |  |
| `tipo` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EventoPresidencial().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventoPresidencialEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FeriadoEntity

```ts
const feriado = client.Feriado()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `nombre` | `string` | No |  |
| `tipo` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Feriado().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FeriadoEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FinanzaEntity

```ts
const finanza = client.Finanza()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Finanza().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FinanzaEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FondoComunInversionEntity

```ts
const fondo_comun_inversion = client.FondoComunInversion()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FondoComunInversion().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FondoComunInversionEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FondoComunInversionOtroEntity

```ts
const fondo_comun_inversion_otro = client.FondoComunInversionOtro()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FondoComunInversionOtro().load({ id: 'fondo_comun_inversion_otro_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FondoComunInversionOtroEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FondoComunInversionVariableEntity

```ts
const fondo_comun_inversion_variable = client.FondoComunInversionVariable()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FondoComunInversionVariable().load({ id: 'fondo_comun_inversion_variable_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FondoComunInversionVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## HipotecarioUvaTnaEntity

```ts
const hipotecario_uva_tna = client.HipotecarioUvaTna()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `metadata` | `Record<string, any>` | No |  |
| `nombre_comercial` | `string` | No |  |
| `tna` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.HipotecarioUvaTna().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HipotecarioUvaTnaEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IndiceInflacionEntity

```ts
const indice_inflacion = client.IndiceInflacion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IndiceInflacion().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IndiceInflacionEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IndiceUvaEntity

```ts
const indice_uva = client.IndiceUva()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IndiceUva().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IndiceUvaEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LetraEntity

```ts
const letra = client.Letra()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Letra().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LetraEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PresidenteEntity

```ts
const presidente = client.Presidente()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Presidente().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PresidenteEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProveedorPlazoFijoPrecancelableEntity

```ts
const proveedor_plazo_fijo_precancelable = client.ProveedorPlazoFijoPrecancelable()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProveedorPlazoFijoPrecancelable().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProveedorPlazoFijoUvaPagoPeriodicoEntity

```ts
const proveedor_plazo_fijo_uva_pago_periodico = client.ProveedorPlazoFijoUvaPagoPeriodico()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `id` | `string` | No |  |
| `logo` | `string` | No |  |
| `tasa` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProveedorPlazoFijoUvaPagoPeriodico().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemEntity

```ts
const rem = client.Rem()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Rem().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemExpectativaEntity

```ts
const rem_expectativa = client.RemExpectativa()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RemExpectativa().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemExpectativaEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RendimientoEntity

```ts
const rendimiento = client.Rendimiento()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | `number` | No |  |
| `fecha` | `string` | No |  |
| `moneda` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Rendimiento().load({ id: 'rendimiento_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RendimientoEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RiesgoPaiEntity

```ts
const riesgo_pai = client.RiesgoPai()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RiesgoPai().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RiesgoPai().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RiesgoPaiEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SenadorEntity

```ts
const senador = client.Senador()
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
| `periodo_legal` | `Record<string, any>` | No |  |
| `periodo_real` | `Record<string, any>` | No |  |
| `provincia` | `string` | No |  |
| `rede` | `any[]` | No |  |
| `reemplazo` | `string` | No |  |
| `telefono` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Senador().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SenadorEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TasaIntereEntity

```ts
const tasa_intere = client.TasaIntere()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TasaIntere().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TasaIntereEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TasaPlazoFijoEntity

```ts
const tasa_plazo_fijo = client.TasaPlazoFijo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `logo` | `string` | No |  |
| `tna_cliente` | `number` | No |  |
| `tna_no_cliente` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TasaPlazoFijo().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TasaPlazoFijoEntity` instance with the same client and
options.

#### `client()`

Return the parent `ArgentinadatosSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new ArgentinadatosSDK({
  feature: {
    test: { active: true },
  }
})
```

