import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AuthService {
 
  url = "http://localhost:8080";

  constructor(
    private http: Http, 
    private formBuilder: FormBuilder
    ) { 
  }

  onSubmit(formularioLogin: FormGroup) {
    return this.http.post(`${this.url}/login`, JSON.stringify(formularioLogin.value));
  }

  armazenarToken(token: string) {
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
