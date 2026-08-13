# Argentinadatos Python SDK



The Python SDK for the Argentinadatos API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Acta()` — each
carrying a small, uniform set of operations (`list`, `load`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/argentinadatos-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from argentinadatos_sdk import ArgentinadatosSDK

client = ArgentinadatosSDK()
```

### 2. List acta records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    actas = client.Acta().list()
    for acta in actas:
        print(acta)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a cotizacion

Cotizacion is nested under casa, so provide the `casa`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    cotizacion = client.Cotizacion().load({"casa": "example_casa"})
    print(cotizacion)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    cotizacions = client.Cotizacion().list()
    print(cotizacions)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = ArgentinadatosSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
cotizacion = client.Cotizacion().list()
# cotizacion contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = ArgentinadatosSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
ARGENTINADATOS_TEST_LIVE=TRUE
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### ArgentinadatosSDK

```python
from argentinadatos_sdk import ArgentinadatosSDK

client = ArgentinadatosSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = ArgentinadatosSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### ArgentinadatosSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Acta` | `(data) -> ActaEntity` | Create an Acta entity instance. |
| `BonosCer` | `(data) -> BonosCerEntity` | Create a BonosCer entity instance. |
| `Cotizacion` | `(data) -> CotizacionEntity` | Create a Cotizacion entity instance. |
| `Criptopeso` | `(data) -> CriptopesoEntity` | Create a Criptopeso entity instance. |
| `CuentaRemuneradaUsd` | `(data) -> CuentaRemuneradaUsdEntity` | Create a CuentaRemuneradaUsd entity instance. |
| `Diputado` | `(data) -> DiputadoEntity` | Create a Diputado entity instance. |
| `EntidadRendimiento` | `(data) -> EntidadRendimientoEntity` | Create an EntidadRendimiento entity instance. |
| `Estado` | `(data) -> EstadoEntity` | Create an Estado entity instance. |
| `EventoPresidencial` | `(data) -> EventoPresidencialEntity` | Create an EventoPresidencial entity instance. |
| `Feriado` | `(data) -> FeriadoEntity` | Create a Feriado entity instance. |
| `Finanza` | `(data) -> FinanzaEntity` | Create a Finanza entity instance. |
| `FondoComunInversion` | `(data) -> FondoComunInversionEntity` | Create a FondoComunInversion entity instance. |
| `FondoComunInversionOtro` | `(data) -> FondoComunInversionOtroEntity` | Create a FondoComunInversionOtro entity instance. |
| `FondoComunInversionVariable` | `(data) -> FondoComunInversionVariableEntity` | Create a FondoComunInversionVariable entity instance. |
| `HipotecarioUvaTna` | `(data) -> HipotecarioUvaTnaEntity` | Create a HipotecarioUvaTna entity instance. |
| `IndiceInflacion` | `(data) -> IndiceInflacionEntity` | Create an IndiceInflacion entity instance. |
| `IndiceUva` | `(data) -> IndiceUvaEntity` | Create an IndiceUva entity instance. |
| `Letra` | `(data) -> LetraEntity` | Create a Letra entity instance. |
| `Presidente` | `(data) -> PresidenteEntity` | Create a Presidente entity instance. |
| `ProveedorPlazoFijoPrecancelable` | `(data) -> ProveedorPlazoFijoPrecancelableEntity` | Create a ProveedorPlazoFijoPrecancelable entity instance. |
| `ProveedorPlazoFijoUvaPagoPeriodico` | `(data) -> ProveedorPlazoFijoUvaPagoPeriodicoEntity` | Create a ProveedorPlazoFijoUvaPagoPeriodico entity instance. |
| `Rem` | `(data) -> RemEntity` | Create a Rem entity instance. |
| `RemExpectativa` | `(data) -> RemExpectativaEntity` | Create a RemExpectativa entity instance. |
| `Rendimiento` | `(data) -> RendimientoEntity` | Create a Rendimiento entity instance. |
| `RiesgoPai` | `(data) -> RiesgoPaiEntity` | Create a RiesgoPai entity instance. |
| `Senador` | `(data) -> SenadorEntity` | Create a Senador entity instance. |
| `TasaIntere` | `(data) -> TasaIntereEntity` | Create a TasaIntere entity instance. |
| `TasaPlazoFijo` | `(data) -> TasaPlazoFijoEntity` | Create a TasaPlazoFijo entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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
| `fechaVencimiento` |  |
| `precioArs` |  |
| `ticker` |  |
| `tirPorcentaje` |  |
| `volumen` |  |

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
| `condiciones` |  |
| `condicionesCorto` |  |
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
| `nombreComercial` |  |
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
| `fechaEmision` |  |
| `fechaVencimiento` |  |
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
| `partidoImagen` |  |
| `periodoPresidencial` |  |
| `vicepresidente` |  |

Operations: List.

API path: `/v1/presidentes`

#### ProveedorPlazoFijoPrecancelable

| Field | Description |
| --- | --- |
| `avisoPrecancelacionDias` |  |
| `canal` |  |
| `enlace` |  |
| `entidad` |  |
| `id` |  |
| `logo` |  |
| `modalidad` |  |
| `moneda` |  |
| `montoMaximo` |  |
| `montoMinimo` |  |
| `plazoMaxDias` |  |
| `plazoMinDias` |  |
| `plazoPrecancelacionDias` |  |
| `tea` |  |
| `teaPrecancelacion` |  |
| `tna` |  |
| `tnaPrecancelacion` |  |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoPrecancelable`

#### ProveedorPlazoFijoUvaPagoPeriodico

| Field | Description |
| --- | --- |
| `entidad` |  |
| `id` |  |
| `logo` |  |
| `tasas` |  |

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
| `participantes` |  |
| `percentil10` |  |
| `percentil25` |  |
| `percentil75` |  |
| `percentil90` |  |
| `periodo` |  |
| `periodoDesde` |  |
| `periodoHasta` |  |
| `periodoTipo` |  |
| `promedio` |  |
| `publicacionUrl` |  |
| `referencia` |  |
| `referenciaFecha` |  |
| `unidad` |  |
| `xlsxUrl` |  |

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
| `participantes` |  |
| `percentil10` |  |
| `percentil25` |  |
| `percentil75` |  |
| `percentil90` |  |
| `periodo` |  |
| `periodoDesde` |  |
| `periodoHasta` |  |
| `periodoTipo` |  |
| `promedio` |  |
| `publicacionUrl` |  |
| `referencia` |  |
| `referenciaFecha` |  |
| `unidad` |  |
| `xlsxUrl` |  |

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
| `logo` |  |
| `tnaClientes` |  |
| `tnaNoClientes` |  |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijo`



## Entities


### Acta

Create an instance: `acta = client.Acta()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abstenciones` | `int` |  |
| `acta` | `str` |  |
| `actaId` | `int` |  |
| `afirmativos` | `int` |  |
| `amn` | `int` |  |
| `ausentes` | `int` |  |
| `descripcion` | `str` |  |
| `fecha` | `str` |  |
| `id` | `str` |  |
| `mayoria` | `str` |  |
| `miembros` | `int` |  |
| `negativos` | `int` |  |
| `numeroActa` | `str` |  |
| `observaciones` | `list` |  |
| `periodo` | `str` |  |
| `presentes` | `int` |  |
| `presidente` | `str` |  |
| `proyecto` | `str` |  |
| `quorumTipo` | `str` |  |
| `resultado` | `str` |  |
| `reunion` | `str` |  |
| `titulo` | `str` |  |
| `votos` | `list` |  |
| `votosAfirmativos` | `int` |  |
| `votosNegativos` | `int` |  |

#### Example: Load

```python
acta = client.Acta().load({"id": 1})
```

#### Example: List

```python
actas = client.Acta().list()
```


### BonosCer

Create an instance: `bonos_cer = client.BonosCer()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fechaVencimiento` | `str` |  |
| `precioArs` | `float` |  |
| `ticker` | `str` |  |
| `tirPorcentaje` | `float` |  |
| `volumen` | `float` |  |

#### Example: List

```python
bonos_cers = client.BonosCer().list()
```


### Cotizacion

Create an instance: `cotizacion = client.Cotizacion()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | `str` |  |
| `compra` | `float` |  |
| `fecha` | `str` |  |
| `moneda` | `str` |  |
| `venta` | `float` |  |

#### Example: Load

```python
cotizacion = client.Cotizacion().load({"casa": "casa"})
```

#### Example: List

```python
cotizacions = client.Cotizacion().list()
```


### Criptopeso

Create an instance: `criptopeso = client.Criptopeso()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `str` |  |
| `tna` | `float` |  |
| `token` | `str` |  |

#### Example: List

```python
criptopesos = client.Criptopeso().list()
```


### CuentaRemuneradaUsd

Create an instance: `cuenta_remunerada_usd = client.CuentaRemuneradaUsd()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `str` |  |
| `tasa` | `float` |  |
| `tope` | `float` |  |

#### Example: List

```python
cuenta_remunerada_usds = client.CuentaRemuneradaUsd().list()
```


### Diputado

Create an instance: `diputado = client.Diputado()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apellido` | `str` |  |
| `bloque` | `str` |  |
| `ceseFecha` | `str` |  |
| `foto` | `str` |  |
| `genero` | `str` |  |
| `id` | `str` |  |
| `juramentoFecha` | `str` |  |
| `nombre` | `str` |  |
| `periodoBloque` | `dict` |  |
| `periodoMandato` | `dict` |  |
| `provincia` | `str` |  |

#### Example: List

```python
diputados = client.Diputado().list()
```


### EntidadRendimiento

Create an instance: `entidad_rendimiento = client.EntidadRendimiento()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `str` |  |
| `rendimientos` | `list` |  |

#### Example: List

```python
entidad_rendimientos = client.EntidadRendimiento().list()
```


### Estado

Create an instance: `estado = client.Estado()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | `int` |  |
| `estado` | `str` |  |

#### Example: Load

```python
estado = client.Estado().load()
```


### EventoPresidencial

Create an instance: `evento_presidencial = client.EventoPresidencial()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evento` | `str` |  |
| `fecha` | `str` |  |
| `tipo` | `str` |  |

#### Example: List

```python
evento_presidencials = client.EventoPresidencial().list()
```


### Feriado

Create an instance: `feriado = client.Feriado()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `str` |  |
| `nombre` | `str` |  |
| `tipo` | `str` |  |

#### Example: Load

```python
feriado = client.Feriado().load({"id": 1})
```


### Finanza

Create an instance: `finanza = client.Finanza()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
finanzas = client.Finanza().list()
```


### FondoComunInversion

Create an instance: `fondo_comun_inversion = client.FondoComunInversion()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ccp` | `float` |  |
| `fecha` | `str` |  |
| `fondo` | `str` |  |
| `horizonte` | `str` |  |
| `patrimonio` | `float` |  |
| `tipo` | `str` |  |
| `vcp` | `float` |  |

#### Example: Load

```python
fondo_comun_inversion = client.FondoComunInversion().load({"fecha": "fecha"})
```


### FondoComunInversionOtro

Create an instance: `fondo_comun_inversion_otro = client.FondoComunInversionOtro()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `str` |  |
| `fondo` | `str` |  |
| `tea` | `float` |  |
| `tna` | `float` |  |
| `tope` | `float` |  |

#### Example: Load

```python
fondo_comun_inversion_otro = client.FondoComunInversionOtro().load({"id": "fondo_comun_inversion_otro_id"})
```


### FondoComunInversionVariable

Create an instance: `fondo_comun_inversion_variable = client.FondoComunInversionVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condiciones` | `str` |  |
| `condicionesCorto` | `str` |  |
| `fecha` | `str` |  |
| `fondo` | `str` |  |
| `nombre` | `str` |  |
| `tea` | `float` |  |
| `tipo` | `str` |  |
| `tna` | `float` |  |
| `tope` | `float` |  |

#### Example: Load

```python
fondo_comun_inversion_variable = client.FondoComunInversionVariable().load({"id": "fondo_comun_inversion_variable_id"})
```


### HipotecarioUvaTna

Create an instance: `hipotecario_uva_tna = client.HipotecarioUvaTna()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `str` |  |
| `metadata` | `dict` |  |
| `nombreComercial` | `str` |  |
| `tna` | `float` |  |

#### Example: List

```python
hipotecario_uva_tnas = client.HipotecarioUvaTna().list()
```


### IndiceInflacion

Create an instance: `indice_inflacion = client.IndiceInflacion()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `str` |  |
| `valor` | `float` |  |

#### Example: List

```python
indice_inflacions = client.IndiceInflacion().list()
```


### IndiceUva

Create an instance: `indice_uva = client.IndiceUva()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `str` |  |
| `valor` | `float` |  |

#### Example: List

```python
indice_uvas = client.IndiceUva().list()
```


### Letra

Create an instance: `letra = client.Letra()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fechaEmision` | `str` |  |
| `fechaVencimiento` | `str` |  |
| `tem` | `float` |  |
| `ticker` | `str` |  |
| `vpv` | `float` |  |

#### Example: List

```python
letras = client.Letra().list()
```


### Presidente

Create an instance: `presidente = client.Presidente()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fin` | `str` |  |
| `imagen` | `str` |  |
| `inicio` | `str` |  |
| `nombre` | `str` |  |
| `partido` | `str` |  |
| `partidoImagen` | `str` |  |
| `periodoPresidencial` | `str` |  |
| `vicepresidente` | `str` |  |

#### Example: List

```python
presidentes = client.Presidente().list()
```


### ProveedorPlazoFijoPrecancelable

Create an instance: `proveedor_plazo_fijo_precancelable = client.ProveedorPlazoFijoPrecancelable()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avisoPrecancelacionDias` | `int` |  |
| `canal` | `str` |  |
| `enlace` | `str` |  |
| `entidad` | `str` |  |
| `id` | `str` |  |
| `logo` | `str` |  |
| `modalidad` | `str` |  |
| `moneda` | `str` |  |
| `montoMaximo` | `float` |  |
| `montoMinimo` | `float` |  |
| `plazoMaxDias` | `int` |  |
| `plazoMinDias` | `int` |  |
| `plazoPrecancelacionDias` | `int` |  |
| `tea` | `float` |  |
| `teaPrecancelacion` | `float` |  |
| `tna` | `float` |  |
| `tnaPrecancelacion` | `float` |  |

#### Example: List

```python
proveedor_plazo_fijo_precancelables = client.ProveedorPlazoFijoPrecancelable().list()
```


### ProveedorPlazoFijoUvaPagoPeriodico

Create an instance: `proveedor_plazo_fijo_uva_pago_periodico = client.ProveedorPlazoFijoUvaPagoPeriodico()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `str` |  |
| `id` | `str` |  |
| `logo` | `str` |  |
| `tasas` | `list` |  |

#### Example: List

```python
proveedor_plazo_fijo_uva_pago_periodicos = client.ProveedorPlazoFijoUvaPagoPeriodico().list()
```


### Rem

Create an instance: `rem = client.Rem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `float` |  |
| `fecha` | `str` |  |
| `fuente` | `str` |  |
| `indicador` | `str` |  |
| `informe` | `str` |  |
| `maximo` | `float` |  |
| `mediana` | `float` |  |
| `minimo` | `float` |  |
| `muestra` | `str` |  |
| `participantes` | `int` |  |
| `percentil10` | `float` |  |
| `percentil25` | `float` |  |
| `percentil75` | `float` |  |
| `percentil90` | `float` |  |
| `periodo` | `str` |  |
| `periodoDesde` | `str` |  |
| `periodoHasta` | `str` |  |
| `periodoTipo` | `str` |  |
| `promedio` | `float` |  |
| `publicacionUrl` | `str` |  |
| `referencia` | `str` |  |
| `referenciaFecha` | `str` |  |
| `unidad` | `str` |  |
| `xlsxUrl` | `str` |  |

#### Example: List

```python
rems = client.Rem().list({"año": 1, "mes": "example"})
```


### RemExpectativa

Create an instance: `rem_expectativa = client.RemExpectativa()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `float` |  |
| `fecha` | `str` |  |
| `fuente` | `str` |  |
| `indicador` | `str` |  |
| `informe` | `str` |  |
| `maximo` | `float` |  |
| `mediana` | `float` |  |
| `minimo` | `float` |  |
| `muestra` | `str` |  |
| `participantes` | `int` |  |
| `percentil10` | `float` |  |
| `percentil25` | `float` |  |
| `percentil75` | `float` |  |
| `percentil90` | `float` |  |
| `periodo` | `str` |  |
| `periodoDesde` | `str` |  |
| `periodoHasta` | `str` |  |
| `periodoTipo` | `str` |  |
| `promedio` | `float` |  |
| `publicacionUrl` | `str` |  |
| `referencia` | `str` |  |
| `referenciaFecha` | `str` |  |
| `unidad` | `str` |  |
| `xlsxUrl` | `str` |  |

#### Example: List

```python
rem_expectativas = client.RemExpectativa().list()
```


### Rendimiento

Create an instance: `rendimiento = client.Rendimiento()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apy` | `float` |  |
| `fecha` | `str` |  |
| `moneda` | `str` |  |

#### Example: Load

```python
rendimiento = client.Rendimiento().load({"id": "rendimiento_id"})
```


### RiesgoPai

Create an instance: `riesgo_pai = client.RiesgoPai()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `str` |  |
| `valor` | `float` |  |

#### Example: Load

```python
riesgo_pai = client.RiesgoPai().load()
```

#### Example: List

```python
riesgo_pais = client.RiesgoPai().list()
```


### Senador

Create an instance: `senador = client.Senador()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` |  |
| `foto` | `str` |  |
| `id` | `str` |  |
| `nombre` | `str` |  |
| `observaciones` | `str` |  |
| `partido` | `str` |  |
| `periodoLegal` | `dict` |  |
| `periodoReal` | `dict` |  |
| `provincia` | `str` |  |
| `redes` | `list` |  |
| `reemplazo` | `str` |  |
| `telefono` | `str` |  |

#### Example: List

```python
senadors = client.Senador().list()
```


### TasaIntere

Create an instance: `tasa_intere = client.TasaIntere()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `str` |  |
| `valor` | `float` |  |

#### Example: List

```python
tasa_interes = client.TasaIntere().list()
```


### TasaPlazoFijo

Create an instance: `tasa_plazo_fijo = client.TasaPlazoFijo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `str` |  |
| `logo` | `str` |  |
| `tnaClientes` | `float` |  |
| `tnaNoClientes` | `float` |  |

#### Example: List

```python
tasa_plazo_fijos = client.TasaPlazoFijo().list()
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── argentinadatos_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`argentinadatos_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
cotizacion = client.Cotizacion()
cotizacion.list()

# cotizacion.data_get() now returns the cotizacion data from the last list
# cotizacion.match_get() returns the last match criteria
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
