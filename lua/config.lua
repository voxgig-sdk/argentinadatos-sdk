-- Argentinadatos SDK configuration

local function make_config()
  return {
    main = {
      name = "Argentinadatos",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.argentinadatos.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["acta"] = {},
        ["bonos_cer"] = {},
        ["cotizacion"] = {},
        ["criptopeso"] = {},
        ["cuenta_remunerada_usd"] = {},
        ["diputado"] = {},
        ["entidad_rendimiento"] = {},
        ["estado"] = {},
        ["evento_presidencial"] = {},
        ["feriado"] = {},
        ["finanza"] = {},
        ["fondo_comun_inversion"] = {},
        ["fondo_comun_inversion_otro"] = {},
        ["fondo_comun_inversion_variable"] = {},
        ["hipotecario_uva_tna"] = {},
        ["indice_inflacion"] = {},
        ["indice_uva"] = {},
        ["letra"] = {},
        ["presidente"] = {},
        ["proveedor_plazo_fijo_precancelable"] = {},
        ["proveedor_plazo_fijo_uva_pago_periodico"] = {},
        ["rem"] = {},
        ["rem_expectativa"] = {},
        ["rendimiento"] = {},
        ["riesgo_pai"] = {},
        ["senador"] = {},
        ["tasa_intere"] = {},
        ["tasa_plazo_fijo"] = {},
      },
    },
    entity = {
      ["acta"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "abstencione",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "acta",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "acta_id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "afirmativo",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "amn",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "ausente",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "descripcion",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "mayoria",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "miembro",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "negativo",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "numero_acta",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "observacione",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "periodo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "presente",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "presidente",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 16,
          },
          {
            ["active"] = true,
            ["name"] = "proyecto",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 17,
          },
          {
            ["active"] = true,
            ["name"] = "quorum_tipo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 18,
          },
          {
            ["active"] = true,
            ["name"] = "resultado",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 19,
          },
          {
            ["active"] = true,
            ["name"] = "reunion",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 20,
          },
          {
            ["active"] = true,
            ["name"] = "titulo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 21,
          },
          {
            ["active"] = true,
            ["name"] = "voto",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 22,
          },
          {
            ["active"] = true,
            ["name"] = "votos_afirmativo",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 23,
          },
          {
            ["active"] = true,
            ["name"] = "votos_negativo",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 24,
          },
        },
        ["name"] = "acta",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/diputados/actas",
                ["parts"] = {
                  "v1",
                  "diputados",
                  "actas",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/senado/actas",
                ["parts"] = {
                  "v1",
                  "senado",
                  "actas",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 2026,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "año",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/diputados/actas/{año}",
                ["parts"] = {
                  "v1",
                  "diputados",
                  "actas",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["año"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 2026,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "año",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/senado/actas/{año}",
                ["parts"] = {
                  "v1",
                  "senado",
                  "actas",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["año"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["bonos_cer"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fecha_vencimiento",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "precio_ar",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "ticker",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "tir_porcentaje",
            ["req"] = true,
            ["type"] = "`$NUMBER`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "voluman",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 4,
          },
        },
        ["name"] = "bonos_cer",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/bonos-cer",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "bonos-cer",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cotizacion"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "casa",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "compra",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "moneda",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "venta",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 4,
          },
        },
        ["name"] = "cotizacion",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/cotizaciones/dolares",
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "dolares",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "blue",
                      ["kind"] = "param",
                      ["name"] = "casa",
                      ["orig"] = "casa",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                    {
                      ["active"] = true,
                      ["example"] = "2024/01/01",
                      ["kind"] = "param",
                      ["name"] = "fecha",
                      ["orig"] = "fecha",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 1,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/cotizaciones/dolares/{casa}/{fecha}",
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "dolares",
                  "{casa}",
                  "{fecha}",
                },
                ["select"] = {
                  ["exist"] = {
                    "casa",
                    "fecha",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "blue",
                      ["kind"] = "param",
                      ["name"] = "casa",
                      ["orig"] = "casa",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/cotizaciones/dolares/{casa}",
                ["parts"] = {
                  "v1",
                  "cotizaciones",
                  "dolares",
                  "{casa}",
                },
                ["select"] = {
                  ["exist"] = {
                    "casa",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "dolare",
            },
          },
        },
      },
      ["criptopeso"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "entidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "tna",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "token",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
        },
        ["name"] = "criptopeso",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/criptopesos",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "criptopesos",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cuenta_remunerada_usd"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "entidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "tasa",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "tope",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
        },
        ["name"] = "cuenta_remunerada_usd",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/cuentas-remuneradas-usd",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "cuentas-remuneradas-usd",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["diputado"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "apellido",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "bloque",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "cese_fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "foto",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "genero",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "juramento_fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "nombre",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_bloque",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_mandato",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "provincia",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
        },
        ["name"] = "diputado",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/diputados/diputados",
                ["parts"] = {
                  "v1",
                  "diputados",
                  "diputados",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["entidad_rendimiento"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "entidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "rendimiento",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
        },
        ["name"] = "entidad_rendimiento",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/rendimientos",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "rendimientos",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["estado"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "aleatorio",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "estado",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
        },
        ["name"] = "estado",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/estado",
                ["parts"] = {
                  "v1",
                  "estado",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["evento_presidencial"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "evento",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "tipo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
        },
        ["name"] = "evento_presidencial",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/eventos/presidenciales",
                ["parts"] = {
                  "v1",
                  "eventos",
                  "presidenciales",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["feriado"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "nombre",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "tipo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
        },
        ["name"] = "feriado",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 2026,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "año",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/feriados/{año}",
                ["parts"] = {
                  "v1",
                  "feriados",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["año"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["finanza"] = {
        ["fields"] = {},
        ["name"] = "finanza",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/rems",
                ["parts"] = {
                  "v1",
                  "rems",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["fondo_comun_inversion"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "ccp",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "fondo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "horizonte",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "patrimonio",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "tipo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "vcp",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 6,
          },
        },
        ["name"] = "fondo_comun_inversion",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ultimo",
                      ["kind"] = "param",
                      ["name"] = "fecha",
                      ["orig"] = "fecha",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/fci/mercadoDinero/{fecha}",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "fci",
                  "mercadoDinero",
                  "{fecha}",
                },
                ["select"] = {
                  ["exist"] = {
                    "fecha",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ultimo",
                      ["kind"] = "param",
                      ["name"] = "fecha",
                      ["orig"] = "fecha",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/fci/rentaFija/{fecha}",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "fci",
                  "rentaFija",
                  "{fecha}",
                },
                ["select"] = {
                  ["exist"] = {
                    "fecha",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ultimo",
                      ["kind"] = "param",
                      ["name"] = "fecha",
                      ["orig"] = "fecha",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/fci/rentaMixta/{fecha}",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "fci",
                  "rentaMixta",
                  "{fecha}",
                },
                ["select"] = {
                  ["exist"] = {
                    "fecha",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 2,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ultimo",
                      ["kind"] = "param",
                      ["name"] = "fecha",
                      ["orig"] = "fecha",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/fci/rentaVariable/{fecha}",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "fci",
                  "rentaVariable",
                  "{fecha}",
                },
                ["select"] = {
                  ["exist"] = {
                    "fecha",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 3,
              },
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ultimo",
                      ["kind"] = "param",
                      ["name"] = "fecha",
                      ["orig"] = "fecha",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/fci/retornoTotal/{fecha}",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "fci",
                  "retornoTotal",
                  "{fecha}",
                },
                ["select"] = {
                  ["exist"] = {
                    "fecha",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 4,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "mercado_dinero",
            },
            {
              "renta_fija",
            },
            {
              "renta_mixta",
            },
            {
              "renta_variable",
            },
            {
              "retorno_total",
            },
          },
        },
      },
      ["fondo_comun_inversion_otro"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "fondo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "tea",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "tna",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "tope",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 4,
          },
        },
        ["name"] = "fondo_comun_inversion_otro",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ultimo",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "fecha",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/fci/otros/{fecha}",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "fci",
                  "otros",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["fecha"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["fondo_comun_inversion_variable"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "condicione",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "condiciones_corto",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "fondo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "nombre",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "tea",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "tipo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "tna",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "tope",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 8,
          },
        },
        ["name"] = "fondo_comun_inversion_variable",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "ultimo",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "fecha",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/fci/variables/{fecha}",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "fci",
                  "variables",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["fecha"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["hipotecario_uva_tna"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "entidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "metadata",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "nombre_comercial",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "tna",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 3,
          },
        },
        ["name"] = "hipotecario_uva_tna",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/creditos/hipotecariosUva",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "creditos",
                  "hipotecariosUva",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["indice_inflacion"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "valor",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
        },
        ["name"] = "indice_inflacion",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/indices/inflacion",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "indices",
                  "inflacion",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/indices/inflacionInteranual",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "indices",
                  "inflacionInteranual",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 1,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["indice_uva"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "valor",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
        },
        ["name"] = "indice_uva",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/indices/uva",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "indices",
                  "uva",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["letra"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fecha_emision",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "fecha_vencimiento",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "tem",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "ticker",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "vpv",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 4,
          },
        },
        ["name"] = "letra",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/letras",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "letras",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["presidente"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fin",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "imagen",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "inicio",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "nombre",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "partido",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "partido_imagen",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_presidencial",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "vicepresidente",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
        },
        ["name"] = "presidente",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/presidentes",
                ["parts"] = {
                  "v1",
                  "presidentes",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["proveedor_plazo_fijo_precancelable"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "aviso_precancelacion_dia",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "canal",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "enlace",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "entidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "logo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "modalidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "moneda",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "monto_maximo",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "monto_minimo",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "plazo_max_dia",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "plazo_min_dia",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "plazo_precancelacion_dia",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "tea",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "tea_precancelacion",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "tna",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "tna_precancelacion",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 16,
          },
        },
        ["name"] = "proveedor_plazo_fijo_precancelable",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/tasas/plazoFijoPrecancelable",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijoPrecancelable",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["proveedor_plazo_fijo_uva_pago_periodico"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "entidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "logo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "tasa",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 3,
          },
        },
        ["name"] = "proveedor_plazo_fijo_uva_pago_periodico",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijoUvaPagoPeriodico",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["rem"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "desvio",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "fuente",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "indicador",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "informe",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "maximo",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "mediana",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "minimo",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "muestra",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "participante",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "percentil10",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "percentil25",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "percentil75",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "percentil90",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "periodo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_desde",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_hasta",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 16,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_tipo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 17,
          },
          {
            ["active"] = true,
            ["name"] = "promedio",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 18,
          },
          {
            ["active"] = true,
            ["name"] = "publicacion_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 19,
          },
          {
            ["active"] = true,
            ["name"] = "referencia",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 20,
          },
          {
            ["active"] = true,
            ["name"] = "referencia_fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 21,
          },
          {
            ["active"] = true,
            ["name"] = "unidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 22,
          },
          {
            ["active"] = true,
            ["name"] = "xlsx_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 23,
          },
        },
        ["name"] = "rem",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 2026,
                      ["kind"] = "param",
                      ["name"] = "año",
                      ["orig"] = "año",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                      ["index$"] = 0,
                    },
                    {
                      ["active"] = true,
                      ["example"] = "03",
                      ["kind"] = "param",
                      ["name"] = "mes",
                      ["orig"] = "mes",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 1,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/rems/{año}/{mes}",
                ["parts"] = {
                  "v1",
                  "rems",
                  "{año}",
                  "{mes}",
                },
                ["select"] = {
                  ["exist"] = {
                    "año",
                    "mes",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "rem",
            },
          },
        },
      },
      ["rem_expectativa"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "desvio",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "fuente",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "indicador",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "informe",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "maximo",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "mediana",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "minimo",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "muestra",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "participante",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "percentil10",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "percentil25",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "percentil75",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "percentil90",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "periodo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_desde",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_hasta",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 16,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_tipo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 17,
          },
          {
            ["active"] = true,
            ["name"] = "promedio",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 18,
          },
          {
            ["active"] = true,
            ["name"] = "publicacion_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 19,
          },
          {
            ["active"] = true,
            ["name"] = "referencia",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 20,
          },
          {
            ["active"] = true,
            ["name"] = "referencia_fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 21,
          },
          {
            ["active"] = true,
            ["name"] = "unidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 22,
          },
          {
            ["active"] = true,
            ["name"] = "xlsx_url",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 23,
          },
        },
        ["name"] = "rem_expectativa",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/rems/ultimo",
                ["parts"] = {
                  "v1",
                  "rems",
                  "ultimo",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["rendimiento"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "apy",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "moneda",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
        },
        ["name"] = "rendimiento",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "nexo",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "entidad",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/rendimientos/{entidad}",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "rendimientos",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["entidad"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["riesgo_pai"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "valor",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
        },
        ["name"] = "riesgo_pai",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/indices/riesgo-pais",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "indices",
                  "riesgo-pais",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/indices/riesgo-pais/ultimo",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "indices",
                  "riesgo-pais",
                  "ultimo",
                },
                ["select"] = {
                  ["$action"] = "ultimo",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["senador"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "email",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "foto",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "nombre",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "observacione",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "partido",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_legal",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "periodo_real",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "provincia",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "rede",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "reemplazo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "telefono",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 11,
          },
        },
        ["name"] = "senador",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/senado/senadores",
                ["parts"] = {
                  "v1",
                  "senado",
                  "senadores",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tasa_intere"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "fecha",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "valor",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
        },
        ["name"] = "tasa_intere",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/tasas/depositos30Dias",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "tasas",
                  "depositos30Dias",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tasa_plazo_fijo"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "entidad",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "logo",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "tna_cliente",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "tna_no_cliente",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 3,
          },
        },
        ["name"] = "tasa_plazo_fijo",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/v1/finanzas/tasas/plazoFijo",
                ["parts"] = {
                  "v1",
                  "finanzas",
                  "tasas",
                  "plazoFijo",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
