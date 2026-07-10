# Argentinadatos PHP SDK



The PHP SDK for the Argentinadatos API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Acta()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/argentinadatos-sdk/releases](https://github.com/voxgig-sdk/argentinadatos-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'argentinadatos_sdk.php';

$client = new ArgentinadatosSDK();
```

### 2. List acta records

```php
try {
    // list() returns an array of Acta records — iterate directly.
    $actas = $client->Acta()->list();
    foreach ($actas as $item) {
        echo $item["id"] . " " . $item["abstencione"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a cotizacion

Cotizacion is nested under casa, so provide the `casa`.

```php
try {
    // load() returns the bare Cotizacion record (throws on error).
    $cotizacion = $client->Cotizacion()->load(["casa" => "example_casa"]);
    print_r($cotizacion);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $actas = $client->Acta()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = ArgentinadatosSDK::test([
    "entity" => ["acta" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the bare mock record (throws on error).
$acta = $client->Acta()->list();
print_r($acta);
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
| `Acta` | `($data): ActaEntity` | Create an Acta entity instance. |
| `BonosCer` | `($data): BonosCerEntity` | Create a BonosCer entity instance. |
| `Cotizacion` | `($data): CotizacionEntity` | Create a Cotizacion entity instance. |
| `Criptopeso` | `($data): CriptopesoEntity` | Create a Criptopeso entity instance. |
| `CuentaRemuneradaUsd` | `($data): CuentaRemuneradaUsdEntity` | Create a CuentaRemuneradaUsd entity instance. |
| `Diputado` | `($data): DiputadoEntity` | Create a Diputado entity instance. |
| `EntidadRendimiento` | `($data): EntidadRendimientoEntity` | Create an EntidadRendimiento entity instance. |
| `Estado` | `($data): EstadoEntity` | Create an Estado entity instance. |
| `EventoPresidencial` | `($data): EventoPresidencialEntity` | Create an EventoPresidencial entity instance. |
| `Feriado` | `($data): FeriadoEntity` | Create a Feriado entity instance. |
| `Finanza` | `($data): FinanzaEntity` | Create a Finanza entity instance. |
| `FondoComunInversion` | `($data): FondoComunInversionEntity` | Create a FondoComunInversion entity instance. |
| `FondoComunInversionOtro` | `($data): FondoComunInversionOtroEntity` | Create a FondoComunInversionOtro entity instance. |
| `FondoComunInversionVariable` | `($data): FondoComunInversionVariableEntity` | Create a FondoComunInversionVariable entity instance. |
| `HipotecarioUvaTna` | `($data): HipotecarioUvaTnaEntity` | Create a HipotecarioUvaTna entity instance. |
| `IndiceInflacion` | `($data): IndiceInflacionEntity` | Create an IndiceInflacion entity instance. |
| `IndiceUva` | `($data): IndiceUvaEntity` | Create an IndiceUva entity instance. |
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
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

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

Create an instance: `$acta = $client->Acta();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abstencione` | `int` |  |
| `acta` | `string` |  |
| `acta_id` | `int` |  |
| `afirmativo` | `int` |  |
| `amn` | `int` |  |
| `ausente` | `int` |  |
| `descripcion` | `string` |  |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `mayoria` | `string` |  |
| `miembro` | `int` |  |
| `negativo` | `int` |  |
| `numero_acta` | `string` |  |
| `observacione` | `array` |  |
| `periodo` | `string` |  |
| `presente` | `int` |  |
| `presidente` | `string` |  |
| `proyecto` | `string` |  |
| `quorum_tipo` | `string` |  |
| `resultado` | `string` |  |
| `reunion` | `string` |  |
| `titulo` | `string` |  |
| `voto` | `array` |  |
| `votos_afirmativo` | `int` |  |
| `votos_negativo` | `int` |  |

#### Example: Load

```php
// load() returns the bare Acta record (throws on error).
$acta = $client->Acta()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Acta records (throws on error).
$actas = $client->Acta()->list();
```


### BonosCer

Create an instance: `$bonos_cer = $client->BonosCer();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha_vencimiento` | `string` |  |
| `precio_ar` | `float` |  |
| `ticker` | `string` |  |
| `tir_porcentaje` | `float` |  |
| `voluman` | `float` |  |

#### Example: List

```php
// list() returns an array of BonosCer records (throws on error).
$bonos_cers = $client->BonosCer()->list();
```


### Cotizacion

Create an instance: `$cotizacion = $client->Cotizacion();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `string` |  |
| `compra` | `float` |  |
| `fecha` | `string` |  |
| `moneda` | `string` |  |
| `venta` | `float` |  |

#### Example: Load

```php
// load() returns the bare Cotizacion record (throws on error).
$cotizacion = $client->Cotizacion()->load(["casa" => "casa"]);
```

#### Example: List

```php
// list() returns an array of Cotizacion records (throws on error).
$cotizacions = $client->Cotizacion()->list();
```


### Criptopeso

Create an instance: `$criptopeso = $client->Criptopeso();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `tna` | `float` |  |
| `token` | `string` |  |

#### Example: List

```php
// list() returns an array of Criptopeso records (throws on error).
$criptopesos = $client->Criptopeso()->list();
```


### CuentaRemuneradaUsd

Create an instance: `$cuenta_remunerada_usd = $client->CuentaRemuneradaUsd();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `tasa` | `float` |  |
| `tope` | `float` |  |

#### Example: List

```php
// list() returns an array of CuentaRemuneradaUsd records (throws on error).
$cuenta_remunerada_usds = $client->CuentaRemuneradaUsd()->list();
```


### Diputado

Create an instance: `$diputado = $client->Diputado();`

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
| `periodo_bloque` | `array` |  |
| `periodo_mandato` | `array` |  |
| `provincia` | `string` |  |

#### Example: List

```php
// list() returns an array of Diputado records (throws on error).
$diputados = $client->Diputado()->list();
```


### EntidadRendimiento

Create an instance: `$entidad_rendimiento = $client->EntidadRendimiento();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `rendimiento` | `array` |  |

#### Example: List

```php
// list() returns an array of EntidadRendimiento records (throws on error).
$entidad_rendimientos = $client->EntidadRendimiento()->list();
```


### Estado

Create an instance: `$estado = $client->Estado();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | `int` |  |
| `estado` | `string` |  |

#### Example: Load

```php
// load() returns the bare Estado record (throws on error).
$estado = $client->Estado()->load();
```


### EventoPresidencial

Create an instance: `$evento_presidencial = $client->EventoPresidencial();`

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

```php
// list() returns an array of EventoPresidencial records (throws on error).
$evento_presidencials = $client->EventoPresidencial()->list();
```


### Feriado

Create an instance: `$feriado = $client->Feriado();`

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

```php
// load() returns the bare Feriado record (throws on error).
$feriado = $client->Feriado()->load(["id" => 1]);
```


### Finanza

Create an instance: `$finanza = $client->Finanza();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of Finanza records (throws on error).
$finanzas = $client->Finanza()->list();
```


### FondoComunInversion

Create an instance: `$fondo_comun_inversion = $client->FondoComunInversion();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ccp` | `float` |  |
| `fecha` | `string` |  |
| `fondo` | `string` |  |
| `horizonte` | `string` |  |
| `patrimonio` | `float` |  |
| `tipo` | `string` |  |
| `vcp` | `float` |  |

#### Example: Load

```php
// load() returns the bare FondoComunInversion record (throws on error).
$fondo_comun_inversion = $client->FondoComunInversion()->load(["fecha" => "fecha"]);
```


### FondoComunInversionOtro

Create an instance: `$fondo_comun_inversion_otro = $client->FondoComunInversionOtro();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `fondo` | `string` |  |
| `tea` | `float` |  |
| `tna` | `float` |  |
| `tope` | `float` |  |

#### Example: Load

```php
// load() returns the bare FondoComunInversionOtro record (throws on error).
$fondo_comun_inversion_otro = $client->FondoComunInversionOtro()->load(["id" => "fondo_comun_inversion_otro_id"]);
```


### FondoComunInversionVariable

Create an instance: `$fondo_comun_inversion_variable = $client->FondoComunInversionVariable();`

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
| `tea` | `float` |  |
| `tipo` | `string` |  |
| `tna` | `float` |  |
| `tope` | `float` |  |

#### Example: Load

```php
// load() returns the bare FondoComunInversionVariable record (throws on error).
$fondo_comun_inversion_variable = $client->FondoComunInversionVariable()->load(["id" => "fondo_comun_inversion_variable_id"]);
```


### HipotecarioUvaTna

Create an instance: `$hipotecario_uva_tna = $client->HipotecarioUvaTna();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `metadata` | `array` |  |
| `nombre_comercial` | `string` |  |
| `tna` | `float` |  |

#### Example: List

```php
// list() returns an array of HipotecarioUvaTna records (throws on error).
$hipotecario_uva_tnas = $client->HipotecarioUvaTna()->list();
```


### IndiceInflacion

Create an instance: `$indice_inflacion = $client->IndiceInflacion();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `float` |  |

#### Example: List

```php
// list() returns an array of IndiceInflacion records (throws on error).
$indice_inflacions = $client->IndiceInflacion()->list();
```


### IndiceUva

Create an instance: `$indice_uva = $client->IndiceUva();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `float` |  |

#### Example: List

```php
// list() returns an array of IndiceUva records (throws on error).
$indice_uvas = $client->IndiceUva()->list();
```


### Letra

Create an instance: `$letra = $client->Letra();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha_emision` | `string` |  |
| `fecha_vencimiento` | `string` |  |
| `tem` | `float` |  |
| `ticker` | `string` |  |
| `vpv` | `float` |  |

#### Example: List

```php
// list() returns an array of Letra records (throws on error).
$letras = $client->Letra()->list();
```


### Presidente

Create an instance: `$presidente = $client->Presidente();`

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

```php
// list() returns an array of Presidente records (throws on error).
$presidentes = $client->Presidente()->list();
```


### ProveedorPlazoFijoPrecancelable

Create an instance: `$proveedor_plazo_fijo_precancelable = $client->ProveedorPlazoFijoPrecancelable();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aviso_precancelacion_dia` | `int` |  |
| `canal` | `string` |  |
| `enlace` | `string` |  |
| `entidad` | `string` |  |
| `id` | `string` |  |
| `logo` | `string` |  |
| `modalidad` | `string` |  |
| `moneda` | `string` |  |
| `monto_maximo` | `float` |  |
| `monto_minimo` | `float` |  |
| `plazo_max_dia` | `int` |  |
| `plazo_min_dia` | `int` |  |
| `plazo_precancelacion_dia` | `int` |  |
| `tea` | `float` |  |
| `tea_precancelacion` | `float` |  |
| `tna` | `float` |  |
| `tna_precancelacion` | `float` |  |

#### Example: List

```php
// list() returns an array of ProveedorPlazoFijoPrecancelable records (throws on error).
$proveedor_plazo_fijo_precancelables = $client->ProveedorPlazoFijoPrecancelable()->list();
```


### ProveedorPlazoFijoUvaPagoPeriodico

Create an instance: `$proveedor_plazo_fijo_uva_pago_periodico = $client->ProveedorPlazoFijoUvaPagoPeriodico();`

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
| `tasa` | `array` |  |

#### Example: List

```php
// list() returns an array of ProveedorPlazoFijoUvaPagoPeriodico records (throws on error).
$proveedor_plazo_fijo_uva_pago_periodicos = $client->ProveedorPlazoFijoUvaPagoPeriodico()->list();
```


### Rem

Create an instance: `$rem = $client->Rem();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `float` |  |
| `fecha` | `string` |  |
| `fuente` | `string` |  |
| `indicador` | `string` |  |
| `informe` | `string` |  |
| `maximo` | `float` |  |
| `mediana` | `float` |  |
| `minimo` | `float` |  |
| `muestra` | `string` |  |
| `participante` | `int` |  |
| `percentil10` | `float` |  |
| `percentil25` | `float` |  |
| `percentil75` | `float` |  |
| `percentil90` | `float` |  |
| `periodo` | `string` |  |
| `periodo_desde` | `string` |  |
| `periodo_hasta` | `string` |  |
| `periodo_tipo` | `string` |  |
| `promedio` | `float` |  |
| `publicacion_url` | `string` |  |
| `referencia` | `string` |  |
| `referencia_fecha` | `string` |  |
| `unidad` | `string` |  |
| `xlsx_url` | `string` |  |

#### Example: List

```php
// list() returns an array of Rem records (throws on error).
$rems = $client->Rem()->list();
```


### RemExpectativa

Create an instance: `$rem_expectativa = $client->RemExpectativa();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `float` |  |
| `fecha` | `string` |  |
| `fuente` | `string` |  |
| `indicador` | `string` |  |
| `informe` | `string` |  |
| `maximo` | `float` |  |
| `mediana` | `float` |  |
| `minimo` | `float` |  |
| `muestra` | `string` |  |
| `participante` | `int` |  |
| `percentil10` | `float` |  |
| `percentil25` | `float` |  |
| `percentil75` | `float` |  |
| `percentil90` | `float` |  |
| `periodo` | `string` |  |
| `periodo_desde` | `string` |  |
| `periodo_hasta` | `string` |  |
| `periodo_tipo` | `string` |  |
| `promedio` | `float` |  |
| `publicacion_url` | `string` |  |
| `referencia` | `string` |  |
| `referencia_fecha` | `string` |  |
| `unidad` | `string` |  |
| `xlsx_url` | `string` |  |

#### Example: List

```php
// list() returns an array of RemExpectativa records (throws on error).
$rem_expectativas = $client->RemExpectativa()->list();
```


### Rendimiento

Create an instance: `$rendimiento = $client->Rendimiento();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apy` | `float` |  |
| `fecha` | `string` |  |
| `moneda` | `string` |  |

#### Example: Load

```php
// load() returns the bare Rendimiento record (throws on error).
$rendimiento = $client->Rendimiento()->load(["id" => "rendimiento_id"]);
```


### RiesgoPai

Create an instance: `$riesgo_pai = $client->RiesgoPai();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `float` |  |

#### Example: Load

```php
// load() returns the bare RiesgoPai record (throws on error).
$riesgo_pai = $client->RiesgoPai()->load();
```

#### Example: List

```php
// list() returns an array of RiesgoPai records (throws on error).
$riesgo_pais = $client->RiesgoPai()->list();
```


### Senador

Create an instance: `$senador = $client->Senador();`

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
| `periodo_legal` | `array` |  |
| `periodo_real` | `array` |  |
| `provincia` | `string` |  |
| `rede` | `array` |  |
| `reemplazo` | `string` |  |
| `telefono` | `string` |  |

#### Example: List

```php
// list() returns an array of Senador records (throws on error).
$senadors = $client->Senador()->list();
```


### TasaIntere

Create an instance: `$tasa_intere = $client->TasaIntere();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `float` |  |

#### Example: List

```php
// list() returns an array of TasaIntere records (throws on error).
$tasa_interes = $client->TasaIntere()->list();
```


### TasaPlazoFijo

Create an instance: `$tasa_plazo_fijo = $client->TasaPlazoFijo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `logo` | `string` |  |
| `tna_cliente` | `float` |  |
| `tna_no_cliente` | `float` |  |

#### Example: List

```php
// list() returns an array of TasaPlazoFijo records (throws on error).
$tasa_plazo_fijos = $client->TasaPlazoFijo()->list();
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

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$acta = $client->Acta();
$acta->list();

// $acta->data_get() now returns the acta data from the last list
// $acta->match_get() returns the last match criteria
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
