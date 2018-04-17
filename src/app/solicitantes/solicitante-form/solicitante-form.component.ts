import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';
import { EstadoCivil, Civil } from './../../model/solicitante';

@Component({
  selector: 'app-solicitante-form',
  templateUrl: './solicitante-form.component.html',
  styleUrls: ['./solicitante-form.component.css']
})
export class SolicitanteFormComponent implements OnInit {

  civil: Civil;
  selectCivil: Civil[];

  constructor() {
    this.selectCivil = [
      {codigo: 'CASADO', nome: 'Casado(a)'},
      {codigo: 'SOLTEIRO', nome: 'Solteiro(a)'}
    ]
   }

  ngOnInit() {
  }

}
