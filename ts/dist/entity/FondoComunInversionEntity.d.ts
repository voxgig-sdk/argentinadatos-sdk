import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { FondoComunInversion, FondoComunInversionLoadMatch } from '../ArgentinadatosTypes';
declare class FondoComunInversionEntity extends ArgentinadatosEntityBase<FondoComunInversion> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: FondoComunInversionEntity): FondoComunInversionEntity;
    load(this: any, reqmatch?: FondoComunInversionLoadMatch, ctrl?: Control): Promise<FondoComunInversionEntity>;
}
export { FondoComunInversionEntity };
