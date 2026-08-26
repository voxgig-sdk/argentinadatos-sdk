package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Argentinadatos",
			"slug": "argentinadatos",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.argentinadatos.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"acta": map[string]any{},
				"bonos_cer": map[string]any{},
				"cotizacion": map[string]any{},
				"criptopeso": map[string]any{},
				"cuenta_remunerada_usd": map[string]any{},
				"diputado": map[string]any{},
				"entidad_rendimiento": map[string]any{},
				"estado": map[string]any{},
				"evento_presidencial": map[string]any{},
				"feriado": map[string]any{},
				"finanza": map[string]any{},
				"fondo_comun_inversion": map[string]any{},
				"fondo_comun_inversion_otro": map[string]any{},
				"fondo_comun_inversion_variable": map[string]any{},
				"hipotecario_uva_tna": map[string]any{},
				"indice_inflacion": map[string]any{},
				"indice_uva": map[string]any{},
				"letra": map[string]any{},
				"presidente": map[string]any{},
				"proveedor_plazo_fijo_precancelable": map[string]any{},
				"proveedor_plazo_fijo_uva_pago_periodico": map[string]any{},
				"rem": map[string]any{},
				"rem_expectativa": map[string]any{},
				"rendimiento": map[string]any{},
				"riesgo_pai": map[string]any{},
				"senador": map[string]any{},
				"tasa_intere": map[string]any{},
				"tasa_plazo_fijo": map[string]any{},
			},
		},
		"entity": map[string]any{
			"acta": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abstenciones",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "acta",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "actaId",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "afirmativos",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "amn",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "ausentes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "descripcion",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mayoria",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "miembros",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "negativos",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "numeroActa",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "observaciones",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "periodo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "presentes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "presidente",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "proyecto",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quorumTipo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "resultado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reunion",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "titulo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "votos",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "votosAfirmativos",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "votosNegativos",
						"type": "`$INTEGER`",
					},
				},
				"name": "acta",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/diputados/actas",
								"parts": []any{
									"v1",
									"diputados",
									"actas",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/senado/actas",
								"parts": []any{
									"v1",
									"senado",
									"actas",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 2026,
											"kind": "param",
											"name": "id",
											"orig": "año",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/diputados/actas/{año}",
								"parts": []any{
									"v1",
									"diputados",
									"actas",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"año": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 2026,
											"kind": "param",
											"name": "id",
											"orig": "año",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/senado/actas/{año}",
								"parts": []any{
									"v1",
									"senado",
									"actas",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"año": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bonos_cer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fechaVencimiento",
						"req": true,
						"short": "Fecha de vencimiento (ISO 8601, solo fecha: yyyy-MM-dd)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "precioArs",
						"req": true,
						"short": "Precio de cotización en pesos argentinos",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "ticker",
						"req": true,
						"short": "Código del bono (ej.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tirPorcentaje",
						"req": true,
						"short": "Tasa interna de retorno (TIR) en porcentaje",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "volumen",
						"short": "Volumen nominal negociado, si la fuente lo publica",
						"type": "`$NUMBER`",
					},
				},
				"name": "bonos_cer",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/bonos-cer",
								"parts": []any{
									"v1",
									"finanzas",
									"bonos-cer",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.bonos`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cotizacion": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "casa",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "compra",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "venta",
						"type": "`$NUMBER`",
					},
				},
				"name": "cotizacion",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cotizaciones/dolares",
								"parts": []any{
									"v1",
									"cotizaciones",
									"dolares",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "blue",
											"kind": "param",
											"name": "casa",
											"orig": "casa",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2024/01/01",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cotizaciones/dolares/{casa}/{fecha}",
								"parts": []any{
									"v1",
									"cotizaciones",
									"dolares",
									"{casa}",
									"{fecha}",
								},
								"select": map[string]any{
									"exist": []any{
										"casa",
										"fecha",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "blue",
											"kind": "param",
											"name": "casa",
											"orig": "casa",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/cotizaciones/dolares/{casa}",
								"parts": []any{
									"v1",
									"cotizaciones",
									"dolares",
									"{casa}",
								},
								"select": map[string]any{
									"exist": []any{
										"casa",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"dolare",
						},
					},
				},
			},
			"criptopeso": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "entidad",
						"short": "Nombre de la entidad que ofrece el criptopeso",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tna",
						"short": "Tasa Nominal Anual en porcentaje",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "token",
						"short": "Token del criptopeso (ej: ARGt, wARS)",
						"type": "`$STRING`",
					},
				},
				"name": "criptopeso",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/criptopesos",
								"parts": []any{
									"v1",
									"finanzas",
									"criptopesos",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cuenta_remunerada_usd": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "entidad",
						"short": "Identificador de la entidad (p.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tasa",
						"short": "Tasa de rendimiento anual en formato decimal (p.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tope",
						"short": "Monto máximo en USD remunerado a esa tasa, o null si no hay tope o no se informó",
						"type": "`$NUMBER`",
					},
				},
				"name": "cuenta_remunerada_usd",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/cuentas-remuneradas-usd",
								"parts": []any{
									"v1",
									"finanzas",
									"cuentas-remuneradas-usd",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"diputado": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apellido",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bloque",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ceseFecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "foto",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "genero",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "juramentoFecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoBloque",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "periodoMandato",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "provincia",
						"type": "`$STRING`",
					},
				},
				"name": "diputado",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/diputados/diputados",
								"parts": []any{
									"v1",
									"diputados",
									"diputados",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"entidad_rendimiento": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "entidad",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rendimientos",
						"type": "`$ARRAY`",
					},
				},
				"name": "entidad_rendimiento",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/rendimientos",
								"parts": []any{
									"v1",
									"finanzas",
									"rendimientos",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"estado": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aleatorio",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "estado",
						"type": "`$STRING`",
					},
				},
				"name": "estado",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/estado",
								"parts": []any{
									"v1",
									"estado",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"evento_presidencial": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "evento",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tipo",
						"type": "`$STRING`",
					},
				},
				"name": "evento_presidencial",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/eventos/presidenciales",
								"parts": []any{
									"v1",
									"eventos",
									"presidenciales",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"feriado": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tipo",
						"type": "`$STRING`",
					},
				},
				"name": "feriado",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 2026,
											"kind": "param",
											"name": "id",
											"orig": "año",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/feriados/{año}",
								"parts": []any{
									"v1",
									"feriados",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"año": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"finanza": map[string]any{
				"fields": []any{},
				"name": "finanza",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/rems",
								"parts": []any{
									"v1",
									"rems",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"fondo_comun_inversion": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ccp",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fondo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "horizonte",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "patrimonio",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tipo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "vcp",
						"type": "`$NUMBER`",
					},
				},
				"name": "fondo_comun_inversion",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/fci/mercadoDinero/{fecha}",
								"parts": []any{
									"v1",
									"finanzas",
									"fci",
									"mercadoDinero",
									"{fecha}",
								},
								"select": map[string]any{
									"exist": []any{
										"fecha",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/fci/rentaFija/{fecha}",
								"parts": []any{
									"v1",
									"finanzas",
									"fci",
									"rentaFija",
									"{fecha}",
								},
								"select": map[string]any{
									"exist": []any{
										"fecha",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/fci/rentaMixta/{fecha}",
								"parts": []any{
									"v1",
									"finanzas",
									"fci",
									"rentaMixta",
									"{fecha}",
								},
								"select": map[string]any{
									"exist": []any{
										"fecha",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/fci/rentaVariable/{fecha}",
								"parts": []any{
									"v1",
									"finanzas",
									"fci",
									"rentaVariable",
									"{fecha}",
								},
								"select": map[string]any{
									"exist": []any{
										"fecha",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/fci/retornoTotal/{fecha}",
								"parts": []any{
									"v1",
									"finanzas",
									"fci",
									"retornoTotal",
									"{fecha}",
								},
								"select": map[string]any{
									"exist": []any{
										"fecha",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"mercado_dinero",
						},
						[]any{
							"renta_fija",
						},
						[]any{
							"renta_mixta",
						},
						[]any{
							"renta_variable",
						},
						[]any{
							"retorno_total",
						},
					},
				},
			},
			"fondo_comun_inversion_otro": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fondo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tea",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tna",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tope",
						"type": "`$NUMBER`",
					},
				},
				"name": "fondo_comun_inversion_otro",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ultimo",
											"kind": "param",
											"name": "id",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/fci/otros/{fecha}",
								"parts": []any{
									"v1",
									"finanzas",
									"fci",
									"otros",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"fecha": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"fondo_comun_inversion_variable": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "condiciones",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "condicionesCorto",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fondo",
						"short": "Nombre del fondo común de inversión (clase o denominación oficial).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"short": "Identificador de la fuente en Argentina Datos (por ejemplo el proveedor o el canal).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tea",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tipo",
						"short": "Clasificación del instrumento.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tna",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tope",
						"type": "`$NUMBER`",
					},
				},
				"name": "fondo_comun_inversion_variable",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "ultimo",
											"kind": "param",
											"name": "id",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/fci/variables/{fecha}",
								"parts": []any{
									"v1",
									"finanzas",
									"fci",
									"variables",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"fecha": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"hipotecario_uva_tna": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "entidad",
						"short": "Nombre del banco u oferente del crédito hipotecario UVA",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"short": "Detalle de condiciones",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nombreComercial",
						"short": "Nombre comercial",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tna",
						"short": "Tasa Nominal Anual",
						"type": "`$NUMBER`",
					},
				},
				"name": "hipotecario_uva_tna",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/creditos/hipotecariosUva",
								"parts": []any{
									"v1",
									"finanzas",
									"creditos",
									"hipotecariosUva",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"indice_inflacion": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "valor",
						"type": "`$NUMBER`",
					},
				},
				"name": "indice_inflacion",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/indices/inflacion",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"inflacion",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/indices/inflacionInteranual",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"inflacionInteranual",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"indice_uva": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "valor",
						"type": "`$NUMBER`",
					},
				},
				"name": "indice_uva",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/indices/uva",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"uva",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"letra": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fechaEmision",
						"short": "Fecha de emisión original (ISO 8601)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fechaVencimiento",
						"short": "Fecha de vencimiento (ISO 8601)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tem",
						"short": "Tasa Efectiva Mensual (%)",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "ticker",
						"short": "Código del instrumento (ej: S31G5, T17O5)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "vpv",
						"short": "Valor de Pago al Vencimiento por cada $100 de valor nominal",
						"type": "`$NUMBER`",
					},
				},
				"name": "letra",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/letras",
								"parts": []any{
									"v1",
									"finanzas",
									"letras",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"presidente": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fin",
						"short": "Fecha de fin del mandato (formato yyyy-MM-dd).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imagen",
						"short": "URL de la imagen del presidente",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inicio",
						"short": "Fecha de inicio del mandato (formato yyyy-MM-dd)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "partido",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "partidoImagen",
						"short": "URL de la imagen del logo del partido político",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoPresidencial",
						"short": "Rango de años del período presidencial (ej: '2019-2023')",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "vicepresidente",
						"short": "Nombre del vicepresidente.",
						"type": "`$STRING`",
					},
				},
				"name": "presidente",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/presidentes",
								"parts": []any{
									"v1",
									"presidentes",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"proveedor_plazo_fijo_precancelable": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "avisoPrecancelacionDias",
						"short": "Días hábiles de aviso previo para precancelar",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "canal",
						"short": "Canales publicados para constituir el plazo fijo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enlace",
						"short": "URL de la fuente",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entidad",
						"short": "Nombre de la entidad",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Identificador estable del proveedor",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logo",
						"short": "URL del logo de la entidad",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modalidad",
						"short": "Modalidad publicada por la entidad",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"short": "Moneda de constitución",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "montoMaximo",
						"short": "Monto máximo de constitución",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "montoMinimo",
						"short": "Monto mínimo de constitución",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "plazoMaxDias",
						"short": "Plazo máximo en días",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "plazoMinDias",
						"short": "Plazo mínimo en días",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "plazoPrecancelacionDias",
						"short": "Días mínimos para ejercer la precancelación",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tea",
						"short": "Tasa Efectiva Anual",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "teaPrecancelacion",
						"short": "Tasa Efectiva Anual aplicada ante precancelación",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tna",
						"short": "Tasa Nominal Anual",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tnaPrecancelacion",
						"short": "Tasa Nominal Anual aplicada ante precancelación",
						"type": "`$NUMBER`",
					},
				},
				"name": "proveedor_plazo_fijo_precancelable",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/tasas/plazoFijoPrecancelable",
								"parts": []any{
									"v1",
									"finanzas",
									"tasas",
									"plazoFijoPrecancelable",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"proveedor_plazo_fijo_uva_pago_periodico": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "entidad",
						"short": "Nombre de la entidad",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Identificador estable del proveedor (p.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logo",
						"short": "URL del logo de la entidad",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tasas",
						"short": "Tasas por rango de plazo",
						"type": "`$ARRAY`",
					},
				},
				"name": "proveedor_plazo_fijo_uva_pago_periodico",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico",
								"parts": []any{
									"v1",
									"finanzas",
									"tasas",
									"plazoFijoUvaPagoPeriodico",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rem": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "desvio",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fecha",
						"short": "Fecha ISO del primer día del mes del informe",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fuente",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "indicador",
						"short": "Indicador relevado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "informe",
						"short": "Informe REM en formato YYYY-MM",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "maximo",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "mediana",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "minimo",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "muestra",
						"short": "Muestra de participantes: todos o TOP 10",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "participantes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "percentil10",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "percentil25",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "percentil75",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "percentil90",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "periodo",
						"short": "Período original informado por el BCRA",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoDesde",
						"short": "Fecha de inicio del período normalizado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoHasta",
						"short": "Fecha de fin del período normalizado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoTipo",
						"short": "Tipo de período normalizado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "promedio",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "publicacionUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referencia",
						"short": "Referencia original de la tabla",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenciaFecha",
						"short": "Fecha detectada en la referencia, si corresponde",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unidad",
						"short": "Unidad inferida desde la referencia",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "xlsxUrl",
						"type": "`$STRING`",
					},
				},
				"name": "rem",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 2026,
											"kind": "param",
											"name": "año",
											"orig": "año",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "03",
											"kind": "param",
											"name": "mes",
											"orig": "mes",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/rems/{año}/{mes}",
								"parts": []any{
									"v1",
									"rems",
									"{año}",
									"{mes}",
								},
								"select": map[string]any{
									"exist": []any{
										"año",
										"mes",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"rem",
						},
					},
				},
			},
			"rem_expectativa": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "desvio",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fecha",
						"short": "Fecha ISO del primer día del mes del informe",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fuente",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "indicador",
						"short": "Indicador relevado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "informe",
						"short": "Informe REM en formato YYYY-MM",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "maximo",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "mediana",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "minimo",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "muestra",
						"short": "Muestra de participantes: todos o TOP 10",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "participantes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "percentil10",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "percentil25",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "percentil75",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "percentil90",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "periodo",
						"short": "Período original informado por el BCRA",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoDesde",
						"short": "Fecha de inicio del período normalizado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoHasta",
						"short": "Fecha de fin del período normalizado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoTipo",
						"short": "Tipo de período normalizado",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "promedio",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "publicacionUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referencia",
						"short": "Referencia original de la tabla",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "referenciaFecha",
						"short": "Fecha detectada en la referencia, si corresponde",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unidad",
						"short": "Unidad inferida desde la referencia",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "xlsxUrl",
						"type": "`$STRING`",
					},
				},
				"name": "rem_expectativa",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/rems/ultimo",
								"parts": []any{
									"v1",
									"rems",
									"ultimo",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rendimiento": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apy",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moneda",
						"type": "`$STRING`",
					},
				},
				"name": "rendimiento",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "nexo",
											"kind": "param",
											"name": "id",
											"orig": "entidad",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/rendimientos/{entidad}",
								"parts": []any{
									"v1",
									"finanzas",
									"rendimientos",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entidad": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"riesgo_pai": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "valor",
						"type": "`$NUMBER`",
					},
				},
				"name": "riesgo_pai",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/indices/riesgo-pais",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"riesgo-pais",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/indices/riesgo-pais/ultimo",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"riesgo-pais",
									"ultimo",
								},
								"select": map[string]any{
									"$action": "ultimo",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"senador": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "foto",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nombre",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "observaciones",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "partido",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "periodoLegal",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "periodoReal",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "provincia",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "redes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reemplazo",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "telefono",
						"type": "`$STRING`",
					},
				},
				"name": "senador",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/senado/senadores",
								"parts": []any{
									"v1",
									"senado",
									"senadores",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tasa_intere": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fecha",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "valor",
						"type": "`$NUMBER`",
					},
				},
				"name": "tasa_intere",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/tasas/depositos30Dias",
								"parts": []any{
									"v1",
									"finanzas",
									"tasas",
									"depositos30Dias",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tasa_plazo_fijo": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "entidad",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logo",
						"short": "URL del logo de la entidad",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tnaClientes",
						"short": "Tasa Nominal Anual para clientes, en porcentaje",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tnaNoClientes",
						"short": "Tasa Nominal Anual para no clientes, en porcentaje",
						"type": "`$NUMBER`",
					},
				},
				"name": "tasa_plazo_fijo",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/finanzas/tasas/plazoFijo",
								"parts": []any{
									"v1",
									"finanzas",
									"tasas",
									"plazoFijo",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
