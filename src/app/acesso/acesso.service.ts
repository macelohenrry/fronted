import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AcessoService {

  private url = "http://localhost:8080";

  /*
  https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part1/
  https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part2/
  https://www.toptal.com/java/rest-security-with-jwt-spring-security-and-java
  https://github.com/szerhusenBC/jwt-spring-security-demo
  https://github.com/rfreedman/angular-tour-of-heroes-complete


  http://www.baeldung.com/rest-api-spring-oauth2-angularjs
  http://www.baeldung.com/angular-4-upgrade-for-spring-security-oauth/

  https://gigsterous.github.io/engineering/2017/03/01/spring-boot-4.html
  */
  constructor(private http: Http, private formBuilder: FormBuilder) { 

  }

  myHeaders = new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' });
  options = new RequestOptions({headers: this.myHeaders});

  onSubmit(formularioLogin: FormGroup) {
    this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value), this.options)
      /*.map((response: Response) => {
        
        console.log(response.json().token);
      })*/
      .subscribe(dados => console.log(dados));
  }
}
