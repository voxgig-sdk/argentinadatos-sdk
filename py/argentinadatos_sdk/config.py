# Argentinadatos SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Argentinadatos",
            "slug": "argentinadatos",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.argentinadatos.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "acta": {},
                "bonos_cer": {},
                "cotizacion": {},
                "criptopeso": {},
                "cuenta_remunerada_usd": {},
                "diputado": {},
                "entidad_rendimiento": {},
                "estado": {},
                "evento_presidencial": {},
                "feriado": {},
                "finanza": {},
                "fondo_comun_inversion": {},
                "fondo_comun_inversion_otro": {},
                "fondo_comun_inversion_variable": {},
                "hipotecario_uva_tna": {},
                "indice_inflacion": {},
                "indice_uva": {},
                "letra": {},
                "presidente": {},
                "proveedor_plazo_fijo_precancelable": {},
                "proveedor_plazo_fijo_uva_pago_periodico": {},
                "rem": {},
                "rem_expectativa": {},
                "rendimiento": {},
                "riesgo_pai": {},
                "senador": {},
                "tasa_intere": {},
                "tasa_plazo_fijo": {},
            },
        },
        "entity": {
      "acta": {
        "fields": [
          {
            "name": "abstenciones",
            "type": "`$INTEGER`",
          },
          {
            "name": "acta",
            "type": "`$STRING`",
          },
          {
            "name": "actaId",
            "type": "`$INTEGER`",
          },
          {
            "name": "afirmativos",
            "type": "`$INTEGER`",
          },
          {
            "name": "amn",
            "type": "`$INTEGER`",
          },
          {
            "name": "ausentes",
            "type": "`$INTEGER`",
          },
          {
            "name": "descripcion",
            "type": "`$STRING`",
          },
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "mayoria",
            "type": "`$STRING`",
          },
          {
            "name": "miembros",
            "type": "`$INTEGER`",
          },
          {
            "name": "negativos",
            "type": "`$INTEGER`",
          },
          {
            "name": "numeroActa",
            "type": "`$STRING`",
          },
          {
            "name": "observaciones",
            "type": "`$ARRAY`",
          },
          {
            "name": "periodo",
            "type": "`$STRING`",
          },
          {
            "name": "presentes",
            "type": "`$INTEGER`",
          },
          {
            "name": "presidente",
            "type": "`$STRING`",
          },
          {
            "name": "proyecto",
            "type": "`$STRING`",
          },
          {
            "name": "quorumTipo",
            "type": "`$STRING`",
          },
          {
            "name": "resultado",
            "type": "`$STRING`",
          },
          {
            "name": "reunion",
            "type": "`$STRING`",
          },
          {
            "name": "titulo",
            "type": "`$STRING`",
          },
          {
            "name": "votos",
            "type": "`$ARRAY`",
          },
          {
            "name": "votosAfirmativos",
            "type": "`$INTEGER`",
          },
          {
            "name": "votosNegativos",
            "type": "`$INTEGER`",
          },
        ],
        "name": "acta",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/diputados/actas",
                "parts": [
                  "v1",
                  "diputados",
                  "actas",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/senado/actas",
                "parts": [
                  "v1",
                  "senado",
                  "actas",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 2026,
                      "kind": "param",
                      "name": "id",
                      "orig": "año",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/diputados/actas/{año}",
                "parts": [
                  "v1",
                  "diputados",
                  "actas",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "año": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": 2026,
                      "kind": "param",
                      "name": "id",
                      "orig": "año",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/senado/actas/{año}",
                "parts": [
                  "v1",
                  "senado",
                  "actas",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "año": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "bonos_cer": {
        "fields": [
          {
            "name": "fechaVencimiento",
            "req": True,
            "short": "Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd)",
            "type": "`$STRING`",
          },
          {
            "name": "precioArs",
            "req": True,
            "short": "Precio de cotización en pesos argentinos",
            "type": "`$NUMBER`",
          },
          {
            "name": "ticker",
            "req": True,
            "short": "Código del bono (ej.",
            "type": "`$STRING`",
          },
          {
            "name": "tirPorcentaje",
            "req": True,
            "short": "Tasa interna de retorno (TIR) en porcentaje",
            "type": "`$NUMBER`",
          },
          {
            "name": "volumen",
            "short": "Volumen nominal negociado, si la fuente lo publica",
            "type": "`$NUMBER`",
          },
        ],
        "name": "bonos_cer",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/bonos-cer",
                "parts": [
                  "v1",
                  "finanzas",
                  "bonos-cer",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.bonos`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cotizacion": {
        "fields": [
          {
            "name": "casa",
            "type": "`$STRING`",
          },
          {
            "name": "compra",
            "type": "`$NUMBER`",
          },
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "type": "`$STRING`",
          },
          {
            "name": "venta",
            "type": "`$NUMBER`",
          },
        ],
        "name": "cotizacion",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/cotizaciones/dolares",
                "parts": [
                  "v1",
                  "cotizaciones",
                  "dolares",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "blue",
                      "kind": "param",
                      "name": "casa",
                      "orig": "casa",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": "2024/01/01",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/cotizaciones/dolares/{casa}/{fecha}",
                "parts": [
                  "v1",
                  "cotizaciones",
                  "dolares",
                  "{casa}",
                  "{fecha}",
                ],
                "select": {
                  "exist": [
                    "casa",
                    "fecha",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "blue",
                      "kind": "param",
                      "name": "casa",
                      "orig": "casa",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/cotizaciones/dolares/{casa}",
                "parts": [
                  "v1",
                  "cotizaciones",
                  "dolares",
                  "{casa}",
                ],
                "select": {
                  "exist": [
                    "casa",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "dolare",
            ],
          ],
        },
      },
      "criptopeso": {
        "fields": [
          {
            "name": "entidad",
            "short": "Nombre de la entidad que ofrece el criptopeso",
            "type": "`$STRING`",
          },
          {
            "name": "tna",
            "short": "Tasa Nominal Anual en porcentaje",
            "type": "`$NUMBER`",
          },
          {
            "name": "token",
            "short": "Token del criptopeso (ej: ARGt, wARS)",
            "type": "`$STRING`",
          },
        ],
        "name": "criptopeso",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/criptopesos",
                "parts": [
                  "v1",
                  "finanzas",
                  "criptopesos",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cuenta_remunerada_usd": {
        "fields": [
          {
            "name": "entidad",
            "short": "Identificador de la entidad (p.",
            "type": "`$STRING`",
          },
          {
            "name": "tasa",
            "short": "Tasa de rendimiento anual en formato decimal (p.",
            "type": "`$NUMBER`",
          },
          {
            "name": "tope",
            "short": "Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó",
            "type": "`$NUMBER`",
          },
        ],
        "name": "cuenta_remunerada_usd",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/cuentas-remuneradas-usd",
                "parts": [
                  "v1",
                  "finanzas",
                  "cuentas-remuneradas-usd",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "diputado": {
        "fields": [
          {
            "name": "apellido",
            "type": "`$STRING`",
          },
          {
            "name": "bloque",
            "type": "`$STRING`",
          },
          {
            "name": "ceseFecha",
            "type": "`$STRING`",
          },
          {
            "name": "foto",
            "type": "`$STRING`",
          },
          {
            "name": "genero",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "juramentoFecha",
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "type": "`$STRING`",
          },
          {
            "name": "periodoBloque",
            "type": "`$OBJECT`",
          },
          {
            "name": "periodoMandato",
            "type": "`$OBJECT`",
          },
          {
            "name": "provincia",
            "type": "`$STRING`",
          },
        ],
        "name": "diputado",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/diputados/diputados",
                "parts": [
                  "v1",
                  "diputados",
                  "diputados",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "entidad_rendimiento": {
        "fields": [
          {
            "name": "entidad",
            "type": "`$STRING`",
          },
          {
            "name": "rendimientos",
            "type": "`$ARRAY`",
          },
        ],
        "name": "entidad_rendimiento",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/rendimientos",
                "parts": [
                  "v1",
                  "finanzas",
                  "rendimientos",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "estado": {
        "fields": [
          {
            "name": "aleatorio",
            "type": "`$INTEGER`",
          },
          {
            "name": "estado",
            "type": "`$STRING`",
          },
        ],
        "name": "estado",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/estado",
                "parts": [
                  "v1",
                  "estado",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "evento_presidencial": {
        "fields": [
          {
            "name": "evento",
            "type": "`$STRING`",
          },
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "tipo",
            "type": "`$STRING`",
          },
        ],
        "name": "evento_presidencial",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/eventos/presidenciales",
                "parts": [
                  "v1",
                  "eventos",
                  "presidenciales",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "feriado": {
        "fields": [
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "type": "`$STRING`",
          },
          {
            "name": "tipo",
            "type": "`$STRING`",
          },
        ],
        "name": "feriado",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 2026,
                      "kind": "param",
                      "name": "id",
                      "orig": "año",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/feriados/{año}",
                "parts": [
                  "v1",
                  "feriados",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "año": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "finanza": {
        "fields": [],
        "name": "finanza",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/rems",
                "parts": [
                  "v1",
                  "rems",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "fondo_comun_inversion": {
        "fields": [
          {
            "name": "ccp",
            "type": "`$NUMBER`",
          },
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "fondo",
            "type": "`$STRING`",
          },
          {
            "name": "horizonte",
            "type": "`$STRING`",
          },
          {
            "name": "patrimonio",
            "type": "`$NUMBER`",
          },
          {
            "name": "tipo",
            "type": "`$STRING`",
          },
          {
            "name": "vcp",
            "type": "`$NUMBER`",
          },
        ],
        "name": "fondo_comun_inversion",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/fci/mercadoDinero/{fecha}",
                "parts": [
                  "v1",
                  "finanzas",
                  "fci",
                  "mercadoDinero",
                  "{fecha}",
                ],
                "select": {
                  "exist": [
                    "fecha",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/fci/rentaFija/{fecha}",
                "parts": [
                  "v1",
                  "finanzas",
                  "fci",
                  "rentaFija",
                  "{fecha}",
                ],
                "select": {
                  "exist": [
                    "fecha",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/fci/rentaMixta/{fecha}",
                "parts": [
                  "v1",
                  "finanzas",
                  "fci",
                  "rentaMixta",
                  "{fecha}",
                ],
                "select": {
                  "exist": [
                    "fecha",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/fci/rentaVariable/{fecha}",
                "parts": [
                  "v1",
                  "finanzas",
                  "fci",
                  "rentaVariable",
                  "{fecha}",
                ],
                "select": {
                  "exist": [
                    "fecha",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "params": [
                    {
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/fci/retornoTotal/{fecha}",
                "parts": [
                  "v1",
                  "finanzas",
                  "fci",
                  "retornoTotal",
                  "{fecha}",
                ],
                "select": {
                  "exist": [
                    "fecha",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "mercado_dinero",
            ],
            [
              "renta_fija",
            ],
            [
              "renta_mixta",
            ],
            [
              "renta_variable",
            ],
            [
              "retorno_total",
            ],
          ],
        },
      },
      "fondo_comun_inversion_otro": {
        "fields": [
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "fondo",
            "type": "`$STRING`",
          },
          {
            "name": "tea",
            "type": "`$NUMBER`",
          },
          {
            "name": "tna",
            "type": "`$NUMBER`",
          },
          {
            "name": "tope",
            "type": "`$NUMBER`",
          },
        ],
        "name": "fondo_comun_inversion_otro",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "ultimo",
                      "kind": "param",
                      "name": "id",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/fci/otros/{fecha}",
                "parts": [
                  "v1",
                  "finanzas",
                  "fci",
                  "otros",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "fecha": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "fondo_comun_inversion_variable": {
        "fields": [
          {
            "name": "condiciones",
            "type": "`$STRING`",
          },
          {
            "name": "condicionesCorto",
            "type": "`$STRING`",
          },
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "fondo",
            "short": "Nombre del fondo común de inversión (clase o denominación oficial).",
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "short": "Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal).",
            "type": "`$STRING`",
          },
          {
            "name": "tea",
            "type": "`$NUMBER`",
          },
          {
            "name": "tipo",
            "short": "Clasificación del instrumento.",
            "type": "`$STRING`",
          },
          {
            "name": "tna",
            "type": "`$NUMBER`",
          },
          {
            "name": "tope",
            "type": "`$NUMBER`",
          },
        ],
        "name": "fondo_comun_inversion_variable",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "ultimo",
                      "kind": "param",
                      "name": "id",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/fci/variables/{fecha}",
                "parts": [
                  "v1",
                  "finanzas",
                  "fci",
                  "variables",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "fecha": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "hipotecario_uva_tna": {
        "fields": [
          {
            "name": "entidad",
            "short": "Nombre del banco u oferente del crédito hipotecario UVA",
            "type": "`$STRING`",
          },
          {
            "name": "metadata",
            "short": "Detalle de condiciones",
            "type": "`$OBJECT`",
          },
          {
            "name": "nombreComercial",
            "short": "Nombre comercial",
            "type": "`$STRING`",
          },
          {
            "name": "tna",
            "short": "Tasa Nominal Anual",
            "type": "`$NUMBER`",
          },
        ],
        "name": "hipotecario_uva_tna",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/creditos/hipotecariosUva",
                "parts": [
                  "v1",
                  "finanzas",
                  "creditos",
                  "hipotecariosUva",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "indice_inflacion": {
        "fields": [
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "valor",
            "type": "`$NUMBER`",
          },
        ],
        "name": "indice_inflacion",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/indices/inflacion",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "inflacion",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/indices/inflacionInteranual",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "inflacionInteranual",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "indice_uva": {
        "fields": [
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "valor",
            "type": "`$NUMBER`",
          },
        ],
        "name": "indice_uva",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/indices/uva",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "uva",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "letra": {
        "fields": [
          {
            "name": "fechaEmision",
            "short": "Fecha de emisión original (ISO 8601)",
            "type": "`$STRING`",
          },
          {
            "name": "fechaVencimiento",
            "short": "Fecha de vencimiento (ISO 8601)",
            "type": "`$STRING`",
          },
          {
            "name": "tem",
            "short": "Tasa Efectiva Mensual (%)",
            "type": "`$NUMBER`",
          },
          {
            "name": "ticker",
            "short": "Código del instrumento (ej: S31G5, T17O5)",
            "type": "`$STRING`",
          },
          {
            "name": "vpv",
            "short": "Valor de Pago al Vencimiento por cada $100 de valor nominal",
            "type": "`$NUMBER`",
          },
        ],
        "name": "letra",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/letras",
                "parts": [
                  "v1",
                  "finanzas",
                  "letras",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "presidente": {
        "fields": [
          {
            "name": "fin",
            "short": "Fecha de fin del mandato (formato yyyy-MM-dd).",
            "type": "`$STRING`",
          },
          {
            "name": "imagen",
            "short": "URL de la imagen del presidente",
            "type": "`$STRING`",
          },
          {
            "name": "inicio",
            "short": "Fecha de inicio del mandato (formato yyyy-MM-dd)",
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "type": "`$STRING`",
          },
          {
            "name": "partido",
            "type": "`$STRING`",
          },
          {
            "name": "partidoImagen",
            "short": "URL de la imagen del logo del partido político",
            "type": "`$STRING`",
          },
          {
            "name": "periodoPresidencial",
            "short": "Rango de años del período presidencial (ej: '2019-2023')",
            "type": "`$STRING`",
          },
          {
            "name": "vicepresidente",
            "short": "Nombre del vicepresidente.",
            "type": "`$STRING`",
          },
        ],
        "name": "presidente",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/presidentes",
                "parts": [
                  "v1",
                  "presidentes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "proveedor_plazo_fijo_precancelable": {
        "fields": [
          {
            "name": "avisoPrecancelacionDias",
            "short": "Días hábiles de aviso previo para precancelar",
            "type": "`$INTEGER`",
          },
          {
            "name": "canal",
            "short": "Canales publicados para constituir el plazo fijo",
            "type": "`$STRING`",
          },
          {
            "name": "enlace",
            "short": "URL de la fuente",
            "type": "`$STRING`",
          },
          {
            "name": "entidad",
            "short": "Nombre de la entidad",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Identificador estable del proveedor",
            "type": "`$STRING`",
          },
          {
            "name": "logo",
            "short": "URL del logo de la entidad",
            "type": "`$STRING`",
          },
          {
            "name": "modalidad",
            "short": "Modalidad publicada por la entidad",
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "short": "Moneda de constitución",
            "type": "`$STRING`",
          },
          {
            "name": "montoMaximo",
            "short": "Monto máximo de constitución",
            "type": "`$NUMBER`",
          },
          {
            "name": "montoMinimo",
            "short": "Monto mínimo de constitución",
            "type": "`$NUMBER`",
          },
          {
            "name": "plazoMaxDias",
            "short": "Plazo máximo en días",
            "type": "`$INTEGER`",
          },
          {
            "name": "plazoMinDias",
            "short": "Plazo mínimo en días",
            "type": "`$INTEGER`",
          },
          {
            "name": "plazoPrecancelacionDias",
            "short": "Días mínimos para ejercer la precancelación",
            "type": "`$INTEGER`",
          },
          {
            "name": "tea",
            "short": "Tasa Efectiva Anual",
            "type": "`$NUMBER`",
          },
          {
            "name": "teaPrecancelacion",
            "short": "Tasa Efectiva Anual aplicada ante precancelación",
            "type": "`$NUMBER`",
          },
          {
            "name": "tna",
            "short": "Tasa Nominal Anual",
            "type": "`$NUMBER`",
          },
          {
            "name": "tnaPrecancelacion",
            "short": "Tasa Nominal Anual aplicada ante precancelación",
            "type": "`$NUMBER`",
          },
        ],
        "name": "proveedor_plazo_fijo_precancelable",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/tasas/plazoFijoPrecancelable",
                "parts": [
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijoPrecancelable",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "proveedor_plazo_fijo_uva_pago_periodico": {
        "fields": [
          {
            "name": "entidad",
            "short": "Nombre de la entidad",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Identificador estable del proveedor (p.",
            "type": "`$STRING`",
          },
          {
            "name": "logo",
            "short": "URL del logo de la entidad",
            "type": "`$STRING`",
          },
          {
            "name": "tasas",
            "short": "Tasas por rango de plazo",
            "type": "`$ARRAY`",
          },
        ],
        "name": "proveedor_plazo_fijo_uva_pago_periodico",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico",
                "parts": [
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijoUvaPagoPeriodico",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "rem": {
        "fields": [
          {
            "name": "desvio",
            "type": "`$NUMBER`",
          },
          {
            "name": "fecha",
            "short": "Fecha ISO del primer día del mes del informe",
            "type": "`$STRING`",
          },
          {
            "name": "fuente",
            "type": "`$STRING`",
          },
          {
            "name": "indicador",
            "short": "Indicador relevado",
            "type": "`$STRING`",
          },
          {
            "name": "informe",
            "short": "Informe REM en formato YYYY-MM",
            "type": "`$STRING`",
          },
          {
            "name": "maximo",
            "type": "`$NUMBER`",
          },
          {
            "name": "mediana",
            "type": "`$NUMBER`",
          },
          {
            "name": "minimo",
            "type": "`$NUMBER`",
          },
          {
            "name": "muestra",
            "short": "Muestra de participantes: todos o TOP 10",
            "type": "`$STRING`",
          },
          {
            "name": "participantes",
            "type": "`$INTEGER`",
          },
          {
            "name": "percentil10",
            "type": "`$NUMBER`",
          },
          {
            "name": "percentil25",
            "type": "`$NUMBER`",
          },
          {
            "name": "percentil75",
            "type": "`$NUMBER`",
          },
          {
            "name": "percentil90",
            "type": "`$NUMBER`",
          },
          {
            "name": "periodo",
            "short": "Período original informado por el BCRA",
            "type": "`$STRING`",
          },
          {
            "name": "periodoDesde",
            "short": "Fecha de inicio del período normalizado",
            "type": "`$STRING`",
          },
          {
            "name": "periodoHasta",
            "short": "Fecha de fin del período normalizado",
            "type": "`$STRING`",
          },
          {
            "name": "periodoTipo",
            "short": "Tipo de período normalizado",
            "type": "`$STRING`",
          },
          {
            "name": "promedio",
            "type": "`$NUMBER`",
          },
          {
            "name": "publicacionUrl",
            "type": "`$STRING`",
          },
          {
            "name": "referencia",
            "short": "Referencia original de la tabla",
            "type": "`$STRING`",
          },
          {
            "name": "referenciaFecha",
            "short": "Fecha detectada en la referencia, si corresponde",
            "type": "`$STRING`",
          },
          {
            "name": "unidad",
            "short": "Unidad inferida desde la referencia",
            "type": "`$STRING`",
          },
          {
            "name": "xlsxUrl",
            "type": "`$STRING`",
          },
        ],
        "name": "rem",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 2026,
                      "kind": "param",
                      "name": "año",
                      "orig": "año",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "03",
                      "kind": "param",
                      "name": "mes",
                      "orig": "mes",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/rems/{año}/{mes}",
                "parts": [
                  "v1",
                  "rems",
                  "{año}",
                  "{mes}",
                ],
                "select": {
                  "exist": [
                    "año",
                    "mes",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "rem",
            ],
          ],
        },
      },
      "rem_expectativa": {
        "fields": [
          {
            "name": "desvio",
            "type": "`$NUMBER`",
          },
          {
            "name": "fecha",
            "short": "Fecha ISO del primer día del mes del informe",
            "type": "`$STRING`",
          },
          {
            "name": "fuente",
            "type": "`$STRING`",
          },
          {
            "name": "indicador",
            "short": "Indicador relevado",
            "type": "`$STRING`",
          },
          {
            "name": "informe",
            "short": "Informe REM en formato YYYY-MM",
            "type": "`$STRING`",
          },
          {
            "name": "maximo",
            "type": "`$NUMBER`",
          },
          {
            "name": "mediana",
            "type": "`$NUMBER`",
          },
          {
            "name": "minimo",
            "type": "`$NUMBER`",
          },
          {
            "name": "muestra",
            "short": "Muestra de participantes: todos o TOP 10",
            "type": "`$STRING`",
          },
          {
            "name": "participantes",
            "type": "`$INTEGER`",
          },
          {
            "name": "percentil10",
            "type": "`$NUMBER`",
          },
          {
            "name": "percentil25",
            "type": "`$NUMBER`",
          },
          {
            "name": "percentil75",
            "type": "`$NUMBER`",
          },
          {
            "name": "percentil90",
            "type": "`$NUMBER`",
          },
          {
            "name": "periodo",
            "short": "Período original informado por el BCRA",
            "type": "`$STRING`",
          },
          {
            "name": "periodoDesde",
            "short": "Fecha de inicio del período normalizado",
            "type": "`$STRING`",
          },
          {
            "name": "periodoHasta",
            "short": "Fecha de fin del período normalizado",
            "type": "`$STRING`",
          },
          {
            "name": "periodoTipo",
            "short": "Tipo de período normalizado",
            "type": "`$STRING`",
          },
          {
            "name": "promedio",
            "type": "`$NUMBER`",
          },
          {
            "name": "publicacionUrl",
            "type": "`$STRING`",
          },
          {
            "name": "referencia",
            "short": "Referencia original de la tabla",
            "type": "`$STRING`",
          },
          {
            "name": "referenciaFecha",
            "short": "Fecha detectada en la referencia, si corresponde",
            "type": "`$STRING`",
          },
          {
            "name": "unidad",
            "short": "Unidad inferida desde la referencia",
            "type": "`$STRING`",
          },
          {
            "name": "xlsxUrl",
            "type": "`$STRING`",
          },
        ],
        "name": "rem_expectativa",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/rems/ultimo",
                "parts": [
                  "v1",
                  "rems",
                  "ultimo",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "rendimiento": {
        "fields": [
          {
            "name": "apy",
            "type": "`$NUMBER`",
          },
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "moneda",
            "type": "`$STRING`",
          },
        ],
        "name": "rendimiento",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "nexo",
                      "kind": "param",
                      "name": "id",
                      "orig": "entidad",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/rendimientos/{entidad}",
                "parts": [
                  "v1",
                  "finanzas",
                  "rendimientos",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "entidad": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "riesgo_pai": {
        "fields": [
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "valor",
            "type": "`$NUMBER`",
          },
        ],
        "name": "riesgo_pai",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/indices/riesgo-pais",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "riesgo-pais",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/indices/riesgo-pais/ultimo",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "riesgo-pais",
                  "ultimo",
                ],
                "select": {
                  "$action": "ultimo",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "senador": {
        "fields": [
          {
            "name": "email",
            "type": "`$STRING`",
          },
          {
            "name": "foto",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "nombre",
            "type": "`$STRING`",
          },
          {
            "name": "observaciones",
            "type": "`$STRING`",
          },
          {
            "name": "partido",
            "type": "`$STRING`",
          },
          {
            "name": "periodoLegal",
            "type": "`$OBJECT`",
          },
          {
            "name": "periodoReal",
            "type": "`$OBJECT`",
          },
          {
            "name": "provincia",
            "type": "`$STRING`",
          },
          {
            "name": "redes",
            "type": "`$ARRAY`",
          },
          {
            "name": "reemplazo",
            "type": "`$STRING`",
          },
          {
            "name": "telefono",
            "type": "`$STRING`",
          },
        ],
        "name": "senador",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/senado/senadores",
                "parts": [
                  "v1",
                  "senado",
                  "senadores",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "tasa_intere": {
        "fields": [
          {
            "name": "fecha",
            "type": "`$STRING`",
          },
          {
            "name": "valor",
            "type": "`$NUMBER`",
          },
        ],
        "name": "tasa_intere",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/tasas/depositos30Dias",
                "parts": [
                  "v1",
                  "finanzas",
                  "tasas",
                  "depositos30Dias",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "tasa_plazo_fijo": {
        "fields": [
          {
            "name": "entidad",
            "type": "`$STRING`",
          },
          {
            "name": "logo",
            "short": "URL del logo de la entidad",
            "type": "`$STRING`",
          },
          {
            "name": "tnaClientes",
            "short": "Tasa Nominal Anual para clientes, en porcentaje",
            "type": "`$NUMBER`",
          },
          {
            "name": "tnaNoClientes",
            "short": "Tasa Nominal Anual para no clientes, en porcentaje",
            "type": "`$NUMBER`",
          },
        ],
        "name": "tasa_plazo_fijo",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/v1/finanzas/tasas/plazoFijo",
                "parts": [
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijo",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
