import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { TasaIntere, TasaIntereListMatch } from '../ArgentinadatosTypes';
declare class TasaIntereEntity extends ArgentinadatosEntityBase<TasaIntere> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: TasaIntereEntity): TasaIntereEntity;
    list(this: any, reqmatch?: TasaIntereListMatch, ctrl?: Control): Promise<TasaIntereEntity[]>;
}
export { TasaIntereEntity };
