import { Injectable, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  url = "http://localhost:8080";
  jwtPayload: any;

  constructor(
    private http: Http,
    private formBuilder: FormBuilder
  ) { }

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem("token")}`
  });

  /*onSubmit(formularioLogin: FormGroup): Observable<void> {
    return this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value))
      .map(res => {
        console.log(res);
        this.armazenarToken(res.text());
      })
      .catch(error => Observable.throw(error.message));
  }*/

  onSubmit(formularioLogin: FormGroup) {
    return this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value))
      .map(res => {
        this.armazenarToken(res.text());
      })
  }

  private armazenarToken(token: string) {
    localStorage.setItem("token", token);
  }

  limparAccessToken() {
    localStorage.removeItem("token");
  }

  isTokenValido() {
    const token = localStorage.getItem("token");
    return token;
  }

  sair() {
    return this.http.get(`${this.url}/usuarios/sair`, { headers: this.headers })
      .map(res => res);
  }
}

  /*
  https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part1/
  https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part2/
  https://www.toptal.com/java/rest-security-with-jwt-spring-security-and-java
  https://github.com/szerhusenBC/jwt-spring-security-demo
  https://github.com/rfreedman/angular-tour-of-heroes-complete
  
  https://github.com/hendisantika/spring-boot-security-oauth2-example
  
  http://www.baeldung.com/rest-api-spring-oauth2-angularjs
  http://www.baeldung.com/angular-4-upgrade-for-spring-security-oauth/
  
  https://gigsterous.github.io/engineering/2017/03/01/spring-boot-4.html

  https://imasters.com.br/desenvolvimento/angular-2-enviando-dados-com-http-post/?trace=1519021197&source=single
  https://www.concretepage.com/angular-2/angular-2-http-post-example

  https://www.uno-de-piera.com/jwt-angular-2-y-laravel-5/

  Logout
  https://hellokoding.com/scalable-authentication-single-sign-on-out-sso-example-with-json-web-token-jwt-cookie-redis-java-spring-boot-freemarker/


  http://plnkr.co/edit/a0jfpicT23408K2eqyDC?p=preview
  https://kimsereyblog.blogspot.com.br/2017/09/model-driven-form-with-angular.html
  https://angular.io/api/forms/FormArrayName
  https://angular.io/guide/reactive-forms

  https://www.npmjs.com/package/ng2-input-mask
  */

