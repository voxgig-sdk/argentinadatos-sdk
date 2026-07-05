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

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
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


  # Canonical facade: client.Acta.list / client.Acta.load({ "id" => ... })
  def Acta(data = nil)
    require_relative 'entity/acta_entity'
    ActaEntity.new(self, data)
  end


  # Canonical facade: client.BonosCer.list / client.BonosCer.load({ "id" => ... })
  def BonosCer(data = nil)
    require_relative 'entity/bonos_cer_entity'
    BonosCerEntity.new(self, data)
  end


  # Canonical facade: client.Cotizacion.list / client.Cotizacion.load({ "id" => ... })
  def Cotizacion(data = nil)
    require_relative 'entity/cotizacion_entity'
    CotizacionEntity.new(self, data)
  end


  # Canonical facade: client.Criptopeso.list / client.Criptopeso.load({ "id" => ... })
  def Criptopeso(data = nil)
    require_relative 'entity/criptopeso_entity'
    CriptopesoEntity.new(self, data)
  end


  # Canonical facade: client.CuentaRemuneradaUsd.list / client.CuentaRemuneradaUsd.load({ "id" => ... })
  def CuentaRemuneradaUsd(data = nil)
    require_relative 'entity/cuenta_remunerada_usd_entity'
    CuentaRemuneradaUsdEntity.new(self, data)
  end


  # Canonical facade: client.Diputado.list / client.Diputado.load({ "id" => ... })
  def Diputado(data = nil)
    require_relative 'entity/diputado_entity'
    DiputadoEntity.new(self, data)
  end


  # Canonical facade: client.EntidadRendimiento.list / client.EntidadRendimiento.load({ "id" => ... })
  def EntidadRendimiento(data = nil)
    require_relative 'entity/entidad_rendimiento_entity'
    EntidadRendimientoEntity.new(self, data)
  end


  # Canonical facade: client.Estado.list / client.Estado.load({ "id" => ... })
  def Estado(data = nil)
    require_relative 'entity/estado_entity'
    EstadoEntity.new(self, data)
  end


  # Canonical facade: client.EventoPresidencial.list / client.EventoPresidencial.load({ "id" => ... })
  def EventoPresidencial(data = nil)
    require_relative 'entity/evento_presidencial_entity'
    EventoPresidencialEntity.new(self, data)
  end


  # Canonical facade: client.Feriado.list / client.Feriado.load({ "id" => ... })
  def Feriado(data = nil)
    require_relative 'entity/feriado_entity'
    FeriadoEntity.new(self, data)
  end


  # Canonical facade: client.Finanza.list / client.Finanza.load({ "id" => ... })
  def Finanza(data = nil)
    require_relative 'entity/finanza_entity'
    FinanzaEntity.new(self, data)
  end


  # Canonical facade: client.FondoComunInversion.list / client.FondoComunInversion.load({ "id" => ... })
  def FondoComunInversion(data = nil)
    require_relative 'entity/fondo_comun_inversion_entity'
    FondoComunInversionEntity.new(self, data)
  end


  # Canonical facade: client.FondoComunInversionOtro.list / client.FondoComunInversionOtro.load({ "id" => ... })
  def FondoComunInversionOtro(data = nil)
    require_relative 'entity/fondo_comun_inversion_otro_entity'
    FondoComunInversionOtroEntity.new(self, data)
  end


  # Canonical facade: client.FondoComunInversionVariable.list / client.FondoComunInversionVariable.load({ "id" => ... })
  def FondoComunInversionVariable(data = nil)
    require_relative 'entity/fondo_comun_inversion_variable_entity'
    FondoComunInversionVariableEntity.new(self, data)
  end


  # Canonical facade: client.HipotecarioUvaTna.list / client.HipotecarioUvaTna.load({ "id" => ... })
  def HipotecarioUvaTna(data = nil)
    require_relative 'entity/hipotecario_uva_tna_entity'
    HipotecarioUvaTnaEntity.new(self, data)
  end


  # Canonical facade: client.IndiceInflacion.list / client.IndiceInflacion.load({ "id" => ... })
  def IndiceInflacion(data = nil)
    require_relative 'entity/indice_inflacion_entity'
    IndiceInflacionEntity.new(self, data)
  end


  # Canonical facade: client.IndiceUva.list / client.IndiceUva.load({ "id" => ... })
  def IndiceUva(data = nil)
    require_relative 'entity/indice_uva_entity'
    IndiceUvaEntity.new(self, data)
  end


  # Canonical facade: client.Letra.list / client.Letra.load({ "id" => ... })
  def Letra(data = nil)
    require_relative 'entity/letra_entity'
    LetraEntity.new(self, data)
  end


  # Canonical facade: client.Presidente.list / client.Presidente.load({ "id" => ... })
  def Presidente(data = nil)
    require_relative 'entity/presidente_entity'
    PresidenteEntity.new(self, data)
  end


  # Canonical facade: client.ProveedorPlazoFijoPrecancelable.list / client.ProveedorPlazoFijoPrecancelable.load({ "id" => ... })
  def ProveedorPlazoFijoPrecancelable(data = nil)
    require_relative 'entity/proveedor_plazo_fijo_precancelable_entity'
    ProveedorPlazoFijoPrecancelableEntity.new(self, data)
  end


  # Canonical facade: client.ProveedorPlazoFijoUvaPagoPeriodico.list / client.ProveedorPlazoFijoUvaPagoPeriodico.load({ "id" => ... })
  def ProveedorPlazoFijoUvaPagoPeriodico(data = nil)
    require_relative 'entity/proveedor_plazo_fijo_uva_pago_periodico_entity'
    ProveedorPlazoFijoUvaPagoPeriodicoEntity.new(self, data)
  end


  # Canonical facade: client.Rem.list / client.Rem.load({ "id" => ... })
  def Rem(data = nil)
    require_relative 'entity/rem_entity'
    RemEntity.new(self, data)
  end


  # Canonical facade: client.RemExpectativa.list / client.RemExpectativa.load({ "id" => ... })
  def RemExpectativa(data = nil)
    require_relative 'entity/rem_expectativa_entity'
    RemExpectativaEntity.new(self, data)
  end


  # Canonical facade: client.Rendimiento.list / client.Rendimiento.load({ "id" => ... })
  def Rendimiento(data = nil)
    require_relative 'entity/rendimiento_entity'
    RendimientoEntity.new(self, data)
  end


  # Canonical facade: client.RiesgoPai.list / client.RiesgoPai.load({ "id" => ... })
  def RiesgoPai(data = nil)
    require_relative 'entity/riesgo_pai_entity'
    RiesgoPaiEntity.new(self, data)
  end


  # Canonical facade: client.Senador.list / client.Senador.load({ "id" => ... })
  def Senador(data = nil)
    require_relative 'entity/senador_entity'
    SenadorEntity.new(self, data)
  end


  # Canonical facade: client.TasaIntere.list / client.TasaIntere.load({ "id" => ... })
  def TasaIntere(data = nil)
    require_relative 'entity/tasa_intere_entity'
    TasaIntereEntity.new(self, data)
  end


  # Canonical facade: client.TasaPlazoFijo.list / client.TasaPlazoFijo.load({ "id" => ... })
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
