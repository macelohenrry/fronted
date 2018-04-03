import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Beneficio } from './../model/model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



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
    return this.http.post(`${this.url}/beneficios`, JSON.stringify(formBeneficio.value), {headers: this.headers});
      
  }


  getBeneficios() {
    return this.http.get(`${this.url}/beneficios`, {headers: this.headers})
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
