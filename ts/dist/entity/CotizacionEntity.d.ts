import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Cotizacion, CotizacionLoadMatch, CotizacionListMatch } from '../ArgentinadatosTypes';
declare class CotizacionEntity extends ArgentinadatosEntityBase<Cotizacion> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: CotizacionEntity): CotizacionEntity;
    load(this: any, reqmatch?: CotizacionLoadMatch, ctrl?: Control): Promise<CotizacionEntity>;
    list(this: any, reqmatch?: CotizacionListMatch, ctrl?: Control): Promise<CotizacionEntity[]>;
}
export { CotizacionEntity };
