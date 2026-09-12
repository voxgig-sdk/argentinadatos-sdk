import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { RemExpectativa, RemExpectativaListMatch } from '../ArgentinadatosTypes';
declare class RemExpectativaEntity extends ArgentinadatosEntityBase<RemExpectativa> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: RemExpectativaEntity): RemExpectativaEntity;
    list(this: any, reqmatch?: RemExpectativaListMatch, ctrl?: Control): Promise<RemExpectativaEntity[]>;
}
export { RemExpectativaEntity };
