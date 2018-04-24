import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { PanelModule } from 'primeng/components/panel/panel';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { FieldsetModule } from 'primeng/fieldset';

import { SolicitantesComponent } from './solicitantes.component';
import { SolicitanteFormComponent } from './solicitante-form/solicitante-form.component';
import { SolicitantesService } from './solicitantes.service';
import { SolicitantesRoutingModule } from './solicitantes.routing.module';
import { SolicitanteDetalheComponent } from './solicitante-detalhe/solicitante-detalhe.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    InputTextModule,
    TabViewModule,
    KeyFilterModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    MaterializeModule,
    PanelModule,
    CheckboxModule,
    FieldsetModule,
    
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
