import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { TasaPlazoFijo, TasaPlazoFijoListMatch } from '../ArgentinadatosTypes';
declare class TasaPlazoFijoEntity extends ArgentinadatosEntityBase<TasaPlazoFijo> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: TasaPlazoFijoEntity): TasaPlazoFijoEntity;
    list(this: any, reqmatch?: TasaPlazoFijoListMatch, ctrl?: Control): Promise<TasaPlazoFijoEntity[]>;
}
export { TasaPlazoFijoEntity };
