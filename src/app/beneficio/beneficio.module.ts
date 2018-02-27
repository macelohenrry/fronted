import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficioRoutingModule } from './beneficio.routing.module';

import { BeneficioComponent } from './beneficio.component';
import { BeneficioFormComponent } from './beneficio-form/beneficio-form.component';

@NgModule({
  imports: [
    CommonModule,
    BeneficioRoutingModule
  ],
  exports: [

  ],
  declarations: [
    BeneficioComponent,
    BeneficioFormComponent
  ],
  providers: [

  ]
})
export class BeneficioModule { }
