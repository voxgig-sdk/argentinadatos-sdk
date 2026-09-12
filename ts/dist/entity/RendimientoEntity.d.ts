import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Rendimiento, RendimientoLoadMatch } from '../ArgentinadatosTypes';
declare class RendimientoEntity extends ArgentinadatosEntityBase<Rendimiento> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: RendimientoEntity): RendimientoEntity;
    load(this: any, reqmatch?: RendimientoLoadMatch, ctrl?: Control): Promise<RendimientoEntity>;
}
export { RendimientoEntity };
