import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { ProveedorPlazoFijoUvaPagoPeriodico, ProveedorPlazoFijoUvaPagoPeriodicoListMatch } from '../ArgentinadatosTypes';
declare class ProveedorPlazoFijoUvaPagoPeriodicoEntity extends ArgentinadatosEntityBase<ProveedorPlazoFijoUvaPagoPeriodico> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: ProveedorPlazoFijoUvaPagoPeriodicoEntity): ProveedorPlazoFijoUvaPagoPeriodicoEntity;
    list(this: any, reqmatch?: ProveedorPlazoFijoUvaPagoPeriodicoListMatch, ctrl?: Control): Promise<ProveedorPlazoFijoUvaPagoPeriodicoEntity[]>;
}
export { ProveedorPlazoFijoUvaPagoPeriodicoEntity };
