import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BeneficioService } from './beneficio.service';

import 'rxjs/add/operator/catch';
import { Beneficio } from '../model/model';


@Component({
  selector: 'app-beneficio',
  templateUrl: './beneficio.component.html',
  styleUrls: ['./beneficio.component.css']
})
export class BeneficioComponent implements OnInit {

  private beneficios: Beneficio[];
  
  
  constructor(
    private beneficioService: BeneficioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit() {
    this.beneficioService.getBeneficios()
      .subscribe(beneficios => this.beneficios = beneficios);
  }
}
