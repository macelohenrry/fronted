import { Beneficio } from './../model/beneficio';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BeneficioService {

  url = "http://localhost:8080";

  private headers = new Headers({
    'Content-Type': 'application/json'
    });

  private beneficios: any[] = [
    {id: 1, descricao: 'Bolsa Família', status: true},
    {id: 2, descricao: 'Bolsa Frauda', status: true},
    {id: 3, descricao: 'Vale Gás', status: true}
  ]

  constructor(private http: Http, private formBuilder: FormBuilder) { 

  }

  onSubmit(formBeneficio: FormGroup) {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});

    console.log(formBeneficio);
    this.http.post(`${this.url}/beneficios`, JSON.stringify(formBeneficio.value), options)
      .map(res => console.log(res))
      .subscribe(dados => console.log(dados));
  }

  getBeneficios() {
    return this.beneficios;
  }


}
