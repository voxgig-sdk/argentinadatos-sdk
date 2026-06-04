# Argentinadatos Golang SDK

The Golang SDK for the Argentinadatos API. Provides an entity-oriented interface using standard Go conventions — no generics required, data flows as `map[string]any`.


## Install
```bash
go get github.com/voxgig-sdk/argentinadatos-sdk/go
```

If the module is not yet published to a registry, use a `replace` directive
in your `go.mod` to point to a local checkout:

```bash
go mod edit -replace github.com/voxgig-sdk/argentinadatos-sdk/go=../path/to/github.com/voxgig-sdk/argentinadatos-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```go
package main

import (
    "fmt"

    sdk "github.com/voxgig-sdk/argentinadatos-sdk/go"
    "github.com/voxgig-sdk/argentinadatos-sdk/go/core"
)

func main() {
    client := sdk.NewArgentinadatosSDK(map[string]any{})
```

### 2. List actas

```go
    result, err := client.Acta(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }

    rm := core.ToMapAny(result)
    if rm["ok"] == true {
        for _, item := range rm["data"].([]any) {
            p := core.ToMapAny(item)
            fmt.Println(p["id"], p["name"])
        }
    }
```

### 3. Load a acta

```go
    result, err = client.Acta(nil).Load(
        map[string]any{"id": "example_id"}, nil,
    )
    if err != nil {
        panic(err)
    }

    rm = core.ToMapAny(result)
    if rm["ok"] == true {
        fmt.Println(rm["data"])
    }
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.TestSDK(nil, nil)

result, err := client.Planet(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
// result contains mock response data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewArgentinadatosSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewArgentinadatosSDK

```go
func NewArgentinadatosSDK(options map[string]any) *ArgentinadatosSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *ArgentinadatosSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### ArgentinadatosSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Acta` | `(data map[string]any) ArgentinadatosEntity` | Create a Acta entity instance. |
| `BonosCer` | `(data map[string]any) ArgentinadatosEntity` | Create a BonosCer entity instance. |
| `Cotizacion` | `(data map[string]any) ArgentinadatosEntity` | Create a Cotizacion entity instance. |
| `Criptopeso` | `(data map[string]any) ArgentinadatosEntity` | Create a Criptopeso entity instance. |
| `CuentaRemuneradaUsd` | `(data map[string]any) ArgentinadatosEntity` | Create a CuentaRemuneradaUsd entity instance. |
| `Diputado` | `(data map[string]any) ArgentinadatosEntity` | Create a Diputado entity instance. |
| `EntidadRendimiento` | `(data map[string]any) ArgentinadatosEntity` | Create a EntidadRendimiento entity instance. |
| `Estado` | `(data map[string]any) ArgentinadatosEntity` | Create a Estado entity instance. |
| `EventoPresidencial` | `(data map[string]any) ArgentinadatosEntity` | Create a EventoPresidencial entity instance. |
| `Feriado` | `(data map[string]any) ArgentinadatosEntity` | Create a Feriado entity instance. |
| `Finanza` | `(data map[string]any) ArgentinadatosEntity` | Create a Finanza entity instance. |
| `FondoComunInversion` | `(data map[string]any) ArgentinadatosEntity` | Create a FondoComunInversion entity instance. |
| `FondoComunInversionOtro` | `(data map[string]any) ArgentinadatosEntity` | Create a FondoComunInversionOtro entity instance. |
| `FondoComunInversionVariable` | `(data map[string]any) ArgentinadatosEntity` | Create a FondoComunInversionVariable entity instance. |
| `HipotecarioUvaTna` | `(data map[string]any) ArgentinadatosEntity` | Create a HipotecarioUvaTna entity instance. |
| `IndiceInflacion` | `(data map[string]any) ArgentinadatosEntity` | Create a IndiceInflacion entity instance. |
| `IndiceUva` | `(data map[string]any) ArgentinadatosEntity` | Create a IndiceUva entity instance. |
| `Letra` | `(data map[string]any) ArgentinadatosEntity` | Create a Letra entity instance. |
| `Presidente` | `(data map[string]any) ArgentinadatosEntity` | Create a Presidente entity instance. |
| `ProveedorPlazoFijoPrecancelable` | `(data map[string]any) ArgentinadatosEntity` | Create a ProveedorPlazoFijoPrecancelable entity instance. |
| `ProveedorPlazoFijoUvaPagoPeriodico` | `(data map[string]any) ArgentinadatosEntity` | Create a ProveedorPlazoFijoUvaPagoPeriodico entity instance. |
| `Rem` | `(data map[string]any) ArgentinadatosEntity` | Create a Rem entity instance. |
| `RemExpectativa` | `(data map[string]any) ArgentinadatosEntity` | Create a RemExpectativa entity instance. |
| `Rendimiento` | `(data map[string]any) ArgentinadatosEntity` | Create a Rendimiento entity instance. |
| `RiesgoPai` | `(data map[string]any) ArgentinadatosEntity` | Create a RiesgoPai entity instance. |
| `Senador` | `(data map[string]any) ArgentinadatosEntity` | Create a Senador entity instance. |
| `TasaIntere` | `(data map[string]any) ArgentinadatosEntity` | Create a TasaIntere entity instance. |
| `TasaPlazoFijo` | `(data map[string]any) ArgentinadatosEntity` | Create a TasaPlazoFijo entity instance. |

### Entity interface (ArgentinadatosEntity)

All entities implement the `ArgentinadatosEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(any, error)`. The `any` value is a
`map[string]any` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `"ok"` | `bool` | `true` if the HTTP status is 2xx. |
| `"status"` | `int` | HTTP status code. |
| `"headers"` | `map[string]any` | Response headers. |
| `"data"` | `any` | Parsed JSON response body. |

On error, `"ok"` is `false` and `"err"` contains the error value.

### Entities

#### Acta

| Field | Description |
| --- | --- |
| `"abstencione"` |  |
| `"acta"` |  |
| `"acta_id"` |  |
| `"afirmativo"` |  |
| `"amn"` |  |
| `"ausente"` |  |
| `"descripcion"` |  |
| `"fecha"` |  |
| `"id"` |  |
| `"mayoria"` |  |
| `"miembro"` |  |
| `"negativo"` |  |
| `"numero_acta"` |  |
| `"observacione"` |  |
| `"periodo"` |  |
| `"presente"` |  |
| `"presidente"` |  |
| `"proyecto"` |  |
| `"quorum_tipo"` |  |
| `"resultado"` |  |
| `"reunion"` |  |
| `"titulo"` |  |
| `"voto"` |  |
| `"votos_afirmativo"` |  |
| `"votos_negativo"` |  |

Operations: List, Load.

API path: `/v1/diputados/actas`

#### BonosCer

| Field | Description |
| --- | --- |
| `"fecha_vencimiento"` |  |
| `"precio_ar"` |  |
| `"ticker"` |  |
| `"tir_porcentaje"` |  |
| `"voluman"` |  |

Operations: List.

API path: `/v1/finanzas/bonos-cer`

#### Cotizacion

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha"` |  |
| `"moneda"` |  |
| `"venta"` |  |

Operations: List, Load.

API path: `/v1/cotizaciones/dolares`

#### Criptopeso

| Field | Description |
| --- | --- |
| `"entidad"` |  |
| `"tna"` |  |
| `"token"` |  |

Operations: List.

API path: `/v1/finanzas/criptopesos`

#### CuentaRemuneradaUsd

| Field | Description |
| --- | --- |
| `"entidad"` |  |
| `"tasa"` |  |
| `"tope"` |  |

Operations: List.

API path: `/v1/finanzas/cuentas-remuneradas-usd`

#### Diputado

| Field | Description |
| --- | --- |
| `"apellido"` |  |
| `"bloque"` |  |
| `"cese_fecha"` |  |
| `"foto"` |  |
| `"genero"` |  |
| `"id"` |  |
| `"juramento_fecha"` |  |
| `"nombre"` |  |
| `"periodo_bloque"` |  |
| `"periodo_mandato"` |  |
| `"provincia"` |  |

Operations: List.

API path: `/v1/diputados/diputados`

#### EntidadRendimiento

| Field | Description |
| --- | --- |
| `"entidad"` |  |
| `"rendimiento"` |  |

Operations: List.

API path: `/v1/finanzas/rendimientos`

#### Estado

| Field | Description |
| --- | --- |
| `"aleatorio"` |  |
| `"estado"` |  |

Operations: Load.

API path: `/v1/estado`

#### EventoPresidencial

| Field | Description |
| --- | --- |
| `"evento"` |  |
| `"fecha"` |  |
| `"tipo"` |  |

Operations: List.

API path: `/v1/eventos/presidenciales`

#### Feriado

| Field | Description |
| --- | --- |
| `"fecha"` |  |
| `"nombre"` |  |
| `"tipo"` |  |

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
| `"ccp"` |  |
| `"fecha"` |  |
| `"fondo"` |  |
| `"horizonte"` |  |
| `"patrimonio"` |  |
| `"tipo"` |  |
| `"vcp"` |  |

Operations: Load.

API path: `/v1/finanzas/fci/mercadoDinero/{fecha}`

#### FondoComunInversionOtro

| Field | Description |
| --- | --- |
| `"fecha"` |  |
| `"fondo"` |  |
| `"tea"` |  |
| `"tna"` |  |
| `"tope"` |  |

Operations: Load.

API path: `/v1/finanzas/fci/otros/{fecha}`

#### FondoComunInversionVariable

| Field | Description |
| --- | --- |
| `"condicione"` |  |
| `"condiciones_corto"` |  |
| `"fecha"` |  |
| `"fondo"` |  |
| `"nombre"` |  |
| `"tea"` |  |
| `"tipo"` |  |
| `"tna"` |  |
| `"tope"` |  |

Operations: Load.

API path: `/v1/finanzas/fci/variables/{fecha}`

#### HipotecarioUvaTna

| Field | Description |
| --- | --- |
| `"entidad"` |  |
| `"metadata"` |  |
| `"nombre_comercial"` |  |
| `"tna"` |  |

Operations: List.

API path: `/v1/finanzas/creditos/hipotecariosUva`

#### IndiceInflacion

| Field | Description |
| --- | --- |
| `"fecha"` |  |
| `"valor"` |  |

Operations: List.

API path: `/v1/finanzas/indices/inflacion`

#### IndiceUva

| Field | Description |
| --- | --- |
| `"fecha"` |  |
| `"valor"` |  |

Operations: List.

API path: `/v1/finanzas/indices/uva`

#### Letra

| Field | Description |
| --- | --- |
| `"fecha_emision"` |  |
| `"fecha_vencimiento"` |  |
| `"tem"` |  |
| `"ticker"` |  |
| `"vpv"` |  |

Operations: List.

API path: `/v1/finanzas/letras`

#### Presidente

| Field | Description |
| --- | --- |
| `"fin"` |  |
| `"imagen"` |  |
| `"inicio"` |  |
| `"nombre"` |  |
| `"partido"` |  |
| `"partido_imagen"` |  |
| `"periodo_presidencial"` |  |
| `"vicepresidente"` |  |

Operations: List.

API path: `/v1/presidentes`

#### ProveedorPlazoFijoPrecancelable

| Field | Description |
| --- | --- |
| `"aviso_precancelacion_dia"` |  |
| `"canal"` |  |
| `"enlace"` |  |
| `"entidad"` |  |
| `"id"` |  |
| `"logo"` |  |
| `"modalidad"` |  |
| `"moneda"` |  |
| `"monto_maximo"` |  |
| `"monto_minimo"` |  |
| `"plazo_max_dia"` |  |
| `"plazo_min_dia"` |  |
| `"plazo_precancelacion_dia"` |  |
| `"tea"` |  |
| `"tea_precancelacion"` |  |
| `"tna"` |  |
| `"tna_precancelacion"` |  |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoPrecancelable`

#### ProveedorPlazoFijoUvaPagoPeriodico

| Field | Description |
| --- | --- |
| `"entidad"` |  |
| `"id"` |  |
| `"logo"` |  |
| `"tasa"` |  |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico`

#### Rem

| Field | Description |
| --- | --- |
| `"desvio"` |  |
| `"fecha"` |  |
| `"fuente"` |  |
| `"indicador"` |  |
| `"informe"` |  |
| `"maximo"` |  |
| `"mediana"` |  |
| `"minimo"` |  |
| `"muestra"` |  |
| `"participante"` |  |
| `"percentil10"` |  |
| `"percentil25"` |  |
| `"percentil75"` |  |
| `"percentil90"` |  |
| `"periodo"` |  |
| `"periodo_desde"` |  |
| `"periodo_hasta"` |  |
| `"periodo_tipo"` |  |
| `"promedio"` |  |
| `"publicacion_url"` |  |
| `"referencia"` |  |
| `"referencia_fecha"` |  |
| `"unidad"` |  |
| `"xlsx_url"` |  |

Operations: List.

API path: `/v1/rems/{año}/{mes}`

#### RemExpectativa

| Field | Description |
| --- | --- |
| `"desvio"` |  |
| `"fecha"` |  |
| `"fuente"` |  |
| `"indicador"` |  |
| `"informe"` |  |
| `"maximo"` |  |
| `"mediana"` |  |
| `"minimo"` |  |
| `"muestra"` |  |
| `"participante"` |  |
| `"percentil10"` |  |
| `"percentil25"` |  |
| `"percentil75"` |  |
| `"percentil90"` |  |
| `"periodo"` |  |
| `"periodo_desde"` |  |
| `"periodo_hasta"` |  |
| `"periodo_tipo"` |  |
| `"promedio"` |  |
| `"publicacion_url"` |  |
| `"referencia"` |  |
| `"referencia_fecha"` |  |
| `"unidad"` |  |
| `"xlsx_url"` |  |

Operations: List.

API path: `/v1/rems/ultimo`

#### Rendimiento

| Field | Description |
| --- | --- |
| `"apy"` |  |
| `"fecha"` |  |
| `"moneda"` |  |

Operations: Load.

API path: `/v1/finanzas/rendimientos/{entidad}`

#### RiesgoPai

| Field | Description |
| --- | --- |
| `"fecha"` |  |
| `"valor"` |  |

Operations: List, Load.

API path: `/v1/finanzas/indices/riesgo-pais`

#### Senador

| Field | Description |
| --- | --- |
| `"email"` |  |
| `"foto"` |  |
| `"id"` |  |
| `"nombre"` |  |
| `"observacione"` |  |
| `"partido"` |  |
| `"periodo_legal"` |  |
| `"periodo_real"` |  |
| `"provincia"` |  |
| `"rede"` |  |
| `"reemplazo"` |  |
| `"telefono"` |  |

Operations: List.

API path: `/v1/senado/senadores`

#### TasaIntere

| Field | Description |
| --- | --- |
| `"fecha"` |  |
| `"valor"` |  |

Operations: List.

API path: `/v1/finanzas/tasas/depositos30Dias`

#### TasaPlazoFijo

| Field | Description |
| --- | --- |
| `"entidad"` |  |
| `"logo"` |  |
| `"tna_cliente"` |  |
| `"tna_no_cliente"` |  |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijo`



## Entities


### Acta

Create an instance: `acta := client.Acta(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
result, err := client.Acta(nil).Load(map[string]any{"id": "acta_id"}, nil)
```

#### Example: List

```go
results, err := client.Acta(nil).List(nil, nil)
```


### BonosCer

Create an instance: `bonos_cer := client.BonosCer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha_vencimiento` | ``$STRING`` |  |
| `precio_ar` | ``$NUMBER`` |  |
| `ticker` | ``$STRING`` |  |
| `tir_porcentaje` | ``$NUMBER`` |  |
| `voluman` | ``$NUMBER`` |  |

#### Example: List

```go
results, err := client.BonosCer(nil).List(nil, nil)
```


### Cotizacion

Create an instance: `cotizacion := client.Cotizacion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `casa` | ``$STRING`` |  |
| `compra` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |
| `venta` | ``$NUMBER`` |  |

#### Example: Load

```go
result, err := client.Cotizacion(nil).Load(map[string]any{"id": "cotizacion_id"}, nil)
```

#### Example: List

```go
results, err := client.Cotizacion(nil).List(nil, nil)
```


### Criptopeso

Create an instance: `criptopeso := client.Criptopeso(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | ``$STRING`` |  |
| `tna` | ``$NUMBER`` |  |
| `token` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.Criptopeso(nil).List(nil, nil)
```


### CuentaRemuneradaUsd

Create an instance: `cuenta_remunerada_usd := client.CuentaRemuneradaUsd(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | ``$STRING`` |  |
| `tasa` | ``$NUMBER`` |  |
| `tope` | ``$NUMBER`` |  |

#### Example: List

```go
results, err := client.CuentaRemuneradaUsd(nil).List(nil, nil)
```


### Diputado

Create an instance: `diputado := client.Diputado(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
results, err := client.Diputado(nil).List(nil, nil)
```


### EntidadRendimiento

Create an instance: `entidad_rendimiento := client.EntidadRendimiento(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | ``$STRING`` |  |
| `rendimiento` | ``$ARRAY`` |  |

#### Example: List

```go
results, err := client.EntidadRendimiento(nil).List(nil, nil)
```


### Estado

Create an instance: `estado := client.Estado(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aleatorio` | ``$INTEGER`` |  |
| `estado` | ``$STRING`` |  |

#### Example: Load

```go
result, err := client.Estado(nil).Load(map[string]any{"id": "estado_id"}, nil)
```


### EventoPresidencial

Create an instance: `evento_presidencial := client.EventoPresidencial(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evento` | ``$STRING`` |  |
| `fecha` | ``$STRING`` |  |
| `tipo` | ``$STRING`` |  |

#### Example: List

```go
results, err := client.EventoPresidencial(nil).List(nil, nil)
```


### Feriado

Create an instance: `feriado := client.Feriado(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | ``$STRING`` |  |
| `nombre` | ``$STRING`` |  |
| `tipo` | ``$STRING`` |  |

#### Example: Load

```go
result, err := client.Feriado(nil).Load(map[string]any{"id": "feriado_id"}, nil)
```


### Finanza

Create an instance: `finanza := client.Finanza(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
results, err := client.Finanza(nil).List(nil, nil)
```


### FondoComunInversion

Create an instance: `fondo_comun_inversion := client.FondoComunInversion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
result, err := client.FondoComunInversion(nil).Load(map[string]any{"id": "fondo_comun_inversion_id"}, nil)
```


### FondoComunInversionOtro

Create an instance: `fondo_comun_inversion_otro := client.FondoComunInversionOtro(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | ``$STRING`` |  |
| `fondo` | ``$STRING`` |  |
| `tea` | ``$NUMBER`` |  |
| `tna` | ``$NUMBER`` |  |
| `tope` | ``$NUMBER`` |  |

#### Example: Load

```go
result, err := client.FondoComunInversionOtro(nil).Load(map[string]any{"id": "fondo_comun_inversion_otro_id"}, nil)
```


### FondoComunInversionVariable

Create an instance: `fondo_comun_inversion_variable := client.FondoComunInversionVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
result, err := client.FondoComunInversionVariable(nil).Load(map[string]any{"id": "fondo_comun_inversion_variable_id"}, nil)
```


### HipotecarioUvaTna

Create an instance: `hipotecario_uva_tna := client.HipotecarioUvaTna(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | ``$STRING`` |  |
| `metadata` | ``$OBJECT`` |  |
| `nombre_comercial` | ``$STRING`` |  |
| `tna` | ``$NUMBER`` |  |

#### Example: List

```go
results, err := client.HipotecarioUvaTna(nil).List(nil, nil)
```


### IndiceInflacion

Create an instance: `indice_inflacion := client.IndiceInflacion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

#### Example: List

```go
results, err := client.IndiceInflacion(nil).List(nil, nil)
```


### IndiceUva

Create an instance: `indice_uva := client.IndiceUva(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

#### Example: List

```go
results, err := client.IndiceUva(nil).List(nil, nil)
```


### Letra

Create an instance: `letra := client.Letra(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha_emision` | ``$STRING`` |  |
| `fecha_vencimiento` | ``$STRING`` |  |
| `tem` | ``$NUMBER`` |  |
| `ticker` | ``$STRING`` |  |
| `vpv` | ``$NUMBER`` |  |

#### Example: List

```go
results, err := client.Letra(nil).List(nil, nil)
```


### Presidente

Create an instance: `presidente := client.Presidente(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
results, err := client.Presidente(nil).List(nil, nil)
```


### ProveedorPlazoFijoPrecancelable

Create an instance: `proveedor_plazo_fijo_precancelable := client.ProveedorPlazoFijoPrecancelable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
results, err := client.ProveedorPlazoFijoPrecancelable(nil).List(nil, nil)
```


### ProveedorPlazoFijoUvaPagoPeriodico

Create an instance: `proveedor_plazo_fijo_uva_pago_periodico := client.ProveedorPlazoFijoUvaPagoPeriodico(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | ``$STRING`` |  |
| `id` | ``$STRING`` |  |
| `logo` | ``$STRING`` |  |
| `tasa` | ``$ARRAY`` |  |

#### Example: List

```go
results, err := client.ProveedorPlazoFijoUvaPagoPeriodico(nil).List(nil, nil)
```


### Rem

Create an instance: `rem := client.Rem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
results, err := client.Rem(nil).List(nil, nil)
```


### RemExpectativa

Create an instance: `rem_expectativa := client.RemExpectativa(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
results, err := client.RemExpectativa(nil).List(nil, nil)
```


### Rendimiento

Create an instance: `rendimiento := client.Rendimiento(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `apy` | ``$NUMBER`` |  |
| `fecha` | ``$STRING`` |  |
| `moneda` | ``$STRING`` |  |

#### Example: Load

```go
result, err := client.Rendimiento(nil).Load(map[string]any{"id": "rendimiento_id"}, nil)
```


### RiesgoPai

Create an instance: `riesgo_pai := client.RiesgoPai(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

#### Example: Load

```go
result, err := client.RiesgoPai(nil).Load(map[string]any{"id": "riesgo_pai_id"}, nil)
```

#### Example: List

```go
results, err := client.RiesgoPai(nil).List(nil, nil)
```


### Senador

Create an instance: `senador := client.Senador(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
results, err := client.Senador(nil).List(nil, nil)
```


### TasaIntere

Create an instance: `tasa_intere := client.TasaIntere(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | ``$STRING`` |  |
| `valor` | ``$NUMBER`` |  |

#### Example: List

```go
results, err := client.TasaIntere(nil).List(nil, nil)
```


### TasaPlazoFijo

Create an instance: `tasa_plazo_fijo := client.TasaPlazoFijo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | ``$STRING`` |  |
| `logo` | ``$STRING`` |  |
| `tna_cliente` | ``$NUMBER`` |  |
| `tna_no_cliente` | ``$NUMBER`` |  |

#### Example: List

```go
results, err := client.TasaPlazoFijo(nil).List(nil, nil)
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
error is returned to the caller. An unexpected panic triggers the
`PreUnexpected` hook.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/argentinadatos-sdk/go/
├── argentinadatos.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/argentinadatos-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
moon := client.Moon(nil)
moon.Load(map[string]any{"planet_id": "earth", "id": "luna"}, nil)

// moon.Data() now returns the loaded moon data
// moon.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
