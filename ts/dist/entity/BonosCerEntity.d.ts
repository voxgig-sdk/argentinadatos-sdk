import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { BonosCer, BonosCerListMatch } from '../ArgentinadatosTypes';
declare class BonosCerEntity extends ArgentinadatosEntityBase<BonosCer> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: BonosCerEntity): BonosCerEntity;
    list(this: any, reqmatch?: BonosCerListMatch, ctrl?: Control): Promise<BonosCerEntity[]>;
}
export { BonosCerEntity };
