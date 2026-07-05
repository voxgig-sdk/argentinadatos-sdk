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
acta = client.Acta()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abstencione` | `int` | No |  |
| `acta` | `str` | No |  |
| `acta_id` | `int` | No |  |
| `afirmativo` | `int` | No |  |
| `amn` | `int` | No |  |
| `ausente` | `int` | No |  |
| `descripcion` | `str` | No |  |
| `fecha` | `str` | No |  |
| `id` | `str` | No |  |
| `mayoria` | `str` | No |  |
| `miembro` | `int` | No |  |
| `negativo` | `int` | No |  |
| `numero_acta` | `str` | No |  |
| `observacione` | `list` | No |  |
| `periodo` | `str` | No |  |
| `presente` | `int` | No |  |
| `presidente` | `str` | No |  |
| `proyecto` | `str` | No |  |
| `quorum_tipo` | `str` | No |  |
| `resultado` | `str` | No |  |
| `reunion` | `str` | No |  |
| `titulo` | `str` | No |  |
| `voto` | `list` | No |  |
| `votos_afirmativo` | `int` | No |  |
| `votos_negativo` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Acta().list()
for acta in results:
    print(acta)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Acta().load({"id": "acta_id"})
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
bonos_cer = client.BonosCer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_vencimiento` | `str` | Yes |  |
| `precio_ar` | `float` | Yes |  |
| `ticker` | `str` | Yes |  |
| `tir_porcentaje` | `float` | Yes |  |
| `voluman` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BonosCer().list()
for bonos_cer in results:
    print(bonos_cer)
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
cotizacion = client.Cotizacion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `casa` | `str` | No |  |
| `compra` | `float` | No |  |
| `fecha` | `str` | No |  |
| `moneda` | `str` | No |  |
| `venta` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cotizacion().list()
for cotizacion in results:
    print(cotizacion)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Cotizacion().load()
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
criptopeso = client.Criptopeso()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `str` | No |  |
| `tna` | `float` | No |  |
| `token` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Criptopeso().list()
for criptopeso in results:
    print(criptopeso)
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
cuenta_remunerada_usd = client.CuentaRemuneradaUsd()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `str` | No |  |
| `tasa` | `float` | No |  |
| `tope` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CuentaRemuneradaUsd().list()
for cuenta_remunerada_usd in results:
    print(cuenta_remunerada_usd)
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
diputado = client.Diputado()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apellido` | `str` | No |  |
| `bloque` | `str` | No |  |
| `cese_fecha` | `str` | No |  |
| `foto` | `str` | No |  |
| `genero` | `str` | No |  |
| `id` | `str` | No |  |
| `juramento_fecha` | `str` | No |  |
| `nombre` | `str` | No |  |
| `periodo_bloque` | `dict` | No |  |
| `periodo_mandato` | `dict` | No |  |
| `provincia` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Diputado().list()
for diputado in results:
    print(diputado)
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
entidad_rendimiento = client.EntidadRendimiento()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `str` | No |  |
| `rendimiento` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EntidadRendimiento().list()
for entidad_rendimiento in results:
    print(entidad_rendimiento)
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
estado = client.Estado()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aleatorio` | `int` | No |  |
| `estado` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Estado().load()
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
evento_presidencial = client.EventoPresidencial()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `evento` | `str` | No |  |
| `fecha` | `str` | No |  |
| `tipo` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EventoPresidencial().list()
for evento_presidencial in results:
    print(evento_presidencial)
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
feriado = client.Feriado()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `str` | No |  |
| `nombre` | `str` | No |  |
| `tipo` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Feriado().load({"id": "feriado_id"})
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
finanza = client.Finanza()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Finanza().list()
for finanza in results:
    print(finanza)
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
fondo_comun_inversion = client.FondoComunInversion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ccp` | `float` | No |  |
| `fecha` | `str` | No |  |
| `fondo` | `str` | No |  |
| `horizonte` | `str` | No |  |
| `patrimonio` | `float` | No |  |
| `tipo` | `str` | No |  |
| `vcp` | `float` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FondoComunInversion().load()
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
fondo_comun_inversion_otro = client.FondoComunInversionOtro()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `str` | No |  |
| `fondo` | `str` | No |  |
| `tea` | `float` | No |  |
| `tna` | `float` | No |  |
| `tope` | `float` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FondoComunInversionOtro().load({"id": "fondo_comun_inversion_otro_id"})
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
fondo_comun_inversion_variable = client.FondoComunInversionVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condicione` | `str` | No |  |
| `condiciones_corto` | `str` | No |  |
| `fecha` | `str` | No |  |
| `fondo` | `str` | No |  |
| `nombre` | `str` | No |  |
| `tea` | `float` | No |  |
| `tipo` | `str` | No |  |
| `tna` | `float` | No |  |
| `tope` | `float` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FondoComunInversionVariable().load({"id": "fondo_comun_inversion_variable_id"})
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
hipotecario_uva_tna = client.HipotecarioUvaTna()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `str` | No |  |
| `metadata` | `dict` | No |  |
| `nombre_comercial` | `str` | No |  |
| `tna` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.HipotecarioUvaTna().list()
for hipotecario_uva_tna in results:
    print(hipotecario_uva_tna)
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
indice_inflacion = client.IndiceInflacion()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `str` | No |  |
| `valor` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IndiceInflacion().list()
for indice_inflacion in results:
    print(indice_inflacion)
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
indice_uva = client.IndiceUva()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `str` | No |  |
| `valor` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IndiceUva().list()
for indice_uva in results:
    print(indice_uva)
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
letra = client.Letra()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha_emision` | `str` | No |  |
| `fecha_vencimiento` | `str` | No |  |
| `tem` | `float` | No |  |
| `ticker` | `str` | No |  |
| `vpv` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Letra().list()
for letra in results:
    print(letra)
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
presidente = client.Presidente()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fin` | `str` | No |  |
| `imagen` | `str` | No |  |
| `inicio` | `str` | No |  |
| `nombre` | `str` | No |  |
| `partido` | `str` | No |  |
| `partido_imagen` | `str` | No |  |
| `periodo_presidencial` | `str` | No |  |
| `vicepresidente` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Presidente().list()
for presidente in results:
    print(presidente)
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
proveedor_plazo_fijo_precancelable = client.ProveedorPlazoFijoPrecancelable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aviso_precancelacion_dia` | `int` | No |  |
| `canal` | `str` | No |  |
| `enlace` | `str` | No |  |
| `entidad` | `str` | No |  |
| `id` | `str` | No |  |
| `logo` | `str` | No |  |
| `modalidad` | `str` | No |  |
| `moneda` | `str` | No |  |
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProveedorPlazoFijoPrecancelable().list()
for proveedor_plazo_fijo_precancelable in results:
    print(proveedor_plazo_fijo_precancelable)
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
proveedor_plazo_fijo_uva_pago_periodico = client.ProveedorPlazoFijoUvaPagoPeriodico()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `str` | No |  |
| `id` | `str` | No |  |
| `logo` | `str` | No |  |
| `tasa` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ProveedorPlazoFijoUvaPagoPeriodico().list()
for proveedor_plazo_fijo_uva_pago_periodico in results:
    print(proveedor_plazo_fijo_uva_pago_periodico)
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
rem = client.Rem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `float` | No |  |
| `fecha` | `str` | No |  |
| `fuente` | `str` | No |  |
| `indicador` | `str` | No |  |
| `informe` | `str` | No |  |
| `maximo` | `float` | No |  |
| `mediana` | `float` | No |  |
| `minimo` | `float` | No |  |
| `muestra` | `str` | No |  |
| `participante` | `int` | No |  |
| `percentil10` | `float` | No |  |
| `percentil25` | `float` | No |  |
| `percentil75` | `float` | No |  |
| `percentil90` | `float` | No |  |
| `periodo` | `str` | No |  |
| `periodo_desde` | `str` | No |  |
| `periodo_hasta` | `str` | No |  |
| `periodo_tipo` | `str` | No |  |
| `promedio` | `float` | No |  |
| `publicacion_url` | `str` | No |  |
| `referencia` | `str` | No |  |
| `referencia_fecha` | `str` | No |  |
| `unidad` | `str` | No |  |
| `xlsx_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Rem().list()
for rem in results:
    print(rem)
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
rem_expectativa = client.RemExpectativa()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desvio` | `float` | No |  |
| `fecha` | `str` | No |  |
| `fuente` | `str` | No |  |
| `indicador` | `str` | No |  |
| `informe` | `str` | No |  |
| `maximo` | `float` | No |  |
| `mediana` | `float` | No |  |
| `minimo` | `float` | No |  |
| `muestra` | `str` | No |  |
| `participante` | `int` | No |  |
| `percentil10` | `float` | No |  |
| `percentil25` | `float` | No |  |
| `percentil75` | `float` | No |  |
| `percentil90` | `float` | No |  |
| `periodo` | `str` | No |  |
| `periodo_desde` | `str` | No |  |
| `periodo_hasta` | `str` | No |  |
| `periodo_tipo` | `str` | No |  |
| `promedio` | `float` | No |  |
| `publicacion_url` | `str` | No |  |
| `referencia` | `str` | No |  |
| `referencia_fecha` | `str` | No |  |
| `unidad` | `str` | No |  |
| `xlsx_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RemExpectativa().list()
for rem_expectativa in results:
    print(rem_expectativa)
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
rendimiento = client.Rendimiento()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apy` | `float` | No |  |
| `fecha` | `str` | No |  |
| `moneda` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Rendimiento().load({"id": "rendimiento_id"})
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
riesgo_pai = client.RiesgoPai()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `str` | No |  |
| `valor` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RiesgoPai().list()
for riesgo_pai in results:
    print(riesgo_pai)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RiesgoPai().load()
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
senador = client.Senador()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No |  |
| `foto` | `str` | No |  |
| `id` | `str` | No |  |
| `nombre` | `str` | No |  |
| `observacione` | `str` | No |  |
| `partido` | `str` | No |  |
| `periodo_legal` | `dict` | No |  |
| `periodo_real` | `dict` | No |  |
| `provincia` | `str` | No |  |
| `rede` | `list` | No |  |
| `reemplazo` | `str` | No |  |
| `telefono` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Senador().list()
for senador in results:
    print(senador)
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
tasa_intere = client.TasaIntere()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fecha` | `str` | No |  |
| `valor` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TasaIntere().list()
for tasa_intere in results:
    print(tasa_intere)
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
tasa_plazo_fijo = client.TasaPlazoFijo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entidad` | `str` | No |  |
| `logo` | `str` | No |  |
| `tna_cliente` | `float` | No |  |
| `tna_no_cliente` | `float` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TasaPlazoFijo().list()
for tasa_plazo_fijo in results:
    print(tasa_plazo_fijo)
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

