import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';

import { SolicitantesService } from './../solicitantes.service';
import { Subscription } from 'rxjs/Subscription';

import { EEstadoCivil, ComposicaoFamiliar } from './../../model/solicitante';

@Component({
  selector: 'app-solicitante-form',
  templateUrl: './solicitante-form.component.html',
  styleUrls: ['./solicitante-form.component.css']
})
export class SolicitanteFormComponent implements OnInit {
  
  private inscricao: Subscription;
  solicitanteForm: FormGroup;
  selectEstadoCivil: any[];
  selectTrabalho: any[];
  selectCasa: any[];
  selectPrevidencia: any[];
  itensComposicaoFamiliar: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private solicitantesService: SolicitantesService
    ) {
      this.selectEstadoCivil = solicitantesService.getEnumEstadoCilvel();
      this.selectTrabalho = solicitantesService.getEnumTrablho();
      this.selectCasa = solicitantesService.getEnumCasa();
      this.selectPrevidencia = solicitantesService.getEnumPrevidencia();
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
      estadoCivil: [null], 
      
      certidaoNascimento: this.formBuilder.group({
        id: [null],
        numero: [null, Validators.required],
        livro: [null, Validators.required],
        folha: [null, Validators.required],
        cartorio: [null, Validators.required]
      }),

      tituloEleitor: this.formBuilder.group( {
        id: [null], 
        numero: [null, Validators.required],
        zona: [null, Validators.required],
        sessao: [null, Validators.required],
      }),

      endereco: this.formBuilder.group({
        id: [null],
        cep: [null],
        rua: [null, Validators.required],
        bairro: [null],
        complemento: [null],
        numero: [null],
        pontoReferencia: [null]
      }),

      dadoSocioEconomico: this.formBuilder.group({
        id: [null],
        estuda: [false],
        escola: [null],
        serie: [null],
        trabalho: [null, Validators.required],
        funcao: [null],
        renda: [null],
        casa: [null, Validators.required],
        valorAluguel: [null],
        outroTipoCasa: [null],
        aguaEncanada: [true],
        esgotoSanitario: [true],
        energiaEletrica: [true],
        programaSocial: [false],
        outroProgramSocial: [null],
        valorProgramaSocial: [null],
        previdenciaSocial: [null],
        outroPrevidenciaSocial: [null]
      }),

      composicaoFamiliar: this.formBuilder.array([
        {cpf: '11111111', descricao: ''}
      ])
    });
  }

  criandoComposicaoFamiliar(): FormArray {
    this.itensComposicaoFamiliar = new FormArray([
      
    ]);
    
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
