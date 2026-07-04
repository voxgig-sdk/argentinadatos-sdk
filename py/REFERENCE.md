# Argentinadatos Python SDK Reference

Complete API reference for the Argentinadatos Python SDK.


## ArgentinadatosSDK

### Constructor

```python
from argentinadatos_sdk import ArgentinadatosSDK

client = ArgentinadatosSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ArgentinadatosSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ArgentinadatosSDK.test()
```


### Instance Methods

#### `Acta(data=None)`

Create a new `ActaEntity` instance. Pass `None` for no initial data.

#### `BonosCer(data=None)`

Create a new `BonosCerEntity` instance. Pass `None` for no initial data.

#### `Cotizacion(data=None)`

Create a new `CotizacionEntity` instance. Pass `None` for no initial data.

#### `Criptopeso(data=None)`

Create a new `CriptopesoEntity` instance. Pass `None` for no initial data.

#### `CuentaRemuneradaUsd(data=None)`

Create a new `CuentaRemuneradaUsdEntity` instance. Pass `None` for no initial data.

#### `Diputado(data=None)`

Create a new `DiputadoEntity` instance. Pass `None` for no initial data.

#### `EntidadRendimiento(data=None)`

Create a new `EntidadRendimientoEntity` instance. Pass `None` for no initial data.

#### `Estado(data=None)`

Create a new `EstadoEntity` instance. Pass `None` for no initial data.

#### `EventoPresidencial(data=None)`

Create a new `EventoPresidencialEntity` instance. Pass `None` for no initial data.

#### `Feriado(data=None)`

Create a new `FeriadoEntity` instance. Pass `None` for no initial data.

#### `Finanza(data=None)`

Create a new `FinanzaEntity` instance. Pass `None` for no initial data.

#### `FondoComunInversion(data=None)`

Create a new `FondoComunInversionEntity` instance. Pass `None` for no initial data.

#### `FondoComunInversionOtro(data=None)`

Create a new `FondoComunInversionOtroEntity` instance. Pass `None` for no initial data.

#### `FondoComunInversionVariable(data=None)`

Create a new `FondoComunInversionVariableEntity` instance. Pass `None` for no initial data.

#### `HipotecarioUvaTna(data=None)`

Create a new `HipotecarioUvaTnaEntity` instance. Pass `None` for no initial data.

#### `IndiceInflacion(data=None)`

Create a new `IndiceInflacionEntity` instance. Pass `None` for no initial data.

#### `IndiceUva(data=None)`

Create a new `IndiceUvaEntity` instance. Pass `None` for no initial data.

#### `Letra(data=None)`

Create a new `LetraEntity` instance. Pass `None` for no initial data.

#### `Presidente(data=None)`

Create a new `PresidenteEntity` instance. Pass `None` for no initial data.

#### `ProveedorPlazoFijoPrecancelable(data=None)`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance. Pass `None` for no initial data.

#### `ProveedorPlazoFijoUvaPagoPeriodico(data=None)`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance. Pass `None` for no initial data.

#### `Rem(data=None)`

Create a new `RemEntity` instance. Pass `None` for no initial data.

#### `RemExpectativa(data=None)`

Create a new `RemExpectativaEntity` instance. Pass `None` for no initial data.

#### `Rendimiento(data=None)`

Create a new `RendimientoEntity` instance. Pass `None` for no initial data.

#### `RiesgoPai(data=None)`

Create a new `RiesgoPaiEntity` instance. Pass `None` for no initial data.

#### `Senador(data=None)`

Create a new `SenadorEntity` instance. Pass `None` for no initial data.

#### `TasaIntere(data=None)`

Create a new `TasaIntereEntity` instance. Pass `None` for no initial data.

#### `TasaPlazoFijo(data=None)`

Create a new `TasaPlazoFijoEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActaEntity

```python
acta = client.acta
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.acta.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.acta.load({"id": "acta_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BonosCerEntity

```python
bonos_cer = client.bonos_cer
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.bonos_cer.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BonosCerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CotizacionEntity

```python
cotizacion = client.cotizacion
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.cotizacion.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.cotizacion.load({"id": "cotizacion_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CotizacionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CriptopesoEntity

```python
criptopeso = client.criptopeso
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |
| `token` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.criptopeso.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CriptopesoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CuentaRemuneradaUsdEntity

```python
cuenta_remunerada_usd = client.cuenta_remunerada_usd
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `tasa` | ``$NUMBER`` | No |  |
| `tope` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.cuenta_remunerada_usd.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CuentaRemuneradaUsdEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DiputadoEntity

```python
diputado = client.diputado
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.diputado.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DiputadoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EntidadRendimientoEntity

```python
entidad_rendimiento = client.entidad_rendimiento
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `rendimiento` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.entidad_rendimiento.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntidadRendimientoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EstadoEntity

```python
estado = client.estado
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | ``$INTEGER`` | No |  |
| `estado` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.estado.load({"id": "estado_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EstadoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventoPresidencialEntity

```python
evento_presidencial = client.evento_presidencial
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | ``$STRING`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `tipo` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.evento_presidencial.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventoPresidencialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FeriadoEntity

```python
feriado = client.feriado
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `nombre` | ``$STRING`` | No |  |
| `tipo` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.feriado.load({"id": "feriado_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FeriadoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FinanzaEntity

```python
finanza = client.finanza
```

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.finanza.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FinanzaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FondoComunInversionEntity

```python
fondo_comun_inversion = client.fondo_comun_inversion
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.fondo_comun_inversion.load({"id": "fondo_comun_inversion_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FondoComunInversionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FondoComunInversionOtroEntity

```python
fondo_comun_inversion_otro = client.fondo_comun_inversion_otro
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.fondo_comun_inversion_otro.load({"id": "fondo_comun_inversion_otro_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FondoComunInversionOtroEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FondoComunInversionVariableEntity

```python
fondo_comun_inversion_variable = client.fondo_comun_inversion_variable
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

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.fondo_comun_inversion_variable.load({"id": "fondo_comun_inversion_variable_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FondoComunInversionVariableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## HipotecarioUvaTnaEntity

```python
hipotecario_uva_tna = client.hipotecario_uva_tna
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `metadata` | ``$OBJECT`` | No |  |
| `nombre_comercial` | ``$STRING`` | No |  |
| `tna` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.hipotecario_uva_tna.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HipotecarioUvaTnaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IndiceInflacionEntity

```python
indice_inflacion = client.indice_inflacion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.indice_inflacion.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndiceInflacionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IndiceUvaEntity

```python
indice_uva = client.indice_uva
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.indice_uva.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IndiceUvaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LetraEntity

```python
letra = client.letra
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.letra.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LetraEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PresidenteEntity

```python
presidente = client.presidente
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.presidente.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PresidenteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProveedorPlazoFijoPrecancelableEntity

```python
proveedor_plazo_fijo_precancelable = client.proveedor_plazo_fijo_precancelable
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.proveedor_plazo_fijo_precancelable.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProveedorPlazoFijoPrecancelableEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProveedorPlazoFijoUvaPagoPeriodicoEntity

```python
proveedor_plazo_fijo_uva_pago_periodico = client.proveedor_plazo_fijo_uva_pago_periodico
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `id` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `tasa` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.proveedor_plazo_fijo_uva_pago_periodico.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProveedorPlazoFijoUvaPagoPeriodicoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemEntity

```python
rem = client.rem
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.rem.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemExpectativaEntity

```python
rem_expectativa = client.rem_expectativa
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.rem_expectativa.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemExpectativaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RendimientoEntity

```python
rendimiento = client.rendimiento
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | ``$NUMBER`` | No |  |
| `fecha` | ``$STRING`` | No |  |
| `moneda` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.rendimiento.load({"id": "rendimiento_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RendimientoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RiesgoPaiEntity

```python
riesgo_pai = client.riesgo_pai
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.riesgo_pai.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.riesgo_pai.load({"id": "riesgo_pai_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RiesgoPaiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SenadorEntity

```python
senador = client.senador
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.senador.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SenadorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TasaIntereEntity

```python
tasa_intere = client.tasa_intere
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | ``$STRING`` | No |  |
| `valor` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.tasa_intere.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TasaIntereEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TasaPlazoFijoEntity

```python
tasa_plazo_fijo = client.tasa_plazo_fijo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | ``$STRING`` | No |  |
| `logo` | ``$STRING`` | No |  |
| `tna_cliente` | ``$NUMBER`` | No |  |
| `tna_no_cliente` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.tasa_plazo_fijo.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TasaPlazoFijoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = ArgentinadatosSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

