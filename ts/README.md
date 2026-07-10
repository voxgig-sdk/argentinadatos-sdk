# Argentinadatos TypeScript SDK



The TypeScript SDK for the Argentinadatos API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Acta()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/argentinadatos-sdk/releases](https://github.com/voxgig-sdk/argentinadatos-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { ArgentinadatosSDK } from '@voxgig-sdk/argentinadatos'

const client = new ArgentinadatosSDK()
```

### 2. List acta records

`list()` resolves to an array of Acta objects — iterate it directly:

```ts
const actas = await client.Acta().list()

for (const acta of actas) {
  console.log(acta)
}
```

### 3. Load a cotizacion

Cotizacion is nested under casa, so provide the `casa`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const cotizacion = await client.Cotizacion().load({
    casa: 'example_casa',
  })
  console.log(cotizacion)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const actas = await client.Acta().list()
  console.log(actas)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = ArgentinadatosSDK.test()

const acta = await client.Acta().list()
// acta is a bare entity populated with mock response data
console.log(acta)
```

You can also use the instance method:

```ts
const client = new ArgentinadatosSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Acta()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new ArgentinadatosSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
ARGENTINADATOS_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### ArgentinadatosSDK

#### Constructor

```ts
new ArgentinadatosSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Acta(data?)` | `ActaEntity` | Create an Acta entity instance. |
| `BonosCer(data?)` | `BonosCerEntity` | Create a BonosCer entity instance. |
| `Cotizacion(data?)` | `CotizacionEntity` | Create a Cotizacion entity instance. |
| `Criptopeso(data?)` | `CriptopesoEntity` | Create a Criptopeso entity instance. |
| `CuentaRemuneradaUsd(data?)` | `CuentaRemuneradaUsdEntity` | Create a CuentaRemuneradaUsd entity instance. |
| `Diputado(data?)` | `DiputadoEntity` | Create a Diputado entity instance. |
| `EntidadRendimiento(data?)` | `EntidadRendimientoEntity` | Create an EntidadRendimiento entity instance. |
| `Estado(data?)` | `EstadoEntity` | Create an Estado entity instance. |
| `EventoPresidencial(data?)` | `EventoPresidencialEntity` | Create an EventoPresidencial entity instance. |
| `Feriado(data?)` | `FeriadoEntity` | Create a Feriado entity instance. |
| `Finanza(data?)` | `FinanzaEntity` | Create a Finanza entity instance. |
| `FondoComunInversion(data?)` | `FondoComunInversionEntity` | Create a FondoComunInversion entity instance. |
| `FondoComunInversionOtro(data?)` | `FondoComunInversionOtroEntity` | Create a FondoComunInversionOtro entity instance. |
| `FondoComunInversionVariable(data?)` | `FondoComunInversionVariableEntity` | Create a FondoComunInversionVariable entity instance. |
| `HipotecarioUvaTna(data?)` | `HipotecarioUvaTnaEntity` | Create a HipotecarioUvaTna entity instance. |
| `IndiceInflacion(data?)` | `IndiceInflacionEntity` | Create an IndiceInflacion entity instance. |
| `IndiceUva(data?)` | `IndiceUvaEntity` | Create an IndiceUva entity instance. |
| `Letra(data?)` | `LetraEntity` | Create a Letra entity instance. |
| `Presidente(data?)` | `PresidenteEntity` | Create a Presidente entity instance. |
| `ProveedorPlazoFijoPrecancelable(data?)` | `ProveedorPlazoFijoPrecancelableEntity` | Create a ProveedorPlazoFijoPrecancelable entity instance. |
| `ProveedorPlazoFijoUvaPagoPeriodico(data?)` | `ProveedorPlazoFijoUvaPagoPeriodicoEntity` | Create a ProveedorPlazoFijoUvaPagoPeriodico entity instance. |
| `Rem(data?)` | `RemEntity` | Create a Rem entity instance. |
| `RemExpectativa(data?)` | `RemExpectativaEntity` | Create a RemExpectativa entity instance. |
| `Rendimiento(data?)` | `RendimientoEntity` | Create a Rendimiento entity instance. |
| `RiesgoPai(data?)` | `RiesgoPaiEntity` | Create a RiesgoPai entity instance. |
| `Senador(data?)` | `SenadorEntity` | Create a Senador entity instance. |
| `TasaIntere(data?)` | `TasaIntereEntity` | Create a TasaIntere entity instance. |
| `TasaPlazoFijo(data?)` | `TasaPlazoFijoEntity` | Create a TasaPlazoFijo entity instance. |
| `tester(testopts?, sdkopts?)` | `ArgentinadatosSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `ArgentinadatosSDK.test(testopts?, sdkopts?)` | `ArgentinadatosSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): ArgentinadatosSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: list, load.

API path: `/v1/diputados/actas`

#### BonosCer

| Field | Description |
| --- | --- |
| `fecha_vencimiento` |  |
| `precio_ar` |  |
| `ticker` |  |
| `tir_porcentaje` |  |
| `voluman` |  |

Operations: list.

API path: `/v1/finanzas/bonos-cer`

#### Cotizacion

| Field | Description |
| --- | --- |
| `casa` |  |
| `compra` |  |
| `fecha` |  |
| `moneda` |  |
| `venta` |  |

Operations: list, load.

API path: `/v1/cotizaciones/dolares`

#### Criptopeso

| Field | Description |
| --- | --- |
| `entidad` |  |
| `tna` |  |
| `token` |  |

Operations: list.

API path: `/v1/finanzas/criptopesos`

#### CuentaRemuneradaUsd

| Field | Description |
| --- | --- |
| `entidad` |  |
| `tasa` |  |
| `tope` |  |

Operations: list.

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

Operations: list.

API path: `/v1/diputados/diputados`

#### EntidadRendimiento

| Field | Description |
| --- | --- |
| `entidad` |  |
| `rendimiento` |  |

Operations: list.

API path: `/v1/finanzas/rendimientos`

#### Estado

| Field | Description |
| --- | --- |
| `aleatorio` |  |
| `estado` |  |

Operations: load.

API path: `/v1/estado`

#### EventoPresidencial

| Field | Description |
| --- | --- |
| `evento` |  |
| `fecha` |  |
| `tipo` |  |

Operations: list.

API path: `/v1/eventos/presidenciales`

#### Feriado

| Field | Description |
| --- | --- |
| `fecha` |  |
| `nombre` |  |
| `tipo` |  |

Operations: load.

API path: `/v1/feriados/{año}`

#### Finanza

| Field | Description |
| --- | --- |

Operations: list.

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

Operations: load.

API path: `/v1/finanzas/fci/mercadoDinero/{fecha}`

#### FondoComunInversionOtro

| Field | Description |
| --- | --- |
| `fecha` |  |
| `fondo` |  |
| `tea` |  |
| `tna` |  |
| `tope` |  |

Operations: load.

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

Operations: load.

API path: `/v1/finanzas/fci/variables/{fecha}`

#### HipotecarioUvaTna

| Field | Description |
| --- | --- |
| `entidad` |  |
| `metadata` |  |
| `nombre_comercial` |  |
| `tna` |  |

Operations: list.

API path: `/v1/finanzas/creditos/hipotecariosUva`

#### IndiceInflacion

| Field | Description |
| --- | --- |
| `fecha` |  |
| `valor` |  |

Operations: list.

API path: `/v1/finanzas/indices/inflacion`

#### IndiceUva

| Field | Description |
| --- | --- |
| `fecha` |  |
| `valor` |  |

Operations: list.

API path: `/v1/finanzas/indices/uva`

#### Letra

| Field | Description |
| --- | --- |
| `fecha_emision` |  |
| `fecha_vencimiento` |  |
| `tem` |  |
| `ticker` |  |
| `vpv` |  |

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/v1/finanzas/tasas/plazoFijoPrecancelable`

#### ProveedorPlazoFijoUvaPagoPeriodico

| Field | Description |
| --- | --- |
| `entidad` |  |
| `id` |  |
| `logo` |  |
| `tasa` |  |

Operations: list.

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

Operations: list.

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

Operations: list.

API path: `/v1/rems/ultimo`

#### Rendimiento

| Field | Description |
| --- | --- |
| `apy` |  |
| `fecha` |  |
| `moneda` |  |

Operations: load.

API path: `/v1/finanzas/rendimientos/{entidad}`

#### RiesgoPai

| Field | Description |
| --- | --- |
| `fecha` |  |
| `valor` |  |

Operations: list, load.

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

Operations: list.

API path: `/v1/senado/senadores`

#### TasaIntere

| Field | Description |
| --- | --- |
| `fecha` |  |
| `valor` |  |

Operations: list.

API path: `/v1/finanzas/tasas/depositos30Dias`

#### TasaPlazoFijo

| Field | Description |
| --- | --- |
| `entidad` |  |
| `logo` |  |
| `tna_cliente` |  |
| `tna_no_cliente` |  |

Operations: list.

API path: `/v1/finanzas/tasas/plazoFijo`



## Entities


### Acta

Create an instance: `const acta = client.Acta()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abstencione` | `number` |  |
| `acta` | `string` |  |
| `acta_id` | `number` |  |
| `afirmativo` | `number` |  |
| `amn` | `number` |  |
| `ausente` | `number` |  |
| `descripcion` | `string` |  |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `mayoria` | `string` |  |
| `miembro` | `number` |  |
| `negativo` | `number` |  |
| `numero_acta` | `string` |  |
| `observacione` | `any[]` |  |
| `periodo` | `string` |  |
| `presente` | `number` |  |
| `presidente` | `string` |  |
| `proyecto` | `string` |  |
| `quorum_tipo` | `string` |  |
| `resultado` | `string` |  |
| `reunion` | `string` |  |
| `titulo` | `string` |  |
| `voto` | `any[]` |  |
| `votos_afirmativo` | `number` |  |
| `votos_negativo` | `number` |  |

#### Example: Load

```ts
const acta = await client.Acta().load({ id: 1 })
```

#### Example: List

```ts
const actas = await client.Acta().list()
```


### BonosCer

Create an instance: `const bonos_cer = client.BonosCer()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha_vencimiento` | `string` |  |
| `precio_ar` | `number` |  |
| `ticker` | `string` |  |
| `tir_porcentaje` | `number` |  |
| `voluman` | `number` |  |

#### Example: List

```ts
const bonos_cers = await client.BonosCer().list()
```


### Cotizacion

Create an instance: `const cotizacion = client.Cotizacion()`

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
| `moneda` | `string` |  |
| `venta` | `number` |  |

#### Example: Load

```ts
const cotizacion = await client.Cotizacion().load({ casa: 'casa' })
```

#### Example: List

```ts
const cotizacions = await client.Cotizacion().list()
```


### Criptopeso

Create an instance: `const criptopeso = client.Criptopeso()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `tna` | `number` |  |
| `token` | `string` |  |

#### Example: List

```ts
const criptopesos = await client.Criptopeso().list()
```


### CuentaRemuneradaUsd

Create an instance: `const cuenta_remunerada_usd = client.CuentaRemuneradaUsd()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `tasa` | `number` |  |
| `tope` | `number` |  |

#### Example: List

```ts
const cuenta_remunerada_usds = await client.CuentaRemuneradaUsd().list()
```


### Diputado

Create an instance: `const diputado = client.Diputado()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apellido` | `string` |  |
| `bloque` | `string` |  |
| `cese_fecha` | `string` |  |
| `foto` | `string` |  |
| `genero` | `string` |  |
| `id` | `string` |  |
| `juramento_fecha` | `string` |  |
| `nombre` | `string` |  |
| `periodo_bloque` | `Record<string, any>` |  |
| `periodo_mandato` | `Record<string, any>` |  |
| `provincia` | `string` |  |

#### Example: List

```ts
const diputados = await client.Diputado().list()
```


### EntidadRendimiento

Create an instance: `const entidad_rendimiento = client.EntidadRendimiento()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `rendimiento` | `any[]` |  |

#### Example: List

```ts
const entidad_rendimientos = await client.EntidadRendimiento().list()
```


### Estado

Create an instance: `const estado = client.Estado()`

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

```ts
const estado = await client.Estado().load()
```


### EventoPresidencial

Create an instance: `const evento_presidencial = client.EventoPresidencial()`

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

```ts
const evento_presidencials = await client.EventoPresidencial().list()
```


### Feriado

Create an instance: `const feriado = client.Feriado()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `nombre` | `string` |  |
| `tipo` | `string` |  |

#### Example: Load

```ts
const feriado = await client.Feriado().load({ id: 1 })
```


### Finanza

Create an instance: `const finanza = client.Finanza()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const finanzas = await client.Finanza().list()
```


### FondoComunInversion

Create an instance: `const fondo_comun_inversion = client.FondoComunInversion()`

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

```ts
const fondo_comun_inversion = await client.FondoComunInversion().load({ fecha: 'fecha' })
```


### FondoComunInversionOtro

Create an instance: `const fondo_comun_inversion_otro = client.FondoComunInversionOtro()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `fondo` | `string` |  |
| `tea` | `number` |  |
| `tna` | `number` |  |
| `tope` | `number` |  |

#### Example: Load

```ts
const fondo_comun_inversion_otro = await client.FondoComunInversionOtro().load({ id: 'fondo_comun_inversion_otro_id' })
```


### FondoComunInversionVariable

Create an instance: `const fondo_comun_inversion_variable = client.FondoComunInversionVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condicione` | `string` |  |
| `condiciones_corto` | `string` |  |
| `fecha` | `string` |  |
| `fondo` | `string` |  |
| `nombre` | `string` |  |
| `tea` | `number` |  |
| `tipo` | `string` |  |
| `tna` | `number` |  |
| `tope` | `number` |  |

#### Example: Load

```ts
const fondo_comun_inversion_variable = await client.FondoComunInversionVariable().load({ id: 'fondo_comun_inversion_variable_id' })
```


### HipotecarioUvaTna

Create an instance: `const hipotecario_uva_tna = client.HipotecarioUvaTna()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `nombre_comercial` | `string` |  |
| `tna` | `number` |  |

#### Example: List

```ts
const hipotecario_uva_tnas = await client.HipotecarioUvaTna().list()
```


### IndiceInflacion

Create an instance: `const indice_inflacion = client.IndiceInflacion()`

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

```ts
const indice_inflacions = await client.IndiceInflacion().list()
```


### IndiceUva

Create an instance: `const indice_uva = client.IndiceUva()`

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

```ts
const indice_uvas = await client.IndiceUva().list()
```


### Letra

Create an instance: `const letra = client.Letra()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha_emision` | `string` |  |
| `fecha_vencimiento` | `string` |  |
| `tem` | `number` |  |
| `ticker` | `string` |  |
| `vpv` | `number` |  |

#### Example: List

```ts
const letras = await client.Letra().list()
```


### Presidente

Create an instance: `const presidente = client.Presidente()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fin` | `string` |  |
| `imagen` | `string` |  |
| `inicio` | `string` |  |
| `nombre` | `string` |  |
| `partido` | `string` |  |
| `partido_imagen` | `string` |  |
| `periodo_presidencial` | `string` |  |
| `vicepresidente` | `string` |  |

#### Example: List

```ts
const presidentes = await client.Presidente().list()
```


### ProveedorPlazoFijoPrecancelable

Create an instance: `const proveedor_plazo_fijo_precancelable = client.ProveedorPlazoFijoPrecancelable()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aviso_precancelacion_dia` | `number` |  |
| `canal` | `string` |  |
| `enlace` | `string` |  |
| `entidad` | `string` |  |
| `id` | `string` |  |
| `logo` | `string` |  |
| `modalidad` | `string` |  |
| `moneda` | `string` |  |
| `monto_maximo` | `number` |  |
| `monto_minimo` | `number` |  |
| `plazo_max_dia` | `number` |  |
| `plazo_min_dia` | `number` |  |
| `plazo_precancelacion_dia` | `number` |  |
| `tea` | `number` |  |
| `tea_precancelacion` | `number` |  |
| `tna` | `number` |  |
| `tna_precancelacion` | `number` |  |

#### Example: List

```ts
const proveedor_plazo_fijo_precancelables = await client.ProveedorPlazoFijoPrecancelable().list()
```


### ProveedorPlazoFijoUvaPagoPeriodico

Create an instance: `const proveedor_plazo_fijo_uva_pago_periodico = client.ProveedorPlazoFijoUvaPagoPeriodico()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `id` | `string` |  |
| `logo` | `string` |  |
| `tasa` | `any[]` |  |

#### Example: List

```ts
const proveedor_plazo_fijo_uva_pago_periodicos = await client.ProveedorPlazoFijoUvaPagoPeriodico().list()
```


### Rem

Create an instance: `const rem = client.Rem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `number` |  |
| `fecha` | `string` |  |
| `fuente` | `string` |  |
| `indicador` | `string` |  |
| `informe` | `string` |  |
| `maximo` | `number` |  |
| `mediana` | `number` |  |
| `minimo` | `number` |  |
| `muestra` | `string` |  |
| `participante` | `number` |  |
| `percentil10` | `number` |  |
| `percentil25` | `number` |  |
| `percentil75` | `number` |  |
| `percentil90` | `number` |  |
| `periodo` | `string` |  |
| `periodo_desde` | `string` |  |
| `periodo_hasta` | `string` |  |
| `periodo_tipo` | `string` |  |
| `promedio` | `number` |  |
| `publicacion_url` | `string` |  |
| `referencia` | `string` |  |
| `referencia_fecha` | `string` |  |
| `unidad` | `string` |  |
| `xlsx_url` | `string` |  |

#### Example: List

```ts
const rems = await client.Rem().list()
```


### RemExpectativa

Create an instance: `const rem_expectativa = client.RemExpectativa()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `number` |  |
| `fecha` | `string` |  |
| `fuente` | `string` |  |
| `indicador` | `string` |  |
| `informe` | `string` |  |
| `maximo` | `number` |  |
| `mediana` | `number` |  |
| `minimo` | `number` |  |
| `muestra` | `string` |  |
| `participante` | `number` |  |
| `percentil10` | `number` |  |
| `percentil25` | `number` |  |
| `percentil75` | `number` |  |
| `percentil90` | `number` |  |
| `periodo` | `string` |  |
| `periodo_desde` | `string` |  |
| `periodo_hasta` | `string` |  |
| `periodo_tipo` | `string` |  |
| `promedio` | `number` |  |
| `publicacion_url` | `string` |  |
| `referencia` | `string` |  |
| `referencia_fecha` | `string` |  |
| `unidad` | `string` |  |
| `xlsx_url` | `string` |  |

#### Example: List

```ts
const rem_expectativas = await client.RemExpectativa().list()
```


### Rendimiento

Create an instance: `const rendimiento = client.Rendimiento()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apy` | `number` |  |
| `fecha` | `string` |  |
| `moneda` | `string` |  |

#### Example: Load

```ts
const rendimiento = await client.Rendimiento().load({ id: 'rendimiento_id' })
```


### RiesgoPai

Create an instance: `const riesgo_pai = client.RiesgoPai()`

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

```ts
const riesgo_pai = await client.RiesgoPai().load()
```

#### Example: List

```ts
const riesgo_pais = await client.RiesgoPai().list()
```


### Senador

Create an instance: `const senador = client.Senador()`

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
| `observacione` | `string` |  |
| `partido` | `string` |  |
| `periodo_legal` | `Record<string, any>` |  |
| `periodo_real` | `Record<string, any>` |  |
| `provincia` | `string` |  |
| `rede` | `any[]` |  |
| `reemplazo` | `string` |  |
| `telefono` | `string` |  |

#### Example: List

```ts
const senadors = await client.Senador().list()
```


### TasaIntere

Create an instance: `const tasa_intere = client.TasaIntere()`

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

```ts
const tasa_interes = await client.TasaIntere().list()
```


### TasaPlazoFijo

Create an instance: `const tasa_plazo_fijo = client.TasaPlazoFijo()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `logo` | `string` |  |
| `tna_cliente` | `number` |  |
| `tna_no_cliente` | `number` |  |

#### Example: List

```ts
const tasa_plazo_fijos = await client.TasaPlazoFijo().list()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
argentinadatos/
├── src/
│   ├── ArgentinadatosSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { ArgentinadatosSDK } from '@voxgig-sdk/argentinadatos'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const acta = client.Acta()
await acta.list()

// acta.data() now returns the acta data from the last `list`
// acta.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
