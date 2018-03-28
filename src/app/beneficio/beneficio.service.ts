import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Beneficio } from './../model/beneficio';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class BeneficioService {

  url = "http://localhost:8080";

  private beneficios: Beneficio[];

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}` 
    });

  constructor(private http: Http, private formBuilder: FormBuilder) { 

  }

  onSubmit(formBeneficio: FormGroup) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}` 
    });
    let options = new RequestOptions({headers});

    this.http.post(`${this.url}/beneficios`, JSON.stringify(formBeneficio.value), options)
      .map(res => res)
      .subscribe(res => res.ok);
  }

  getBeneficios() {
    return this.http.get(`${this.url}/beneficios`, {headers: this.headers})
      .subscribe(res => {
        console.log(res.json())
      });
  }

}
