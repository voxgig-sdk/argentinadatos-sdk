import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { EntidadRendimiento, EntidadRendimientoListMatch } from '../ArgentinadatosTypes';
declare class EntidadRendimientoEntity extends ArgentinadatosEntityBase<EntidadRendimiento> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: EntidadRendimientoEntity): EntidadRendimientoEntity;
    list(this: any, reqmatch?: EntidadRendimientoListMatch, ctrl?: Control): Promise<EntidadRendimientoEntity[]>;
}
export { EntidadRendimientoEntity };
