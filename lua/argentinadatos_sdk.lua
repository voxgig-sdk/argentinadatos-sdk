-- Argentinadatos SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local ArgentinadatosSDK = {}
ArgentinadatosSDK.__index = ArgentinadatosSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

ArgentinadatosSDK._make_feature = _make_feature


function ArgentinadatosSDK.new(options)
  local self = setmetatable({}, ArgentinadatosSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features from config.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local feature_items = vs.items(feature_opts)
    if feature_items ~= nil then
      for _, item in ipairs(feature_items) do
        local fname = item[1]
        local fopts = helpers.to_map(item[2])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

  -- #BuildFeatures

  return self
end


function ArgentinadatosSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function ArgentinadatosSDK:get_utility()
  return Utility.copy(self._utility)
end


function ArgentinadatosSDK:get_root_ctx()
  return self._rootctx
end


function ArgentinadatosSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


function ArgentinadatosSDK:direct(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end



-- Idiomatic facade: client:acta():list() / client:acta():load({ id = ... })
function ArgentinadatosSDK:acta(data)
  local EntityMod = require("entity.acta_entity")
  if data == nil then
    if self._acta == nil then
      self._acta = EntityMod.new(self, nil)
    end
    return self._acta
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:acta() instead.
function ArgentinadatosSDK:Acta(data)
  local EntityMod = require("entity.acta_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:bonos_cer():list() / client:bonos_cer():load({ id = ... })
function ArgentinadatosSDK:bonos_cer(data)
  local EntityMod = require("entity.bonos_cer_entity")
  if data == nil then
    if self._bonos_cer == nil then
      self._bonos_cer = EntityMod.new(self, nil)
    end
    return self._bonos_cer
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:bonos_cer() instead.
function ArgentinadatosSDK:BonosCer(data)
  local EntityMod = require("entity.bonos_cer_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:cotizacion():list() / client:cotizacion():load({ id = ... })
function ArgentinadatosSDK:cotizacion(data)
  local EntityMod = require("entity.cotizacion_entity")
  if data == nil then
    if self._cotizacion == nil then
      self._cotizacion = EntityMod.new(self, nil)
    end
    return self._cotizacion
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:cotizacion() instead.
function ArgentinadatosSDK:Cotizacion(data)
  local EntityMod = require("entity.cotizacion_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:criptopeso():list() / client:criptopeso():load({ id = ... })
function ArgentinadatosSDK:criptopeso(data)
  local EntityMod = require("entity.criptopeso_entity")
  if data == nil then
    if self._criptopeso == nil then
      self._criptopeso = EntityMod.new(self, nil)
    end
    return self._criptopeso
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:criptopeso() instead.
function ArgentinadatosSDK:Criptopeso(data)
  local EntityMod = require("entity.criptopeso_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:cuenta_remunerada_usd():list() / client:cuenta_remunerada_usd():load({ id = ... })
function ArgentinadatosSDK:cuenta_remunerada_usd(data)
  local EntityMod = require("entity.cuenta_remunerada_usd_entity")
  if data == nil then
    if self._cuenta_remunerada_usd == nil then
      self._cuenta_remunerada_usd = EntityMod.new(self, nil)
    end
    return self._cuenta_remunerada_usd
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:cuenta_remunerada_usd() instead.
function ArgentinadatosSDK:CuentaRemuneradaUsd(data)
  local EntityMod = require("entity.cuenta_remunerada_usd_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:diputado():list() / client:diputado():load({ id = ... })
function ArgentinadatosSDK:diputado(data)
  local EntityMod = require("entity.diputado_entity")
  if data == nil then
    if self._diputado == nil then
      self._diputado = EntityMod.new(self, nil)
    end
    return self._diputado
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:diputado() instead.
function ArgentinadatosSDK:Diputado(data)
  local EntityMod = require("entity.diputado_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:entidad_rendimiento():list() / client:entidad_rendimiento():load({ id = ... })
function ArgentinadatosSDK:entidad_rendimiento(data)
  local EntityMod = require("entity.entidad_rendimiento_entity")
  if data == nil then
    if self._entidad_rendimiento == nil then
      self._entidad_rendimiento = EntityMod.new(self, nil)
    end
    return self._entidad_rendimiento
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:entidad_rendimiento() instead.
function ArgentinadatosSDK:EntidadRendimiento(data)
  local EntityMod = require("entity.entidad_rendimiento_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:estado():list() / client:estado():load({ id = ... })
function ArgentinadatosSDK:estado(data)
  local EntityMod = require("entity.estado_entity")
  if data == nil then
    if self._estado == nil then
      self._estado = EntityMod.new(self, nil)
    end
    return self._estado
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:estado() instead.
function ArgentinadatosSDK:Estado(data)
  local EntityMod = require("entity.estado_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:evento_presidencial():list() / client:evento_presidencial():load({ id = ... })
function ArgentinadatosSDK:evento_presidencial(data)
  local EntityMod = require("entity.evento_presidencial_entity")
  if data == nil then
    if self._evento_presidencial == nil then
      self._evento_presidencial = EntityMod.new(self, nil)
    end
    return self._evento_presidencial
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:evento_presidencial() instead.
function ArgentinadatosSDK:EventoPresidencial(data)
  local EntityMod = require("entity.evento_presidencial_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:feriado():list() / client:feriado():load({ id = ... })
function ArgentinadatosSDK:feriado(data)
  local EntityMod = require("entity.feriado_entity")
  if data == nil then
    if self._feriado == nil then
      self._feriado = EntityMod.new(self, nil)
    end
    return self._feriado
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:feriado() instead.
function ArgentinadatosSDK:Feriado(data)
  local EntityMod = require("entity.feriado_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:finanza():list() / client:finanza():load({ id = ... })
function ArgentinadatosSDK:finanza(data)
  local EntityMod = require("entity.finanza_entity")
  if data == nil then
    if self._finanza == nil then
      self._finanza = EntityMod.new(self, nil)
    end
    return self._finanza
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:finanza() instead.
function ArgentinadatosSDK:Finanza(data)
  local EntityMod = require("entity.finanza_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:fondo_comun_inversion():list() / client:fondo_comun_inversion():load({ id = ... })
function ArgentinadatosSDK:fondo_comun_inversion(data)
  local EntityMod = require("entity.fondo_comun_inversion_entity")
  if data == nil then
    if self._fondo_comun_inversion == nil then
      self._fondo_comun_inversion = EntityMod.new(self, nil)
    end
    return self._fondo_comun_inversion
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:fondo_comun_inversion() instead.
function ArgentinadatosSDK:FondoComunInversion(data)
  local EntityMod = require("entity.fondo_comun_inversion_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:fondo_comun_inversion_otro():list() / client:fondo_comun_inversion_otro():load({ id = ... })
function ArgentinadatosSDK:fondo_comun_inversion_otro(data)
  local EntityMod = require("entity.fondo_comun_inversion_otro_entity")
  if data == nil then
    if self._fondo_comun_inversion_otro == nil then
      self._fondo_comun_inversion_otro = EntityMod.new(self, nil)
    end
    return self._fondo_comun_inversion_otro
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:fondo_comun_inversion_otro() instead.
function ArgentinadatosSDK:FondoComunInversionOtro(data)
  local EntityMod = require("entity.fondo_comun_inversion_otro_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:fondo_comun_inversion_variable():list() / client:fondo_comun_inversion_variable():load({ id = ... })
function ArgentinadatosSDK:fondo_comun_inversion_variable(data)
  local EntityMod = require("entity.fondo_comun_inversion_variable_entity")
  if data == nil then
    if self._fondo_comun_inversion_variable == nil then
      self._fondo_comun_inversion_variable = EntityMod.new(self, nil)
    end
    return self._fondo_comun_inversion_variable
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:fondo_comun_inversion_variable() instead.
function ArgentinadatosSDK:FondoComunInversionVariable(data)
  local EntityMod = require("entity.fondo_comun_inversion_variable_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:hipotecario_uva_tna():list() / client:hipotecario_uva_tna():load({ id = ... })
function ArgentinadatosSDK:hipotecario_uva_tna(data)
  local EntityMod = require("entity.hipotecario_uva_tna_entity")
  if data == nil then
    if self._hipotecario_uva_tna == nil then
      self._hipotecario_uva_tna = EntityMod.new(self, nil)
    end
    return self._hipotecario_uva_tna
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:hipotecario_uva_tna() instead.
function ArgentinadatosSDK:HipotecarioUvaTna(data)
  local EntityMod = require("entity.hipotecario_uva_tna_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:indice_inflacion():list() / client:indice_inflacion():load({ id = ... })
function ArgentinadatosSDK:indice_inflacion(data)
  local EntityMod = require("entity.indice_inflacion_entity")
  if data == nil then
    if self._indice_inflacion == nil then
      self._indice_inflacion = EntityMod.new(self, nil)
    end
    return self._indice_inflacion
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:indice_inflacion() instead.
function ArgentinadatosSDK:IndiceInflacion(data)
  local EntityMod = require("entity.indice_inflacion_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:indice_uva():list() / client:indice_uva():load({ id = ... })
function ArgentinadatosSDK:indice_uva(data)
  local EntityMod = require("entity.indice_uva_entity")
  if data == nil then
    if self._indice_uva == nil then
      self._indice_uva = EntityMod.new(self, nil)
    end
    return self._indice_uva
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:indice_uva() instead.
function ArgentinadatosSDK:IndiceUva(data)
  local EntityMod = require("entity.indice_uva_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:letra():list() / client:letra():load({ id = ... })
function ArgentinadatosSDK:letra(data)
  local EntityMod = require("entity.letra_entity")
  if data == nil then
    if self._letra == nil then
      self._letra = EntityMod.new(self, nil)
    end
    return self._letra
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:letra() instead.
function ArgentinadatosSDK:Letra(data)
  local EntityMod = require("entity.letra_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:presidente():list() / client:presidente():load({ id = ... })
function ArgentinadatosSDK:presidente(data)
  local EntityMod = require("entity.presidente_entity")
  if data == nil then
    if self._presidente == nil then
      self._presidente = EntityMod.new(self, nil)
    end
    return self._presidente
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:presidente() instead.
function ArgentinadatosSDK:Presidente(data)
  local EntityMod = require("entity.presidente_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:proveedor_plazo_fijo_precancelable():list() / client:proveedor_plazo_fijo_precancelable():load({ id = ... })
function ArgentinadatosSDK:proveedor_plazo_fijo_precancelable(data)
  local EntityMod = require("entity.proveedor_plazo_fijo_precancelable_entity")
  if data == nil then
    if self._proveedor_plazo_fijo_precancelable == nil then
      self._proveedor_plazo_fijo_precancelable = EntityMod.new(self, nil)
    end
    return self._proveedor_plazo_fijo_precancelable
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:proveedor_plazo_fijo_precancelable() instead.
function ArgentinadatosSDK:ProveedorPlazoFijoPrecancelable(data)
  local EntityMod = require("entity.proveedor_plazo_fijo_precancelable_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:proveedor_plazo_fijo_uva_pago_periodico():list() / client:proveedor_plazo_fijo_uva_pago_periodico():load({ id = ... })
function ArgentinadatosSDK:proveedor_plazo_fijo_uva_pago_periodico(data)
  local EntityMod = require("entity.proveedor_plazo_fijo_uva_pago_periodico_entity")
  if data == nil then
    if self._proveedor_plazo_fijo_uva_pago_periodico == nil then
      self._proveedor_plazo_fijo_uva_pago_periodico = EntityMod.new(self, nil)
    end
    return self._proveedor_plazo_fijo_uva_pago_periodico
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:proveedor_plazo_fijo_uva_pago_periodico() instead.
function ArgentinadatosSDK:ProveedorPlazoFijoUvaPagoPeriodico(data)
  local EntityMod = require("entity.proveedor_plazo_fijo_uva_pago_periodico_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:rem():list() / client:rem():load({ id = ... })
function ArgentinadatosSDK:rem(data)
  local EntityMod = require("entity.rem_entity")
  if data == nil then
    if self._rem == nil then
      self._rem = EntityMod.new(self, nil)
    end
    return self._rem
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:rem() instead.
function ArgentinadatosSDK:Rem(data)
  local EntityMod = require("entity.rem_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:rem_expectativa():list() / client:rem_expectativa():load({ id = ... })
function ArgentinadatosSDK:rem_expectativa(data)
  local EntityMod = require("entity.rem_expectativa_entity")
  if data == nil then
    if self._rem_expectativa == nil then
      self._rem_expectativa = EntityMod.new(self, nil)
    end
    return self._rem_expectativa
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:rem_expectativa() instead.
function ArgentinadatosSDK:RemExpectativa(data)
  local EntityMod = require("entity.rem_expectativa_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:rendimiento():list() / client:rendimiento():load({ id = ... })
function ArgentinadatosSDK:rendimiento(data)
  local EntityMod = require("entity.rendimiento_entity")
  if data == nil then
    if self._rendimiento == nil then
      self._rendimiento = EntityMod.new(self, nil)
    end
    return self._rendimiento
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:rendimiento() instead.
function ArgentinadatosSDK:Rendimiento(data)
  local EntityMod = require("entity.rendimiento_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:riesgo_pai():list() / client:riesgo_pai():load({ id = ... })
function ArgentinadatosSDK:riesgo_pai(data)
  local EntityMod = require("entity.riesgo_pai_entity")
  if data == nil then
    if self._riesgo_pai == nil then
      self._riesgo_pai = EntityMod.new(self, nil)
    end
    return self._riesgo_pai
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:riesgo_pai() instead.
function ArgentinadatosSDK:RiesgoPai(data)
  local EntityMod = require("entity.riesgo_pai_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:senador():list() / client:senador():load({ id = ... })
function ArgentinadatosSDK:senador(data)
  local EntityMod = require("entity.senador_entity")
  if data == nil then
    if self._senador == nil then
      self._senador = EntityMod.new(self, nil)
    end
    return self._senador
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:senador() instead.
function ArgentinadatosSDK:Senador(data)
  local EntityMod = require("entity.senador_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:tasa_intere():list() / client:tasa_intere():load({ id = ... })
function ArgentinadatosSDK:tasa_intere(data)
  local EntityMod = require("entity.tasa_intere_entity")
  if data == nil then
    if self._tasa_intere == nil then
      self._tasa_intere = EntityMod.new(self, nil)
    end
    return self._tasa_intere
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:tasa_intere() instead.
function ArgentinadatosSDK:TasaIntere(data)
  local EntityMod = require("entity.tasa_intere_entity")
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:tasa_plazo_fijo():list() / client:tasa_plazo_fijo():load({ id = ... })
function ArgentinadatosSDK:tasa_plazo_fijo(data)
  local EntityMod = require("entity.tasa_plazo_fijo_entity")
  if data == nil then
    if self._tasa_plazo_fijo == nil then
      self._tasa_plazo_fijo = EntityMod.new(self, nil)
    end
    return self._tasa_plazo_fijo
  end
  return EntityMod.new(self, data)
end

-- Deprecated: use client:tasa_plazo_fijo() instead.
function ArgentinadatosSDK:TasaPlazoFijo(data)
  local EntityMod = require("entity.tasa_plazo_fijo_entity")
  return EntityMod.new(self, data)
end




function ArgentinadatosSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = ArgentinadatosSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return ArgentinadatosSDK
