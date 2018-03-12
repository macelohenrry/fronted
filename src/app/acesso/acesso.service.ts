import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AcessoService {

  public token: string;
  private url = "http://localhost:8080";


  constructor(private http: Http, private formBuilder: FormBuilder) { 

  }

  onSubmit(formularioLogin: FormGroup) {
    this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value))
      .map((response: Response) => {
        
        console.log(response);
      })
      .subscribe(dados => console.log(dados));
      
  }


}
