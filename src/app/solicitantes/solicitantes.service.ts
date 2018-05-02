import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { EEstadoCivil, ETrabalho, ECasa, EPrevidencia, Solicitante } from './../model/solicitante';

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
      {"id": ETrabalho['Formal'], "descricao": ETrabalho['1']},
      {"id": ETrabalho['Informal'], "descricao": ETrabalho['2']},
      {"id": ETrabalho['Desempregado'], "descricao": ETrabalho['3']}
    ]
    return selectTrabalho;
  }
   
  getEnumCasa() {
    let selectCasa: any[];
    selectCasa = [
      {"id": ECasa['Prória'], "descricao": ECasa['1']},
      {"id": ECasa['Alugada'], "descricao": ECasa['2']},
      {"id": ECasa['Cedida'], "descricao": ECasa['3']},
      {"id": ECasa['Invasão'], "descricao": ECasa['4']},
      {"id": ECasa['Outros'], "descricao": ECasa['5']}
    ]
    return selectCasa;
  }

  getEnumPrevidencia() {
    let selectPrevidencia: any[];
    selectPrevidencia = [
      {"id": EPrevidencia['Aposentado'], "descricao": EPrevidencia['1']},
      {"id": EPrevidencia['Pensionista'], "descricao":EPrevidencia['2']},
      {"id": EPrevidencia['PCO/LOAS'], "descricao": EPrevidencia['3']},
      {"id": EPrevidencia['Auxílio Doença'], "descricao": EPrevidencia['4']},
      {"id": EPrevidencia['Seguro Desenprego'], "descricao": EPrevidencia['5']},
      {"id": EPrevidencia['Outros'], "descricao": EPrevidencia['6']}
    ]
    return selectPrevidencia;
  }

  getSolicitantes() {
    return this.http.get(`${this.url}/solicitantes`, { headers: this.headers })
      .map((res: Response) => res.json());
  }

  getSolicitante(id: number) {
    return this.http.get(`${this.url}/solicitantes/${id}`, { headers: this.headers })
      .map(res => res.json());
  }
}
