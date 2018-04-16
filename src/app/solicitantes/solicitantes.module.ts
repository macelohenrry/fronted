import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SolicitantesComponent } from './solicitantes.component';
import { SolicitanteFormComponent } from './solicitante-form/solicitante-form.component';
import { SolicitantesService } from './solicitantes.service';
import { SolicitantesRoutingModule } from './solicitantes.routing.module';
import { SolicitanteDetalheComponent } from './solicitante-detalhe/solicitante-detalhe.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,

    SolicitantesRoutingModule
  ],
  declarations: [
    SolicitantesComponent,
    SolicitanteDetalheComponent,
    SolicitanteFormComponent
  ],
  providers: [
    SolicitantesService
  ]
})
export class SolicitantesModule { }
