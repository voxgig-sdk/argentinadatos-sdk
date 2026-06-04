# Argentinadatos SDK

Free public API aggregating Argentine economic, financial, and political data from official sources

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About ArgentinaDatos API

[ArgentinaDatos](https://argentinadatos.com) is a free, unofficial public API maintained by Enzo Notario and built in [EsJS](https://es.js.org). It exposes up-to-date information about Argentina across economics, finance, politics, and public-life events, drawn from public institutional sources.

What you get from the API:

- Historical USD exchange rates (`/cotizaciones/dolares`) broken down by `casa` (oficial, blue, MEP, CCL, cripto, mayorista, tarjeta) and date.
- Macroeconomic indices: monthly and year-over-year inflation, UVA index, and country risk (`/finanzas/indices/...`).
- Interest rates: fixed-term deposits, UVA fixed-term variants, 30-day deposits, USD remunerated accounts, and crypto-peso products (`/finanzas/tasas/...`).
- Mutual fund (FCI) data by category — money market, fixed/variable/mixed income, total return — plus per-fund detail and history (`/finanzas/fci/...`).
- Government bonds and bills (LECAP / BONCAP) under `/finanzas/letras`.
- Congressional data: senators, deputies, and voting session records (`actas`) under `/senado/...` and `/diputados/...`.
- Historical and current events: presidents (`/presidentes`), presidential events (`/eventos-presidenciales`), and public holidays (`/feriados`).

Operational notes: data is sourced from public institutions including BCRA (Central Bank), INDEC (national statistics), CAFCI (mutual fund chamber), and the Senate and Chamber of Deputies. The community catalogue lists the API as having CORS disabled and no documented authentication or rate limits; treat published quotas as best-effort and avoid heavy hammering.

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

## 30-second quickstart

### TypeScript

```ts
import { ArgentinadatosSDK } from 'argentinadatos'

const client = new ArgentinadatosSDK({})

// List all actas
const actas = await client.Acta().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

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
| **Acta** | Voting session record (`acta`) from either house of Congress — see `/senado/actas` and `/diputados/actas`, optionally filtered by year. | `/v1/diputados/actas` |
| **BonosCer** | CER-adjusted Argentine government bonds series. | `/v1/finanzas/bonos-cer` |
| **Cotizacion** | Historical USD exchange-rate quote across the various `casa` (oficial, blue, MEP, CCL, cripto, mayorista, tarjeta) — see `/cotizaciones/dolares`, `/cotizaciones/dolares/{casa}`, and `/cotizaciones/dolares/{casa}/{fecha}`. | `/v1/cotizaciones/dolares` |
| **Criptopeso** | Crypto-peso (stablecoin / crypto-denominated peso) rate data exposed at `/finanzas/criptopesos`. | `/v1/finanzas/criptopesos` |
| **CuentaRemuneradaUsd** | USD remunerated account rates offered by Argentine providers — see `/finanzas/cuentas-remuneradas-usd`. | `/v1/finanzas/cuentas-remuneradas-usd` |
| **Diputado** | Member of the Argentine Chamber of Deputies — see `/diputados/diputados`. | `/v1/diputados/diputados` |
| **EntidadRendimiento** | Per-entity yield breakdown exposed at `/finanzas/rendimientos/entidad`. | `/v1/finanzas/rendimientos` |
| **Estado** | API status / health-check response from `/estado`. | `/v1/estado` |
| **EventoPresidencial** | Notable presidential event entries from `/eventos-presidenciales`. | `/v1/eventos/presidenciales` |
| **Feriado** | Argentine public holiday for a given year — see `/feriados`. | `/v1/feriados/{año}` |
| **Finanza** | Umbrella grouping for the `/finanzas/...` namespace (indices, rates, FCI, yields, letras, REM, remesas). | `/v1/rems` |
| **FondoComunInversion** | Mutual fund (FCI) record — see `/finanzas/fci/fondos` and `/finanzas/fci/fondos/{nombre}` plus historical data at `/finanzas/fci/fondos/{nombre}/historico`. | `/v1/finanzas/fci/mercadoDinero/{fecha}` |
| **FondoComunInversionOtro** | FCI category `otros` (other) — see `/finanzas/fci/otros/{fecha}`. | `/v1/finanzas/fci/otros/{fecha}` |
| **FondoComunInversionVariable** | FCI variable-income / variable category — see `/finanzas/fci/renta-variable/{fecha}` and `/finanzas/fci/variables/{fecha}`. | `/v1/finanzas/fci/variables/{fecha}` |
| **HipotecarioUvaTna** | UVA-indexed mortgage TNA (nominal annual rate) data point. | `/v1/finanzas/creditos/hipotecariosUva` |
| **IndiceInflacion** | Monthly and year-over-year inflation indices — see `/finanzas/indices/inflacion` and `/finanzas/indices/inflacion-interanual`. | `/v1/finanzas/indices/inflacion` |
| **IndiceUva** | UVA (Unidad de Valor Adquisitivo) index series — see `/finanzas/indices/uva`. | `/v1/finanzas/indices/uva` |
| **Letra** | Argentine treasury bills (LECAP / BONCAP) — see `/finanzas/letras`. | `/v1/finanzas/letras` |
| **Presidente** | Argentine head of state biographical record — see `/presidentes`. | `/v1/presidentes` |
| **ProveedorPlazoFijoPrecancelable** | Provider-level offer for prepayable UVA fixed-term deposits — see `/finanzas/tasas/plazo-fijo-uva-precancelable`. | `/v1/finanzas/tasas/plazoFijoPrecancelable` |
| **ProveedorPlazoFijoUvaPagoPeriodico** | Provider-level offer for UVA fixed-term deposits with periodic interest payments — see `/finanzas/tasas/plazo-fijo-uva-pago-periodico`. | `/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico` |
| **Rem** | Relevamiento de Expectativas de Mercado (BCRA's market-expectations survey) — see `/finanzas/rem`, `/finanzas/rem/ultimo`, and `/finanzas/rem/{anio}/{mes}`. | `/v1/rems/{año}/{mes}` |
| **RemExpectativa** | Individual expectation entry inside a REM report. | `/v1/rems/ultimo` |
| **Rendimiento** | Yield record exposed at `/finanzas/rendimientos`. | `/v1/finanzas/rendimientos/{entidad}` |
| **RiesgoPai** | Country-risk (`riesgo país`) index series — see `/finanzas/indices/riesgo-pais` and `/finanzas/indices/riesgo-pais/ultimo`. | `/v1/finanzas/indices/riesgo-pais` |
| **Senador** | Member of the Argentine Senate — see `/senado/senadores`. | `/v1/senado/senadores` |
| **TasaIntere** | General interest-rate record under the `/finanzas/tasas/...` namespace. | `/v1/finanzas/tasas/depositos30Dias` |
| **TasaPlazoFijo** | Fixed-term deposit (plazo fijo) rate offering — see `/finanzas/tasas/plazo-fijo` and `/finanzas/tasas/depositos-30-dias`. | `/v1/finanzas/tasas/plazoFijo` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from argentinadatos_sdk import ArgentinadatosSDK

client = ArgentinadatosSDK({})

# List all actas
actas, err = client.Acta(None).list(None, None)

# Load a specific acta
acta, err = client.Acta(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'argentinadatos_sdk.php';

$client = new ArgentinadatosSDK([]);

// List all actas
[$actas, $err] = $client->Acta(null)->list(null, null);

// Load a specific acta
[$acta, $err] = $client->Acta(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/argentinadatos-sdk/go"

client := sdk.NewArgentinadatosSDK(map[string]any{})

// List all actas
actas, err := client.Acta(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Argentinadatos_sdk"

client = ArgentinadatosSDK.new({})

# List all actas
actas, err = client.Acta(nil).list(nil, nil)

# Load a specific acta
acta, err = client.Acta(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("argentinadatos_sdk")

local client = sdk.new({})

-- List all actas
local actas, err = client:Acta(nil):list(nil, nil)

-- Load a specific acta
local acta, err = client:Acta(nil):load(
  { id = "example_id" }, nil
)
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
client = ArgentinadatosSDK.test(None, None)
result, err = client.Acta(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ArgentinadatosSDK::test(null, null);
[$result, $err] = $client->Acta(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Acta(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ArgentinadatosSDK.test(nil, nil)
result, err = client.Acta(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Acta(nil):load(
  { id = "test01" }, nil
)
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

## Using the ArgentinaDatos API

- Upstream: [https://argentinadatos.com](https://argentinadatos.com)
- API docs: [https://argentinadatos.com/docs/](https://argentinadatos.com/docs/)

- Source code released under the MIT License.
- API is explicitly described as `no oficial` (unofficial) — it is a community project, not an endorsement by any Argentine government body.
- Data is aggregated from public sources (BCRA, INDEC, CAFCI, Congreso); consult the original sources for authoritative use.
- See the project's legal notice on the docs site for full terms.

---

Generated from the ArgentinaDatos API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
