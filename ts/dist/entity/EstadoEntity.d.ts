import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Estado, EstadoLoadMatch } from '../ArgentinadatosTypes';
declare class EstadoEntity extends ArgentinadatosEntityBase<Estado> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: EstadoEntity): EstadoEntity;
    load(this: any, reqmatch?: EstadoLoadMatch, ctrl?: Control): Promise<EstadoEntity>;
}
export { EstadoEntity };
