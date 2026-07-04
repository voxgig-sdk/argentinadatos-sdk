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
						"active": true,
						"name": "abstencione",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "acta",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "acta_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "afirmativo",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "amn",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "ausente",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "descripcion",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "mayoria",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "miembro",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "negativo",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "numero_acta",
						"req": false,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "observacione",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "periodo",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "presente",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "presidente",
						"req": false,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "proyecto",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "quorum_tipo",
						"req": false,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "resultado",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "reunion",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "titulo",
						"req": false,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "voto",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "votos_afirmativo",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "votos_negativo",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 24,
					},
				},
				"name": "acta",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 1,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 2026,
											"kind": "param",
											"name": "id",
											"orig": "año",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 2026,
											"kind": "param",
											"name": "id",
											"orig": "año",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 1,
							},
						},
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
						"active": true,
						"name": "fecha_vencimiento",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "precio_ar",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "ticker",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "tir_porcentaje",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "voluman",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 4,
					},
				},
				"name": "bonos_cer",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "casa",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "compra",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "moneda",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "venta",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 4,
					},
				},
				"name": "cotizacion",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "blue",
											"kind": "param",
											"name": "casa",
											"orig": "casa",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "2024/01/01",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "blue",
											"kind": "param",
											"name": "casa",
											"orig": "casa",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 1,
							},
						},
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
						"active": true,
						"name": "entidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "token",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "criptopeso",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "entidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "tasa",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "tope",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
				},
				"name": "cuenta_remunerada_usd",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "apellido",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "bloque",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "cese_fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "foto",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "genero",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "juramento_fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "periodo_bloque",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "periodo_mandato",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "provincia",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
				},
				"name": "diputado",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "entidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "rendimiento",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 1,
					},
				},
				"name": "entidad_rendimiento",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "aleatorio",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "estado",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "estado",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "evento",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "tipo",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "evento_presidencial",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "tipo",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "feriado",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 2026,
											"kind": "param",
											"name": "id",
											"orig": "año",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
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
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "ccp",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "fondo",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "horizonte",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "patrimonio",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "tipo",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "vcp",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 6,
					},
				},
				"name": "fondo_comun_inversion",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 3,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ultimo",
											"kind": "param",
											"name": "fecha",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 4,
							},
						},
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
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "fondo",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "tea",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "tope",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 4,
					},
				},
				"name": "fondo_comun_inversion_otro",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ultimo",
											"kind": "param",
											"name": "id",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "condicione",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "condiciones_corto",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "fondo",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "tea",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "tipo",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "tope",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 8,
					},
				},
				"name": "fondo_comun_inversion_variable",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ultimo",
											"kind": "param",
											"name": "id",
											"orig": "fecha",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "entidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "nombre_comercial",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 3,
					},
				},
				"name": "hipotecario_uva_tna",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "valor",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 1,
					},
				},
				"name": "indice_inflacion",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 1,
							},
						},
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
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "valor",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 1,
					},
				},
				"name": "indice_uva",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "fecha_emision",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "fecha_vencimiento",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "tem",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "ticker",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "vpv",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 4,
					},
				},
				"name": "letra",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "fin",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "imagen",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "inicio",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "partido",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "partido_imagen",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "periodo_presidencial",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "vicepresidente",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
				},
				"name": "presidente",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "aviso_precancelacion_dia",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "canal",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "enlace",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "entidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "logo",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "modalidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "moneda",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "monto_maximo",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "monto_minimo",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "plazo_max_dia",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "plazo_min_dia",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "plazo_precancelacion_dia",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "tea",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "tea_precancelacion",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "tna",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "tna_precancelacion",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 16,
					},
				},
				"name": "proveedor_plazo_fijo_precancelable",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "entidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "logo",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "tasa",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 3,
					},
				},
				"name": "proveedor_plazo_fijo_uva_pago_periodico",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "desvio",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "fuente",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "indicador",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "informe",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "maximo",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "mediana",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "minimo",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "muestra",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "participante",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "percentil10",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "percentil25",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "percentil75",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "percentil90",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "periodo",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "periodo_desde",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "periodo_hasta",
						"req": false,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "periodo_tipo",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "promedio",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "publicacion_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "referencia",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "referencia_fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "unidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "xlsx_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 23,
					},
				},
				"name": "rem",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 2026,
											"kind": "param",
											"name": "año",
											"orig": "año",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "03",
											"kind": "param",
											"name": "mes",
											"orig": "mes",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "desvio",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "fuente",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "indicador",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "informe",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "maximo",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "mediana",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "minimo",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "muestra",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "participante",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "percentil10",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "percentil25",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "percentil75",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "percentil90",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "periodo",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "periodo_desde",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "periodo_hasta",
						"req": false,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "periodo_tipo",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "promedio",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "publicacion_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "referencia",
						"req": false,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "referencia_fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "unidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "xlsx_url",
						"req": false,
						"type": "`$STRING`",
						"index$": 23,
					},
				},
				"name": "rem_expectativa",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "apy",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "moneda",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
				},
				"name": "rendimiento",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "nexo",
											"kind": "param",
											"name": "id",
											"orig": "entidad",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "valor",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 1,
					},
				},
				"name": "riesgo_pai",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "email",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "foto",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "nombre",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "observacione",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "partido",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "periodo_legal",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "periodo_real",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "provincia",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "rede",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "reemplazo",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "telefono",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
				},
				"name": "senador",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "fecha",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "valor",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 1,
					},
				},
				"name": "tasa_intere",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
						"active": true,
						"name": "entidad",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "logo",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "tna_cliente",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "tna_no_cliente",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 3,
					},
				},
				"name": "tasa_plazo_fijo",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{},
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
								"index$": 0,
							},
						},
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
