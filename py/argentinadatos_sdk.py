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
            return None, err

        return utility.make_fetch_def(ctx)

    def direct(self, fetchargs=None):
        utility = self._utility

        fetchdef, err = self.prepare(fetchargs)
        if err is not None:
            return {"ok": False, "err": err}, None

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
            return {"ok": False, "err": fetch_err}, None

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }, None

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
            }, None

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }, None


    def Acta(self, data=None):
        from entity.acta_entity import ActaEntity
        return ActaEntity(self, data)


    def BonosCer(self, data=None):
        from entity.bonos_cer_entity import BonosCerEntity
        return BonosCerEntity(self, data)


    def Cotizacion(self, data=None):
        from entity.cotizacion_entity import CotizacionEntity
        return CotizacionEntity(self, data)


    def Criptopeso(self, data=None):
        from entity.criptopeso_entity import CriptopesoEntity
        return CriptopesoEntity(self, data)


    def CuentaRemuneradaUsd(self, data=None):
        from entity.cuenta_remunerada_usd_entity import CuentaRemuneradaUsdEntity
        return CuentaRemuneradaUsdEntity(self, data)


    def Diputado(self, data=None):
        from entity.diputado_entity import DiputadoEntity
        return DiputadoEntity(self, data)


    def EntidadRendimiento(self, data=None):
        from entity.entidad_rendimiento_entity import EntidadRendimientoEntity
        return EntidadRendimientoEntity(self, data)


    def Estado(self, data=None):
        from entity.estado_entity import EstadoEntity
        return EstadoEntity(self, data)


    def EventoPresidencial(self, data=None):
        from entity.evento_presidencial_entity import EventoPresidencialEntity
        return EventoPresidencialEntity(self, data)


    def Feriado(self, data=None):
        from entity.feriado_entity import FeriadoEntity
        return FeriadoEntity(self, data)


    def Finanza(self, data=None):
        from entity.finanza_entity import FinanzaEntity
        return FinanzaEntity(self, data)


    def FondoComunInversion(self, data=None):
        from entity.fondo_comun_inversion_entity import FondoComunInversionEntity
        return FondoComunInversionEntity(self, data)


    def FondoComunInversionOtro(self, data=None):
        from entity.fondo_comun_inversion_otro_entity import FondoComunInversionOtroEntity
        return FondoComunInversionOtroEntity(self, data)


    def FondoComunInversionVariable(self, data=None):
        from entity.fondo_comun_inversion_variable_entity import FondoComunInversionVariableEntity
        return FondoComunInversionVariableEntity(self, data)


    def HipotecarioUvaTna(self, data=None):
        from entity.hipotecario_uva_tna_entity import HipotecarioUvaTnaEntity
        return HipotecarioUvaTnaEntity(self, data)


    def IndiceInflacion(self, data=None):
        from entity.indice_inflacion_entity import IndiceInflacionEntity
        return IndiceInflacionEntity(self, data)


    def IndiceUva(self, data=None):
        from entity.indice_uva_entity import IndiceUvaEntity
        return IndiceUvaEntity(self, data)


    def Letra(self, data=None):
        from entity.letra_entity import LetraEntity
        return LetraEntity(self, data)


    def Presidente(self, data=None):
        from entity.presidente_entity import PresidenteEntity
        return PresidenteEntity(self, data)


    def ProveedorPlazoFijoPrecancelable(self, data=None):
        from entity.proveedor_plazo_fijo_precancelable_entity import ProveedorPlazoFijoPrecancelableEntity
        return ProveedorPlazoFijoPrecancelableEntity(self, data)


    def ProveedorPlazoFijoUvaPagoPeriodico(self, data=None):
        from entity.proveedor_plazo_fijo_uva_pago_periodico_entity import ProveedorPlazoFijoUvaPagoPeriodicoEntity
        return ProveedorPlazoFijoUvaPagoPeriodicoEntity(self, data)


    def Rem(self, data=None):
        from entity.rem_entity import RemEntity
        return RemEntity(self, data)


    def RemExpectativa(self, data=None):
        from entity.rem_expectativa_entity import RemExpectativaEntity
        return RemExpectativaEntity(self, data)


    def Rendimiento(self, data=None):
        from entity.rendimiento_entity import RendimientoEntity
        return RendimientoEntity(self, data)


    def RiesgoPai(self, data=None):
        from entity.riesgo_pai_entity import RiesgoPaiEntity
        return RiesgoPaiEntity(self, data)


    def Senador(self, data=None):
        from entity.senador_entity import SenadorEntity
        return SenadorEntity(self, data)


    def TasaIntere(self, data=None):
        from entity.tasa_intere_entity import TasaIntereEntity
        return TasaIntereEntity(self, data)


    def TasaPlazoFijo(self, data=None):
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
