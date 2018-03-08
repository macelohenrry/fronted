import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';

@Injectable()
export class AcessoService {

  url = "http://localhost:8080";

  constructor(private http: Http, private formBuilder: FormBuilder) { 

  }

  onSubmit(formularioLogin: FormGroup) {
    this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value))
      .subscribe(dados => console.log(dados));
      
  }

}
