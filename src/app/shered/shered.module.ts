import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/components/button/button';
import { MessageModule } from 'primeng/components/message/message';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
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
import { PasswordModule } from 'primeng/components/password/password'
import { DialogModule} from 'primeng/components/dialog/dialog';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { MensagemComponent } from './mensagem/mensagem.component';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,

    DataTableModule,
    TableModule,
    ButtonModule,
    MessageModule,
    InputTextModule,
    ConfirmDialogModule,
    GrowlModule,
    MultiSelectModule,
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
    PasswordModule,
    DialogModule,
    CurrencyMaskModule 

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
    TableModule, 
    ButtonModule,
    MessageModule,
    InputTextModule,
    ConfirmDialogModule,
    GrowlModule,
    MultiSelectModule,
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
    PasswordModule,
    DialogModule,
    CurrencyMaskModule
  ],
  providers: [
    
  ]
})
export class SheredModule { }
