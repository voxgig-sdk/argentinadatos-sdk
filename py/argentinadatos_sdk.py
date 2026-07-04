# Argentinadatos SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import ArgentinadatosUtility
from core.spec import ArgentinadatosSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import ArgentinadatosBaseFeature
from features import _make_feature


class ArgentinadatosSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = ArgentinadatosUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features from config.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            feature_items = vs.items(feature_opts)
            if feature_items is not None:
                for item in feature_items:
                    fname = item[0]
                    fopts = helpers.to_map(item[1])
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return ArgentinadatosUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = ArgentinadatosSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    def direct(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }


    @property
    def acta(self):
        """Idiomatic facade: client.acta.list() / client.acta.load({"id": ...})."""
        from entity.acta_entity import ActaEntity
        cached = getattr(self, "_acta", None)
        if cached is None:
            cached = ActaEntity(self, None)
            self._acta = cached
        return cached

    def Acta(self, data=None):
        # Deprecated: use client.acta instead.
        from entity.acta_entity import ActaEntity
        return ActaEntity(self, data)


    @property
    def bonos_cer(self):
        """Idiomatic facade: client.bonos_cer.list() / client.bonos_cer.load({"id": ...})."""
        from entity.bonos_cer_entity import BonosCerEntity
        cached = getattr(self, "_bonos_cer", None)
        if cached is None:
            cached = BonosCerEntity(self, None)
            self._bonos_cer = cached
        return cached

    def BonosCer(self, data=None):
        # Deprecated: use client.bonos_cer instead.
        from entity.bonos_cer_entity import BonosCerEntity
        return BonosCerEntity(self, data)


    @property
    def cotizacion(self):
        """Idiomatic facade: client.cotizacion.list() / client.cotizacion.load({"id": ...})."""
        from entity.cotizacion_entity import CotizacionEntity
        cached = getattr(self, "_cotizacion", None)
        if cached is None:
            cached = CotizacionEntity(self, None)
            self._cotizacion = cached
        return cached

    def Cotizacion(self, data=None):
        # Deprecated: use client.cotizacion instead.
        from entity.cotizacion_entity import CotizacionEntity
        return CotizacionEntity(self, data)


    @property
    def criptopeso(self):
        """Idiomatic facade: client.criptopeso.list() / client.criptopeso.load({"id": ...})."""
        from entity.criptopeso_entity import CriptopesoEntity
        cached = getattr(self, "_criptopeso", None)
        if cached is None:
            cached = CriptopesoEntity(self, None)
            self._criptopeso = cached
        return cached

    def Criptopeso(self, data=None):
        # Deprecated: use client.criptopeso instead.
        from entity.criptopeso_entity import CriptopesoEntity
        return CriptopesoEntity(self, data)


    @property
    def cuenta_remunerada_usd(self):
        """Idiomatic facade: client.cuenta_remunerada_usd.list() / client.cuenta_remunerada_usd.load({"id": ...})."""
        from entity.cuenta_remunerada_usd_entity import CuentaRemuneradaUsdEntity
        cached = getattr(self, "_cuenta_remunerada_usd", None)
        if cached is None:
            cached = CuentaRemuneradaUsdEntity(self, None)
            self._cuenta_remunerada_usd = cached
        return cached

    def CuentaRemuneradaUsd(self, data=None):
        # Deprecated: use client.cuenta_remunerada_usd instead.
        from entity.cuenta_remunerada_usd_entity import CuentaRemuneradaUsdEntity
        return CuentaRemuneradaUsdEntity(self, data)


    @property
    def diputado(self):
        """Idiomatic facade: client.diputado.list() / client.diputado.load({"id": ...})."""
        from entity.diputado_entity import DiputadoEntity
        cached = getattr(self, "_diputado", None)
        if cached is None:
            cached = DiputadoEntity(self, None)
            self._diputado = cached
        return cached

    def Diputado(self, data=None):
        # Deprecated: use client.diputado instead.
        from entity.diputado_entity import DiputadoEntity
        return DiputadoEntity(self, data)


    @property
    def entidad_rendimiento(self):
        """Idiomatic facade: client.entidad_rendimiento.list() / client.entidad_rendimiento.load({"id": ...})."""
        from entity.entidad_rendimiento_entity import EntidadRendimientoEntity
        cached = getattr(self, "_entidad_rendimiento", None)
        if cached is None:
            cached = EntidadRendimientoEntity(self, None)
            self._entidad_rendimiento = cached
        return cached

    def EntidadRendimiento(self, data=None):
        # Deprecated: use client.entidad_rendimiento instead.
        from entity.entidad_rendimiento_entity import EntidadRendimientoEntity
        return EntidadRendimientoEntity(self, data)


    @property
    def estado(self):
        """Idiomatic facade: client.estado.list() / client.estado.load({"id": ...})."""
        from entity.estado_entity import EstadoEntity
        cached = getattr(self, "_estado", None)
        if cached is None:
            cached = EstadoEntity(self, None)
            self._estado = cached
        return cached

    def Estado(self, data=None):
        # Deprecated: use client.estado instead.
        from entity.estado_entity import EstadoEntity
        return EstadoEntity(self, data)


    @property
    def evento_presidencial(self):
        """Idiomatic facade: client.evento_presidencial.list() / client.evento_presidencial.load({"id": ...})."""
        from entity.evento_presidencial_entity import EventoPresidencialEntity
        cached = getattr(self, "_evento_presidencial", None)
        if cached is None:
            cached = EventoPresidencialEntity(self, None)
            self._evento_presidencial = cached
        return cached

    def EventoPresidencial(self, data=None):
        # Deprecated: use client.evento_presidencial instead.
        from entity.evento_presidencial_entity import EventoPresidencialEntity
        return EventoPresidencialEntity(self, data)


    @property
    def feriado(self):
        """Idiomatic facade: client.feriado.list() / client.feriado.load({"id": ...})."""
        from entity.feriado_entity import FeriadoEntity
        cached = getattr(self, "_feriado", None)
        if cached is None:
            cached = FeriadoEntity(self, None)
            self._feriado = cached
        return cached

    def Feriado(self, data=None):
        # Deprecated: use client.feriado instead.
        from entity.feriado_entity import FeriadoEntity
        return FeriadoEntity(self, data)


    @property
    def finanza(self):
        """Idiomatic facade: client.finanza.list() / client.finanza.load({"id": ...})."""
        from entity.finanza_entity import FinanzaEntity
        cached = getattr(self, "_finanza", None)
        if cached is None:
            cached = FinanzaEntity(self, None)
            self._finanza = cached
        return cached

    def Finanza(self, data=None):
        # Deprecated: use client.finanza instead.
        from entity.finanza_entity import FinanzaEntity
        return FinanzaEntity(self, data)


    @property
    def fondo_comun_inversion(self):
        """Idiomatic facade: client.fondo_comun_inversion.list() / client.fondo_comun_inversion.load({"id": ...})."""
        from entity.fondo_comun_inversion_entity import FondoComunInversionEntity
        cached = getattr(self, "_fondo_comun_inversion", None)
        if cached is None:
            cached = FondoComunInversionEntity(self, None)
            self._fondo_comun_inversion = cached
        return cached

    def FondoComunInversion(self, data=None):
        # Deprecated: use client.fondo_comun_inversion instead.
        from entity.fondo_comun_inversion_entity import FondoComunInversionEntity
        return FondoComunInversionEntity(self, data)


    @property
    def fondo_comun_inversion_otro(self):
        """Idiomatic facade: client.fondo_comun_inversion_otro.list() / client.fondo_comun_inversion_otro.load({"id": ...})."""
        from entity.fondo_comun_inversion_otro_entity import FondoComunInversionOtroEntity
        cached = getattr(self, "_fondo_comun_inversion_otro", None)
        if cached is None:
            cached = FondoComunInversionOtroEntity(self, None)
            self._fondo_comun_inversion_otro = cached
        return cached

    def FondoComunInversionOtro(self, data=None):
        # Deprecated: use client.fondo_comun_inversion_otro instead.
        from entity.fondo_comun_inversion_otro_entity import FondoComunInversionOtroEntity
        return FondoComunInversionOtroEntity(self, data)


    @property
    def fondo_comun_inversion_variable(self):
        """Idiomatic facade: client.fondo_comun_inversion_variable.list() / client.fondo_comun_inversion_variable.load({"id": ...})."""
        from entity.fondo_comun_inversion_variable_entity import FondoComunInversionVariableEntity
        cached = getattr(self, "_fondo_comun_inversion_variable", None)
        if cached is None:
            cached = FondoComunInversionVariableEntity(self, None)
            self._fondo_comun_inversion_variable = cached
        return cached

    def FondoComunInversionVariable(self, data=None):
        # Deprecated: use client.fondo_comun_inversion_variable instead.
        from entity.fondo_comun_inversion_variable_entity import FondoComunInversionVariableEntity
        return FondoComunInversionVariableEntity(self, data)


    @property
    def hipotecario_uva_tna(self):
        """Idiomatic facade: client.hipotecario_uva_tna.list() / client.hipotecario_uva_tna.load({"id": ...})."""
        from entity.hipotecario_uva_tna_entity import HipotecarioUvaTnaEntity
        cached = getattr(self, "_hipotecario_uva_tna", None)
        if cached is None:
            cached = HipotecarioUvaTnaEntity(self, None)
            self._hipotecario_uva_tna = cached
        return cached

    def HipotecarioUvaTna(self, data=None):
        # Deprecated: use client.hipotecario_uva_tna instead.
        from entity.hipotecario_uva_tna_entity import HipotecarioUvaTnaEntity
        return HipotecarioUvaTnaEntity(self, data)


    @property
    def indice_inflacion(self):
        """Idiomatic facade: client.indice_inflacion.list() / client.indice_inflacion.load({"id": ...})."""
        from entity.indice_inflacion_entity import IndiceInflacionEntity
        cached = getattr(self, "_indice_inflacion", None)
        if cached is None:
            cached = IndiceInflacionEntity(self, None)
            self._indice_inflacion = cached
        return cached

    def IndiceInflacion(self, data=None):
        # Deprecated: use client.indice_inflacion instead.
        from entity.indice_inflacion_entity import IndiceInflacionEntity
        return IndiceInflacionEntity(self, data)


    @property
    def indice_uva(self):
        """Idiomatic facade: client.indice_uva.list() / client.indice_uva.load({"id": ...})."""
        from entity.indice_uva_entity import IndiceUvaEntity
        cached = getattr(self, "_indice_uva", None)
        if cached is None:
            cached = IndiceUvaEntity(self, None)
            self._indice_uva = cached
        return cached

    def IndiceUva(self, data=None):
        # Deprecated: use client.indice_uva instead.
        from entity.indice_uva_entity import IndiceUvaEntity
        return IndiceUvaEntity(self, data)


    @property
    def letra(self):
        """Idiomatic facade: client.letra.list() / client.letra.load({"id": ...})."""
        from entity.letra_entity import LetraEntity
        cached = getattr(self, "_letra", None)
        if cached is None:
            cached = LetraEntity(self, None)
            self._letra = cached
        return cached

    def Letra(self, data=None):
        # Deprecated: use client.letra instead.
        from entity.letra_entity import LetraEntity
        return LetraEntity(self, data)


    @property
    def presidente(self):
        """Idiomatic facade: client.presidente.list() / client.presidente.load({"id": ...})."""
        from entity.presidente_entity import PresidenteEntity
        cached = getattr(self, "_presidente", None)
        if cached is None:
            cached = PresidenteEntity(self, None)
            self._presidente = cached
        return cached

    def Presidente(self, data=None):
        # Deprecated: use client.presidente instead.
        from entity.presidente_entity import PresidenteEntity
        return PresidenteEntity(self, data)


    @property
    def proveedor_plazo_fijo_precancelable(self):
        """Idiomatic facade: client.proveedor_plazo_fijo_precancelable.list() / client.proveedor_plazo_fijo_precancelable.load({"id": ...})."""
        from entity.proveedor_plazo_fijo_precancelable_entity import ProveedorPlazoFijoPrecancelableEntity
        cached = getattr(self, "_proveedor_plazo_fijo_precancelable", None)
        if cached is None:
            cached = ProveedorPlazoFijoPrecancelableEntity(self, None)
            self._proveedor_plazo_fijo_precancelable = cached
        return cached

    def ProveedorPlazoFijoPrecancelable(self, data=None):
        # Deprecated: use client.proveedor_plazo_fijo_precancelable instead.
        from entity.proveedor_plazo_fijo_precancelable_entity import ProveedorPlazoFijoPrecancelableEntity
        return ProveedorPlazoFijoPrecancelableEntity(self, data)


    @property
    def proveedor_plazo_fijo_uva_pago_periodico(self):
        """Idiomatic facade: client.proveedor_plazo_fijo_uva_pago_periodico.list() / client.proveedor_plazo_fijo_uva_pago_periodico.load({"id": ...})."""
        from entity.proveedor_plazo_fijo_uva_pago_periodico_entity import ProveedorPlazoFijoUvaPagoPeriodicoEntity
        cached = getattr(self, "_proveedor_plazo_fijo_uva_pago_periodico", None)
        if cached is None:
            cached = ProveedorPlazoFijoUvaPagoPeriodicoEntity(self, None)
            self._proveedor_plazo_fijo_uva_pago_periodico = cached
        return cached

    def ProveedorPlazoFijoUvaPagoPeriodico(self, data=None):
        # Deprecated: use client.proveedor_plazo_fijo_uva_pago_periodico instead.
        from entity.proveedor_plazo_fijo_uva_pago_periodico_entity import ProveedorPlazoFijoUvaPagoPeriodicoEntity
        return ProveedorPlazoFijoUvaPagoPeriodicoEntity(self, data)


    @property
    def rem(self):
        """Idiomatic facade: client.rem.list() / client.rem.load({"id": ...})."""
        from entity.rem_entity import RemEntity
        cached = getattr(self, "_rem", None)
        if cached is None:
            cached = RemEntity(self, None)
            self._rem = cached
        return cached

    def Rem(self, data=None):
        # Deprecated: use client.rem instead.
        from entity.rem_entity import RemEntity
        return RemEntity(self, data)


    @property
    def rem_expectativa(self):
        """Idiomatic facade: client.rem_expectativa.list() / client.rem_expectativa.load({"id": ...})."""
        from entity.rem_expectativa_entity import RemExpectativaEntity
        cached = getattr(self, "_rem_expectativa", None)
        if cached is None:
            cached = RemExpectativaEntity(self, None)
            self._rem_expectativa = cached
        return cached

    def RemExpectativa(self, data=None):
        # Deprecated: use client.rem_expectativa instead.
        from entity.rem_expectativa_entity import RemExpectativaEntity
        return RemExpectativaEntity(self, data)


    @property
    def rendimiento(self):
        """Idiomatic facade: client.rendimiento.list() / client.rendimiento.load({"id": ...})."""
        from entity.rendimiento_entity import RendimientoEntity
        cached = getattr(self, "_rendimiento", None)
        if cached is None:
            cached = RendimientoEntity(self, None)
            self._rendimiento = cached
        return cached

    def Rendimiento(self, data=None):
        # Deprecated: use client.rendimiento instead.
        from entity.rendimiento_entity import RendimientoEntity
        return RendimientoEntity(self, data)


    @property
    def riesgo_pai(self):
        """Idiomatic facade: client.riesgo_pai.list() / client.riesgo_pai.load({"id": ...})."""
        from entity.riesgo_pai_entity import RiesgoPaiEntity
        cached = getattr(self, "_riesgo_pai", None)
        if cached is None:
            cached = RiesgoPaiEntity(self, None)
            self._riesgo_pai = cached
        return cached

    def RiesgoPai(self, data=None):
        # Deprecated: use client.riesgo_pai instead.
        from entity.riesgo_pai_entity import RiesgoPaiEntity
        return RiesgoPaiEntity(self, data)


    @property
    def senador(self):
        """Idiomatic facade: client.senador.list() / client.senador.load({"id": ...})."""
        from entity.senador_entity import SenadorEntity
        cached = getattr(self, "_senador", None)
        if cached is None:
            cached = SenadorEntity(self, None)
            self._senador = cached
        return cached

    def Senador(self, data=None):
        # Deprecated: use client.senador instead.
        from entity.senador_entity import SenadorEntity
        return SenadorEntity(self, data)


    @property
    def tasa_intere(self):
        """Idiomatic facade: client.tasa_intere.list() / client.tasa_intere.load({"id": ...})."""
        from entity.tasa_intere_entity import TasaIntereEntity
        cached = getattr(self, "_tasa_intere", None)
        if cached is None:
            cached = TasaIntereEntity(self, None)
            self._tasa_intere = cached
        return cached

    def TasaIntere(self, data=None):
        # Deprecated: use client.tasa_intere instead.
        from entity.tasa_intere_entity import TasaIntereEntity
        return TasaIntereEntity(self, data)


    @property
    def tasa_plazo_fijo(self):
        """Idiomatic facade: client.tasa_plazo_fijo.list() / client.tasa_plazo_fijo.load({"id": ...})."""
        from entity.tasa_plazo_fijo_entity import TasaPlazoFijoEntity
        cached = getattr(self, "_tasa_plazo_fijo", None)
        if cached is None:
            cached = TasaPlazoFijoEntity(self, None)
            self._tasa_plazo_fijo = cached
        return cached

    def TasaPlazoFijo(self, data=None):
        # Deprecated: use client.tasa_plazo_fijo instead.
        from entity.tasa_plazo_fijo_entity import TasaPlazoFijoEntity
        return TasaPlazoFijoEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None):
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk
