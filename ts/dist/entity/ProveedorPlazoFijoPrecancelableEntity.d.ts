import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { ProveedorPlazoFijoPrecancelable, ProveedorPlazoFijoPrecancelableListMatch } from '../ArgentinadatosTypes';
declare class ProveedorPlazoFijoPrecancelableEntity extends ArgentinadatosEntityBase<ProveedorPlazoFijoPrecancelable> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: ProveedorPlazoFijoPrecancelableEntity): ProveedorPlazoFijoPrecancelableEntity;
    list(this: any, reqmatch?: ProveedorPlazoFijoPrecancelableListMatch, ctrl?: Control): Promise<ProveedorPlazoFijoPrecancelableEntity[]>;
}
export { ProveedorPlazoFijoPrecancelableEntity };
