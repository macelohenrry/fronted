import { Growl } from 'primeng/components/growl/growl';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowlModule } from 'primeng/growl';
import { ButtonModule } from 'primeng/components/button/button';
import { MessageService } from 'primeng/components/common/messageservice';


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
