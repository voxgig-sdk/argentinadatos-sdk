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
            "active": True,
            "name": "abstencione",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "acta",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "acta_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "afirmativo",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "amn",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "ausente",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "descripcion",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "mayoria",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "miembro",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "negativo",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "numero_acta",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "observacione",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "periodo",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "presente",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "presidente",
            "req": False,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "proyecto",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "quorum_tipo",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "resultado",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "reunion",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "titulo",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "voto",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "votos_afirmativo",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "votos_negativo",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 24,
          },
        ],
        "name": "acta",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
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
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 2026,
                      "kind": "param",
                      "name": "id",
                      "orig": "año",
                      "reqd": True,
                      "type": "`$INTEGER`",
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 2026,
                      "kind": "param",
                      "name": "id",
                      "orig": "año",
                      "reqd": True,
                      "type": "`$INTEGER`",
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
                "index$": 1,
              },
            ],
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
            "active": True,
            "name": "fecha_vencimiento",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "precio_ar",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "ticker",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "tir_porcentaje",
            "req": True,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "voluman",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
        ],
        "name": "bonos_cer",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "casa",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "compra",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "moneda",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "venta",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
        ],
        "name": "cotizacion",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "blue",
                      "kind": "param",
                      "name": "casa",
                      "orig": "casa",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2024/01/01",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "blue",
                      "kind": "param",
                      "name": "casa",
                      "orig": "casa",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 1,
              },
            ],
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
            "active": True,
            "name": "entidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "token",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "criptopeso",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "entidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "tasa",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "tope",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
        ],
        "name": "cuenta_remunerada_usd",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "apellido",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "bloque",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "cese_fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "foto",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "genero",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "juramento_fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "periodo_bloque",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "periodo_mandato",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "provincia",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "diputado",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "entidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "rendimiento",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "entidad_rendimiento",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "aleatorio",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "estado",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "estado",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v1/estado",
                "parts": [
                  "v1",
                  "estado",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.estado`",
                },
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "evento",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "tipo",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "evento_presidencial",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "tipo",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "feriado",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 2026,
                      "kind": "param",
                      "name": "id",
                      "orig": "año",
                      "reqd": True,
                      "type": "`$INTEGER`",
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
                "index$": 0,
              },
            ],
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
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "ccp",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "fondo",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "horizonte",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "patrimonio",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "tipo",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "vcp",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
        ],
        "name": "fondo_comun_inversion",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 3,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ultimo",
                      "kind": "param",
                      "name": "fecha",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 4,
              },
            ],
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
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "fondo",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "tea",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "tope",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
        ],
        "name": "fondo_comun_inversion_otro",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ultimo",
                      "kind": "param",
                      "name": "id",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "condicione",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "condiciones_corto",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "fondo",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "tea",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "tipo",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "tope",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 8,
          },
        ],
        "name": "fondo_comun_inversion_variable",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "ultimo",
                      "kind": "param",
                      "name": "id",
                      "orig": "fecha",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "entidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "nombre_comercial",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 3,
          },
        ],
        "name": "hipotecario_uva_tna",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "valor",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
        ],
        "name": "indice_inflacion",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
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
                "index$": 1,
              },
            ],
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
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "valor",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
        ],
        "name": "indice_uva",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "fecha_emision",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "fecha_vencimiento",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "tem",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "ticker",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "vpv",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 4,
          },
        ],
        "name": "letra",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "fin",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "imagen",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "inicio",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "partido",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "partido_imagen",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "periodo_presidencial",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "vicepresidente",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
        ],
        "name": "presidente",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "aviso_precancelacion_dia",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "canal",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "enlace",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "entidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "logo",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "modalidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "moneda",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "monto_maximo",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "monto_minimo",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "plazo_max_dia",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "plazo_min_dia",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "plazo_precancelacion_dia",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "tea",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "tea_precancelacion",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "tna",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "tna_precancelacion",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 16,
          },
        ],
        "name": "proveedor_plazo_fijo_precancelable",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "entidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "logo",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "tasa",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 3,
          },
        ],
        "name": "proveedor_plazo_fijo_uva_pago_periodico",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "desvio",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "fuente",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "indicador",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "informe",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "maximo",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "mediana",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "minimo",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "muestra",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "participante",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "percentil10",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "percentil25",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "percentil75",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "percentil90",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "periodo",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "periodo_desde",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "periodo_hasta",
            "req": False,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "periodo_tipo",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "promedio",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "publicacion_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "referencia",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "referencia_fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "unidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "xlsx_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 23,
          },
        ],
        "name": "rem",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 2026,
                      "kind": "param",
                      "name": "año",
                      "orig": "año",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "03",
                      "kind": "param",
                      "name": "mes",
                      "orig": "mes",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "desvio",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "fuente",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "indicador",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "informe",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "maximo",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "mediana",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "minimo",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "muestra",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "participante",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "percentil10",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "percentil25",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "percentil75",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "percentil90",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "periodo",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "periodo_desde",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "periodo_hasta",
            "req": False,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "periodo_tipo",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "promedio",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "publicacion_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "referencia",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "referencia_fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "unidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "xlsx_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 23,
          },
        ],
        "name": "rem_expectativa",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "apy",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "moneda",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
        ],
        "name": "rendimiento",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "nexo",
                      "kind": "param",
                      "name": "id",
                      "orig": "entidad",
                      "reqd": True,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "valor",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
        ],
        "name": "riesgo_pai",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "foto",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "nombre",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "observacione",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "partido",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "periodo_legal",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "periodo_real",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "provincia",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "rede",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "reemplazo",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "telefono",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
        ],
        "name": "senador",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "fecha",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "valor",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
        ],
        "name": "tasa_intere",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
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
            "active": True,
            "name": "entidad",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "logo",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "tna_cliente",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "tna_no_cliente",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 3,
          },
        ],
        "name": "tasa_plazo_fijo",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
