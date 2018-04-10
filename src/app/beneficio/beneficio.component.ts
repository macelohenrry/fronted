import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeneficioService } from './beneficio.service';
import { Beneficio } from './../model/model';

import 'rxjs/add/operator/catch';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-beneficio',
  templateUrl: './beneficio.component.html',
  styleUrls: ['./beneficio.component.css']
})
export class BeneficioComponent implements OnInit {

  private beneficios: Beneficio[];
  private inscricao: Subscription;
  private beneficio: Beneficio;

  constructor(
    private beneficioService: BeneficioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit() {
    this.beneficioService.getBeneficios()
      .subscribe(beneficios => this.beneficios = beneficios);

    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      let id = params['id'];
      this.getBeneficio(id);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  getBeneficio(id: number) {
    this.beneficioService.getBeneficio(id)
      .subscribe(beneficio => this.beneficio = beneficio);
  }

}
