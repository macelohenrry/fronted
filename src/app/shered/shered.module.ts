import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { MessageModule } from 'primeng/components/message/message';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { Growl } from 'primeng/components/growl/growl';
import { GrowlModule } from 'primeng/components/growl/growl';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { MaterializeModule } from 'angular2-materialize';
import { PanelModule } from 'primeng/components/panel/panel';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,

    DataTableModule,
    ButtonModule,
    MessageModule,
    InputTextModule,
    Growl,
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
    MensagemComponent
  ],
  exports: [
    MensagemComponent,

    CommonModule, 
    ReactiveFormsModule,
    DataTableModule,
    ButtonModule,
    MessageModule,
    InputTextModule,
    Growl,
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
  providers: [
    MessageService
  ]
})
export class SheredModule { }
