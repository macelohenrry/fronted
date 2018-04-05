import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Growl } from 'primeng/components/growl/growl';
import { GrowlModule } from 'primeng/growl';
import { ButtonModule } from 'primeng/components/button/button';

import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    GrowlModule
  ],
  declarations: [
    MensagemComponent
  ],
  exports: [
    MensagemComponent
  ],
  providers: [
    MessageService
  ]
})
export class SheredModule { }
