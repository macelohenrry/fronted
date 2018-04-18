import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable()
export class SolicitantesService {

  private url = "http://localhost:8080";

  constructor(
    private http: Http,
    private formBuilder: FormBuilder) { }

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem("token")}`
  });

  onSubimit(solicitante: FormGroup) {
    return this.http.post(`${this.url}/solicitantes`, JSON.stringify(solicitante.value), { headers: this.headers });
  }

}
