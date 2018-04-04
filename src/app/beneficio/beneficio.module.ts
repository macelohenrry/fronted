import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { BeneficioRoutingModule } from './beneficio.routing.module';

import { BeneficioComponent } from './beneficio.component';
import { BeneficioFormComponent } from './beneficio-form/beneficio-form.component';

import { BeneficioService } from './beneficio.service';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    InputTextModule,
    ButtonModule,
    HttpModule,
    ReactiveFormsModule,
    BeneficioRoutingModule
  ],
  exports: [

  ],
  declarations: [
    BeneficioComponent,
    BeneficioFormComponent
  ],
  providers: [
    BeneficioService
  ]
})
export class BeneficioModule { }
