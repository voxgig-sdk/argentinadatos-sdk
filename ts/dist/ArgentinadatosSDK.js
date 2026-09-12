"use strict";
// Argentinadatos Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ArgentinadatosSDK = exports.ArgentinadatosEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActaEntity_1 = require("./entity/ActaEntity");
const BonosCerEntity_1 = require("./entity/BonosCerEntity");
const CotizacionEntity_1 = require("./entity/CotizacionEntity");
const CriptopesoEntity_1 = require("./entity/CriptopesoEntity");
const CuentaRemuneradaUsdEntity_1 = require("./entity/CuentaRemuneradaUsdEntity");
const DiputadoEntity_1 = require("./entity/DiputadoEntity");
const EntidadRendimientoEntity_1 = require("./entity/EntidadRendimientoEntity");
const EstadoEntity_1 = require("./entity/EstadoEntity");
const EventoPresidencialEntity_1 = require("./entity/EventoPresidencialEntity");
const FeriadoEntity_1 = require("./entity/FeriadoEntity");
const FinanzaEntity_1 = require("./entity/FinanzaEntity");
const FondoComunInversionEntity_1 = require("./entity/FondoComunInversionEntity");
const FondoComunInversionOtroEntity_1 = require("./entity/FondoComunInversionOtroEntity");
const FondoComunInversionVariableEntity_1 = require("./entity/FondoComunInversionVariableEntity");
const HipotecarioUvaTnaEntity_1 = require("./entity/HipotecarioUvaTnaEntity");
const IndiceInflacionEntity_1 = require("./entity/IndiceInflacionEntity");
const IndiceUvaEntity_1 = require("./entity/IndiceUvaEntity");
const LetraEntity_1 = require("./entity/LetraEntity");
const PresidenteEntity_1 = require("./entity/PresidenteEntity");
const ProveedorPlazoFijoPrecancelableEntity_1 = require("./entity/ProveedorPlazoFijoPrecancelableEntity");
const ProveedorPlazoFijoUvaPagoPeriodicoEntity_1 = require("./entity/ProveedorPlazoFijoUvaPagoPeriodicoEntity");
const RemEntity_1 = require("./entity/RemEntity");
const RemExpectativaEntity_1 = require("./entity/RemExpectativaEntity");
const RendimientoEntity_1 = require("./entity/RendimientoEntity");
const RiesgoPaiEntity_1 = require("./entity/RiesgoPaiEntity");
const SenadorEntity_1 = require("./entity/SenadorEntity");
const TasaIntereEntity_1 = require("./entity/TasaIntereEntity");
const TasaPlazoFijoEntity_1 = require("./entity/TasaPlazoFijoEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const ArgentinadatosEntityBase_1 = require("./ArgentinadatosEntityBase");
Object.defineProperty(exports, "ArgentinadatosEntityBase", { enumerable: true, get: function () { return ArgentinadatosEntityBase_1.ArgentinadatosEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class ArgentinadatosSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('ArgentinadatosSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('ArgentinadatosSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('ArgentinadatosSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Acta().list()` / `client.Acta().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Acta(entopts) {
        const self = this;
        return new ActaEntity_1.ActaEntity(self, entopts);
    }
    // Entity access: `client.BonosCer().list()` / `client.BonosCer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BonosCer(entopts) {
        const self = this;
        return new BonosCerEntity_1.BonosCerEntity(self, entopts);
    }
    // Entity access: `client.Cotizacion().list()` / `client.Cotizacion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cotizacion(entopts) {
        const self = this;
        return new CotizacionEntity_1.CotizacionEntity(self, entopts);
    }
    // Entity access: `client.Criptopeso().list()` / `client.Criptopeso().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Criptopeso(entopts) {
        const self = this;
        return new CriptopesoEntity_1.CriptopesoEntity(self, entopts);
    }
    // Entity access: `client.CuentaRemuneradaUsd().list()` / `client.CuentaRemuneradaUsd().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CuentaRemuneradaUsd(entopts) {
        const self = this;
        return new CuentaRemuneradaUsdEntity_1.CuentaRemuneradaUsdEntity(self, entopts);
    }
    // Entity access: `client.Diputado().list()` / `client.Diputado().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Diputado(entopts) {
        const self = this;
        return new DiputadoEntity_1.DiputadoEntity(self, entopts);
    }
    // Entity access: `client.EntidadRendimiento().list()` / `client.EntidadRendimiento().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EntidadRendimiento(entopts) {
        const self = this;
        return new EntidadRendimientoEntity_1.EntidadRendimientoEntity(self, entopts);
    }
    // Entity access: `client.Estado().list()` / `client.Estado().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Estado(entopts) {
        const self = this;
        return new EstadoEntity_1.EstadoEntity(self, entopts);
    }
    // Entity access: `client.EventoPresidencial().list()` / `client.EventoPresidencial().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EventoPresidencial(entopts) {
        const self = this;
        return new EventoPresidencialEntity_1.EventoPresidencialEntity(self, entopts);
    }
    // Entity access: `client.Feriado().list()` / `client.Feriado().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Feriado(entopts) {
        const self = this;
        return new FeriadoEntity_1.FeriadoEntity(self, entopts);
    }
    // Entity access: `client.Finanza().list()` / `client.Finanza().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Finanza(entopts) {
        const self = this;
        return new FinanzaEntity_1.FinanzaEntity(self, entopts);
    }
    // Entity access: `client.FondoComunInversion().list()` / `client.FondoComunInversion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FondoComunInversion(entopts) {
        const self = this;
        return new FondoComunInversionEntity_1.FondoComunInversionEntity(self, entopts);
    }
    // Entity access: `client.FondoComunInversionOtro().list()` / `client.FondoComunInversionOtro().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FondoComunInversionOtro(entopts) {
        const self = this;
        return new FondoComunInversionOtroEntity_1.FondoComunInversionOtroEntity(self, entopts);
    }
    // Entity access: `client.FondoComunInversionVariable().list()` / `client.FondoComunInversionVariable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FondoComunInversionVariable(entopts) {
        const self = this;
        return new FondoComunInversionVariableEntity_1.FondoComunInversionVariableEntity(self, entopts);
    }
    // Entity access: `client.HipotecarioUvaTna().list()` / `client.HipotecarioUvaTna().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    HipotecarioUvaTna(entopts) {
        const self = this;
        return new HipotecarioUvaTnaEntity_1.HipotecarioUvaTnaEntity(self, entopts);
    }
    // Entity access: `client.IndiceInflacion().list()` / `client.IndiceInflacion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IndiceInflacion(entopts) {
        const self = this;
        return new IndiceInflacionEntity_1.IndiceInflacionEntity(self, entopts);
    }
    // Entity access: `client.IndiceUva().list()` / `client.IndiceUva().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IndiceUva(entopts) {
        const self = this;
        return new IndiceUvaEntity_1.IndiceUvaEntity(self, entopts);
    }
    // Entity access: `client.Letra().list()` / `client.Letra().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Letra(entopts) {
        const self = this;
        return new LetraEntity_1.LetraEntity(self, entopts);
    }
    // Entity access: `client.Presidente().list()` / `client.Presidente().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Presidente(entopts) {
        const self = this;
        return new PresidenteEntity_1.PresidenteEntity(self, entopts);
    }
    // Entity access: `client.ProveedorPlazoFijoPrecancelable().list()` / `client.ProveedorPlazoFijoPrecancelable().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProveedorPlazoFijoPrecancelable(entopts) {
        const self = this;
        return new ProveedorPlazoFijoPrecancelableEntity_1.ProveedorPlazoFijoPrecancelableEntity(self, entopts);
    }
    // Entity access: `client.ProveedorPlazoFijoUvaPagoPeriodico().list()` / `client.ProveedorPlazoFijoUvaPagoPeriodico().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProveedorPlazoFijoUvaPagoPeriodico(entopts) {
        const self = this;
        return new ProveedorPlazoFijoUvaPagoPeriodicoEntity_1.ProveedorPlazoFijoUvaPagoPeriodicoEntity(self, entopts);
    }
    // Entity access: `client.Rem().list()` / `client.Rem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rem(entopts) {
        const self = this;
        return new RemEntity_1.RemEntity(self, entopts);
    }
    // Entity access: `client.RemExpectativa().list()` / `client.RemExpectativa().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemExpectativa(entopts) {
        const self = this;
        return new RemExpectativaEntity_1.RemExpectativaEntity(self, entopts);
    }
    // Entity access: `client.Rendimiento().list()` / `client.Rendimiento().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rendimiento(entopts) {
        const self = this;
        return new RendimientoEntity_1.RendimientoEntity(self, entopts);
    }
    // Entity access: `client.RiesgoPai().list()` / `client.RiesgoPai().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RiesgoPai(entopts) {
        const self = this;
        return new RiesgoPaiEntity_1.RiesgoPaiEntity(self, entopts);
    }
    // Entity access: `client.Senador().list()` / `client.Senador().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Senador(entopts) {
        const self = this;
        return new SenadorEntity_1.SenadorEntity(self, entopts);
    }
    // Entity access: `client.TasaIntere().list()` / `client.TasaIntere().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TasaIntere(entopts) {
        const self = this;
        return new TasaIntereEntity_1.TasaIntereEntity(self, entopts);
    }
    // Entity access: `client.TasaPlazoFijo().list()` / `client.TasaPlazoFijo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TasaPlazoFijo(entopts) {
        const self = this;
        return new TasaPlazoFijoEntity_1.TasaPlazoFijoEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new ArgentinadatosSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return ArgentinadatosSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Argentinadatos' };
    }
    toString() {
        return 'Argentinadatos ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.ArgentinadatosSDK = ArgentinadatosSDK;
const SDK = ArgentinadatosSDK;
exports.SDK = SDK;
//# sourceMappingURL=ArgentinadatosSDK.js.map