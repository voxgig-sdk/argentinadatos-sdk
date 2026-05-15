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
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## ActaEntity

```php
$acta = $client->Acta();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Acta()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Acta()->load(["id" => "acta_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ActaEntity`

Create a new `ActaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## BonosCerEntity

```php
$bonos_cer = $client->BonosCer();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->BonosCer()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BonosCerEntity`

Create a new `BonosCerEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CotizacionEntity

```php
$cotizacion = $client->Cotizacion();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Cotizacion()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Cotizacion()->load(["id" => "cotizacion_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CotizacionEntity`

Create a new `CotizacionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CriptopesoEntity

```php
$criptopeso = $client->Criptopeso();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |
| `token` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Criptopeso()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CriptopesoEntity`

Create a new `CriptopesoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CuentaRemuneradaUsdEntity

```php
$cuenta_remunerada_usd = $client->CuentaRemuneradaUsd();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `tasa` | ``$NUMBER`` | No |  |
| `tope` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->CuentaRemuneradaUsd()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CuentaRemuneradaUsdEntity`

Create a new `CuentaRemuneradaUsdEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## DiputadoEntity

```php
$diputado = $client->Diputado();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Diputado()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): DiputadoEntity`

Create a new `DiputadoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## EntidadRendimientoEntity

```php
$entidad_rendimiento = $client->EntidadRendimiento();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `rendimiento` | ``$ARRAY`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->EntidadRendimiento()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): EntidadRendimientoEntity`

Create a new `EntidadRendimientoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## EstadoEntity

```php
$estado = $client->Estado();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | ``$INTEGER`` | No |  |
| `estado` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Estado()->load(["id" => "estado_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): EstadoEntity`

Create a new `EstadoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## EventoPresidencialEntity

```php
$evento_presidencial = $client->EventoPresidencial();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | ``$STRING`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `tipo` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->EventoPresidencial()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): EventoPresidencialEntity`

Create a new `EventoPresidencialEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## FeriadoEntity

```php
$feriado = $client->Feriado();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `tipo` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Feriado()->load(["id" => "feriado_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): FeriadoEntity`

Create a new `FeriadoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## FinanzaEntity

```php
$finanza = $client->Finanza();
```

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Finanza()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): FinanzaEntity`

Create a new `FinanzaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## FondoComunInversionEntity

```php
$fondo_comun_inversion = $client->FondoComunInversion();
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

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->FondoComunInversion()->load(["id" => "fondo_comun_inversion_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): FondoComunInversionEntity`

Create a new `FondoComunInversionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## FondoComunInversionOtroEntity

```php
$fondo_comun_inversion_otro = $client->FondoComunInversionOtro();
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

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->FondoComunInversionOtro()->load(["id" => "fondo_comun_inversion_otro_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): FondoComunInversionOtroEntity`

Create a new `FondoComunInversionOtroEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## FondoComunInversionVariableEntity

```php
$fondo_comun_inversion_variable = $client->FondoComunInversionVariable();
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

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->FondoComunInversionVariable()->load(["id" => "fondo_comun_inversion_variable_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): FondoComunInversionVariableEntity`

Create a new `FondoComunInversionVariableEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## HipotecarioUvaTnaEntity

```php
$hipotecario_uva_tna = $client->HipotecarioUvaTna();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `metadata` | ``$OBJECT`` | No |  |
| `nombre_comercial` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->HipotecarioUvaTna()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): HipotecarioUvaTnaEntity`

Create a new `HipotecarioUvaTnaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## IndiceInflacionEntity

```php
$indice_inflacion = $client->IndiceInflacion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->IndiceInflacion()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): IndiceInflacionEntity`

Create a new `IndiceInflacionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## IndiceUvaEntity

```php
$indice_uva = $client->IndiceUva();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->IndiceUva()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): IndiceUvaEntity`

Create a new `IndiceUvaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## LetraEntity

```php
$letra = $client->Letra();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Letra()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): LetraEntity`

Create a new `LetraEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## PresidenteEntity

```php
$presidente = $client->Presidente();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Presidente()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): PresidenteEntity`

Create a new `PresidenteEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ProveedorPlazoFijoPrecancelableEntity

```php
$proveedor_plazo_fijo_precancelable = $client->ProveedorPlazoFijoPrecancelable();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->ProveedorPlazoFijoPrecancelable()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ProveedorPlazoFijoPrecancelableEntity`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ProveedorPlazoFijoUvaPagoPeriodicoEntity

```php
$proveedor_plazo_fijo_uva_pago_periodico = $client->ProveedorPlazoFijoUvaPagoPeriodico();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `tasa` | ``$ARRAY`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->ProveedorPlazoFijoUvaPagoPeriodico()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ProveedorPlazoFijoUvaPagoPeriodicoEntity`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RemEntity

```php
$rem = $client->Rem();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Rem()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RemEntity`

Create a new `RemEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RemExpectativaEntity

```php
$rem_expectativa = $client->RemExpectativa();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->RemExpectativa()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RemExpectativaEntity`

Create a new `RemExpectativaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RendimientoEntity

```php
$rendimiento = $client->Rendimiento();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `moneda` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Rendimiento()->load(["id" => "rendimiento_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RendimientoEntity`

Create a new `RendimientoEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RiesgoPaiEntity

```php
$riesgo_pai = $client->RiesgoPai();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->RiesgoPai()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->RiesgoPai()->load(["id" => "riesgo_pai_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RiesgoPaiEntity`

Create a new `RiesgoPaiEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## SenadorEntity

```php
$senador = $client->Senador();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Senador()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): SenadorEntity`

Create a new `SenadorEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## TasaIntereEntity

```php
$tasa_intere = $client->TasaIntere();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->TasaIntere()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): TasaIntereEntity`

Create a new `TasaIntereEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## TasaPlazoFijoEntity

```php
$tasa_plazo_fijo = $client->TasaPlazoFijo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `tna_cliente` | ``$NUMBER`` | No |  |
| `tna_no_cliente` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->TasaPlazoFijo()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): TasaPlazoFijoEntity`

Create a new `TasaPlazoFijoEntity` instance with the same client and
options.

#### `getName(): string`

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

