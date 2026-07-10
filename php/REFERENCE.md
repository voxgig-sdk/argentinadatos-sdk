# Argentinadatos PHP SDK Reference

Complete API reference for the Argentinadatos PHP SDK.


## ArgentinadatosSDK

### Constructor

```php
require_once __DIR__ . '/argentinadatos_sdk.php';

$client = new ArgentinadatosSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ArgentinadatosSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = ArgentinadatosSDK::test();
```


### Instance Methods

#### `Acta($data = null)`

Create a new `ActaEntity` instance. Pass `null` for no initial data.

#### `BonosCer($data = null)`

Create a new `BonosCerEntity` instance. Pass `null` for no initial data.

#### `Cotizacion($data = null)`

Create a new `CotizacionEntity` instance. Pass `null` for no initial data.

#### `Criptopeso($data = null)`

Create a new `CriptopesoEntity` instance. Pass `null` for no initial data.

#### `CuentaRemuneradaUsd($data = null)`

Create a new `CuentaRemuneradaUsdEntity` instance. Pass `null` for no initial data.

#### `Diputado($data = null)`

Create a new `DiputadoEntity` instance. Pass `null` for no initial data.

#### `EntidadRendimiento($data = null)`

Create a new `EntidadRendimientoEntity` instance. Pass `null` for no initial data.

#### `Estado($data = null)`

Create a new `EstadoEntity` instance. Pass `null` for no initial data.

#### `EventoPresidencial($data = null)`

Create a new `EventoPresidencialEntity` instance. Pass `null` for no initial data.

#### `Feriado($data = null)`

Create a new `FeriadoEntity` instance. Pass `null` for no initial data.

#### `Finanza($data = null)`

Create a new `FinanzaEntity` instance. Pass `null` for no initial data.

#### `FondoComunInversion($data = null)`

Create a new `FondoComunInversionEntity` instance. Pass `null` for no initial data.

#### `FondoComunInversionOtro($data = null)`

Create a new `FondoComunInversionOtroEntity` instance. Pass `null` for no initial data.

#### `FondoComunInversionVariable($data = null)`

Create a new `FondoComunInversionVariableEntity` instance. Pass `null` for no initial data.

#### `HipotecarioUvaTna($data = null)`

Create a new `HipotecarioUvaTnaEntity` instance. Pass `null` for no initial data.

#### `IndiceInflacion($data = null)`

Create a new `IndiceInflacionEntity` instance. Pass `null` for no initial data.

#### `IndiceUva($data = null)`

Create a new `IndiceUvaEntity` instance. Pass `null` for no initial data.

#### `Letra($data = null)`

Create a new `LetraEntity` instance. Pass `null` for no initial data.

#### `Presidente($data = null)`

Create a new `PresidenteEntity` instance. Pass `null` for no initial data.

#### `ProveedorPlazoFijoPrecancelable($data = null)`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance. Pass `null` for no initial data.

#### `ProveedorPlazoFijoUvaPagoPeriodico($data = null)`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance. Pass `null` for no initial data.

#### `Rem($data = null)`

Create a new `RemEntity` instance. Pass `null` for no initial data.

#### `RemExpectativa($data = null)`

Create a new `RemExpectativaEntity` instance. Pass `null` for no initial data.

#### `Rendimiento($data = null)`

Create a new `RendimientoEntity` instance. Pass `null` for no initial data.

#### `RiesgoPai($data = null)`

Create a new `RiesgoPaiEntity` instance. Pass `null` for no initial data.

#### `Senador($data = null)`

Create a new `SenadorEntity` instance. Pass `null` for no initial data.

#### `TasaIntere($data = null)`

Create a new `TasaIntereEntity` instance. Pass `null` for no initial data.

#### `TasaPlazoFijo($data = null)`

Create a new `TasaPlazoFijoEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): ArgentinadatosUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActaEntity

```php
$acta = $client->Acta();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstencione` | `int` | No |  |
| `acta` | `string` | No |  |
| `acta_id` | `int` | No |  |
| `afirmativo` | `int` | No |  |
| `amn` | `int` | No |  |
| `ausente` | `int` | No |  |
| `descripcion` | `string` | No |  |
| `fecha` | `string` | No |  |
| `id` | `string` | No |  |
| `mayoria` | `string` | No |  |
| `miembro` | `int` | No |  |
| `negativo` | `int` | No |  |
| `numero_acta` | `string` | No |  |
| `observacione` | `array` | No |  |
| `periodo` | `string` | No |  |
| `presente` | `int` | No |  |
| `presidente` | `string` | No |  |
| `proyecto` | `string` | No |  |
| `quorum_tipo` | `string` | No |  |
| `resultado` | `string` | No |  |
| `reunion` | `string` | No |  |
| `titulo` | `string` | No |  |
| `voto` | `array` | No |  |
| `votos_afirmativo` | `int` | No |  |
| `votos_negativo` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Acta()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Acta()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActaEntity`

Create a new `ActaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BonosCerEntity

```php
$bonos_cer = $client->BonosCer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_vencimiento` | `string` | Yes |  |
| `precio_ar` | `float` | Yes |  |
| `ticker` | `string` | Yes |  |
| `tir_porcentaje` | `float` | Yes |  |
| `voluman` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BonosCer()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BonosCerEntity`

Create a new `BonosCerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CotizacionEntity

```php
$cotizacion = $client->Cotizacion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `string` | No |  |
| `compra` | `float` | No |  |
| `fecha` | `string` | No |  |
| `moneda` | `string` | No |  |
| `venta` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cotizacion()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Cotizacion()->load(["casa" => "casa"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CotizacionEntity`

Create a new `CotizacionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CriptopesoEntity

```php
$criptopeso = $client->Criptopeso();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `tna` | `float` | No |  |
| `token` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Criptopeso()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CriptopesoEntity`

Create a new `CriptopesoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CuentaRemuneradaUsdEntity

```php
$cuenta_remunerada_usd = $client->CuentaRemuneradaUsd();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `tasa` | `float` | No |  |
| `tope` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CuentaRemuneradaUsd()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CuentaRemuneradaUsdEntity`

Create a new `CuentaRemuneradaUsdEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DiputadoEntity

```php
$diputado = $client->Diputado();
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
| `periodo_bloque` | `array` | No |  |
| `periodo_mandato` | `array` | No |  |
| `provincia` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Diputado()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DiputadoEntity`

Create a new `DiputadoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EntidadRendimientoEntity

```php
$entidad_rendimiento = $client->EntidadRendimiento();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `rendimiento` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EntidadRendimiento()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EntidadRendimientoEntity`

Create a new `EntidadRendimientoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EstadoEntity

```php
$estado = $client->Estado();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `int` | No |  |
| `estado` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Estado()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EstadoEntity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EventoPresidencialEntity

```php
$evento_presidencial = $client->EventoPresidencial();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | `string` | No |  |
| `fecha` | `string` | No |  |
| `tipo` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EventoPresidencial()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EventoPresidencialEntity`

Create a new `EventoPresidencialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FeriadoEntity

```php
$feriado = $client->Feriado();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `nombre` | `string` | No |  |
| `tipo` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Feriado()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FeriadoEntity`

Create a new `FeriadoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FinanzaEntity

```php
$finanza = $client->Finanza();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Finanza()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FinanzaEntity`

Create a new `FinanzaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FondoComunInversionEntity

```php
$fondo_comun_inversion = $client->FondoComunInversion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ccp` | `float` | No |  |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No |  |
| `horizonte` | `string` | No |  |
| `patrimonio` | `float` | No |  |
| `tipo` | `string` | No |  |
| `vcp` | `float` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FondoComunInversion()->load(["fecha" => "fecha"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FondoComunInversionEntity`

Create a new `FondoComunInversionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FondoComunInversionOtroEntity

```php
$fondo_comun_inversion_otro = $client->FondoComunInversionOtro();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No |  |
| `tea` | `float` | No |  |
| `tna` | `float` | No |  |
| `tope` | `float` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FondoComunInversionOtro()->load(["id" => "fondo_comun_inversion_otro_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FondoComunInversionOtroEntity`

Create a new `FondoComunInversionOtroEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FondoComunInversionVariableEntity

```php
$fondo_comun_inversion_variable = $client->FondoComunInversionVariable();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condicione` | `string` | No |  |
| `condiciones_corto` | `string` | No |  |
| `fecha` | `string` | No |  |
| `fondo` | `string` | No |  |
| `nombre` | `string` | No |  |
| `tea` | `float` | No |  |
| `tipo` | `string` | No |  |
| `tna` | `float` | No |  |
| `tope` | `float` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FondoComunInversionVariable()->load(["id" => "fondo_comun_inversion_variable_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FondoComunInversionVariableEntity`

Create a new `FondoComunInversionVariableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HipotecarioUvaTnaEntity

```php
$hipotecario_uva_tna = $client->HipotecarioUvaTna();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `metadata` | `array` | No |  |
| `nombre_comercial` | `string` | No |  |
| `tna` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->HipotecarioUvaTna()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HipotecarioUvaTnaEntity`

Create a new `HipotecarioUvaTnaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IndiceInflacionEntity

```php
$indice_inflacion = $client->IndiceInflacion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IndiceInflacion()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IndiceInflacionEntity`

Create a new `IndiceInflacionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IndiceUvaEntity

```php
$indice_uva = $client->IndiceUva();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IndiceUva()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IndiceUvaEntity`

Create a new `IndiceUvaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LetraEntity

```php
$letra = $client->Letra();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_emision` | `string` | No |  |
| `fecha_vencimiento` | `string` | No |  |
| `tem` | `float` | No |  |
| `ticker` | `string` | No |  |
| `vpv` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Letra()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LetraEntity`

Create a new `LetraEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PresidenteEntity

```php
$presidente = $client->Presidente();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Presidente()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PresidenteEntity`

Create a new `PresidenteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProveedorPlazoFijoPrecancelableEntity

```php
$proveedor_plazo_fijo_precancelable = $client->ProveedorPlazoFijoPrecancelable();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aviso_precancelacion_dia` | `int` | No |  |
| `canal` | `string` | No |  |
| `enlace` | `string` | No |  |
| `entidad` | `string` | No |  |
| `id` | `string` | No |  |
| `logo` | `string` | No |  |
| `modalidad` | `string` | No |  |
| `moneda` | `string` | No |  |
| `monto_maximo` | `float` | No |  |
| `monto_minimo` | `float` | No |  |
| `plazo_max_dia` | `int` | No |  |
| `plazo_min_dia` | `int` | No |  |
| `plazo_precancelacion_dia` | `int` | No |  |
| `tea` | `float` | No |  |
| `tea_precancelacion` | `float` | No |  |
| `tna` | `float` | No |  |
| `tna_precancelacion` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProveedorPlazoFijoPrecancelable()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProveedorPlazoFijoPrecancelableEntity`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProveedorPlazoFijoUvaPagoPeriodicoEntity

```php
$proveedor_plazo_fijo_uva_pago_periodico = $client->ProveedorPlazoFijoUvaPagoPeriodico();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `id` | `string` | No |  |
| `logo` | `string` | No |  |
| `tasa` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProveedorPlazoFijoUvaPagoPeriodico()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProveedorPlazoFijoUvaPagoPeriodicoEntity`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RemEntity

```php
$rem = $client->Rem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `float` | No |  |
| `fecha` | `string` | No |  |
| `fuente` | `string` | No |  |
| `indicador` | `string` | No |  |
| `informe` | `string` | No |  |
| `maximo` | `float` | No |  |
| `mediana` | `float` | No |  |
| `minimo` | `float` | No |  |
| `muestra` | `string` | No |  |
| `participante` | `int` | No |  |
| `percentil10` | `float` | No |  |
| `percentil25` | `float` | No |  |
| `percentil75` | `float` | No |  |
| `percentil90` | `float` | No |  |
| `periodo` | `string` | No |  |
| `periodo_desde` | `string` | No |  |
| `periodo_hasta` | `string` | No |  |
| `periodo_tipo` | `string` | No |  |
| `promedio` | `float` | No |  |
| `publicacion_url` | `string` | No |  |
| `referencia` | `string` | No |  |
| `referencia_fecha` | `string` | No |  |
| `unidad` | `string` | No |  |
| `xlsx_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Rem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RemEntity`

Create a new `RemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RemExpectativaEntity

```php
$rem_expectativa = $client->RemExpectativa();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `float` | No |  |
| `fecha` | `string` | No |  |
| `fuente` | `string` | No |  |
| `indicador` | `string` | No |  |
| `informe` | `string` | No |  |
| `maximo` | `float` | No |  |
| `mediana` | `float` | No |  |
| `minimo` | `float` | No |  |
| `muestra` | `string` | No |  |
| `participante` | `int` | No |  |
| `percentil10` | `float` | No |  |
| `percentil25` | `float` | No |  |
| `percentil75` | `float` | No |  |
| `percentil90` | `float` | No |  |
| `periodo` | `string` | No |  |
| `periodo_desde` | `string` | No |  |
| `periodo_hasta` | `string` | No |  |
| `periodo_tipo` | `string` | No |  |
| `promedio` | `float` | No |  |
| `publicacion_url` | `string` | No |  |
| `referencia` | `string` | No |  |
| `referencia_fecha` | `string` | No |  |
| `unidad` | `string` | No |  |
| `xlsx_url` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RemExpectativa()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RemExpectativaEntity`

Create a new `RemExpectativaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RendimientoEntity

```php
$rendimiento = $client->Rendimiento();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | `float` | No |  |
| `fecha` | `string` | No |  |
| `moneda` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Rendimiento()->load(["id" => "rendimiento_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RendimientoEntity`

Create a new `RendimientoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RiesgoPaiEntity

```php
$riesgo_pai = $client->RiesgoPai();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RiesgoPai()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RiesgoPai()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RiesgoPaiEntity`

Create a new `RiesgoPaiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SenadorEntity

```php
$senador = $client->Senador();
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
| `periodo_legal` | `array` | No |  |
| `periodo_real` | `array` | No |  |
| `provincia` | `string` | No |  |
| `rede` | `array` | No |  |
| `reemplazo` | `string` | No |  |
| `telefono` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Senador()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SenadorEntity`

Create a new `SenadorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TasaIntereEntity

```php
$tasa_intere = $client->TasaIntere();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `string` | No |  |
| `valor` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TasaIntere()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TasaIntereEntity`

Create a new `TasaIntereEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TasaPlazoFijoEntity

```php
$tasa_plazo_fijo = $client->TasaPlazoFijo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `string` | No |  |
| `logo` | `string` | No |  |
| `tna_cliente` | `float` | No |  |
| `tna_no_cliente` | `float` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TasaPlazoFijo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TasaPlazoFijoEntity`

Create a new `TasaPlazoFijoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new ArgentinadatosSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

