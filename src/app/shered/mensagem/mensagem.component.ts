import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css'],
})
export class MensagemComponent implements OnInit {

  msgs: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
 
}
