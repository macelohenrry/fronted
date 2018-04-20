import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';

import { EEstadoCivil, ETrabalho } from './../model/solicitante';

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

  getEnumEstadoCilvel() {
    let selectEstadoCivil: any[];
    selectEstadoCivil = [
      { "id": EEstadoCivil['Solteiro(a)'], "descricao": EEstadoCivil['1'] },
      { "id": EEstadoCivil["Casado(a)"], "descricao": EEstadoCivil['2'] },
      { "id": EEstadoCivil["Divorciado(a)"], "descricao": EEstadoCivil['3'] },
      { "id": EEstadoCivil["Viúvo(a)"], "descricao": EEstadoCivil['4'] },
      { "id": EEstadoCivil["Separado(a)"], "descricao": EEstadoCivil['5'] },
      { "id": EEstadoCivil["União estável"], "descricao": EEstadoCivil['6'] },
      { "id": EEstadoCivil["Relação Marital"], "descricao": EEstadoCivil['7'] }
    ]
    return selectEstadoCivil;
  }

  getEnumTrablho() {
    let selectTrabalho: any[];
    selectTrabalho = [
      {"id": ETrabalho['Formal'], "descricao": ETrabalho[1]},
      {"id": ETrabalho['Informal'], "descricao": ETrabalho[2]}
    ]
    return selectTrabalho;
  }

}
.