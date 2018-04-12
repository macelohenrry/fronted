import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitantesComponent } from './solicitantes.component';
import { SolicitanteFormComponent } from './solicitante-form/solicitante-form.component';
import { SolicitanteService } from './solicitante.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SolicitantesComponent,
    SolicitanteFormComponent
  ],
  providers: [
    SolicitanteService
  ]
})
export class SolicitanteModule { }
