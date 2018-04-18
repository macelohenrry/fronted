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
  private eEstadoCivil: EEstadoCivil;
  solicitanteForm: FormGroup;
  selectEstadoCivil: EstadoCivil[];

  constructor(
    private formBuilder: FormBuilder,
    private solicitantesService: SolicitantesService
    ) {
    this.selectEstadoCivil = [
      {id: 1, descricao: EEstadoCivil[1]},
      {id: 2, descricao: EEstadoCivil[2]},
      {id: 3, descricao: EEstadoCivil[3]},
      {id: 4, descricao: EEstadoCivil[4]},
      {id: 5, descricao: EEstadoCivil[5]},
      {id: 6, descricao: EEstadoCivil[6]},
      {id: 7, descricao: EEstadoCivil[7]}
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
