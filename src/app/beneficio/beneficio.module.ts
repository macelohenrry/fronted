
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { BeneficioRoutingModule } from './beneficio.routing.module';
import { MessageModule } from 'primeng/components/message/message';
import { ToggleButtonModule } from 'primeng/components/togglebutton/togglebutton';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { BeneficioDeactivateGuard } from './../guards/beneficio-deactivate.guard';

import { MensagemErroComponent } from './../shered/mensagem-erro/mensagem-erro.component';
import { BeneficioComponent } from './beneficio.component';
import { BeneficioFormComponent } from './beneficio-form/beneficio-form.component';

import { BeneficioService } from './beneficio.service';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    InputTextModule,
    MessageModule,
    ButtonModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    HttpModule,
    ReactiveFormsModule,
    
    BeneficioRoutingModule
  ],
  exports: [

  ],
  declarations: [
    BeneficioComponent,
    BeneficioFormComponent,
    MensagemErroComponent
  ],
  providers: [
    BeneficioService,
    ConfirmationService,
    BeneficioDeactivateGuard
  ]
})
export class BeneficioModule { }
