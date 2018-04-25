import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { MessageModule } from 'primeng/components/message/message';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { GrowlModule } from 'primeng/components/growl/growl';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { MaterializeModule } from 'angular2-materialize';
import { PanelModule } from 'primeng/components/panel/panel';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';



import { MensagemComponent } from './mensagem/mensagem.component';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,

    DataTableModule,
    ButtonModule,
    MessageModule,
    InputTextModule,
    GrowlModule,
    TabViewModule,
    KeyFilterModule,
    ToggleButtonModule,
    InputMaskModule,
    DropdownModule,
    MaterializeModule,
    PanelModule,
    CheckboxModule,
    FieldsetModule,
    InputTextareaModule,


  ],
  declarations: [
    MensagemComponent,
    MensagemErroComponent
  ],
  exports: [
    MensagemComponent,
    MensagemErroComponent,

    CommonModule, 
    ReactiveFormsModule,
    DataTableModule,
    ButtonModule,
    MessageModule,
    InputTextModule,
    GrowlModule,
    TabViewModule,
    KeyFilterModule,
    ToggleButtonModule,

    InputMaskModule,
    DropdownModule,
    MaterializeModule,
    PanelModule,
    CheckboxModule,
    FieldsetModule,
    InputTextareaModule
  ],
  providers: [
    
  ]
})
export class SheredModule { }
