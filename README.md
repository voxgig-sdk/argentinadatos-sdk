# Argentinadatos SDK

ArgentinaDatos API client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## Try it

**TypeScript**
```bash
npm install argentinadatos
```

**Python**
```bash
pip install argentinadatos-sdk
```

**PHP**
```bash
composer require voxgig/argentinadatos-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/argentinadatos-sdk/go
```

**Ruby**
```bash
gem install argentinadatos-sdk
```

**Lua**
```bash
luarocks install argentinadatos-sdk
```

## Quickstart

### TypeScript

```ts
import { ArgentinadatosSDK } from 'argentinadatos'

const client = new ArgentinadatosSDK({
  apikey: process.env.ARGENTINADATOS_APIKEY,
})

// List all actas
const actas = await client.Acta().list()
console.log(actas.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o argentinadatos-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "argentinadatos": {
      "command": "/abs/path/to/argentinadatos-mcp"
    }
  }
}
```

## Entities

The API exposes 28 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Acta** |  | `/v1/diputados/actas` |
| **BonosCer** |  | `/v1/finanzas/bonos-cer` |
| **Cotizacion** |  | `/v1/cotizaciones/dolares` |
| **Criptopeso** |  | `/v1/finanzas/criptopesos` |
| **CuentaRemuneradaUsd** |  | `/v1/finanzas/cuentas-remuneradas-usd` |
| **Diputado** |  | `/v1/diputados/diputados` |
| **EntidadRendimiento** |  | `/v1/finanzas/rendimientos` |
| **Estado** |  | `/v1/estado` |
| **EventoPresidencial** |  | `/v1/eventos/presidenciales` |
| **Feriado** |  | `/v1/feriados/{año}` |
| **Finanza** |  | `/v1/rems` |
| **FondoComunInversion** |  | `/v1/finanzas/fci/mercadoDinero/{fecha}` |
| **FondoComunInversionOtro** |  | `/v1/finanzas/fci/otros/{fecha}` |
| **FondoComunInversionVariable** |  | `/v1/finanzas/fci/variables/{fecha}` |
| **HipotecarioUvaTna** |  | `/v1/finanzas/creditos/hipotecariosUva` |
| **IndiceInflacion** |  | `/v1/finanzas/indices/inflacion` |
| **IndiceUva** |  | `/v1/finanzas/indices/uva` |
| **Letra** |  | `/v1/finanzas/letras` |
| **Presidente** |  | `/v1/presidentes` |
| **ProveedorPlazoFijoPrecancelable** |  | `/v1/finanzas/tasas/plazoFijoPrecancelable` |
| **ProveedorPlazoFijoUvaPagoPeriodico** |  | `/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico` |
| **Rem** |  | `/v1/rems/{año}/{mes}` |
| **RemExpectativa** |  | `/v1/rems/ultimo` |
| **Rendimiento** |  | `/v1/finanzas/rendimientos/{entidad}` |
| **RiesgoPai** |  | `/v1/finanzas/indices/riesgo-pais` |
| **Senador** |  | `/v1/senado/senadores` |
| **TasaIntere** |  | `/v1/finanzas/tasas/depositos30Dias` |
| **TasaPlazoFijo** |  | `/v1/finanzas/tasas/plazoFijo` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from argentinadatos_sdk import ArgentinadatosSDK

client = ArgentinadatosSDK({
    "apikey": os.environ.get("ARGENTINADATOS_APIKEY"),
})

# List all actas
actas, err = client.Acta().list()
print(actas)

# Load a specific acta
acta, err = client.Acta().load({"id": "example_id"})
print(acta)
```

### PHP

```php
<?php
require_once 'argentinadatos_sdk.php';

$client = new ArgentinadatosSDK([
    "apikey" => getenv("ARGENTINADATOS_APIKEY"),
]);

// List all actas
[$actas, $err] = $client->Acta()->list();
print_r($actas);

// Load a specific acta
[$acta, $err] = $client->Acta()->load(["id" => "example_id"]);
print_r($acta);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/argentinadatos-sdk/go"

client := sdk.NewArgentinadatosSDK(map[string]any{
    "apikey": os.Getenv("ARGENTINADATOS_APIKEY"),
})

// List all actas
actas, err := client.Acta(nil).List(nil, nil)
fmt.Println(actas)
```

### Ruby

```ruby
require_relative "Argentinadatos_sdk"

client = ArgentinadatosSDK.new({
  "apikey" => ENV["ARGENTINADATOS_APIKEY"],
})

# List all actas
actas, err = client.Acta().list
puts actas

# Load a specific acta
acta, err = client.Acta().load({ "id" => "example_id" })
puts acta
```

### Lua

```lua
local sdk = require("argentinadatos_sdk")

local client = sdk.new({
  apikey = os.getenv("ARGENTINADATOS_APIKEY"),
})

-- List all actas
local actas, err = client:Acta():list()
print(actas)

-- Load a specific acta
local acta, err = client:Acta():load({ id = "example_id" })
print(acta)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ArgentinadatosSDK.test()
const result = await client.Acta().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ArgentinadatosSDK.test()
result, err = client.Acta().load({"id": "test01"})
```

### PHP

```php
$client = ArgentinadatosSDK::test();
[$result, $err] = $client->Acta()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Acta(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ArgentinadatosSDK.test
result, err = client.Acta().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Acta():load({ id = "test01" })
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

---

Generated from the ArgentinaDatos API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
