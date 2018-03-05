import { Component, OnInit } from '@angular/core';

import { BeneficioService } from './beneficio.service';

@Component({
  selector: 'app-beneficio',
  templateUrl: './beneficio.component.html',
  styleUrls: ['./beneficio.component.css']
})
export class BeneficioComponent implements OnInit {

  private beneficios: any[] = [];
  constructor(private beneficioService: BeneficioService) { }

  ngOnInit() {
    this.beneficios = this.beneficioService.getBeneficios();
  }

}
