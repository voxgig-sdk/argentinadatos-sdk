import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Acta, ActaLoadMatch, ActaListMatch } from '../ArgentinadatosTypes';
declare class ActaEntity extends ArgentinadatosEntityBase<Acta> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: ActaEntity): ActaEntity;
    load(this: any, reqmatch?: ActaLoadMatch, ctrl?: Control): Promise<ActaEntity>;
    list(this: any, reqmatch?: ActaListMatch, ctrl?: Control): Promise<ActaEntity[]>;
}
export { ActaEntity };
