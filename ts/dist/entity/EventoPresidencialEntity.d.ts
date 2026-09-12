import { ArgentinadatosEntityBase } from '../ArgentinadatosEntityBase';
import type { ArgentinadatosSDK } from '../ArgentinadatosSDK';
import type { Control } from '../types';
import type { EventoPresidencial, EventoPresidencialListMatch } from '../ArgentinadatosTypes';
declare class EventoPresidencialEntity extends ArgentinadatosEntityBase<EventoPresidencial> {
    constructor(client: ArgentinadatosSDK, entopts: any);
    make(this: EventoPresidencialEntity): EventoPresidencialEntity;
    list(this: any, reqmatch?: EventoPresidencialListMatch, ctrl?: Control): Promise<EventoPresidencialEntity[]>;
}
export { EventoPresidencialEntity };
