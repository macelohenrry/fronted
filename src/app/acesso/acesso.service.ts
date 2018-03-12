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


  /*onSubmit(formularioLogin: FormGroup){
    let params = new URLSearchParams();
    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("fooClientIdPassword:secret")});
    let options = new RequestOptions({ headers: headers });
     
    this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value), options)
      .map(res => res.json())
      .subscribe(
        data => console.log(data),
        err => alert('Invalid Credentials')); 
  }*/

  onSubmit(formularioLogin: FormGroup) {
    this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value))
      .map((response: Response) => {
        
        console.log(response);
      })
      .subscribe(dados => console.log(dados));
      
  }

}
