
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Argentinadatos',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.argentinadatos.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      acta: {
      },

      bonos_cer: {
      },

      cotizacion: {
      },

      criptopeso: {
      },

      cuenta_remunerada_usd: {
      },

      diputado: {
      },

      entidad_rendimiento: {
      },

      estado: {
      },

      evento_presidencial: {
      },

      feriado: {
      },

      finanza: {
      },

      fondo_comun_inversion: {
      },

      fondo_comun_inversion_otro: {
      },

      fondo_comun_inversion_variable: {
      },

      hipotecario_uva_tna: {
      },

      indice_inflacion: {
      },

      indice_uva: {
      },

      letra: {
      },

      presidente: {
      },

      proveedor_plazo_fijo_precancelable: {
      },

      proveedor_plazo_fijo_uva_pago_periodico: {
      },

      rem: {
      },

      rem_expectativa: {
      },

      rendimiento: {
      },

      riesgo_pai: {
      },

      senador: {
      },

      tasa_intere: {
      },

      tasa_plazo_fijo: {
      },

    }
  }


  entity = {
    "acta": {
      "fields": [
        {
          "name": "abstenciones",
          "type": "`$INTEGER`"
        },
        {
          "name": "acta",
          "type": "`$STRING`"
        },
        {
          "name": "actaId",
          "type": "`$INTEGER`"
        },
        {
          "name": "afirmativos",
          "type": "`$INTEGER`"
        },
        {
          "name": "amn",
          "type": "`$INTEGER`"
        },
        {
          "name": "ausentes",
          "type": "`$INTEGER`"
        },
        {
          "name": "descripcion",
          "type": "`$STRING`"
        },
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "mayoria",
          "type": "`$STRING`"
        },
        {
          "name": "miembros",
          "type": "`$INTEGER`"
        },
        {
          "name": "negativos",
          "type": "`$INTEGER`"
        },
        {
          "name": "numeroActa",
          "type": "`$STRING`"
        },
        {
          "name": "observaciones",
          "type": "`$ARRAY`"
        },
        {
          "name": "periodo",
          "type": "`$STRING`"
        },
        {
          "name": "presentes",
          "type": "`$INTEGER`"
        },
        {
          "name": "presidente",
          "type": "`$STRING`"
        },
        {
          "name": "proyecto",
          "type": "`$STRING`"
        },
        {
          "name": "quorumTipo",
          "type": "`$STRING`"
        },
        {
          "name": "resultado",
          "type": "`$STRING`"
        },
        {
          "name": "reunion",
          "type": "`$STRING`"
        },
        {
          "name": "titulo",
          "type": "`$STRING`"
        },
        {
          "name": "votos",
          "type": "`$ARRAY`"
        },
        {
          "name": "votosAfirmativos",
          "type": "`$INTEGER`"
        },
        {
          "name": "votosNegativos",
          "type": "`$INTEGER`"
        }
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
                "actas"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/v1/senado/actas",
              "parts": [
                "v1",
                "senado",
                "actas"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/diputados/actas/{año}",
              "parts": [
                "v1",
                "diputados",
                "actas",
                "{id}"
              ],
              "rename": {
                "param": {
                  "año": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "example": 2026,
                    "kind": "param",
                    "name": "id",
                    "orig": "año",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/senado/actas/{año}",
              "parts": [
                "v1",
                "senado",
                "actas",
                "{id}"
              ],
              "rename": {
                "param": {
                  "año": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "bonos_cer": {
      "fields": [
        {
          "name": "fechaVencimiento",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "precioArs",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "ticker",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "tirPorcentaje",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "volumen",
          "type": "`$NUMBER`"
        }
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
                "bonos-cer"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.bonos`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "cotizacion": {
      "fields": [
        {
          "name": "casa",
          "type": "`$STRING`"
        },
        {
          "name": "compra",
          "type": "`$NUMBER`"
        },
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "moneda",
          "type": "`$STRING`"
        },
        {
          "name": "venta",
          "type": "`$NUMBER`"
        }
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
                "dolares"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "2024/01/01",
                    "kind": "param",
                    "name": "fecha",
                    "orig": "fecha",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/cotizaciones/dolares/{casa}/{fecha}",
              "parts": [
                "v1",
                "cotizaciones",
                "dolares",
                "{casa}",
                "{fecha}"
              ],
              "select": {
                "exist": [
                  "casa",
                  "fecha"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "example": "blue",
                    "kind": "param",
                    "name": "casa",
                    "orig": "casa",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/cotizaciones/dolares/{casa}",
              "parts": [
                "v1",
                "cotizaciones",
                "dolares",
                "{casa}"
              ],
              "select": {
                "exist": [
                  "casa"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "dolare"
          ]
        ]
      }
    },
    "criptopeso": {
      "fields": [
        {
          "name": "entidad",
          "type": "`$STRING`"
        },
        {
          "name": "tna",
          "type": "`$NUMBER`"
        },
        {
          "name": "token",
          "type": "`$STRING`"
        }
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
                "criptopesos"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "cuenta_remunerada_usd": {
      "fields": [
        {
          "name": "entidad",
          "type": "`$STRING`"
        },
        {
          "name": "tasa",
          "type": "`$NUMBER`"
        },
        {
          "name": "tope",
          "type": "`$NUMBER`"
        }
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
                "cuentas-remuneradas-usd"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "diputado": {
      "fields": [
        {
          "name": "apellido",
          "type": "`$STRING`"
        },
        {
          "name": "bloque",
          "type": "`$STRING`"
        },
        {
          "name": "ceseFecha",
          "type": "`$STRING`"
        },
        {
          "name": "foto",
          "type": "`$STRING`"
        },
        {
          "name": "genero",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "juramentoFecha",
          "type": "`$STRING`"
        },
        {
          "name": "nombre",
          "type": "`$STRING`"
        },
        {
          "name": "periodoBloque",
          "type": "`$OBJECT`"
        },
        {
          "name": "periodoMandato",
          "type": "`$OBJECT`"
        },
        {
          "name": "provincia",
          "type": "`$STRING`"
        }
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
                "diputados"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "entidad_rendimiento": {
      "fields": [
        {
          "name": "entidad",
          "type": "`$STRING`"
        },
        {
          "name": "rendimientos",
          "type": "`$ARRAY`"
        }
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
                "rendimientos"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "estado": {
      "fields": [
        {
          "name": "aleatorio",
          "type": "`$INTEGER`"
        },
        {
          "name": "estado",
          "type": "`$STRING`"
        }
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
                "estado"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "evento_presidencial": {
      "fields": [
        {
          "name": "evento",
          "type": "`$STRING`"
        },
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "tipo",
          "type": "`$STRING`"
        }
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
                "presidenciales"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "feriado": {
      "fields": [
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "nombre",
          "type": "`$STRING`"
        },
        {
          "name": "tipo",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/feriados/{año}",
              "parts": [
                "v1",
                "feriados",
                "{id}"
              ],
              "rename": {
                "param": {
                  "año": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
                "rems"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "fondo_comun_inversion": {
      "fields": [
        {
          "name": "ccp",
          "type": "`$NUMBER`"
        },
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "fondo",
          "type": "`$STRING`"
        },
        {
          "name": "horizonte",
          "type": "`$STRING`"
        },
        {
          "name": "patrimonio",
          "type": "`$NUMBER`"
        },
        {
          "name": "tipo",
          "type": "`$STRING`"
        },
        {
          "name": "vcp",
          "type": "`$NUMBER`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/finanzas/fci/mercadoDinero/{fecha}",
              "parts": [
                "v1",
                "finanzas",
                "fci",
                "mercadoDinero",
                "{fecha}"
              ],
              "select": {
                "exist": [
                  "fecha"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "example": "ultimo",
                    "kind": "param",
                    "name": "fecha",
                    "orig": "fecha",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/finanzas/fci/rentaFija/{fecha}",
              "parts": [
                "v1",
                "finanzas",
                "fci",
                "rentaFija",
                "{fecha}"
              ],
              "select": {
                "exist": [
                  "fecha"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "example": "ultimo",
                    "kind": "param",
                    "name": "fecha",
                    "orig": "fecha",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/finanzas/fci/rentaMixta/{fecha}",
              "parts": [
                "v1",
                "finanzas",
                "fci",
                "rentaMixta",
                "{fecha}"
              ],
              "select": {
                "exist": [
                  "fecha"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "example": "ultimo",
                    "kind": "param",
                    "name": "fecha",
                    "orig": "fecha",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/finanzas/fci/rentaVariable/{fecha}",
              "parts": [
                "v1",
                "finanzas",
                "fci",
                "rentaVariable",
                "{fecha}"
              ],
              "select": {
                "exist": [
                  "fecha"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "example": "ultimo",
                    "kind": "param",
                    "name": "fecha",
                    "orig": "fecha",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/finanzas/fci/retornoTotal/{fecha}",
              "parts": [
                "v1",
                "finanzas",
                "fci",
                "retornoTotal",
                "{fecha}"
              ],
              "select": {
                "exist": [
                  "fecha"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "mercado_dinero"
          ],
          [
            "renta_fija"
          ],
          [
            "renta_mixta"
          ],
          [
            "renta_variable"
          ],
          [
            "retorno_total"
          ]
        ]
      }
    },
    "fondo_comun_inversion_otro": {
      "fields": [
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "fondo",
          "type": "`$STRING`"
        },
        {
          "name": "tea",
          "type": "`$NUMBER`"
        },
        {
          "name": "tna",
          "type": "`$NUMBER`"
        },
        {
          "name": "tope",
          "type": "`$NUMBER`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/finanzas/fci/otros/{fecha}",
              "parts": [
                "v1",
                "finanzas",
                "fci",
                "otros",
                "{id}"
              ],
              "rename": {
                "param": {
                  "fecha": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "fondo_comun_inversion_variable": {
      "fields": [
        {
          "name": "condiciones",
          "type": "`$STRING`"
        },
        {
          "name": "condicionesCorto",
          "type": "`$STRING`"
        },
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "fondo",
          "type": "`$STRING`"
        },
        {
          "name": "nombre",
          "type": "`$STRING`"
        },
        {
          "name": "tea",
          "type": "`$NUMBER`"
        },
        {
          "name": "tipo",
          "type": "`$STRING`"
        },
        {
          "name": "tna",
          "type": "`$NUMBER`"
        },
        {
          "name": "tope",
          "type": "`$NUMBER`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/finanzas/fci/variables/{fecha}",
              "parts": [
                "v1",
                "finanzas",
                "fci",
                "variables",
                "{id}"
              ],
              "rename": {
                "param": {
                  "fecha": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "hipotecario_uva_tna": {
      "fields": [
        {
          "name": "entidad",
          "type": "`$STRING`"
        },
        {
          "name": "metadata",
          "type": "`$OBJECT`"
        },
        {
          "name": "nombreComercial",
          "type": "`$STRING`"
        },
        {
          "name": "tna",
          "type": "`$NUMBER`"
        }
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
                "hipotecariosUva"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "indice_inflacion": {
      "fields": [
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "valor",
          "type": "`$NUMBER`"
        }
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
                "inflacion"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
                "inflacionInteranual"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "indice_uva": {
      "fields": [
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "valor",
          "type": "`$NUMBER`"
        }
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
                "uva"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "letra": {
      "fields": [
        {
          "name": "fechaEmision",
          "type": "`$STRING`"
        },
        {
          "name": "fechaVencimiento",
          "type": "`$STRING`"
        },
        {
          "name": "tem",
          "type": "`$NUMBER`"
        },
        {
          "name": "ticker",
          "type": "`$STRING`"
        },
        {
          "name": "vpv",
          "type": "`$NUMBER`"
        }
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
                "letras"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "presidente": {
      "fields": [
        {
          "name": "fin",
          "type": "`$STRING`"
        },
        {
          "name": "imagen",
          "type": "`$STRING`"
        },
        {
          "name": "inicio",
          "type": "`$STRING`"
        },
        {
          "name": "nombre",
          "type": "`$STRING`"
        },
        {
          "name": "partido",
          "type": "`$STRING`"
        },
        {
          "name": "partidoImagen",
          "type": "`$STRING`"
        },
        {
          "name": "periodoPresidencial",
          "type": "`$STRING`"
        },
        {
          "name": "vicepresidente",
          "type": "`$STRING`"
        }
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
                "presidentes"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "proveedor_plazo_fijo_precancelable": {
      "fields": [
        {
          "name": "avisoPrecancelacionDias",
          "type": "`$INTEGER`"
        },
        {
          "name": "canal",
          "type": "`$STRING`"
        },
        {
          "name": "enlace",
          "type": "`$STRING`"
        },
        {
          "name": "entidad",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "logo",
          "type": "`$STRING`"
        },
        {
          "name": "modalidad",
          "type": "`$STRING`"
        },
        {
          "name": "moneda",
          "type": "`$STRING`"
        },
        {
          "name": "montoMaximo",
          "type": "`$NUMBER`"
        },
        {
          "name": "montoMinimo",
          "type": "`$NUMBER`"
        },
        {
          "name": "plazoMaxDias",
          "type": "`$INTEGER`"
        },
        {
          "name": "plazoMinDias",
          "type": "`$INTEGER`"
        },
        {
          "name": "plazoPrecancelacionDias",
          "type": "`$INTEGER`"
        },
        {
          "name": "tea",
          "type": "`$NUMBER`"
        },
        {
          "name": "teaPrecancelacion",
          "type": "`$NUMBER`"
        },
        {
          "name": "tna",
          "type": "`$NUMBER`"
        },
        {
          "name": "tnaPrecancelacion",
          "type": "`$NUMBER`"
        }
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
                "plazoFijoPrecancelable"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "proveedor_plazo_fijo_uva_pago_periodico": {
      "fields": [
        {
          "name": "entidad",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "logo",
          "type": "`$STRING`"
        },
        {
          "name": "tasas",
          "type": "`$ARRAY`"
        }
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
                "plazoFijoUvaPagoPeriodico"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "rem": {
      "fields": [
        {
          "name": "desvio",
          "type": "`$NUMBER`"
        },
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "fuente",
          "type": "`$STRING`"
        },
        {
          "name": "indicador",
          "type": "`$STRING`"
        },
        {
          "name": "informe",
          "type": "`$STRING`"
        },
        {
          "name": "maximo",
          "type": "`$NUMBER`"
        },
        {
          "name": "mediana",
          "type": "`$NUMBER`"
        },
        {
          "name": "minimo",
          "type": "`$NUMBER`"
        },
        {
          "name": "muestra",
          "type": "`$STRING`"
        },
        {
          "name": "participantes",
          "type": "`$INTEGER`"
        },
        {
          "name": "percentil10",
          "type": "`$NUMBER`"
        },
        {
          "name": "percentil25",
          "type": "`$NUMBER`"
        },
        {
          "name": "percentil75",
          "type": "`$NUMBER`"
        },
        {
          "name": "percentil90",
          "type": "`$NUMBER`"
        },
        {
          "name": "periodo",
          "type": "`$STRING`"
        },
        {
          "name": "periodoDesde",
          "type": "`$STRING`"
        },
        {
          "name": "periodoHasta",
          "type": "`$STRING`"
        },
        {
          "name": "periodoTipo",
          "type": "`$STRING`"
        },
        {
          "name": "promedio",
          "type": "`$NUMBER`"
        },
        {
          "name": "publicacionUrl",
          "type": "`$STRING`"
        },
        {
          "name": "referencia",
          "type": "`$STRING`"
        },
        {
          "name": "referenciaFecha",
          "type": "`$STRING`"
        },
        {
          "name": "unidad",
          "type": "`$STRING`"
        },
        {
          "name": "xlsxUrl",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "03",
                    "kind": "param",
                    "name": "mes",
                    "orig": "mes",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/rems/{año}/{mes}",
              "parts": [
                "v1",
                "rems",
                "{año}",
                "{mes}"
              ],
              "select": {
                "exist": [
                  "año",
                  "mes"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "rem"
          ]
        ]
      }
    },
    "rem_expectativa": {
      "fields": [
        {
          "name": "desvio",
          "type": "`$NUMBER`"
        },
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "fuente",
          "type": "`$STRING`"
        },
        {
          "name": "indicador",
          "type": "`$STRING`"
        },
        {
          "name": "informe",
          "type": "`$STRING`"
        },
        {
          "name": "maximo",
          "type": "`$NUMBER`"
        },
        {
          "name": "mediana",
          "type": "`$NUMBER`"
        },
        {
          "name": "minimo",
          "type": "`$NUMBER`"
        },
        {
          "name": "muestra",
          "type": "`$STRING`"
        },
        {
          "name": "participantes",
          "type": "`$INTEGER`"
        },
        {
          "name": "percentil10",
          "type": "`$NUMBER`"
        },
        {
          "name": "percentil25",
          "type": "`$NUMBER`"
        },
        {
          "name": "percentil75",
          "type": "`$NUMBER`"
        },
        {
          "name": "percentil90",
          "type": "`$NUMBER`"
        },
        {
          "name": "periodo",
          "type": "`$STRING`"
        },
        {
          "name": "periodoDesde",
          "type": "`$STRING`"
        },
        {
          "name": "periodoHasta",
          "type": "`$STRING`"
        },
        {
          "name": "periodoTipo",
          "type": "`$STRING`"
        },
        {
          "name": "promedio",
          "type": "`$NUMBER`"
        },
        {
          "name": "publicacionUrl",
          "type": "`$STRING`"
        },
        {
          "name": "referencia",
          "type": "`$STRING`"
        },
        {
          "name": "referenciaFecha",
          "type": "`$STRING`"
        },
        {
          "name": "unidad",
          "type": "`$STRING`"
        },
        {
          "name": "xlsxUrl",
          "type": "`$STRING`"
        }
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
                "ultimo"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "rendimiento": {
      "fields": [
        {
          "name": "apy",
          "type": "`$NUMBER`"
        },
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "moneda",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/finanzas/rendimientos/{entidad}",
              "parts": [
                "v1",
                "finanzas",
                "rendimientos",
                "{id}"
              ],
              "rename": {
                "param": {
                  "entidad": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "riesgo_pai": {
      "fields": [
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "valor",
          "type": "`$NUMBER`"
        }
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
                "riesgo-pais"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                "ultimo"
              ],
              "select": {
                "$action": "ultimo"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "senador": {
      "fields": [
        {
          "name": "email",
          "type": "`$STRING`"
        },
        {
          "name": "foto",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "nombre",
          "type": "`$STRING`"
        },
        {
          "name": "observaciones",
          "type": "`$STRING`"
        },
        {
          "name": "partido",
          "type": "`$STRING`"
        },
        {
          "name": "periodoLegal",
          "type": "`$OBJECT`"
        },
        {
          "name": "periodoReal",
          "type": "`$OBJECT`"
        },
        {
          "name": "provincia",
          "type": "`$STRING`"
        },
        {
          "name": "redes",
          "type": "`$ARRAY`"
        },
        {
          "name": "reemplazo",
          "type": "`$STRING`"
        },
        {
          "name": "telefono",
          "type": "`$STRING`"
        }
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
                "senadores"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "tasa_intere": {
      "fields": [
        {
          "name": "fecha",
          "type": "`$STRING`"
        },
        {
          "name": "valor",
          "type": "`$NUMBER`"
        }
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
                "depositos30Dias"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "tasa_plazo_fijo": {
      "fields": [
        {
          "name": "entidad",
          "type": "`$STRING`"
        },
        {
          "name": "logo",
          "type": "`$STRING`"
        },
        {
          "name": "tnaClientes",
          "type": "`$NUMBER`"
        },
        {
          "name": "tnaNoClientes",
          "type": "`$NUMBER`"
        }
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
                "plazoFijo"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

