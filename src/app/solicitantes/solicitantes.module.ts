import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';




import { MensagemErroComponent } from './../shered/mensagem-erro/mensagem-erro.component';
import { SolicitantesDeactivateGuard } from './../guards/solicitantes-deactivate.guard';
import { SolicitantesComponent } from './solicitantes.component';
import { SolicitanteFormComponent } from './solicitante-form/solicitante-form.component';
import { SolicitantesService } from './solicitantes.service';
import { BeneficioService } from './../beneficio/beneficio.service';
import { SolicitantesRoutingModule } from './solicitantes.routing.module';
import { SolicitanteDetalheComponent } from './solicitante-detalhe/solicitante-detalhe.component';

import { SheredModule } from './../shered/shered.module';

@NgModule({
  imports: [
    SheredModule,

    SolicitantesRoutingModule
  ],
  declarations: [
    SolicitantesComponent,
    SolicitanteDetalheComponent,
    SolicitanteFormComponent,
    MensagemErroComponent
  ],
  providers: [
    SolicitantesService,
    BeneficioService,

    SolicitantesDeactivateGuard
  ]
})
export class SolicitantesModule { }
