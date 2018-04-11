import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { EMensage } from './../model/model';
import { BeneficioFormComponent } from './../beneficio/beneficio-form/beneficio-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class BeneficioDeactivateGuard implements CanDeactivate<BeneficioFormComponent> {

    constructor() {}

    canDeactivate(
        component: BeneficioFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        
        return component.podeDesativar();
    }
}
