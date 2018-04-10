import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { BeneficioFormComponent } from './../beneficio/beneficio-form/beneficio-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class BeneficioDeactivateGuard implements CanDeactivate<BeneficioFormComponent> {
    canDeactivate(
        component: BeneficioFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if(component.formBeneficio.touched) {
            console.log(component.podeDesativar());
        }
        return false;
    }
}
