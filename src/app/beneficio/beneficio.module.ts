
import { NgModule } from '@angular/core';

import { SheredModule } from '../shered/shered.module';
import { BeneficioRoutingModule } from './beneficio.routing.module';


import { BeneficioComponent } from './beneficio.component';
import { BeneficioFormComponent } from './beneficio-form/beneficio-form.component';

import { BeneficioService } from './beneficio.service';

import { BeneficioDeactivateGuard } from './../guards/beneficio-deactivate.guard';

@NgModule({
  imports: [
    SheredModule,

    BeneficioRoutingModule 
  ],
  exports: [

  ],
  declarations: [
    BeneficioComponent,
    BeneficioFormComponent,
  ],
  providers: [
    BeneficioService,
    
    BeneficioDeactivateGuard
  ]
})
export class BeneficioModule { }
