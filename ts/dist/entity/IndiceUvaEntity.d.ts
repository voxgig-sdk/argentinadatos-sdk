import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { IndiceUva, IndiceUvaListMatch } from '../ArgentinadatosTypes';
declare class IndiceUvaEntity extends ArgentinadatosEntityBase<IndiceUva> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: IndiceUvaEntity): IndiceUvaEntity;
    list(this: any, reqmatch?: IndiceUvaListMatch, ctrl?: Control): Promise<IndiceUvaEntity[]>;
}
export { IndiceUvaEntity };
