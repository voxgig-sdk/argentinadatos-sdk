import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { CuentaRemuneradaUsd, CuentaRemuneradaUsdListMatch } from '../ArgentinadatosTypes';
declare class CuentaRemuneradaUsdEntity extends ArgentinadatosEntityBase<CuentaRemuneradaUsd> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: CuentaRemuneradaUsdEntity): CuentaRemuneradaUsdEntity;
    list(this: any, reqmatch?: CuentaRemuneradaUsdListMatch, ctrl?: Control): Promise<CuentaRemuneradaUsdEntity[]>;
}
export { CuentaRemuneradaUsdEntity };
