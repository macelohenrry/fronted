import { SolicitantesService } from './../solicitantes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { EstadoCivil, EEstadoCivil } from './../../model/solicitante';

@Component({
  selector: 'app-solicitante-form',
  templateUrl: './solicitante-form.component.html',
  styleUrls: ['./solicitante-form.component.css']
})
export class SolicitanteFormComponent implements OnInit {
  
  private inscricao: Subscription;
  solicitanteForm: FormGroup;
  selectEstadoCivil: any[];

  constructor(
    private formBuilder: FormBuilder,
    private solicitantesService: SolicitantesService
    ) {
      this.selectEstadoCivil = [
        {"id": EEstadoCivil['Solteiro(a)'], "descricao": EEstadoCivil['1']},
        {"id": EEstadoCivil["Casado(a)"], "descricao": EEstadoCivil['2']},
        {"id": EEstadoCivil["Divorciado(a)"], "descricao": EEstadoCivil['3']},
        {"id": EEstadoCivil["Viúvo(a)"], "descricao": EEstadoCivil['4']},
        {"id": EEstadoCivil["Separado(a)"], "descricao": EEstadoCivil['5']},
        {"id": EEstadoCivil["União estável"], "descricao": EEstadoCivil['6']},
        {"id": EEstadoCivil["Relação Marital"], "descricao": EEstadoCivil['7']}
      ]
  }
    
  ngOnInit() {
    this.solicitanteForm = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      apelido: [null, Validators.required],
      email: [null],
      contato: [null, Validators.required],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
      orgaoExpedidor: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      nis: [null, Validators.required],
      estadoCivil: [null]
    });
  }

  onSubmit() {
    console.log(this.solicitanteForm);
    this.solicitantesService.onSubimit(this.solicitanteForm)
      .subscribe(res => {
        
      },
      error => {
        
      });
  }

}
