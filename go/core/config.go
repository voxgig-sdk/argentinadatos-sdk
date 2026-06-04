package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Argentinadatos",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"name": "abstencione",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "acta",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "acta_id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "afirmativo",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "amn",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "ausente",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "descripcion",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "mayoria",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "miembro",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "negativo",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "numero_acta",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "observacione",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "periodo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "presente",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "presidente",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "proyecto",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "quorum_tipo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "resultado",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 19,
					},
					map[string]any{
						"name": "reunion",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 20,
					},
					map[string]any{
						"name": "titulo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 21,
					},
					map[string]any{
						"name": "voto",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 22,
					},
					map[string]any{
						"name": "votos_afirmativo",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 23,
					},
					map[string]any{
						"name": "votos_negativo",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 24,
					},
				},
				"name": "acta",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/diputados/actas",
								"parts": []any{
									"v1",
									"diputados",
									"actas",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
							map[string]any{
								"method": "GET",
								"orig": "/v1/senado/actas",
								"parts": []any{
									"v1",
									"senado",
									"actas",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"bonos_cer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fecha_vencimiento",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "precio_ar",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "ticker",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "tir_porcentaje",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "voluman",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
				},
				"name": "bonos_cer",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/bonos-cer",
								"parts": []any{
									"v1",
									"finanzas",
									"bonos-cer",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "moneda",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "venta",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
				},
				"name": "cotizacion",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/cotizaciones/dolares",
								"parts": []any{
									"v1",
									"cotizaciones",
									"dolares",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
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
											"active": true,
										},
										map[string]any{
											"example": "2024/01/01",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "token",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
				},
				"name": "criptopeso",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/criptopesos",
								"parts": []any{
									"v1",
									"finanzas",
									"criptopesos",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "tasa",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "tope",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 2,
					},
				},
				"name": "cuenta_remunerada_usd",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/cuentas-remuneradas-usd",
								"parts": []any{
									"v1",
									"finanzas",
									"cuentas-remuneradas-usd",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "bloque",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "cese_fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "foto",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "genero",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "juramento_fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "periodo_bloque",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "periodo_mandato",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "provincia",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
				},
				"name": "diputado",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/diputados/diputados",
								"parts": []any{
									"v1",
									"diputados",
									"diputados",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "rendimiento",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "entidad_rendimiento",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/rendimientos",
								"parts": []any{
									"v1",
									"finanzas",
									"rendimientos",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "estado",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "estado",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/estado",
								"parts": []any{
									"v1",
									"estado",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "tipo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
				},
				"name": "evento_presidencial",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/eventos/presidenciales",
								"parts": []any{
									"v1",
									"eventos",
									"presidenciales",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "tipo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
				},
				"name": "feriado",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/rems",
								"parts": []any{
									"v1",
									"rems",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fondo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "horizonte",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "patrimonio",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "tipo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "vcp",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 6,
					},
				},
				"name": "fondo_comun_inversion",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 1,
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 2,
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 3,
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 4,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "fondo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "tea",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "tope",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
				},
				"name": "fondo_comun_inversion_otro",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"fondo_comun_inversion_variable": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "condicione",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "condiciones_corto",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "fondo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "tea",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "tipo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "tope",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 8,
					},
				},
				"name": "fondo_comun_inversion_variable",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "nombre_comercial",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 3,
					},
				},
				"name": "hipotecario_uva_tna",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/creditos/hipotecariosUva",
								"parts": []any{
									"v1",
									"finanzas",
									"creditos",
									"hipotecariosUva",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "valor",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "indice_inflacion",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/indices/inflacion",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"inflacion",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/indices/inflacionInteranual",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"inflacionInteranual",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "valor",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "indice_uva",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/indices/uva",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"uva",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"letra": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fecha_emision",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "fecha_vencimiento",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "tem",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "ticker",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "vpv",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
				},
				"name": "letra",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/letras",
								"parts": []any{
									"v1",
									"finanzas",
									"letras",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "imagen",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "inicio",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "partido",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "partido_imagen",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "periodo_presidencial",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "vicepresidente",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
				},
				"name": "presidente",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/presidentes",
								"parts": []any{
									"v1",
									"presidentes",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"proveedor_plazo_fijo_precancelable": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aviso_precancelacion_dia",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "canal",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "enlace",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "entidad",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "logo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "modalidad",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "moneda",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "monto_maximo",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "monto_minimo",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "plazo_max_dia",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "plazo_min_dia",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "plazo_precancelacion_dia",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "tea",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "tea_precancelacion",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "tna_precancelacion",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 16,
					},
				},
				"name": "proveedor_plazo_fijo_precancelable",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/tasas/plazoFijoPrecancelable",
								"parts": []any{
									"v1",
									"finanzas",
									"tasas",
									"plazoFijoPrecancelable",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "logo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "tasa",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 3,
					},
				},
				"name": "proveedor_plazo_fijo_uva_pago_periodico",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/tasas/plazoFijoUvaPagoPeriodico",
								"parts": []any{
									"v1",
									"finanzas",
									"tasas",
									"plazoFijoUvaPagoPeriodico",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fuente",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "indicador",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "informe",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "maximo",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "mediana",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "minimo",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "muestra",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "participante",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "percentil10",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "percentil25",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "percentil75",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "percentil90",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "periodo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "periodo_desde",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "periodo_hasta",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "periodo_tipo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "promedio",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "publicacion_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 19,
					},
					map[string]any{
						"name": "referencia",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 20,
					},
					map[string]any{
						"name": "referencia_fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 21,
					},
					map[string]any{
						"name": "unidad",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 22,
					},
					map[string]any{
						"name": "xlsx_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 23,
					},
				},
				"name": "rem",
				"op": map[string]any{
					"list": map[string]any{
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
											"active": true,
										},
										map[string]any{
											"example": "03",
											"kind": "param",
											"name": "mes",
											"orig": "mes",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "fuente",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "indicador",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "informe",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "maximo",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "mediana",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "minimo",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "muestra",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "participante",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "percentil10",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "percentil25",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "percentil75",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "percentil90",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "periodo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "periodo_desde",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "periodo_hasta",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "periodo_tipo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "promedio",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "publicacion_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 19,
					},
					map[string]any{
						"name": "referencia",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 20,
					},
					map[string]any{
						"name": "referencia_fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 21,
					},
					map[string]any{
						"name": "unidad",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 22,
					},
					map[string]any{
						"name": "xlsx_url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 23,
					},
				},
				"name": "rem_expectativa",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/rems/ultimo",
								"parts": []any{
									"v1",
									"rems",
									"ultimo",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "moneda",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
				},
				"name": "rendimiento",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "valor",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "riesgo_pai",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/indices/riesgo-pais",
								"parts": []any{
									"v1",
									"finanzas",
									"indices",
									"riesgo-pais",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
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
								"active": true,
								"args": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "foto",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "observacione",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "partido",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "periodo_legal",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "periodo_real",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "provincia",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "rede",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "reemplazo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "telefono",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
				},
				"name": "senador",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/senado/senadores",
								"parts": []any{
									"v1",
									"senado",
									"senadores",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "valor",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "tasa_intere",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/tasas/depositos30Dias",
								"parts": []any{
									"v1",
									"finanzas",
									"tasas",
									"depositos30Dias",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "logo",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "tna_cliente",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "tna_no_cliente",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 3,
					},
				},
				"name": "tasa_plazo_fijo",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/v1/finanzas/tasas/plazoFijo",
								"parts": []any{
									"v1",
									"finanzas",
									"tasas",
									"plazoFijo",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
