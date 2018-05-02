import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { MessageService } from 'primeng/components/common/messageservice';

import { Solicitante } from './../model/solicitante';
import { SolicitantesService } from './solicitantes.service';


@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.css']
})
export class SolicitantesComponent implements OnInit {

  solicitantes: Solicitante[];
  private inscricao: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private solicitantesService: SolicitantesService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.solicitantesService.getSolicitantes().subscribe(response => this.solicitantes = response);
  }

  

}
