# Argentinadatos Golang SDK



The Golang SDK for the Argentinadatos API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Acta(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
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
    acta, err := client.Acta(nil).Load(map[string]any{"id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(acta)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
rendimiento, err := client.Rendimiento(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = rendimiento
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
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

rendimiento, err := client.Rendimiento(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(rendimiento) // the returned mock data
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
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    acta, err := client.Acta(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // acta is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Acta

| Field | Description |
| --- | --- |
| `"abstenciones"` |  |
| `"acta"` |  |
| `"actaId"` |  |
| `"afirmativos"` |  |
| `"amn"` |  |
| `"ausentes"` |  |
| `"descripcion"` |  |
| `"fecha"` |  |
| `"id"` |  |
| `"mayoria"` |  |
| `"miembros"` |  |
| `"negativos"` |  |
| `"numeroActa"` |  |
| `"observaciones"` |  |
| `"periodo"` |  |
| `"presentes"` |  |
| `"presidente"` |  |
| `"proyecto"` |  |
| `"quorumTipo"` |  |
| `"resultado"` |  |
| `"reunion"` |  |
| `"titulo"` |  |
| `"votos"` |  |
| `"votosAfirmativos"` |  |
| `"votosNegativos"` |  |

Operations: List, Load.

API path: `/v1/diputados/actas`

#### BonosCer

| Field | Description |
| --- | --- |
| `"fechaVencimiento"` | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `"precioArs"` | Precio de cotización en pesos argentinos |
| `"ticker"` | Código del bono (ej. |
| `"tirPorcentaje"` | Tasa interna de retorno (TIR) en porcentaje |
| `"volumen"` | Volumen nominal negociado, si la fuente lo publica |

Operations: List.

API path: `/v1/finanzas/bonos-cer`

#### Cotizacion

| Field | Description |
| --- | --- |
| `"casa"` |  |
| `"compra"` |  |
| `"fecha"` |  |
| `"id"` |  |
| `"moneda"` |  |
| `"venta"` |  |

Operations: List, Load.

API path: `/v1/cotizaciones/dolares`

#### Criptopeso

| Field | Description |
| --- | --- |
| `"entidad"` | Nombre de la entidad que ofrece el criptopeso |
| `"tna"` | Tasa Nominal Anual en porcentaje |
| `"token"` | Token del criptopeso (ej: ARGt, wARS) |

Operations: List.

API path: `/v1/finanzas/criptopesos`

#### CuentaRemuneradaUsd

| Field | Description |
| --- | --- |
| `"entidad"` | Identificador de la entidad (p. |
| `"tasa"` | Tasa de rendimiento anual en formato decimal (p. |
| `"tope"` | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

Operations: List.

API path: `/v1/finanzas/cuentas-remuneradas-usd`

#### Diputado

| Field | Description |
| --- | --- |
| `"apellido"` |  |
| `"bloque"` |  |
| `"ceseFecha"` |  |
| `"foto"` |  |
| `"genero"` |  |
| `"id"` |  |
| `"juramentoFecha"` |  |
| `"nombre"` |  |
| `"periodoBloque"` |  |
| `"periodoMandato"` |  |
| `"provincia"` |  |

Operations: List.

API path: `/v1/diputados/diputados`

#### EntidadRendimiento

| Field | Description |
| --- | --- |
| `"entidad"` |  |
| `"rendimientos"` |  |

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
| `"id"` |  |
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
| `"id"` |  |
| `"tea"` |  |
| `"tna"` |  |
| `"tope"` |  |

Operations: Load.

API path: `/v1/finanzas/fci/otros/{fecha}`

#### FondoComunInversionVariable

| Field | Description |
| --- | --- |
| `"condiciones"` |  |
| `"condicionesCorto"` |  |
| `"fecha"` |  |
| `"fondo"` | Nombre del fondo común de inversión (clase o denominación oficial). |
| `"id"` |  |
| `"nombre"` | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `"tea"` |  |
| `"tipo"` | Clasificación del instrumento. |
| `"tna"` |  |
| `"tope"` |  |

Operations: Load.

API path: `/v1/finanzas/fci/variables/{fecha}`

#### HipotecarioUvaTna

| Field | Description |
| --- | --- |
| `"entidad"` | Nombre del banco u oferente del crédito hipotecario UVA |
| `"metadata"` | Detalle de condiciones |
| `"nombreComercial"` | Nombre comercial |
| `"tna"` | Tasa Nominal Anual |

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
| `"fechaEmision"` | Fecha de emisión original (ISO 8601) |
| `"fechaVencimiento"` | Fecha de vencimiento (ISO 8601) |
| `"tem"` | Tasa Efectiva Mensual (%) |
| `"ticker"` | Código del instrumento (ej: S31G5, T17O5) |
| `"vpv"` | Valor de Pago al Vencimiento por cada $100 de valor nominal |

Operations: List.

API path: `/v1/finanzas/letras`

#### Presidente

| Field | Description |
| --- | --- |
| `"fin"` | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `"imagen"` | URL de la imagen del presidente |
| `"inicio"` | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `"nombre"` |  |
| `"partido"` |  |
| `"partidoImagen"` | URL de la imagen del logo del partido político |
| `"periodoPresidencial"` | Rango de años del período presidencial (ej: '2019-2023') |
| `"vicepresidente"` | Nombre del vicepresidente. |

Operations: List.

API path: `/v1/presidentes`

#### ProveedorPlazoFijoPrecancelable

| Field | Description |
| --- | --- |
| `"avisoPrecancelacionDias"` | Días hábiles de aviso previo para precancelar |
| `"canal"` | Canales publicados para constituir el plazo fijo |
| `"enlace"` | URL de la fuente |
| `"entidad"` | Nombre de la entidad |
| `"id"` | Identificador estable del proveedor |
| `"logo"` | URL del logo de la entidad |
| `"modalidad"` | Modalidad publicada por la entidad |
| `"moneda"` | Moneda de constitución |
| `"montoMaximo"` | Monto máximo de constitución |
| `"montoMinimo"` | Monto mínimo de constitución |
| `"plazoMaxDias"` | Plazo máximo en días |
| `"plazoMinDias"` | Plazo mínimo en días |
| `"plazoPrecancelacionDias"` | Días mínimos para ejercer la precancelación |
| `"tea"` | Tasa Efectiva Anual |
| `"teaPrecancelacion"` | Tasa Efectiva Anual aplicada ante precancelación |
| `"tna"` | Tasa Nominal Anual |
| `"tnaPrecancelacion"` | Tasa Nominal Anual aplicada ante precancelación |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoPrecancelable`

#### ProveedorPlazoFijoUvaPagoPeriodico

| Field | Description |
| --- | --- |
| `"entidad"` | Nombre de la entidad |
| `"id"` | Identificador estable del proveedor (p. |
| `"logo"` | URL del logo de la entidad |
| `"tasas"` | Tasas por rango de plazo |

Operations: List.

API path: `/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico`

#### Rem

| Field | Description |
| --- | --- |
| `"desvio"` |  |
| `"fecha"` | Fecha ISO del primer día del mes del informe |
| `"fuente"` |  |
| `"indicador"` | Indicador relevado |
| `"informe"` | Informe REM en formato YYYY-MM |
| `"maximo"` |  |
| `"mediana"` |  |
| `"minimo"` |  |
| `"muestra"` | Muestra de participantes: todos o TOP 10 |
| `"participantes"` |  |
| `"percentil10"` |  |
| `"percentil25"` |  |
| `"percentil75"` |  |
| `"percentil90"` |  |
| `"periodo"` | Período original informado por el BCRA |
| `"periodoDesde"` | Fecha de inicio del período normalizado |
| `"periodoHasta"` | Fecha de fin del período normalizado |
| `"periodoTipo"` | Tipo de período normalizado |
| `"promedio"` |  |
| `"publicacionUrl"` |  |
| `"referencia"` | Referencia original de la tabla |
| `"referenciaFecha"` | Fecha detectada en la referencia, si corresponde |
| `"unidad"` | Unidad inferida desde la referencia |
| `"xlsxUrl"` |  |

Operations: List.

API path: `/v1/rems/{año}/{mes}`

#### RemExpectativa

| Field | Description |
| --- | --- |
| `"desvio"` |  |
| `"fecha"` | Fecha ISO del primer día del mes del informe |
| `"fuente"` |  |
| `"indicador"` | Indicador relevado |
| `"informe"` | Informe REM en formato YYYY-MM |
| `"maximo"` |  |
| `"mediana"` |  |
| `"minimo"` |  |
| `"muestra"` | Muestra de participantes: todos o TOP 10 |
| `"participantes"` |  |
| `"percentil10"` |  |
| `"percentil25"` |  |
| `"percentil75"` |  |
| `"percentil90"` |  |
| `"periodo"` | Período original informado por el BCRA |
| `"periodoDesde"` | Fecha de inicio del período normalizado |
| `"periodoHasta"` | Fecha de fin del período normalizado |
| `"periodoTipo"` | Tipo de período normalizado |
| `"promedio"` |  |
| `"publicacionUrl"` |  |
| `"referencia"` | Referencia original de la tabla |
| `"referenciaFecha"` | Fecha detectada en la referencia, si corresponde |
| `"unidad"` | Unidad inferida desde la referencia |
| `"xlsxUrl"` |  |

Operations: List.

API path: `/v1/rems/ultimo`

#### Rendimiento

| Field | Description |
| --- | --- |
| `"apy"` |  |
| `"fecha"` |  |
| `"id"` |  |
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
| `"observaciones"` |  |
| `"partido"` |  |
| `"periodoLegal"` |  |
| `"periodoReal"` |  |
| `"provincia"` |  |
| `"redes"` |  |
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
| `"logo"` | URL del logo de la entidad |
| `"tnaClientes"` | Tasa Nominal Anual para clientes, en porcentaje |
| `"tnaNoClientes"` | Tasa Nominal Anual para no clientes, en porcentaje |

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
| `observaciones` | `[]any` |  |
| `periodo` | `string` |  |
| `presentes` | `int` |  |
| `presidente` | `string` |  |
| `proyecto` | `string` |  |
| `quorumTipo` | `string` |  |
| `resultado` | `string` |  |
| `reunion` | `string` |  |
| `titulo` | `string` |  |
| `votos` | `[]any` |  |
| `votosAfirmativos` | `int` |  |
| `votosNegativos` | `int` |  |

#### Example: Load

```go
acta, err := client.Acta(nil).Load(map[string]any{"id": 1}, nil)
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

Create an instance: `bonosCer := client.BonosCer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fechaVencimiento` | `string` | Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd) |
| `precioArs` | `float64` | Precio de cotización en pesos argentinos |
| `ticker` | `string` | Código del bono (ej. |
| `tirPorcentaje` | `float64` | Tasa interna de retorno (TIR) en porcentaje |
| `volumen` | `float64` | Volumen nominal negociado, si la fuente lo publica |

#### Example: List

```go
bonosCers, err := client.BonosCer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(bonosCers) // the array of records
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
| `casa` | `string` |  |
| `compra` | `float64` |  |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `moneda` | `string` |  |
| `venta` | `float64` |  |

#### Example: Load

```go
cotizacion, err := client.Cotizacion(nil).Load(map[string]any{"casa": "casa"}, nil)
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
| `entidad` | `string` | Nombre de la entidad que ofrece el criptopeso |
| `tna` | `float64` | Tasa Nominal Anual en porcentaje |
| `token` | `string` | Token del criptopeso (ej: ARGt, wARS) |

#### Example: List

```go
criptopesos, err := client.Criptopeso(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(criptopesos) // the array of records
```


### CuentaRemuneradaUsd

Create an instance: `cuentaRemuneradaUsd := client.CuentaRemuneradaUsd(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` | Identificador de la entidad (p. |
| `tasa` | `float64` | Tasa de rendimiento anual en formato decimal (p. |
| `tope` | `float64` | Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó |

#### Example: List

```go
cuentaRemuneradaUsds, err := client.CuentaRemuneradaUsd(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cuentaRemuneradaUsds) // the array of records
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
| `apellido` | `string` |  |
| `bloque` | `string` |  |
| `ceseFecha` | `string` |  |
| `foto` | `string` |  |
| `genero` | `string` |  |
| `id` | `string` |  |
| `juramentoFecha` | `string` |  |
| `nombre` | `string` |  |
| `periodoBloque` | `map[string]any` |  |
| `periodoMandato` | `map[string]any` |  |
| `provincia` | `string` |  |

#### Example: List

```go
diputados, err := client.Diputado(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(diputados) // the array of records
```


### EntidadRendimiento

Create an instance: `entidadRendimiento := client.EntidadRendimiento(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `rendimientos` | `[]any` |  |

#### Example: List

```go
entidadRendimientos, err := client.EntidadRendimiento(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(entidadRendimientos) // the array of records
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
| `aleatorio` | `int` |  |
| `estado` | `string` |  |

#### Example: Load

```go
estado, err := client.Estado(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(estado) // the loaded record
```


### EventoPresidencial

Create an instance: `eventoPresidencial := client.EventoPresidencial(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `evento` | `string` |  |
| `fecha` | `string` |  |
| `tipo` | `string` |  |

#### Example: List

```go
eventoPresidencials, err := client.EventoPresidencial(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(eventoPresidencials) // the array of records
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
| `fecha` | `string` |  |
| `id` | `string` |  |
| `nombre` | `string` |  |
| `tipo` | `string` |  |

#### Example: Load

```go
feriado, err := client.Feriado(nil).Load(map[string]any{"id": 1}, nil)
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

Create an instance: `fondoComunInversion := client.FondoComunInversion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ccp` | `float64` |  |
| `fecha` | `string` |  |
| `fondo` | `string` |  |
| `horizonte` | `string` |  |
| `patrimonio` | `float64` |  |
| `tipo` | `string` |  |
| `vcp` | `float64` |  |

#### Example: Load

```go
fondoComunInversion, err := client.FondoComunInversion(nil).Load(map[string]any{"fecha": "fecha"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fondoComunInversion) // the loaded record
```


### FondoComunInversionOtro

Create an instance: `fondoComunInversionOtro := client.FondoComunInversionOtro(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `fondo` | `string` |  |
| `id` | `string` |  |
| `tea` | `float64` |  |
| `tna` | `float64` |  |
| `tope` | `float64` |  |

#### Example: Load

```go
fondoComunInversionOtro, err := client.FondoComunInversionOtro(nil).Load(map[string]any{"id": "fondo_comun_inversion_otro_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fondoComunInversionOtro) // the loaded record
```


### FondoComunInversionVariable

Create an instance: `fondoComunInversionVariable := client.FondoComunInversionVariable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condiciones` | `string` |  |
| `condicionesCorto` | `string` |  |
| `fecha` | `string` |  |
| `fondo` | `string` | Nombre del fondo común de inversión (clase o denominación oficial). |
| `id` | `string` |  |
| `nombre` | `string` | Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal). |
| `tea` | `float64` |  |
| `tipo` | `string` | Clasificación del instrumento. |
| `tna` | `float64` |  |
| `tope` | `float64` |  |

#### Example: Load

```go
fondoComunInversionVariable, err := client.FondoComunInversionVariable(nil).Load(map[string]any{"id": "fondo_comun_inversion_variable_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(fondoComunInversionVariable) // the loaded record
```


### HipotecarioUvaTna

Create an instance: `hipotecarioUvaTna := client.HipotecarioUvaTna(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` | Nombre del banco u oferente del crédito hipotecario UVA |
| `metadata` | `map[string]any` | Detalle de condiciones |
| `nombreComercial` | `string` | Nombre comercial |
| `tna` | `float64` | Tasa Nominal Anual |

#### Example: List

```go
hipotecarioUvaTnas, err := client.HipotecarioUvaTna(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(hipotecarioUvaTnas) // the array of records
```


### IndiceInflacion

Create an instance: `indiceInflacion := client.IndiceInflacion(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `float64` |  |

#### Example: List

```go
indiceInflacions, err := client.IndiceInflacion(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(indiceInflacions) // the array of records
```


### IndiceUva

Create an instance: `indiceUva := client.IndiceUva(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `float64` |  |

#### Example: List

```go
indiceUvas, err := client.IndiceUva(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(indiceUvas) // the array of records
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
| `fechaEmision` | `string` | Fecha de emisión original (ISO 8601) |
| `fechaVencimiento` | `string` | Fecha de vencimiento (ISO 8601) |
| `tem` | `float64` | Tasa Efectiva Mensual (%) |
| `ticker` | `string` | Código del instrumento (ej: S31G5, T17O5) |
| `vpv` | `float64` | Valor de Pago al Vencimiento por cada $100 de valor nominal |

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
| `fin` | `string` | Fecha de fin del mandato (formato yyyy-MM-dd). |
| `imagen` | `string` | URL de la imagen del presidente |
| `inicio` | `string` | Fecha de inicio del mandato (formato yyyy-MM-dd) |
| `nombre` | `string` |  |
| `partido` | `string` |  |
| `partidoImagen` | `string` | URL de la imagen del logo del partido político |
| `periodoPresidencial` | `string` | Rango de años del período presidencial (ej: '2019-2023') |
| `vicepresidente` | `string` | Nombre del vicepresidente. |

#### Example: List

```go
presidentes, err := client.Presidente(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(presidentes) // the array of records
```


### ProveedorPlazoFijoPrecancelable

Create an instance: `proveedorPlazoFijoPrecancelable := client.ProveedorPlazoFijoPrecancelable(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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
| `montoMaximo` | `float64` | Monto máximo de constitución |
| `montoMinimo` | `float64` | Monto mínimo de constitución |
| `plazoMaxDias` | `int` | Plazo máximo en días |
| `plazoMinDias` | `int` | Plazo mínimo en días |
| `plazoPrecancelacionDias` | `int` | Días mínimos para ejercer la precancelación |
| `tea` | `float64` | Tasa Efectiva Anual |
| `teaPrecancelacion` | `float64` | Tasa Efectiva Anual aplicada ante precancelación |
| `tna` | `float64` | Tasa Nominal Anual |
| `tnaPrecancelacion` | `float64` | Tasa Nominal Anual aplicada ante precancelación |

#### Example: List

```go
proveedorPlazoFijoPrecancelables, err := client.ProveedorPlazoFijoPrecancelable(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(proveedorPlazoFijoPrecancelables) // the array of records
```


### ProveedorPlazoFijoUvaPagoPeriodico

Create an instance: `proveedorPlazoFijoUvaPagoPeriodico := client.ProveedorPlazoFijoUvaPagoPeriodico(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` | Nombre de la entidad |
| `id` | `string` | Identificador estable del proveedor (p. |
| `logo` | `string` | URL del logo de la entidad |
| `tasas` | `[]any` | Tasas por rango de plazo |

#### Example: List

```go
proveedorPlazoFijoUvaPagoPeriodicos, err := client.ProveedorPlazoFijoUvaPagoPeriodico(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(proveedorPlazoFijoUvaPagoPeriodicos) // the array of records
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
| `desvio` | `float64` |  |
| `fecha` | `string` | Fecha ISO del primer día del mes del informe |
| `fuente` | `string` |  |
| `indicador` | `string` | Indicador relevado |
| `informe` | `string` | Informe REM en formato YYYY-MM |
| `maximo` | `float64` |  |
| `mediana` | `float64` |  |
| `minimo` | `float64` |  |
| `muestra` | `string` | Muestra de participantes: todos o TOP 10 |
| `participantes` | `int` |  |
| `percentil10` | `float64` |  |
| `percentil25` | `float64` |  |
| `percentil75` | `float64` |  |
| `percentil90` | `float64` |  |
| `periodo` | `string` | Período original informado por el BCRA |
| `periodoDesde` | `string` | Fecha de inicio del período normalizado |
| `periodoHasta` | `string` | Fecha de fin del período normalizado |
| `periodoTipo` | `string` | Tipo de período normalizado |
| `promedio` | `float64` |  |
| `publicacionUrl` | `string` |  |
| `referencia` | `string` | Referencia original de la tabla |
| `referenciaFecha` | `string` | Fecha detectada en la referencia, si corresponde |
| `unidad` | `string` | Unidad inferida desde la referencia |
| `xlsxUrl` | `string` |  |

#### Example: List

```go
rems, err := client.Rem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rems) // the array of records
```


### RemExpectativa

Create an instance: `remExpectativa := client.RemExpectativa(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desvio` | `float64` |  |
| `fecha` | `string` | Fecha ISO del primer día del mes del informe |
| `fuente` | `string` |  |
| `indicador` | `string` | Indicador relevado |
| `informe` | `string` | Informe REM en formato YYYY-MM |
| `maximo` | `float64` |  |
| `mediana` | `float64` |  |
| `minimo` | `float64` |  |
| `muestra` | `string` | Muestra de participantes: todos o TOP 10 |
| `participantes` | `int` |  |
| `percentil10` | `float64` |  |
| `percentil25` | `float64` |  |
| `percentil75` | `float64` |  |
| `percentil90` | `float64` |  |
| `periodo` | `string` | Período original informado por el BCRA |
| `periodoDesde` | `string` | Fecha de inicio del período normalizado |
| `periodoHasta` | `string` | Fecha de fin del período normalizado |
| `periodoTipo` | `string` | Tipo de período normalizado |
| `promedio` | `float64` |  |
| `publicacionUrl` | `string` |  |
| `referencia` | `string` | Referencia original de la tabla |
| `referenciaFecha` | `string` | Fecha detectada en la referencia, si corresponde |
| `unidad` | `string` | Unidad inferida desde la referencia |
| `xlsxUrl` | `string` |  |

#### Example: List

```go
remExpectativas, err := client.RemExpectativa(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(remExpectativas) // the array of records
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
| `apy` | `float64` |  |
| `fecha` | `string` |  |
| `id` | `string` |  |
| `moneda` | `string` |  |

#### Example: Load

```go
rendimiento, err := client.Rendimiento(nil).Load(map[string]any{"id": "rendimiento_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(rendimiento) // the loaded record
```


### RiesgoPai

Create an instance: `riesgoPai := client.RiesgoPai(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `float64` |  |

#### Example: Load

```go
riesgoPai, err := client.RiesgoPai(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(riesgoPai) // the loaded record
```

#### Example: List

```go
riesgoPais, err := client.RiesgoPai(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(riesgoPais) // the array of records
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
| `email` | `string` |  |
| `foto` | `string` |  |
| `id` | `string` |  |
| `nombre` | `string` |  |
| `observaciones` | `string` |  |
| `partido` | `string` |  |
| `periodoLegal` | `map[string]any` |  |
| `periodoReal` | `map[string]any` |  |
| `provincia` | `string` |  |
| `redes` | `[]any` |  |
| `reemplazo` | `string` |  |
| `telefono` | `string` |  |

#### Example: List

```go
senadors, err := client.Senador(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(senadors) // the array of records
```


### TasaIntere

Create an instance: `tasaIntere := client.TasaIntere(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fecha` | `string` |  |
| `valor` | `float64` |  |

#### Example: List

```go
tasaInteres, err := client.TasaIntere(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tasaInteres) // the array of records
```


### TasaPlazoFijo

Create an instance: `tasaPlazoFijo := client.TasaPlazoFijo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entidad` | `string` |  |
| `logo` | `string` | URL del logo de la entidad |
| `tnaClientes` | `float64` | Tasa Nominal Anual para clientes, en porcentaje |
| `tnaNoClientes` | `float64` | Tasa Nominal Anual para no clientes, en porcentaje |

#### Example: List

```go
tasaPlazoFijos, err := client.TasaPlazoFijo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tasaPlazoFijos) // the array of records
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

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
rendimiento := client.Rendimiento(nil)
rendimiento.Load(map[string]any{"id": "example_id"}, nil)

// rendimiento.Data() now returns the rendimiento data from the last load
// rendimiento.Match() returns the last match criteria
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
