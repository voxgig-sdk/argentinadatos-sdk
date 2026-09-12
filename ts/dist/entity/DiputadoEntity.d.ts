import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Diputado, DiputadoListMatch } from '../ArgentinadatosTypes';
declare class DiputadoEntity extends ArgentinadatosEntityBase<Diputado> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: DiputadoEntity): DiputadoEntity;
    list(this: any, reqmatch?: DiputadoListMatch, ctrl?: Control): Promise<DiputadoEntity[]>;
}
export { DiputadoEntity };
