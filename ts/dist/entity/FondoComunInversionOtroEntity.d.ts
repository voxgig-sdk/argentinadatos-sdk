import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { FondoComunInversionOtro, FondoComunInversionOtroLoadMatch } from '../ArgentinadatosTypes';
declare class FondoComunInversionOtroEntity extends ArgentinadatosEntityBase<FondoComunInversionOtro> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: FondoComunInversionOtroEntity): FondoComunInversionOtroEntity;
    load(this: any, reqmatch?: FondoComunInversionOtroLoadMatch, ctrl?: Control): Promise<FondoComunInversionOtroEntity>;
}
export { FondoComunInversionOtroEntity };
