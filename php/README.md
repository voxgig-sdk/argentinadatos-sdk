# Argentinadatos PHP SDK



The PHP SDK for the Argentinadatos API — an entity-oriented client using PHP conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
composer require voxgig-sdk/argentinadatos
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'argentinadatos_sdk.php';

$client = new ArgentinadatosSDK([
    "apikey" => getenv("ARGENTINADATOS_APIKEY"),
]);
```

### 2. List actas

```php
[$result, $err] = $client->Acta()->list();
if ($err) { throw new \Exception($err); }

if (is_array($result)) {
    foreach ($result as $item) {
        $d = $item->data_get();
        echo $d["id"] . " " . $d["name"] . "\n";
    }
}
```

### 3. Load a acta

```php
[$result, $err] = $client->Acta()->load(["id" => "example_id"]);
if ($err) { throw new \Exception($err); }
print_r($result);
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
}
```

### Prepare a request without sending it

```php
[$fetchdef, $err] = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);
if ($err) { throw new \Exception($err); }

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = ArgentinadatosSDK::test();

[$result, $err] = $client->Argentinadatos()->load(["id" => "test01"]);
// $result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new ArgentinadatosSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
ARGENTINADATOS_TEST_LIVE=TRUE
ARGENTINADATOS_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### ArgentinadatosSDK

```php
require_once 'argentinadatos_sdk.php';
$client = new ArgentinadatosSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = ArgentinadatosSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### ArgentinadatosSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Acta` | `($data): ActaEntity` | Create a Acta entity instance. |
| `BonosCer` | `($data): BonosCerEntity` | Create a BonosCer entity instance. |
| `Cotizacion` | `($data): CotizacionEntity` | Create a Cotizacion entity instance. |
| `Criptopeso` | `($data): CriptopesoEntity` | Create a Criptopeso entity instance. |
| `CuentaRemuneradaUsd` | `($data): CuentaRemuneradaUsdEntity` | Create a CuentaRemuneradaUsd entity instance. |
| `Diputado` | `($data): DiputadoEntity` | Create a Diputado entity instance. |
| `EntidadRendimiento` | `($data): EntidadRendimientoEntity` | Create a EntidadRendimiento entity instance. |
| `Estado` | `($data): EstadoEntity` | Create a Estado entity instance. |
| `EventoPresidencial` | `($data): EventoPresidencialEntity` | Create a EventoPresidencial entity instance. |
| `Feriado` | `($data): FeriadoEntity` | Create a Feriado entity instance. |
| `Finanza` | `($data): FinanzaEntity` | Create a Finanza entity instance. |
| `FondoComunInversion` | `($data): FondoComunInversionEntity` | Create a FondoComunInversion entity instance. |
| `FondoComunInversionOtro` | `($data): FondoComunInversionOtroEntity` | Create a FondoComunInversionOtro entity instance. |
| `FondoComunInversionVariable` | `($data): FondoComunInversionVariableEntity` | Create a FondoComunInversionVariable entity instance. |
| `HipotecarioUvaTna` | `($data): HipotecarioUvaTnaEntity` | Create a HipotecarioUvaTna entity instance. |
| `IndiceInflacion` | `($data): IndiceInflacionEntity` | Create a IndiceInflacion entity instance. |
| `IndiceUva` | `($data): IndiceUvaEntity` | Create a IndiceUva entity instance. |
| `Letra` | `($data): LetraEntity` | Create a Letra entity instance. |
| `Presidente` | `($data): PresidenteEntity` | Create a Presidente entity instance. |
| `ProveedorPlazoFijoPrecancelable` | `($data): ProveedorPlazoFijoPrecancelableEntity` | Create a ProveedorPlazoFijoPrecancelable entity instance. |
| `ProveedorPlazoFijoUvaPagoPeriodico` | `($data): ProveedorPlazoFijoUvaPagoPeriodicoEntity` | Create a ProveedorPlazoFijoUvaPagoPeriodico entity instance. |
| `Rem` | `($data): RemEntity` | Create a Rem entity instance. |
| `RemExpectativa` | `($data): RemExpectativaEntity` | Create a RemExpectativa entity instance. |
| `Rendimiento` | `($data): RendimientoEntity` | Create a Rendimiento entity instance. |
| `RiesgoPai` | `($data): RiesgoPaiEntity` | Create a RiesgoPai entity instance. |
| `Senador` | `($data): SenadorEntity` | Create a Senador entity instance. |
| `TasaIntere` | `($data): TasaIntereEntity` | Create a TasaIntere entity instance. |
| `TasaPlazoFijo` | `($data): TasaPlazoFijoEntity` | Create a TasaPlazoFijo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return `[$result, $err]`. The first value is an
`array` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `const acta = client.Acta()`

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

```ts
const acta = await client.Acta().load({ id: 'acta_id' })
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
| `fecha_vencimiento` | ``$STRING`` |  |
| `precio_ar` | ``$NUMBER`` |  |
| `ticker` | ``$STRING`` |  |
| `tir_porcentaje` | ``$NUMBER`` |  |
| `voluman` | ``$NUMBER`` |  |

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
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```ts
const cotizacion = await client.Cotizacion().load({ id: 'cotizacion_id' })
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
| `entidad` | ``$STRING`` |  |
| `tna` | ``$NUMBER`` |  |
| `token` | ``$STRING`` |  |

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
| `entidad` | ``$STRING`` |  |
| `tasa` | ``$NUMBER`` |  |
| `tope` | ``$NUMBER`` |  |

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
| `entidad` | ``$STRING`` |  |
| `rendimiento` | ``$ARRAY`` |  |

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
| `aleatorio` | ``$INTEGER`` |  |
| `estado` | ``$STRING`` |  |

#### Example: Load

```ts
const estado = await client.Estado().load({ id: 'estado_id' })
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
| `evento` | ``$STRING`` |  |
| `fecha` | ``$STRING`` |  |
| `tipo` | ``$STRING`` |  |

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
| `fecha` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `tipo` | ``$STRING`` |  |

#### Example: Load

```ts
const feriado = await client.Feriado().load({ id: 'feriado_id' })
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
| `ccp` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `fondo` | ``$STRING`` |  |
| `horizonte` | ``$STRING`` |  |
| `patrimonio` | ``$NUMBER`` |  |
| `tipo` | ``$STRING`` |  |
| `vcp` | ``$NUMBER`` |  |

#### Example: Load

```ts
const fondo_comun_inversion = await client.FondoComunInversion().load({ id: 'fondo_comun_inversion_id' })
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
| `fecha` | ``$STRING`` |  |
| `fondo` | ``$STRING`` |  |
| `tea` | ``$NUMBER`` |  |
| `tna` | ``$NUMBER`` |  |
| `tope` | ``$NUMBER`` |  |

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
| `entidad` | ``$STRING`` |  |
| `metadata` | ``$OBJECT`` |  |
| `nombre_comercial` | ``$STRING`` |  |
| `tna` | ``$NUMBER`` |  |

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
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

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
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

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
| `fecha_emision` | ``$STRING`` |  |
| `fecha_vencimiento` | ``$STRING`` |  |
| `tem` | ``$NUMBER`` |  |
| `ticker` | ``$STRING`` |  |
| `vpv` | ``$NUMBER`` |  |

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
| `fin` | ``$STRING`` |  |
| `imagen` | ``$STRING`` |  |
| `inicio` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `partido` | ``$STRING`` |  |
| `partido_imagen` | ``$STRING`` |  |
| `periodo_presidencial` | ``$STRING`` |  |
| `vicepresidente` | ``$STRING`` |  |

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
| `entidad` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `logo` | ``$STRING`` |  |
| `tasa` | ``$ARRAY`` |  |

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
| `apy` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |

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
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

#### Example: Load

```ts
const riesgo_pai = await client.RiesgoPai().load({ id: 'riesgo_pai_id' })
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
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

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
| `entidad` | ``$STRING`` |  |
| `logo` | ``$STRING`` |  |
| `tna_cliente` | ``$NUMBER`` |  |
| `tna_no_cliente` | ``$NUMBER`` |  |

#### Example: List

```ts
const tasa_plazo_fijos = await client.TasaPlazoFijo().list()
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
error is returned to the caller as the second element in the return array.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── argentinadatos_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`argentinadatos_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$moon = $client->Moon();
[$result, $err] = $moon->load(["planet_id" => "earth", "id" => "luna"]);

// $moon->dataGet() now returns the loaded moon data
// $moon->matchGet() returns the last match criteria
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
