import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { Criptopeso, CriptopesoListMatch } from '../ArgentinadatosTypes';
declare class CriptopesoEntity extends ArgentinadatosEntityBase<Criptopeso> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: CriptopesoEntity): CriptopesoEntity;
    list(this: any, reqmatch?: CriptopesoListMatch, ctrl?: Control): Promise<CriptopesoEntity[]>;
}
export { CriptopesoEntity };
