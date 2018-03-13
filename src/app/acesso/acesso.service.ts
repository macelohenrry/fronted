import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AcessoService {

  public token: string;
  private url = "http://localhost:8080";

  options = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  constructor(private http: Http, private formBuilder: FormBuilder) { 

  }

  onSubmit(formularioLogin: FormGroup) {
    this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value), this.options)
      .map((response: Response) => {
        
        console.log(response.json().token);
      })
      .subscribe(dados => console.log(dados));
      
  }


}
