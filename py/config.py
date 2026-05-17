# Argentinadatos SDK configuration


def make_config():
    return {
        "main": {
            "name": "Argentinadatos",
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
            "auth": {
                "prefix": "Bearer",
            },
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
            "name": "abstencione",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "acta",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "acta_id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "afirmativo",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "amn",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "ausente",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "descripcion",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "mayoria",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "miembro",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "negativo",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "numero_acta",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "observacione",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "periodo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "presente",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "presidente",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "proyecto",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "quorum_tipo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "resultado",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "reunion",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 20,
          },
          {
            "name": "titulo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 21,
          },
          {
            "name": "voto",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 22,
          },
          {
            "name": "votos_afirmativo",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 23,
          },
          {
            "name": "votos_negativo",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 24,
          },
        ],
        "name": "acta",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/diputados/actas",
                "parts": [
                  "v1",
                  "diputados",
                  "actas",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
              {
                "method": "GET",
                "orig": "/v1/senado/actas",
                "parts": [
                  "v1",
                  "senado",
                  "actas",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "bonos_cer": {
        "fields": [
          {
            "name": "fecha_vencimiento",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "precio_ar",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "ticker",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "tir_porcentaje",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "voluman",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "bonos_cer",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/bonos-cer",
                "parts": [
                  "v1",
                  "finanzas",
                  "bonos-cer",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "moneda",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "venta",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "cotizacion",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/cotizaciones/dolares",
                "parts": [
                  "v1",
                  "cotizaciones",
                  "dolares",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "active": True,
                    },
                    {
                      "example": "2024/01/01",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "token",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "criptopeso",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/criptopesos",
                "parts": [
                  "v1",
                  "finanzas",
                  "criptopesos",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "tasa",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "tope",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "cuenta_remunerada_usd",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/cuentas-remuneradas-usd",
                "parts": [
                  "v1",
                  "finanzas",
                  "cuentas-remuneradas-usd",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "bloque",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "cese_fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "foto",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "genero",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "juramento_fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "periodo_bloque",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "periodo_mandato",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "provincia",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
        ],
        "name": "diputado",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/diputados/diputados",
                "parts": [
                  "v1",
                  "diputados",
                  "diputados",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "rendimiento",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "entidad_rendimiento",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/rendimientos",
                "parts": [
                  "v1",
                  "finanzas",
                  "rendimientos",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "estado",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "estado",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/estado",
                "parts": [
                  "v1",
                  "estado",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "tipo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "evento_presidencial",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/eventos/presidenciales",
                "parts": [
                  "v1",
                  "eventos",
                  "presidenciales",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "tipo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "feriado",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/rems",
                "parts": [
                  "v1",
                  "rems",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fondo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "horizonte",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "patrimonio",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "tipo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "vcp",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
        ],
        "name": "fondo_comun_inversion",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 1,
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 2,
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 3,
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 4,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "fondo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "tea",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "tope",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "fondo_comun_inversion_otro",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "fondo_comun_inversion_variable": {
        "fields": [
          {
            "name": "condicione",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "condiciones_corto",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "fondo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "tea",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "tipo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "tope",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 8,
          },
        ],
        "name": "fondo_comun_inversion_variable",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "nombre_comercial",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "hipotecario_uva_tna",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/creditos/hipotecariosUva",
                "parts": [
                  "v1",
                  "finanzas",
                  "creditos",
                  "hipotecariosUva",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "valor",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "indice_inflacion",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/indices/inflacion",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "inflacion",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
              {
                "method": "GET",
                "orig": "/v1/finanzas/indices/inflacionInteranual",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "inflacionInteranual",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "valor",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "indice_uva",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/indices/uva",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "uva",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "letra": {
        "fields": [
          {
            "name": "fecha_emision",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "fecha_vencimiento",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "tem",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "ticker",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "vpv",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
        ],
        "name": "letra",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/letras",
                "parts": [
                  "v1",
                  "finanzas",
                  "letras",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "imagen",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "inicio",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "partido",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "partido_imagen",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "periodo_presidencial",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "vicepresidente",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
        ],
        "name": "presidente",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/presidentes",
                "parts": [
                  "v1",
                  "presidentes",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "proveedor_plazo_fijo_precancelable": {
        "fields": [
          {
            "name": "aviso_precancelacion_dia",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "canal",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "enlace",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "entidad",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "logo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "modalidad",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "moneda",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "monto_maximo",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "monto_minimo",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "plazo_max_dia",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "plazo_min_dia",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "plazo_precancelacion_dia",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "tea",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "tea_precancelacion",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "tna_precancelacion",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 16,
          },
        ],
        "name": "proveedor_plazo_fijo_precancelable",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/tasas/plazoFijoPrecancelable",
                "parts": [
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijoPrecancelable",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "logo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "tasa",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "proveedor_plazo_fijo_uva_pago_periodico",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico",
                "parts": [
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijoUvaPagoPeriodico",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fuente",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "indicador",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "informe",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "maximo",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "mediana",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "minimo",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "muestra",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "participante",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "percentil10",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "percentil25",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "percentil75",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "percentil90",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "periodo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "periodo_desde",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "periodo_hasta",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "periodo_tipo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "promedio",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "publicacion_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "referencia",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 20,
          },
          {
            "name": "referencia_fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 21,
          },
          {
            "name": "unidad",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 22,
          },
          {
            "name": "xlsx_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 23,
          },
        ],
        "name": "rem",
        "op": {
          "list": {
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
                      "active": True,
                    },
                    {
                      "example": "03",
                      "kind": "param",
                      "name": "mes",
                      "orig": "mes",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "fuente",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "indicador",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "informe",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "maximo",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "mediana",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "minimo",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "muestra",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "participante",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "percentil10",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "percentil25",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "percentil75",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "percentil90",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "periodo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "periodo_desde",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "periodo_hasta",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "periodo_tipo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "promedio",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "publicacion_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "referencia",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 20,
          },
          {
            "name": "referencia_fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 21,
          },
          {
            "name": "unidad",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 22,
          },
          {
            "name": "xlsx_url",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 23,
          },
        ],
        "name": "rem_expectativa",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/rems/ultimo",
                "parts": [
                  "v1",
                  "rems",
                  "ultimo",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "moneda",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "rendimiento",
        "op": {
          "load": {
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
                      "active": True,
                    },
                  ],
                },
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "valor",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "riesgo_pai",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/indices/riesgo-pais",
                "parts": [
                  "v1",
                  "finanzas",
                  "indices",
                  "riesgo-pais",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
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
                "active": True,
                "args": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "foto",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "observacione",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "partido",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "periodo_legal",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "periodo_real",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "provincia",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "rede",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "reemplazo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "telefono",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
        ],
        "name": "senador",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/senado/senadores",
                "parts": [
                  "v1",
                  "senado",
                  "senadores",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "valor",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "tasa_intere",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/tasas/depositos30Dias",
                "parts": [
                  "v1",
                  "finanzas",
                  "tasas",
                  "depositos30Dias",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "logo",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "tna_cliente",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "tna_no_cliente",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "tasa_plazo_fijo",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/v1/finanzas/tasas/plazoFijo",
                "parts": [
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijo",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
