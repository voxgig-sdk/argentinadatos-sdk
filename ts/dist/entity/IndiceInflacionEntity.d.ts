import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { IndiceInflacion, IndiceInflacionListMatch } from '../ArgentinadatosTypes';
declare class IndiceInflacionEntity extends ArgentinadatosEntityBase<IndiceInflacion> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: IndiceInflacionEntity): IndiceInflacionEntity;
    list(this: any, reqmatch?: IndiceInflacionListMatch, ctrl?: Control): Promise<IndiceInflacionEntity[]>;
}
export { IndiceInflacionEntity };
