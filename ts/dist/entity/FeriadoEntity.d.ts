import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Feriado, FeriadoLoadMatch } from '../ArgentinadatosTypes';
declare class FeriadoEntity extends ArgentinadatosEntityBase<Feriado> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: FeriadoEntity): FeriadoEntity;
    load(this: any, reqmatch?: FeriadoLoadMatch, ctrl?: Control): Promise<FeriadoEntity>;
}
export { FeriadoEntity };
