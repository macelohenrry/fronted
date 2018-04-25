import { NgModule } from '@angular/core';

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
  ],
  providers: [
    SolicitantesService,
    BeneficioService,

    SolicitantesDeactivateGuard
  ]
})
export class SolicitantesModule { }
