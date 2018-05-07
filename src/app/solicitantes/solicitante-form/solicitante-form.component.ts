import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Beneficio, EMensage } from './../../model/model';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/components/common/messageservice';

import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
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
  solicitanteForm: FormGroup;
  selectEstadoCivil: any[];
  selectTrabalho: any[];
  selectCasa: any[];
  selectPrevidencia: any[];
  selectBeneficios: Beneficio[];

  constructor(
    private formBuilder: FormBuilder,
    private solicitantesService: SolicitantesService,
    private beneficioService: BeneficioService,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {
    this.selectEstadoCivil = solicitantesService.getEnumEstadoCilvel();
    this.selectTrabalho = solicitantesService.getEnumTrablho();
    this.selectCasa = solicitantesService.getEnumCasa();
    this.selectPrevidencia = solicitantesService.getEnumPrevidencia();

  }

  ngOnInit() {

    this.inicializaCampos();

    this.beneficioService.getBeneficios()
      .subscribe(beneficios => this.selectBeneficios = beneficios);

    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      params['id'] != undefined ? this.getSolicitante(params['id']) : "";
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  getSolicitante(id: number) {
    this.solicitantesService.getSolicitante(id)
      .subscribe(solicitante => {
        this.preencherEditar(solicitante);
      });
  }

  preencherEditar(solicitante) {

    this.solicitanteForm.patchValue({
      id: solicitante.id,
      beneficio: solicitante.beneficio,
      nome: solicitante.nome,
      apelido: solicitante.apelido,
      email: solicitante.email,
      contato: solicitante.contado,
      cpf: solicitante.cpf,
      rg: solicitante.rg,
      orgaoExpedidor: solicitante.orgaoExpedidor,
      dataNascimento: solicitante.dataNascimento,
      nis: solicitante.nis,
      estadoCivil: solicitante.estadoCivil,
      situacaoApresentada: solicitante.situacaoApresentada,
      observacao: solicitante.observacao,
      certidaoNascimento: {
        id: solicitante.certidaoNascimento.id,
        numero: solicitante.certidaoNascimento.numero,
        livro: solicitante.certidaoNascimento.livro,
        folha: solicitante.certidaoNascimento.folha,
        cartorio: solicitante.certidaoNascimento.cartorio
      },
      tituloEleitor: {
        id: solicitante.tituloEleitor.id,
        numero: solicitante.tituloEleitor.numero,
        zona: solicitante.tituloEleitor.zona,
        sessao: solicitante.tituloEleitor.sessao
      },
      endereco: {
        id: solicitante.endereco.id,
        cep: solicitante.endereco.cep,
        rua: solicitante.endereco.rua,
        bairro: solicitante.endereco.bairro,
        numero: solicitante.endereco.numero,
        complemento: solicitante.endereco.complemento,
        pontoReferencia: solicitante.endereco.pontoReferencia
      },
      dadoSocioEconomico: {
        id: solicitante.dadoSocioEconomico.id,
        estuda: solicitante.dadoSocioEconomico.estuda,
        escola: solicitante.dadoSocioEconomico.escola,
        serie: solicitante.dadoSocioEconomico.serie,
        trabalho: solicitante.dadoSocioEconomico.trabalho,
        funcao: solicitante.dadoSocioEconomico.funcao,
        renda: solicitante.dadoSocioEconomico.renda,
        casa: solicitante.dadoSocioEconomico.casa,
        valorAluguel: solicitante.dadoSocioEconomico.valorAluguel,
        outroTipoCasa: solicitante.dadoSocioEconomico.outroTipoCasa,
        aguaEncanada: solicitante.dadoSocioEconomico.aguaEncanada,
        esgotoSanitario: solicitante.dadoSocioEconomico.esgotoSanitario,
        energiaEletrica: solicitante.dadoSocioEconomico.energiaEletrica,
        programaSocial: solicitante.dadoSocioEconomico.programaSocial,
        valorProgramaSocial: solicitante.dadoSocioEconomico.valorProgramaSocial,
        previdenciaSocial: solicitante.dadoSocioEconomico.previdenciaSocial,
        outroPrevidenciaSocial: solicitante.dadoSocioEconomico.outroPrevidenciaSocial
      }
    });


    solicitante.composicaoFamiliar.map(familia => {
      this.composicaoFamiliar.push(
        this.formBuilder.group({
          id: [familia.id],
          nome: [familia.nome, Validators.required],
          cpf: [familia.cpf, Validators.required],
          idade: [familia.idade, Validators.required],
          parentesco: [familia.parentesco, Validators.required],
          atividade: [familia.atividade, Validators.required],
          renda: [familia.renda, Validators.required]
        })
      );
    });
  }

  onSubmit() {
    if (this.solicitanteForm.valid) {
      this.solicitantesService.onSubimit(this.solicitanteForm)
        .subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: EMensage.MsgSucessoBeneficio });
          this.solicitanteForm.reset();
          this.router.navigate(['/solicitantes']);
        },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: EMensage.ErroInformacaoInvalida });
          });
    } else {
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
        nome: [null, Validators.required],
        cpf: [null, Validators.required],
        idade: [null, Validators.required],
        parentesco: [null, Validators.required],
        atividade: [null, Validators.required],
        renda: [null, Validators.required]
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
    if (this.solicitanteForm.touched)
      return confirm(EMensage.MsgInfoSairRota);
    return true;
  }

  verificaValidTouched(campo) {
    return !this.solicitanteForm.get(campo).valid && (this.solicitanteForm.get(campo).touched || this.solicitanteForm.get(campo).dirty);
  }

  msgErro() {
    return EMensage.ErroCampoObrigatorio;
  }
  msgErroFormArray() {
    return EMensage.ErroPreencherTodosCampos;
  }


  inicializaCampos() {
    this.solicitanteForm = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      apelido: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      contato: [null, Validators.required],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
      orgaoExpedidor: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      nis: [null],
      estadoCivil: [null, Validators.required],
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
        cep: [null, Validators.required],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        complemento: [null, Validators.required],
        numero: [null, Validators.required],
        pontoReferencia: [null, Validators.required]
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
  }
}


/*{
  "timestamp":"2018-05-02","status":400,"error":"Bad Request","exception":"org.springframework.web.bind.MethodArgumentNotValidException",
  "errors":
    [
      {
        "codes":["CPF.solicitante.cpf","CPF.cpf","CPF.java.lang.String","CPF"],"arguments":[{"codes":["solicitante.cpf","cpf"],"arguments":null,"defaultMessage":"cpf","code":"cpf"}],"defaultMessage":"CPF inválido","objectName":"solicitante","field":"cpf","rejectedValue":"345.345.345-34","bindingFailure":false,"code":"CPF"
      }
    ],"message":"Validation failed for object='solicitante'. Error count: 1","path":"/solicitantes"
}*/
