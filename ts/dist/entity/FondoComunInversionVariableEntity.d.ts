import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { FondoComunInversionVariable, FondoComunInversionVariableLoadMatch } from '../ArgentinadatosTypes';
declare class FondoComunInversionVariableEntity extends ArgentinadatosEntityBase<FondoComunInversionVariable> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: FondoComunInversionVariableEntity): FondoComunInversionVariableEntity;
    load(this: any, reqmatch?: FondoComunInversionVariableLoadMatch, ctrl?: Control): Promise<FondoComunInversionVariableEntity>;
}
export { FondoComunInversionVariableEntity };
