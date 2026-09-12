import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { HipotecarioUvaTna, HipotecarioUvaTnaListMatch } from '../ArgentinadatosTypes';
declare class HipotecarioUvaTnaEntity extends ArgentinadatosEntityBase<HipotecarioUvaTna> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: HipotecarioUvaTnaEntity): HipotecarioUvaTnaEntity;
    list(this: any, reqmatch?: HipotecarioUvaTnaListMatch, ctrl?: Control): Promise<HipotecarioUvaTnaEntity[]>;
}
export { HipotecarioUvaTnaEntity };
