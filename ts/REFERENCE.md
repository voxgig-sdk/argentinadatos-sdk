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
| `options.apikey` | `string` | API key for authentication. |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Acta().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Acta().load({ id: 'acta_id' })
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
| `fecha_vencimiento` | ``$STRING`` | Yes |  |
| `precio_ar` | ``$NUMBER`` | Yes |  |
| `ticker` | ``$STRING`` | Yes |  |
| `tir_porcentaje` | ``$NUMBER`` | Yes |  |
| `voluman` | ``$NUMBER`` | No |  |

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
| `casa` | ``$STRING`` | No |  |
| `compra` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `moneda` | ``$STRING`` | No |  |
| `venta` | ``$NUMBER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cotizacion().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Cotizacion().load({ id: 'cotizacion_id' })
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
| `entidad` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |
| `token` | ``$STRING`` | No |  |

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
| `entidad` | ``$STRING`` | No |  |
| `tasa` | ``$NUMBER`` | No |  |
| `tope` | ``$NUMBER`` | No |  |

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
| `entidad` | ``$STRING`` | No |  |
| `rendimiento` | ``$ARRAY`` | No |  |

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
| `aleatorio` | ``$INTEGER`` | No |  |
| `estado` | ``$STRING`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Estado().load({ id: 'estado_id' })
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
| `evento` | ``$STRING`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `tipo` | ``$STRING`` | No |  |

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
| `fecha` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `tipo` | ``$STRING`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Feriado().load({ id: 'feriado_id' })
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
| `ccp` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `fondo` | ``$STRING`` | No |  |
| `horizonte` | ``$STRING`` | No |  |
| `patrimonio` | ``$NUMBER`` | No |  |
| `tipo` | ``$STRING`` | No |  |
| `vcp` | ``$NUMBER`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FondoComunInversion().load({ id: 'fondo_comun_inversion_id' })
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
| `fecha` | ``$STRING`` | No |  |
| `fondo` | ``$STRING`` | No |  |
| `tea` | ``$NUMBER`` | No |  |
| `tna` | ``$NUMBER`` | No |  |
| `tope` | ``$NUMBER`` | No |  |

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
| `entidad` | ``$STRING`` | No |  |
| `metadata` | ``$OBJECT`` | No |  |
| `nombre_comercial` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |

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
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

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
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

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
| `fecha_emision` | ``$STRING`` | No |  |
| `fecha_vencimiento` | ``$STRING`` | No |  |
| `tem` | ``$NUMBER`` | No |  |
| `ticker` | ``$STRING`` | No |  |
| `vpv` | ``$NUMBER`` | No |  |

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
| `fin` | ``$STRING`` | No |  |
| `imagen` | ``$STRING`` | No |  |
| `inicio` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `partido` | ``$STRING`` | No |  |
| `partido_imagen` | ``$STRING`` | No |  |
| `periodo_presidencial` | ``$STRING`` | No |  |
| `vicepresidente` | ``$STRING`` | No |  |

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
| `entidad` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `tasa` | ``$ARRAY`` | No |  |

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
| `apy` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `moneda` | ``$STRING`` | No |  |

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
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RiesgoPai().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RiesgoPai().load({ id: 'riesgo_pai_id' })
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
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

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
| `entidad` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `tna_cliente` | ``$NUMBER`` | No |  |
| `tna_no_cliente` | ``$NUMBER`` | No |  |

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

