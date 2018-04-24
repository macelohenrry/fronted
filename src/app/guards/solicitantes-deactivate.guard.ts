import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SolicitanteFormComponent } from './../solicitantes/solicitante-form/solicitante-form.component';
import { EMensage } from './../model/model';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class SolicitantesDeactivateGuard implements CanDeactivate<SolicitanteFormComponent> {

    constructor() {}

    canDeactivate(
        component: SolicitanteFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        
        return component.podeDesativar();
    }
}
