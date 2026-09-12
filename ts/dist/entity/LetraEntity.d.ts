import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Letra, LetraListMatch } from '../ArgentinadatosTypes';
declare class LetraEntity extends ArgentinadatosEntityBase<Letra> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: LetraEntity): LetraEntity;
    list(this: any, reqmatch?: LetraListMatch, ctrl?: Control): Promise<LetraEntity[]>;
}
export { LetraEntity };
