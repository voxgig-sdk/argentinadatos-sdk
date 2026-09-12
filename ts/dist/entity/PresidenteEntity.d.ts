import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Presidente, PresidenteListMatch } from '../ArgentinadatosTypes';
declare class PresidenteEntity extends ArgentinadatosEntityBase<Presidente> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: PresidenteEntity): PresidenteEntity;
    list(this: any, reqmatch?: PresidenteListMatch, ctrl?: Control): Promise<PresidenteEntity[]>;
}
export { PresidenteEntity };
