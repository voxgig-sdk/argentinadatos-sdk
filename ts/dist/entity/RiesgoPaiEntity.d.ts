import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { RiesgoPai, RiesgoPaiLoadMatch, RiesgoPaiListMatch } from '../ArgentinadatosTypes';
declare class RiesgoPaiEntity extends ArgentinadatosEntityBase<RiesgoPai> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: RiesgoPaiEntity): RiesgoPaiEntity;
    load(this: any, reqmatch?: RiesgoPaiLoadMatch, ctrl?: Control): Promise<RiesgoPaiEntity>;
    list(this: any, reqmatch?: RiesgoPaiListMatch, ctrl?: Control): Promise<RiesgoPaiEntity[]>;
}
export { RiesgoPaiEntity };
