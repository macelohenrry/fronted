import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { SolicitantesService } from './../solicitantes.service';
import { Solicitante } from './../../model/solicitante';

@Component({
  selector: 'app-solicitante-detalhe',
  templateUrl: './solicitante-detalhe.component.html',
  styleUrls: ['./solicitante-detalhe.component.css']
})
export class SolicitanteDetalheComponent implements OnInit {

  solicitante: Solicitante;
  private inscricao: Subscription;

  constructor(
    private solicitantesService: SolicitantesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      params['id'] != undefined ? this.getSolicitante(params['id']) : "";
    });
  }

  getSolicitante(id: number) {
    this.solicitantesService.getSolicitante(id)
      .subscribe(solicitante => this.solicitante = solicitante);
  }

}
