# Argentinadatos SDK



Available for [Golang](go/) and [Go CLI](go-cli/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


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

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/argentinadatos-sdk/go"

client := sdk.NewArgentinadatosSDK(map[string]any{
    "apikey": os.Getenv("ARGENTINADATOS_APIKEY"),
})

// List all actas
actas, err := client.Acta(nil).List(nil, nil)
```

### Lua

```lua
local sdk = require("argentinadatos_sdk")

local client = sdk.new({
  apikey = os.getenv("ARGENTINADATOS_APIKEY"),
})

-- List all actas
local actas, err = client:Acta(nil):list(nil, nil)

-- Load a specific acta
local acta, err = client:Acta(nil):load(
  { id = "example_id" }, nil
)
```

### PHP

```php
<?php
require_once 'argentinadatos_sdk.php';

$client = new ArgentinadatosSDK([
    "apikey" => getenv("ARGENTINADATOS_APIKEY"),
]);

// List all actas
[$actas, $err] = $client->Acta(null)->list(null, null);

// Load a specific acta
[$acta, $err] = $client->Acta(null)->load(
    ["id" => "example_id"], null
);
```

### Python

```python
import os
from argentinadatos_sdk import ArgentinadatosSDK

client = ArgentinadatosSDK({
    "apikey": os.environ.get("ARGENTINADATOS_APIKEY"),
})

# List all actas
actas, err = client.Acta(None).list(None, None)

# Load a specific acta
acta, err = client.Acta(None).load(
    {"id": "example_id"}, None
)
```

### Ruby

```ruby
require_relative "Argentinadatos_sdk"

client = ArgentinadatosSDK.new({
  "apikey" => ENV["ARGENTINADATOS_APIKEY"],
})

# List all actas
actas, err = client.Acta(nil).list(nil, nil)

# Load a specific acta
acta, err = client.Acta(nil).load(
  { "id" => "example_id" }, nil
)
```

### TypeScript

```ts
import { ArgentinadatosSDK } from 'argentinadatos'

const client = new ArgentinadatosSDK({
  apikey: process.env.ARGENTINADATOS_APIKEY,
})

// List all actas
const actas = await client.Acta().list()
```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Acta(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Acta(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = ArgentinadatosSDK::test(null, null);
[$result, $err] = $client->Acta(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = ArgentinadatosSDK.test(None, None)
result, err = client.Acta(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = ArgentinadatosSDK.test(nil, nil)
result, err = client.Acta(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = ArgentinadatosSDK.test()
const result = await client.Acta().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Go CLI SDK](go-cli/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)

