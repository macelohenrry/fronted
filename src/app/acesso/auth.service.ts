import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
 
  oauthUrl = 'http://localhost:8080/oauth/token';

  constructor(
   private http: Http, 
   private formBuilder: FormBuilder) { 

  }

  onSubmit(formularioLogin: FormGroup) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic aGVuZGktY2xpZW50OmhlbmRpLXNlY3JldA==');

    const body = `username=${formularioLogin.value.username}&password=${formularioLogin.value.password}&grant_type=password`;

    this.http.post(this.oauthUrl, body, {headers, withCredentials: true})
      /*.map((response: Response) => {
        console.log(response.json().access_token);
        this.armazenarToken(response.json().access_token);
      })*/
      .subscribe(dados => this.armazenarToken(dados.json().access_token));
  }

  private armazenarToken(token: string){
    localStorage.setItem("token", token);
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
  */

}
