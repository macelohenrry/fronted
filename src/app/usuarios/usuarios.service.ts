import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class UsuariosService {

  private url = "http://localhost:8080";

  constructor(
    private http: Http,
    private formBuilder: FormBuilder) { }

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem("token")}`
  });

  salvar(user: FormGroup) {
    if(user.get("id") === null)
      return this.adicionar(user);
    return this.atualizar(user);
  }

  adicionar(user: FormGroup) {
    return this.http.post(`${this.url}/usuarios`, JSON.stringify(user.value), { headers: this.headers }); 
  }
  atualizar(user: FormGroup) {
    return this.http.put(`${this.url}/usuarios/${user.get("id").value}`, JSON.stringify(user.value), { headers: this.headers });
  }

  getRoles() {
    return this.http.get(`${this.url}/roles`, { headers: this.headers })
      .map((res: Response) => res.json());
  }

}
