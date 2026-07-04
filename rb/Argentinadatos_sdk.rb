# Argentinadatos SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Argentinadatos_types'


class ArgentinadatosSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = ArgentinadatosUtility.new
    @_utility = utility

    config = ArgentinadatosConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features from config.
    feature_opts = ArgentinadatosHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      items = VoxgigStruct.items(feature_opts)
      if items
        items.each do |item|
          fname = item[0]
          fopts = ArgentinadatosHelpers.to_map(item[1])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, ArgentinadatosFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    ArgentinadatosUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = ArgentinadatosHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = ArgentinadatosHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = ArgentinadatosHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = ArgentinadatosSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    utility.make_fetch_def.call(ctx)
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue ArgentinadatosError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = ArgentinadatosHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = ArgentinadatosHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Idiomatic facade: client.acta.list / client.acta.load({ "id" => ... })
  def acta
    require_relative 'entity/acta_entity'
    @acta ||= ActaEntity.new(self, nil)
  end

  # Deprecated: use client.acta instead.
  def Acta(data = nil)
    require_relative 'entity/acta_entity'
    ActaEntity.new(self, data)
  end


  # Idiomatic facade: client.bonos_cer.list / client.bonos_cer.load({ "id" => ... })
  def bonos_cer
    require_relative 'entity/bonos_cer_entity'
    @bonos_cer ||= BonosCerEntity.new(self, nil)
  end

  # Deprecated: use client.bonos_cer instead.
  def BonosCer(data = nil)
    require_relative 'entity/bonos_cer_entity'
    BonosCerEntity.new(self, data)
  end


  # Idiomatic facade: client.cotizacion.list / client.cotizacion.load({ "id" => ... })
  def cotizacion
    require_relative 'entity/cotizacion_entity'
    @cotizacion ||= CotizacionEntity.new(self, nil)
  end

  # Deprecated: use client.cotizacion instead.
  def Cotizacion(data = nil)
    require_relative 'entity/cotizacion_entity'
    CotizacionEntity.new(self, data)
  end


  # Idiomatic facade: client.criptopeso.list / client.criptopeso.load({ "id" => ... })
  def criptopeso
    require_relative 'entity/criptopeso_entity'
    @criptopeso ||= CriptopesoEntity.new(self, nil)
  end

  # Deprecated: use client.criptopeso instead.
  def Criptopeso(data = nil)
    require_relative 'entity/criptopeso_entity'
    CriptopesoEntity.new(self, data)
  end


  # Idiomatic facade: client.cuenta_remunerada_usd.list / client.cuenta_remunerada_usd.load({ "id" => ... })
  def cuenta_remunerada_usd
    require_relative 'entity/cuenta_remunerada_usd_entity'
    @cuenta_remunerada_usd ||= CuentaRemuneradaUsdEntity.new(self, nil)
  end

  # Deprecated: use client.cuenta_remunerada_usd instead.
  def CuentaRemuneradaUsd(data = nil)
    require_relative 'entity/cuenta_remunerada_usd_entity'
    CuentaRemuneradaUsdEntity.new(self, data)
  end


  # Idiomatic facade: client.diputado.list / client.diputado.load({ "id" => ... })
  def diputado
    require_relative 'entity/diputado_entity'
    @diputado ||= DiputadoEntity.new(self, nil)
  end

  # Deprecated: use client.diputado instead.
  def Diputado(data = nil)
    require_relative 'entity/diputado_entity'
    DiputadoEntity.new(self, data)
  end


  # Idiomatic facade: client.entidad_rendimiento.list / client.entidad_rendimiento.load({ "id" => ... })
  def entidad_rendimiento
    require_relative 'entity/entidad_rendimiento_entity'
    @entidad_rendimiento ||= EntidadRendimientoEntity.new(self, nil)
  end

  # Deprecated: use client.entidad_rendimiento instead.
  def EntidadRendimiento(data = nil)
    require_relative 'entity/entidad_rendimiento_entity'
    EntidadRendimientoEntity.new(self, data)
  end


  # Idiomatic facade: client.estado.list / client.estado.load({ "id" => ... })
  def estado
    require_relative 'entity/estado_entity'
    @estado ||= EstadoEntity.new(self, nil)
  end

  # Deprecated: use client.estado instead.
  def Estado(data = nil)
    require_relative 'entity/estado_entity'
    EstadoEntity.new(self, data)
  end


  # Idiomatic facade: client.evento_presidencial.list / client.evento_presidencial.load({ "id" => ... })
  def evento_presidencial
    require_relative 'entity/evento_presidencial_entity'
    @evento_presidencial ||= EventoPresidencialEntity.new(self, nil)
  end

  # Deprecated: use client.evento_presidencial instead.
  def EventoPresidencial(data = nil)
    require_relative 'entity/evento_presidencial_entity'
    EventoPresidencialEntity.new(self, data)
  end


  # Idiomatic facade: client.feriado.list / client.feriado.load({ "id" => ... })
  def feriado
    require_relative 'entity/feriado_entity'
    @feriado ||= FeriadoEntity.new(self, nil)
  end

  # Deprecated: use client.feriado instead.
  def Feriado(data = nil)
    require_relative 'entity/feriado_entity'
    FeriadoEntity.new(self, data)
  end


  # Idiomatic facade: client.finanza.list / client.finanza.load({ "id" => ... })
  def finanza
    require_relative 'entity/finanza_entity'
    @finanza ||= FinanzaEntity.new(self, nil)
  end

  # Deprecated: use client.finanza instead.
  def Finanza(data = nil)
    require_relative 'entity/finanza_entity'
    FinanzaEntity.new(self, data)
  end


  # Idiomatic facade: client.fondo_comun_inversion.list / client.fondo_comun_inversion.load({ "id" => ... })
  def fondo_comun_inversion
    require_relative 'entity/fondo_comun_inversion_entity'
    @fondo_comun_inversion ||= FondoComunInversionEntity.new(self, nil)
  end

  # Deprecated: use client.fondo_comun_inversion instead.
  def FondoComunInversion(data = nil)
    require_relative 'entity/fondo_comun_inversion_entity'
    FondoComunInversionEntity.new(self, data)
  end


  # Idiomatic facade: client.fondo_comun_inversion_otro.list / client.fondo_comun_inversion_otro.load({ "id" => ... })
  def fondo_comun_inversion_otro
    require_relative 'entity/fondo_comun_inversion_otro_entity'
    @fondo_comun_inversion_otro ||= FondoComunInversionOtroEntity.new(self, nil)
  end

  # Deprecated: use client.fondo_comun_inversion_otro instead.
  def FondoComunInversionOtro(data = nil)
    require_relative 'entity/fondo_comun_inversion_otro_entity'
    FondoComunInversionOtroEntity.new(self, data)
  end


  # Idiomatic facade: client.fondo_comun_inversion_variable.list / client.fondo_comun_inversion_variable.load({ "id" => ... })
  def fondo_comun_inversion_variable
    require_relative 'entity/fondo_comun_inversion_variable_entity'
    @fondo_comun_inversion_variable ||= FondoComunInversionVariableEntity.new(self, nil)
  end

  # Deprecated: use client.fondo_comun_inversion_variable instead.
  def FondoComunInversionVariable(data = nil)
    require_relative 'entity/fondo_comun_inversion_variable_entity'
    FondoComunInversionVariableEntity.new(self, data)
  end


  # Idiomatic facade: client.hipotecario_uva_tna.list / client.hipotecario_uva_tna.load({ "id" => ... })
  def hipotecario_uva_tna
    require_relative 'entity/hipotecario_uva_tna_entity'
    @hipotecario_uva_tna ||= HipotecarioUvaTnaEntity.new(self, nil)
  end

  # Deprecated: use client.hipotecario_uva_tna instead.
  def HipotecarioUvaTna(data = nil)
    require_relative 'entity/hipotecario_uva_tna_entity'
    HipotecarioUvaTnaEntity.new(self, data)
  end


  # Idiomatic facade: client.indice_inflacion.list / client.indice_inflacion.load({ "id" => ... })
  def indice_inflacion
    require_relative 'entity/indice_inflacion_entity'
    @indice_inflacion ||= IndiceInflacionEntity.new(self, nil)
  end

  # Deprecated: use client.indice_inflacion instead.
  def IndiceInflacion(data = nil)
    require_relative 'entity/indice_inflacion_entity'
    IndiceInflacionEntity.new(self, data)
  end


  # Idiomatic facade: client.indice_uva.list / client.indice_uva.load({ "id" => ... })
  def indice_uva
    require_relative 'entity/indice_uva_entity'
    @indice_uva ||= IndiceUvaEntity.new(self, nil)
  end

  # Deprecated: use client.indice_uva instead.
  def IndiceUva(data = nil)
    require_relative 'entity/indice_uva_entity'
    IndiceUvaEntity.new(self, data)
  end


  # Idiomatic facade: client.letra.list / client.letra.load({ "id" => ... })
  def letra
    require_relative 'entity/letra_entity'
    @letra ||= LetraEntity.new(self, nil)
  end

  # Deprecated: use client.letra instead.
  def Letra(data = nil)
    require_relative 'entity/letra_entity'
    LetraEntity.new(self, data)
  end


  # Idiomatic facade: client.presidente.list / client.presidente.load({ "id" => ... })
  def presidente
    require_relative 'entity/presidente_entity'
    @presidente ||= PresidenteEntity.new(self, nil)
  end

  # Deprecated: use client.presidente instead.
  def Presidente(data = nil)
    require_relative 'entity/presidente_entity'
    PresidenteEntity.new(self, data)
  end


  # Idiomatic facade: client.proveedor_plazo_fijo_precancelable.list / client.proveedor_plazo_fijo_precancelable.load({ "id" => ... })
  def proveedor_plazo_fijo_precancelable
    require_relative 'entity/proveedor_plazo_fijo_precancelable_entity'
    @proveedor_plazo_fijo_precancelable ||= ProveedorPlazoFijoPrecancelableEntity.new(self, nil)
  end

  # Deprecated: use client.proveedor_plazo_fijo_precancelable instead.
  def ProveedorPlazoFijoPrecancelable(data = nil)
    require_relative 'entity/proveedor_plazo_fijo_precancelable_entity'
    ProveedorPlazoFijoPrecancelableEntity.new(self, data)
  end


  # Idiomatic facade: client.proveedor_plazo_fijo_uva_pago_periodico.list / client.proveedor_plazo_fijo_uva_pago_periodico.load({ "id" => ... })
  def proveedor_plazo_fijo_uva_pago_periodico
    require_relative 'entity/proveedor_plazo_fijo_uva_pago_periodico_entity'
    @proveedor_plazo_fijo_uva_pago_periodico ||= ProveedorPlazoFijoUvaPagoPeriodicoEntity.new(self, nil)
  end

  # Deprecated: use client.proveedor_plazo_fijo_uva_pago_periodico instead.
  def ProveedorPlazoFijoUvaPagoPeriodico(data = nil)
    require_relative 'entity/proveedor_plazo_fijo_uva_pago_periodico_entity'
    ProveedorPlazoFijoUvaPagoPeriodicoEntity.new(self, data)
  end


  # Idiomatic facade: client.rem.list / client.rem.load({ "id" => ... })
  def rem
    require_relative 'entity/rem_entity'
    @rem ||= RemEntity.new(self, nil)
  end

  # Deprecated: use client.rem instead.
  def Rem(data = nil)
    require_relative 'entity/rem_entity'
    RemEntity.new(self, data)
  end


  # Idiomatic facade: client.rem_expectativa.list / client.rem_expectativa.load({ "id" => ... })
  def rem_expectativa
    require_relative 'entity/rem_expectativa_entity'
    @rem_expectativa ||= RemExpectativaEntity.new(self, nil)
  end

  # Deprecated: use client.rem_expectativa instead.
  def RemExpectativa(data = nil)
    require_relative 'entity/rem_expectativa_entity'
    RemExpectativaEntity.new(self, data)
  end


  # Idiomatic facade: client.rendimiento.list / client.rendimiento.load({ "id" => ... })
  def rendimiento
    require_relative 'entity/rendimiento_entity'
    @rendimiento ||= RendimientoEntity.new(self, nil)
  end

  # Deprecated: use client.rendimiento instead.
  def Rendimiento(data = nil)
    require_relative 'entity/rendimiento_entity'
    RendimientoEntity.new(self, data)
  end


  # Idiomatic facade: client.riesgo_pai.list / client.riesgo_pai.load({ "id" => ... })
  def riesgo_pai
    require_relative 'entity/riesgo_pai_entity'
    @riesgo_pai ||= RiesgoPaiEntity.new(self, nil)
  end

  # Deprecated: use client.riesgo_pai instead.
  def RiesgoPai(data = nil)
    require_relative 'entity/riesgo_pai_entity'
    RiesgoPaiEntity.new(self, data)
  end


  # Idiomatic facade: client.senador.list / client.senador.load({ "id" => ... })
  def senador
    require_relative 'entity/senador_entity'
    @senador ||= SenadorEntity.new(self, nil)
  end

  # Deprecated: use client.senador instead.
  def Senador(data = nil)
    require_relative 'entity/senador_entity'
    SenadorEntity.new(self, data)
  end


  # Idiomatic facade: client.tasa_intere.list / client.tasa_intere.load({ "id" => ... })
  def tasa_intere
    require_relative 'entity/tasa_intere_entity'
    @tasa_intere ||= TasaIntereEntity.new(self, nil)
  end

  # Deprecated: use client.tasa_intere instead.
  def TasaIntere(data = nil)
    require_relative 'entity/tasa_intere_entity'
    TasaIntereEntity.new(self, data)
  end


  # Idiomatic facade: client.tasa_plazo_fijo.list / client.tasa_plazo_fijo.load({ "id" => ... })
  def tasa_plazo_fijo
    require_relative 'entity/tasa_plazo_fijo_entity'
    @tasa_plazo_fijo ||= TasaPlazoFijoEntity.new(self, nil)
  end

  # Deprecated: use client.tasa_plazo_fijo instead.
  def TasaPlazoFijo(data = nil)
    require_relative 'entity/tasa_plazo_fijo_entity'
    TasaPlazoFijoEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = ArgentinadatosSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
