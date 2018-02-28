import { Injectable } from '@angular/core';

@Injectable()
export class BeneficioService {

  private beneficios: any[] = [
    {id: 1, descricao: 'Bolsa Família', status: true},
    {id: 2, descricao: 'Bolsa Frauda', status: true},
    {id: 3, descricao: 'Vale Gás', status: true}
  ]

  constructor() { }

  getBeneficios() {

  }

}
