# Argentinadatos Golang SDK



The Golang SDK for the Argentinadatos API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/argentinadatos-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/argentinadatos-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/argentinadatos-sdk/go=../argentinadatos-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/argentinadatos-sdk/go"
)

func main() {
    client := sdk.New()

    // List acta records — the value is the array of records itself.
    actas, err := client.Acta(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range actas.([]any) {
        fmt.Println(item)
    }

    // Load a single acta — the value is the loaded record.
    acta, err := client.Acta(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(acta)
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
client := sdk.Test()

acta, err := client.Acta(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(acta) // the loaded mock data
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
| `Acta` | `(data map[string]any) ArgentinadatosEntity` | Create an Acta entity instance. |
| `BonosCer` | `(data map[string]any) ArgentinadatosEntity` | Create a BonosCer entity instance. |
| `Cotizacion` | `(data map[string]any) ArgentinadatosEntity` | Create a Cotizacion entity instance. |
| `Criptopeso` | `(data map[string]any) ArgentinadatosEntity` | Create a Criptopeso entity instance. |
| `CuentaRemuneradaUsd` | `(data map[string]any) ArgentinadatosEntity` | Create a CuentaRemuneradaUsd entity instance. |
| `Diputado` | `(data map[string]any) ArgentinadatosEntity` | Create a Diputado entity instance. |
| `EntidadRendimiento` | `(data map[string]any) ArgentinadatosEntity` | Create an EntidadRendimiento entity instance. |
| `Estado` | `(data map[string]any) ArgentinadatosEntity` | Create an Estado entity instance. |
| `EventoPresidencial` | `(data map[string]any) ArgentinadatosEntity` | Create an EventoPresidencial entity instance. |
| `Feriado` | `(data map[string]any) ArgentinadatosEntity` | Create a Feriado entity instance. |
| `Finanza` | `(data map[string]any) ArgentinadatosEntity` | Create a Finanza entity instance. |
| `FondoComunInversion` | `(data map[string]any) ArgentinadatosEntity` | Create a FondoComunInversion entity instance. |
| `FondoComunInversionOtro` | `(data map[string]any) ArgentinadatosEntity` | Create a FondoComunInversionOtro entity instance. |
| `FondoComunInversionVariable` | `(data map[string]any) ArgentinadatosEntity` | Create a FondoComunInversionVariable entity instance. |
| `HipotecarioUvaTna` | `(data map[string]any) ArgentinadatosEntity` | Create a HipotecarioUvaTna entity instance. |
| `IndiceInflacion` | `(data map[string]any) ArgentinadatosEntity` | Create an IndiceInflacion entity instance. |
| `IndiceUva` | `(data map[string]any) ArgentinadatosEntity` | Create an IndiceUva entity instance. |
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

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    acta, err := client.Acta(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil { /* handle */ }
    // acta is the loaded record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

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
acta, err := client.Acta(nil).Load(map[string]any{"id": "acta_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(acta) // the loaded record
```

#### Example: List

```go
actas, err := client.Acta(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(actas) // the array of records
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
bonos_cers, err := client.BonosCer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(bonos_cers) // the array of records
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
cotizacion, err := client.Cotizacion(nil).Load(map[string]any{"id": "cotizacion_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cotizacion) // the loaded record
```

#### Example: List

```go
cotizacions, err := client.Cotizacion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cotizacions) // the array of records
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
criptopesos, err := client.Criptopeso(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(criptopesos) // the array of records
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
cuenta_remunerada_usds, err := client.CuentaRemuneradaUsd(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cuenta_remunerada_usds) // the array of records
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
diputados, err := client.Diputado(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(diputados) // the array of records
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
entidad_rendimientos, err := client.EntidadRendimiento(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(entidad_rendimientos) // the array of records
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
estado, err := client.Estado(nil).Load(map[string]any{"id": "estado_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(estado) // the loaded record
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
evento_presidencials, err := client.EventoPresidencial(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(evento_presidencials) // the array of records
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
feriado, err := client.Feriado(nil).Load(map[string]any{"id": "feriado_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(feriado) // the loaded record
```


### Finanza

Create an instance: `finanza := client.Finanza(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
finanzas, err := client.Finanza(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(finanzas) // the array of records
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
fondo_comun_inversion, err := client.FondoComunInversion(nil).Load(map[string]any{"id": "fondo_comun_inversion_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fondo_comun_inversion) // the loaded record
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
fondo_comun_inversion_otro, err := client.FondoComunInversionOtro(nil).Load(map[string]any{"id": "fondo_comun_inversion_otro_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fondo_comun_inversion_otro) // the loaded record
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
fondo_comun_inversion_variable, err := client.FondoComunInversionVariable(nil).Load(map[string]any{"id": "fondo_comun_inversion_variable_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fondo_comun_inversion_variable) // the loaded record
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
hipotecario_uva_tnas, err := client.HipotecarioUvaTna(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(hipotecario_uva_tnas) // the array of records
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
indice_inflacions, err := client.IndiceInflacion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(indice_inflacions) // the array of records
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
indice_uvas, err := client.IndiceUva(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(indice_uvas) // the array of records
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
letras, err := client.Letra(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(letras) // the array of records
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
presidentes, err := client.Presidente(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(presidentes) // the array of records
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
proveedor_plazo_fijo_precancelables, err := client.ProveedorPlazoFijoPrecancelable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(proveedor_plazo_fijo_precancelables) // the array of records
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
proveedor_plazo_fijo_uva_pago_periodicos, err := client.ProveedorPlazoFijoUvaPagoPeriodico(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(proveedor_plazo_fijo_uva_pago_periodicos) // the array of records
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
rems, err := client.Rem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rems) // the array of records
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
rem_expectativas, err := client.RemExpectativa(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rem_expectativas) // the array of records
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
rendimiento, err := client.Rendimiento(nil).Load(map[string]any{"id": "rendimiento_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rendimiento) // the loaded record
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
riesgo_pai, err := client.RiesgoPai(nil).Load(map[string]any{"id": "riesgo_pai_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(riesgo_pai) // the loaded record
```

#### Example: List

```go
riesgo_pais, err := client.RiesgoPai(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(riesgo_pais) // the array of records
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
senadors, err := client.Senador(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(senadors) // the array of records
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
tasa_interes, err := client.TasaIntere(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tasa_interes) // the array of records
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
tasa_plazo_fijos, err := client.TasaPlazoFijo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tasa_plazo_fijos) // the array of records
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
acta := client.Acta(nil)
acta.Load(map[string]any{"id": "example_id"}, nil)

// acta.Data() now returns the loaded acta data
// acta.Match() returns the last match criteria
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
