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
        echo $item["id"] . " " . $item["abstenciones"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a cotizacion

Cotizacion is nested under casa, so provide the `casa`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Cotizacion record (throws on error).
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
    $rendimiento = $client->Rendimiento()->load(["id" => "example_id"]);
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
    "entity" => ["rendimiento" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$rendimiento = $client->Rendimiento()->load(["id" => "test01"]);
print_r($rendimiento);
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

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
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
| `abstenciones` |  |
| `acta` |  |
| `actaId` |  |
| `afirmativos` |  |
| `amn` |  |
| `ausentes` |  |
| `descripcion` |  |
| `fecha` |  |
| `id` |  |
| `mayoria` |  |
| `miembros` |  |
| `negativos` |  |
| `numeroActa` |  |
| `observaciones` |  |
| `periodo` |  |
| `presentes` |  |
| `presidente` |  |
| `proyecto` |  |
| `quorumTipo` |  |
| `resultado` |  |
| `reunion` |  |
| `titulo` |  |
| `votos` |  |
| `votosAfirmativos` |  |
| `votosNegativos` |  |

Operations: List, Load.

API path: `/v1/diputados/actas`

#### BonosCer

| Field | Description |
| --- | --- |
| `fechaVencimiento` | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `precioArs` | Precio de cotización en pesos argentinos |
| `ticker` | Código del bono (ej. |
| `tirPorcentaje` | Tasa interna de retorno (TIR) en porcentaje |
| `volumen` | Volumen nominal negociado, si la fuente lo publica |

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
| `entidad` | Nombre de la entidad que ofrece el criptopeso |
| `tna` | Tasa Nominal Anual en porcentaje |
| `token` | Token del criptopeso (ej: ARGt, wARS) |

Operations: List.

API path: `/v1/finanzas/criptopesos`

#### CuentaRemuneradaUsd

| Field | Description |
| --- | --- |
| `entidad` | Identificador de la entidad (p. |
| `tasa` | Tasa de rendimiento anual en formato decimal (p. |
| `tope` | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

Operations: List.

API path: `/v1/finanzas/cuentas-remuneradas-usd`

#### Diputado

| Field | Description |
| --- | --- |
| `apellido` |  |
| `bloque` |  |
| `ceseFecha` |  |
| `foto` |  |
| `genero` |  |
| `id` |  |
| `juramentoFecha` |  |
| `nombre` |  |
| `periodoBloque` |  |
| `periodoMandato` |  |
| `provincia` |  |

Operations: List.

API path: `/v1/diputados/diputados`

#### EntidadRendimiento

| Field | Description |
| --- | --- |
| `entidad` |  |
| `rendimientos` |  |

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
| `id` |  |
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
| `id` |  |
| `tea` |  |
| `tna` |  |
| `tope` |  |

Operations: Load.

API path: `/v1/finanzas/fci/otros/{fecha}`

#### FondoComunInversionVariable

| Field | Description |
| --- | --- |
| `condiciones` |  |
| `condicionesCorto` |  |
| `fecha` |  |
| `fondo` | Nombre del fondo común de inversión (clase o denominación oficial). |
| `id` |  |
| `nombre` | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `tea` |  |
| `tipo` | Clasificación del instrumento. |
| `tna` |  |
| `tope` |  |

Operations: Load.

API path: `/v1/finanzas/fci/variables/{fecha}`

#### HipotecarioUvaTna

| Field | Description |
| --- | --- |
| `entidad` | Nombre del banco u oferente del crédito hipotecario UVA |
| `metadata` | Detalle de condiciones |
| `nombreComercial` | Nombre comercial |
| `tna` | Tasa Nominal Anual |

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
| `fechaEmision` | Fecha de emisión original (ISO 8601) |
| `fechaVencimiento` | Fecha de vencimiento (ISO 8601) |
| `tem` | Tasa Efectiva Mensual (%) |
| `ticker` | Código del instrumento (ej: S31G5, T17O5) |
| `vpv` | Valor de Pago al Vencimiento por cada $100 de valor nominal |

Operations: List.

API path: `/v1/finanzas/letras`

#### Presidente

| Field | Description |
| --- | --- |
| `fin` | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `imagen` | URL de la imagen del presidente |
| `inicio` | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `nombre` |  |
| `partido` |  |
| `partidoImagen` | URL de la imagen del logo del partido político |
| `periodoPresidencial` | Rango de años del período presidencial (ej: '2019-2023') |
| `vicepresidente` | Nombre del vicepresidente. |

Operations: List.

API path: `/v1/presidentes`

#### ProveedorPlazoFijoPrecancelable

| Field | Description |
| --- | --- |
| `avisoPrecancelacionDias` | Días hábiles de aviso previo para precancelar |
| `canal` | Canales publicados para constituir el plazo fijo |
| `enlace` | URL de la fuente |
| `entidad` | Nombre de la entidad |
| `id` | Identificador estable del proveedor |
| `logo` | URL del logo de la entidad |
| `modalidad` | Modalidad publicada por la entidad |
| `moneda` | Moneda de constitución |
| `montoMaximo` | Monto máximo de constitución |
| `montoMinimo` | Monto mínimo de constitución |
| `plazoMaxDias` | Plazo máximo en días |
| `plazoMinDias` | Plazo mínimo en días |
| `plazoPrecancelacionDias` | Días mínimos para ejercer la precancelación |
| `tea` | Tasa Efectiva Anual |
| `teaPrecancelacion` | Tasa Efectiva Anual aplicada ante precancelación |
| `tna` | Tasa Nominal Anual |
| `tnaPrecancelacion` | Tasa Nominal Anual aplicada ante precancelación |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoPrecancelable`

#### ProveedorPlazoFijoUvaPagoPeriodico

| Field | Description |
| --- | --- |
| `entidad` | Nombre de la entidad |
| `id` | Identificador estable del proveedor (p. |
| `logo` | URL del logo de la entidad |
| `tasas` | Tasas por rango de plazo |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico`

#### Rem

| Field | Description |
| --- | --- |
| `desvio` |  |
| `fecha` | Fecha ISO del primer día del mes del informe |
| `fuente` |  |
| `indicador` | Indicador relevado |
| `informe` | Informe REM en formato YYYY-MM |
| `maximo` |  |
| `mediana` |  |
| `minimo` |  |
| `muestra` | Muestra de participantes: todos o TOP 10 |
| `participantes` |  |
| `percentil10` |  |
| `percentil25` |  |
| `percentil75` |  |
| `percentil90` |  |
| `periodo` | Período original informado por el BCRA |
| `periodoDesde` | Fecha de inicio del período normalizado |
| `periodoHasta` | Fecha de fin del período normalizado |
| `periodoTipo` | Tipo de período normalizado |
| `promedio` |  |
| `publicacionUrl` |  |
| `referencia` | Referencia original de la tabla |
| `referenciaFecha` | Fecha detectada en la referencia, si corresponde |
| `unidad` | Unidad inferida desde la referencia |
| `xlsxUrl` |  |

Operations: List.

API path: `/v1/rems/{año}/{mes}`

#### RemExpectativa

| Field | Description |
| --- | --- |
| `desvio` |  |
| `fecha` | Fecha ISO del primer día del mes del informe |
| `fuente` |  |
| `indicador` | Indicador relevado |
| `informe` | Informe REM en formato YYYY-MM |
| `maximo` |  |
| `mediana` |  |
| `minimo` |  |
| `muestra` | Muestra de participantes: todos o TOP 10 |
| `participantes` |  |
| `percentil10` |  |
| `percentil25` |  |
| `percentil75` |  |
| `percentil90` |  |
| `periodo` | Período original informado por el BCRA |
| `periodoDesde` | Fecha de inicio del período normalizado |
| `periodoHasta` | Fecha de fin del período normalizado |
| `periodoTipo` | Tipo de período normalizado |
| `promedio` |  |
| `publicacionUrl` |  |
| `referencia` | Referencia original de la tabla |
| `referenciaFecha` | Fecha detectada en la referencia, si corresponde |
| `unidad` | Unidad inferida desde la referencia |
| `xlsxUrl` |  |

Operations: List.

API path: `/v1/rems/ultimo`

#### Rendimiento

| Field | Description |
| --- | --- |
| `apy` |  |
| `fecha` |  |
| `id` |  |
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
| `observaciones` |  |
| `partido` |  |
| `periodoLegal` |  |
| `periodoReal` |  |
| `provincia` |  |
| `redes` |  |
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
| `logo` | URL del logo de la entidad |
| `tnaClientes` | Tasa Nominal Anual para clientes, en porcentaje |
| `tnaNoClientes` | Tasa Nominal Anual para no clientes, en porcentaje |

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
| `abstenciones` | `int` |  |
| `acta` | `string` |  |
| `actaId` | `int` |  |
| `afirmativos` | `int` |  |
| `amn` | `int` |  |
| `ausentes` | `int` |  |
| `descripcion` | `string` |  |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `mayoria` | `string` |  |
| `miembros` | `int` |  |
| `negativos` | `int` |  |
| `numeroActa` | `string` |  |
| `observaciones` | `array` |  |
| `periodo` | `string` |  |
| `presentes` | `int` |  |
| `presidente` | `string` |  |
| `proyecto` | `string` |  |
| `quorumTipo` | `string` |  |
| `resultado` | `string` |  |
| `reunion` | `string` |  |
| `titulo` | `string` |  |
| `votos` | `array` |  |
| `votosAfirmativos` | `int` |  |
| `votosNegativos` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Acta record (throws on error).
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
| `fechaVencimiento` | `string` | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `precioArs` | `float` | Precio de cotización en pesos argentinos |
| `ticker` | `string` | Código del bono (ej. |
| `tirPorcentaje` | `float` | Tasa interna de retorno (TIR) en porcentaje |
| `volumen` | `float` | Volumen nominal negociado, si la fuente lo publica |

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
// load() returns the ENTITY — call data_get() for the Cotizacion record (throws on error).
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
| `entidad` | `string` | Nombre de la entidad que ofrece el criptopeso |
| `tna` | `float` | Tasa Nominal Anual en porcentaje |
| `token` | `string` | Token del criptopeso (ej: ARGt, wARS) |

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
| `entidad` | `string` | Identificador de la entidad (p. |
| `tasa` | `float` | Tasa de rendimiento anual en formato decimal (p. |
| `tope` | `float` | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

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
| `ceseFecha` | `string` |  |
| `foto` | `string` |  |
| `genero` | `string` |  |
| `id` | `string` |  |
| `juramentoFecha` | `string` |  |
| `nombre` | `string` |  |
| `periodoBloque` | `array` |  |
| `periodoMandato` | `array` |  |
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
| `rendimientos` | `array` |  |

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
// load() returns the ENTITY — call data_get() for the Estado record (throws on error).
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
| `id` | `string` |  |
| `nombre` | `string` |  |
| `tipo` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Feriado record (throws on error).
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
// load() returns the ENTITY — call data_get() for the FondoComunInversion record (throws on error).
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
| `id` | `string` |  |
| `tea` | `float` |  |
| `tna` | `float` |  |
| `tope` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the FondoComunInversionOtro record (throws on error).
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
| `condiciones` | `string` |  |
| `condicionesCorto` | `string` |  |
| `fecha` | `string` |  |
| `fondo` | `string` | Nombre del fondo común de inversión (clase o denominación oficial). |
| `id` | `string` |  |
| `nombre` | `string` | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `tea` | `float` |  |
| `tipo` | `string` | Clasificación del instrumento. |
| `tna` | `float` |  |
| `tope` | `float` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the FondoComunInversionVariable record (throws on error).
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
| `entidad` | `string` | Nombre del banco u oferente del crédito hipotecario UVA |
| `metadata` | `array` | Detalle de condiciones |
| `nombreComercial` | `string` | Nombre comercial |
| `tna` | `float` | Tasa Nominal Anual |

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
| `fechaEmision` | `string` | Fecha de emisión original (ISO 8601) |
| `fechaVencimiento` | `string` | Fecha de vencimiento (ISO 8601) |
| `tem` | `float` | Tasa Efectiva Mensual (%) |
| `ticker` | `string` | Código del instrumento (ej: S31G5, T17O5) |
| `vpv` | `float` | Valor de Pago al Vencimiento por cada $100 de valor nominal |

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
| `fin` | `string` | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `imagen` | `string` | URL de la imagen del presidente |
| `inicio` | `string` | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `nombre` | `string` |  |
| `partido` | `string` |  |
| `partidoImagen` | `string` | URL de la imagen del logo del partido político |
| `periodoPresidencial` | `string` | Rango de años del período presidencial (ej: '2019-2023') |
| `vicepresidente` | `string` | Nombre del vicepresidente. |

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
| `avisoPrecancelacionDias` | `int` | Días hábiles de aviso previo para precancelar |
| `canal` | `string` | Canales publicados para constituir el plazo fijo |
| `enlace` | `string` | URL de la fuente |
| `entidad` | `string` | Nombre de la entidad |
| `id` | `string` | Identificador estable del proveedor |
| `logo` | `string` | URL del logo de la entidad |
| `modalidad` | `string` | Modalidad publicada por la entidad |
| `moneda` | `string` | Moneda de constitución |
| `montoMaximo` | `float` | Monto máximo de constitución |
| `montoMinimo` | `float` | Monto mínimo de constitución |
| `plazoMaxDias` | `int` | Plazo máximo en días |
| `plazoMinDias` | `int` | Plazo mínimo en días |
| `plazoPrecancelacionDias` | `int` | Días mínimos para ejercer la precancelación |
| `tea` | `float` | Tasa Efectiva Anual |
| `teaPrecancelacion` | `float` | Tasa Efectiva Anual aplicada ante precancelación |
| `tna` | `float` | Tasa Nominal Anual |
| `tnaPrecancelacion` | `float` | Tasa Nominal Anual aplicada ante precancelación |

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
| `entidad` | `string` | Nombre de la entidad |
| `id` | `string` | Identificador estable del proveedor (p. |
| `logo` | `string` | URL del logo de la entidad |
| `tasas` | `array` | Tasas por rango de plazo |

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
| `fecha` | `string` | Fecha ISO del primer día del mes del informe |
| `fuente` | `string` |  |
| `indicador` | `string` | Indicador relevado |
| `informe` | `string` | Informe REM en formato YYYY-MM |
| `maximo` | `float` |  |
| `mediana` | `float` |  |
| `minimo` | `float` |  |
| `muestra` | `string` | Muestra de participantes: todos o TOP 10 |
| `participantes` | `int` |  |
| `percentil10` | `float` |  |
| `percentil25` | `float` |  |
| `percentil75` | `float` |  |
| `percentil90` | `float` |  |
| `periodo` | `string` | Período original informado por el BCRA |
| `periodoDesde` | `string` | Fecha de inicio del período normalizado |
| `periodoHasta` | `string` | Fecha de fin del período normalizado |
| `periodoTipo` | `string` | Tipo de período normalizado |
| `promedio` | `float` |  |
| `publicacionUrl` | `string` |  |
| `referencia` | `string` | Referencia original de la tabla |
| `referenciaFecha` | `string` | Fecha detectada en la referencia, si corresponde |
| `unidad` | `string` | Unidad inferida desde la referencia |
| `xlsxUrl` | `string` |  |

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
| `fecha` | `string` | Fecha ISO del primer día del mes del informe |
| `fuente` | `string` |  |
| `indicador` | `string` | Indicador relevado |
| `informe` | `string` | Informe REM en formato YYYY-MM |
| `maximo` | `float` |  |
| `mediana` | `float` |  |
| `minimo` | `float` |  |
| `muestra` | `string` | Muestra de participantes: todos o TOP 10 |
| `participantes` | `int` |  |
| `percentil10` | `float` |  |
| `percentil25` | `float` |  |
| `percentil75` | `float` |  |
| `percentil90` | `float` |  |
| `periodo` | `string` | Período original informado por el BCRA |
| `periodoDesde` | `string` | Fecha de inicio del período normalizado |
| `periodoHasta` | `string` | Fecha de fin del período normalizado |
| `periodoTipo` | `string` | Tipo de período normalizado |
| `promedio` | `float` |  |
| `publicacionUrl` | `string` |  |
| `referencia` | `string` | Referencia original de la tabla |
| `referenciaFecha` | `string` | Fecha detectada en la referencia, si corresponde |
| `unidad` | `string` | Unidad inferida desde la referencia |
| `xlsxUrl` | `string` |  |

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
| `id` | `string` |  |
| `moneda` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Rendimiento record (throws on error).
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
// load() returns the ENTITY — call data_get() for the RiesgoPai record (throws on error).
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
| `observaciones` | `string` |  |
| `partido` | `string` |  |
| `periodoLegal` | `array` |  |
| `periodoReal` | `array` |  |
| `provincia` | `string` |  |
| `redes` | `array` |  |
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
| `logo` | `string` | URL del logo de la entidad |
| `tnaClientes` | `float` | Tasa Nominal Anual para clientes, en porcentaje |
| `tnaNoClientes` | `float` | Tasa Nominal Anual para no clientes, en porcentaje |

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$rendimiento = $client->Rendimiento();
$rendimiento->load(["id" => "example_id"]);

// $rendimiento->data_get() now returns the rendimiento data from the last load
// $rendimiento->match_get() returns the last match criteria
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
