import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Senador, SenadorListMatch } from '../ArgentinadatosTypes';
declare class SenadorEntity extends ArgentinadatosEntityBase<Senador> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: SenadorEntity): SenadorEntity;
    list(this: any, reqmatch?: SenadorListMatch, ctrl?: Control): Promise<SenadorEntity[]>;
}
export { SenadorEntity };
