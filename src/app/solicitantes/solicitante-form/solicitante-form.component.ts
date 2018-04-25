import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Beneficio, EMensage } from './../../model/model';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { MessageService } from 'primeng/components/common/messageservice';
import { SolicitantesService } from './../solicitantes.service';
import { BeneficioService } from './../../beneficio/beneficio.service';
import { EEstadoCivil, ComposicaoFamiliar } from './../../model/solicitante';

@Component({
  selector: 'app-solicitante-form',
  templateUrl: './solicitante-form.component.html',
  styleUrls: ['./solicitante-form.component.css']
})
export class SolicitanteFormComponent implements OnInit, IFormCanDeactivate {

  private inscricao: Subscription;
  private solicitanteForm: FormGroup;
  private selectEstadoCivil: any[];
  private selectTrabalho: any[];
  private selectCasa: any[];
  private selectPrevidencia: any[];
  private selectBeneficios: Beneficio[];
  private ben: Beneficio;


  constructor(
    private formBuilder: FormBuilder,
    private solicitantesService: SolicitantesService,
    private beneficioService: BeneficioService,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
      situacaoApresentada: [null],
      observacao: [null],
      beneficio: [null],

      certidaoNascimento: this.formBuilder.group({
        id: [null],
        numero: [null, Validators.required],
        livro: [null, Validators.required],
        folha: [null, Validators.required],
        cartorio: [null, Validators.required]
      }),

      tituloEleitor: this.formBuilder.group({
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

      composicaoFamiliar: this.formBuilder.array([])
    });

    this.beneficioService.getBeneficios()
      .subscribe(beneficios => this.selectBeneficios = beneficios);
  }
  
  onSubmit() {
    if (this.solicitanteForm.valid) {
      this.solicitantesService.onSubimit(this.solicitanteForm)
      .subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: EMensage.MsgSucessoBeneficio });
        this.solicitanteForm.reset();
        this.router.navigate(['/beneficios']);
      },
      error => {
        
      });
    } else {
      console.log(false);
      this.verificaValidacoesForm(this.solicitanteForm);
    }
  }



  



  
  
  get composicaoFamiliar(): FormArray {
    return this.solicitanteForm.get("composicaoFamiliar") as FormArray;
  }
  adicionarComposicaoFamiliar() {
    this.composicaoFamiliar.push(
      this.formBuilder.group({
        id: [null],
        nome: [null],
        cpf: [null],
        idade: [null],
        parentesco: [null],
        atividade: [null],
        renda: [null]
      })
    )
  }
  removerComposicaoFamiliar(i) {
    this.composicaoFamiliar.removeAt(i);
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo)
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  podeDesativar() {
    if(this.solicitanteForm.touched)
      return confirm(EMensage.MsgInfoSairRota);
    return true;
  }

  verificaValidTouched(campo) {
    return !this.solicitanteForm.get(campo).valid && this.solicitanteForm.get(campo).touched;
  }

  msgErro() {
    return EMensage.ErroCampoObrigatorio;
  }



}
