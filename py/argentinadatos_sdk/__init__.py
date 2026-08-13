# Argentinadatos SDK

from argentinadatos_sdk.utility.voxgig_struct import voxgig_struct as vs
from argentinadatos_sdk.core.utility_type import ArgentinadatosUtility
from argentinadatos_sdk.core.spec import ArgentinadatosSpec
from argentinadatos_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from argentinadatos_sdk.utility import register

# Load features
from argentinadatos_sdk.feature.base_feature import ArgentinadatosBaseFeature
from argentinadatos_sdk.features import _make_feature


class ArgentinadatosSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = ArgentinadatosUtility()
        self._utility = utility

        from argentinadatos_sdk.config import make_config
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

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
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

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "ArgentinadatosSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
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

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("ArgentinadatosSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Acta(self, data=None) -> "ActaEntity":
        """Entity factory: client.Acta().list() / client.Acta().load({"id": ...})."""
        from argentinadatos_sdk.entity.acta_entity import ActaEntity
        return ActaEntity(self, data)


    def BonosCer(self, data=None) -> "BonosCerEntity":
        """Entity factory: client.BonosCer().list() / client.BonosCer().load({"id": ...})."""
        from argentinadatos_sdk.entity.bonos_cer_entity import BonosCerEntity
        return BonosCerEntity(self, data)


    def Cotizacion(self, data=None) -> "CotizacionEntity":
        """Entity factory: client.Cotizacion().list() / client.Cotizacion().load({"id": ...})."""
        from argentinadatos_sdk.entity.cotizacion_entity import CotizacionEntity
        return CotizacionEntity(self, data)


    def Criptopeso(self, data=None) -> "CriptopesoEntity":
        """Entity factory: client.Criptopeso().list() / client.Criptopeso().load({"id": ...})."""
        from argentinadatos_sdk.entity.criptopeso_entity import CriptopesoEntity
        return CriptopesoEntity(self, data)


    def CuentaRemuneradaUsd(self, data=None) -> "CuentaRemuneradaUsdEntity":
        """Entity factory: client.CuentaRemuneradaUsd().list() / client.CuentaRemuneradaUsd().load({"id": ...})."""
        from argentinadatos_sdk.entity.cuenta_remunerada_usd_entity import CuentaRemuneradaUsdEntity
        return CuentaRemuneradaUsdEntity(self, data)


    def Diputado(self, data=None) -> "DiputadoEntity":
        """Entity factory: client.Diputado().list() / client.Diputado().load({"id": ...})."""
        from argentinadatos_sdk.entity.diputado_entity import DiputadoEntity
        return DiputadoEntity(self, data)


    def EntidadRendimiento(self, data=None) -> "EntidadRendimientoEntity":
        """Entity factory: client.EntidadRendimiento().list() / client.EntidadRendimiento().load({"id": ...})."""
        from argentinadatos_sdk.entity.entidad_rendimiento_entity import EntidadRendimientoEntity
        return EntidadRendimientoEntity(self, data)


    def Estado(self, data=None) -> "EstadoEntity":
        """Entity factory: client.Estado().list() / client.Estado().load({"id": ...})."""
        from argentinadatos_sdk.entity.estado_entity import EstadoEntity
        return EstadoEntity(self, data)


    def EventoPresidencial(self, data=None) -> "EventoPresidencialEntity":
        """Entity factory: client.EventoPresidencial().list() / client.EventoPresidencial().load({"id": ...})."""
        from argentinadatos_sdk.entity.evento_presidencial_entity import EventoPresidencialEntity
        return EventoPresidencialEntity(self, data)


    def Feriado(self, data=None) -> "FeriadoEntity":
        """Entity factory: client.Feriado().list() / client.Feriado().load({"id": ...})."""
        from argentinadatos_sdk.entity.feriado_entity import FeriadoEntity
        return FeriadoEntity(self, data)


    def Finanza(self, data=None) -> "FinanzaEntity":
        """Entity factory: client.Finanza().list() / client.Finanza().load({"id": ...})."""
        from argentinadatos_sdk.entity.finanza_entity import FinanzaEntity
        return FinanzaEntity(self, data)


    def FondoComunInversion(self, data=None) -> "FondoComunInversionEntity":
        """Entity factory: client.FondoComunInversion().list() / client.FondoComunInversion().load({"id": ...})."""
        from argentinadatos_sdk.entity.fondo_comun_inversion_entity import FondoComunInversionEntity
        return FondoComunInversionEntity(self, data)


    def FondoComunInversionOtro(self, data=None) -> "FondoComunInversionOtroEntity":
        """Entity factory: client.FondoComunInversionOtro().list() / client.FondoComunInversionOtro().load({"id": ...})."""
        from argentinadatos_sdk.entity.fondo_comun_inversion_otro_entity import FondoComunInversionOtroEntity
        return FondoComunInversionOtroEntity(self, data)


    def FondoComunInversionVariable(self, data=None) -> "FondoComunInversionVariableEntity":
        """Entity factory: client.FondoComunInversionVariable().list() / client.FondoComunInversionVariable().load({"id": ...})."""
        from argentinadatos_sdk.entity.fondo_comun_inversion_variable_entity import FondoComunInversionVariableEntity
        return FondoComunInversionVariableEntity(self, data)


    def HipotecarioUvaTna(self, data=None) -> "HipotecarioUvaTnaEntity":
        """Entity factory: client.HipotecarioUvaTna().list() / client.HipotecarioUvaTna().load({"id": ...})."""
        from argentinadatos_sdk.entity.hipotecario_uva_tna_entity import HipotecarioUvaTnaEntity
        return HipotecarioUvaTnaEntity(self, data)


    def IndiceInflacion(self, data=None) -> "IndiceInflacionEntity":
        """Entity factory: client.IndiceInflacion().list() / client.IndiceInflacion().load({"id": ...})."""
        from argentinadatos_sdk.entity.indice_inflacion_entity import IndiceInflacionEntity
        return IndiceInflacionEntity(self, data)


    def IndiceUva(self, data=None) -> "IndiceUvaEntity":
        """Entity factory: client.IndiceUva().list() / client.IndiceUva().load({"id": ...})."""
        from argentinadatos_sdk.entity.indice_uva_entity import IndiceUvaEntity
        return IndiceUvaEntity(self, data)


    def Letra(self, data=None) -> "LetraEntity":
        """Entity factory: client.Letra().list() / client.Letra().load({"id": ...})."""
        from argentinadatos_sdk.entity.letra_entity import LetraEntity
        return LetraEntity(self, data)


    def Presidente(self, data=None) -> "PresidenteEntity":
        """Entity factory: client.Presidente().list() / client.Presidente().load({"id": ...})."""
        from argentinadatos_sdk.entity.presidente_entity import PresidenteEntity
        return PresidenteEntity(self, data)


    def ProveedorPlazoFijoPrecancelable(self, data=None) -> "ProveedorPlazoFijoPrecancelableEntity":
        """Entity factory: client.ProveedorPlazoFijoPrecancelable().list() / client.ProveedorPlazoFijoPrecancelable().load({"id": ...})."""
        from argentinadatos_sdk.entity.proveedor_plazo_fijo_precancelable_entity import ProveedorPlazoFijoPrecancelableEntity
        return ProveedorPlazoFijoPrecancelableEntity(self, data)


    def ProveedorPlazoFijoUvaPagoPeriodico(self, data=None) -> "ProveedorPlazoFijoUvaPagoPeriodicoEntity":
        """Entity factory: client.ProveedorPlazoFijoUvaPagoPeriodico().list() / client.ProveedorPlazoFijoUvaPagoPeriodico().load({"id": ...})."""
        from argentinadatos_sdk.entity.proveedor_plazo_fijo_uva_pago_periodico_entity import ProveedorPlazoFijoUvaPagoPeriodicoEntity
        return ProveedorPlazoFijoUvaPagoPeriodicoEntity(self, data)


    def Rem(self, data=None) -> "RemEntity":
        """Entity factory: client.Rem().list() / client.Rem().load({"id": ...})."""
        from argentinadatos_sdk.entity.rem_entity import RemEntity
        return RemEntity(self, data)


    def RemExpectativa(self, data=None) -> "RemExpectativaEntity":
        """Entity factory: client.RemExpectativa().list() / client.RemExpectativa().load({"id": ...})."""
        from argentinadatos_sdk.entity.rem_expectativa_entity import RemExpectativaEntity
        return RemExpectativaEntity(self, data)


    def Rendimiento(self, data=None) -> "RendimientoEntity":
        """Entity factory: client.Rendimiento().list() / client.Rendimiento().load({"id": ...})."""
        from argentinadatos_sdk.entity.rendimiento_entity import RendimientoEntity
        return RendimientoEntity(self, data)


    def RiesgoPai(self, data=None) -> "RiesgoPaiEntity":
        """Entity factory: client.RiesgoPai().list() / client.RiesgoPai().load({"id": ...})."""
        from argentinadatos_sdk.entity.riesgo_pai_entity import RiesgoPaiEntity
        return RiesgoPaiEntity(self, data)


    def Senador(self, data=None) -> "SenadorEntity":
        """Entity factory: client.Senador().list() / client.Senador().load({"id": ...})."""
        from argentinadatos_sdk.entity.senador_entity import SenadorEntity
        return SenadorEntity(self, data)


    def TasaIntere(self, data=None) -> "TasaIntereEntity":
        """Entity factory: client.TasaIntere().list() / client.TasaIntere().load({"id": ...})."""
        from argentinadatos_sdk.entity.tasa_intere_entity import TasaIntereEntity
        return TasaIntereEntity(self, data)


    def TasaPlazoFijo(self, data=None) -> "TasaPlazoFijoEntity":
        """Entity factory: client.TasaPlazoFijo().list() / client.TasaPlazoFijo().load({"id": ...})."""
        from argentinadatos_sdk.entity.tasa_plazo_fijo_entity import TasaPlazoFijoEntity
        return TasaPlazoFijoEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "ArgentinadatosSDK":
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


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from argentinadatos_sdk.entity.acta_entity import ActaEntity
    from argentinadatos_sdk.entity.bonos_cer_entity import BonosCerEntity
    from argentinadatos_sdk.entity.cotizacion_entity import CotizacionEntity
    from argentinadatos_sdk.entity.criptopeso_entity import CriptopesoEntity
    from argentinadatos_sdk.entity.cuenta_remunerada_usd_entity import CuentaRemuneradaUsdEntity
    from argentinadatos_sdk.entity.diputado_entity import DiputadoEntity
    from argentinadatos_sdk.entity.entidad_rendimiento_entity import EntidadRendimientoEntity
    from argentinadatos_sdk.entity.estado_entity import EstadoEntity
    from argentinadatos_sdk.entity.evento_presidencial_entity import EventoPresidencialEntity
    from argentinadatos_sdk.entity.feriado_entity import FeriadoEntity
    from argentinadatos_sdk.entity.finanza_entity import FinanzaEntity
    from argentinadatos_sdk.entity.fondo_comun_inversion_entity import FondoComunInversionEntity
    from argentinadatos_sdk.entity.fondo_comun_inversion_otro_entity import FondoComunInversionOtroEntity
    from argentinadatos_sdk.entity.fondo_comun_inversion_variable_entity import FondoComunInversionVariableEntity
    from argentinadatos_sdk.entity.hipotecario_uva_tna_entity import HipotecarioUvaTnaEntity
    from argentinadatos_sdk.entity.indice_inflacion_entity import IndiceInflacionEntity
    from argentinadatos_sdk.entity.indice_uva_entity import IndiceUvaEntity
    from argentinadatos_sdk.entity.letra_entity import LetraEntity
    from argentinadatos_sdk.entity.presidente_entity import PresidenteEntity
    from argentinadatos_sdk.entity.proveedor_plazo_fijo_precancelable_entity import ProveedorPlazoFijoPrecancelableEntity
    from argentinadatos_sdk.entity.proveedor_plazo_fijo_uva_pago_periodico_entity import ProveedorPlazoFijoUvaPagoPeriodicoEntity
    from argentinadatos_sdk.entity.rem_entity import RemEntity
    from argentinadatos_sdk.entity.rem_expectativa_entity import RemExpectativaEntity
    from argentinadatos_sdk.entity.rendimiento_entity import RendimientoEntity
    from argentinadatos_sdk.entity.riesgo_pai_entity import RiesgoPaiEntity
    from argentinadatos_sdk.entity.senador_entity import SenadorEntity
    from argentinadatos_sdk.entity.tasa_intere_entity import TasaIntereEntity
    from argentinadatos_sdk.entity.tasa_plazo_fijo_entity import TasaPlazoFijoEntity
