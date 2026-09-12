import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Finanza, FinanzaListMatch } from '../ArgentinadatosTypes';
declare class FinanzaEntity extends ArgentinadatosEntityBase<Finanza> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: FinanzaEntity): FinanzaEntity;
    list(this: any, reqmatch?: FinanzaListMatch, ctrl?: Control): Promise<FinanzaEntity[]>;
}
export { FinanzaEntity };
