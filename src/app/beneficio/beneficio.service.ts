import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class BeneficioService {

  url = "http://localhost:8080";

  private beneficios: any[] = [
    {id: 1, descricao: 'Bolsa Família', status: true},
    {id: 2, descricao: 'Bolsa Frauda', status: true},
    {id: 3, descricao: 'Vale Gás', status: true}
  ]

  constructor(private http: Http, private formBuilder: FormBuilder) { 

  }

  onSubmit(formBeneficio: FormGroup) {
    this.http.post(`${this.url}/beneficios`, JSON.stringify(formBeneficio.value))
      .subscribe(dados => console.log(dados));
  }

  getBeneficios() {
    return this.beneficios;
  }

}
