import { Beneficio } from './../model/beneficio';
import { Component, OnInit } from '@angular/core';

import { BeneficioService } from './beneficio.service';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-beneficio',
  templateUrl: './beneficio.component.html',
  styleUrls: ['./beneficio.component.css']
})
export class BeneficioComponent implements OnInit {

  private beneficios: Beneficio[];
  constructor(private beneficioService: BeneficioService) { }

  ngOnInit() {
    this.beneficioService.getBeneficios()
      .subscribe(beneficios => this.beneficios = beneficios);
  }

}
