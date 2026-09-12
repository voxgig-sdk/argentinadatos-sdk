import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Rem, RemListMatch } from '../ArgentinadatosTypes';
declare class RemEntity extends ArgentinadatosEntityBase<Rem> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: RemEntity): RemEntity;
    list(this: any, reqmatch?: RemListMatch, ctrl?: Control): Promise<RemEntity[]>;
}
export { RemEntity };
