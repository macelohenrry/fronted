import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';

import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { EMensage, Beneficio } from './../../model/model';
import { BeneficioService } from './../beneficio.service';


@Component({
  selector: 'app-beneficio-form',
  templateUrl: './beneficio-form.component.html',
  styleUrls: ['./beneficio-form.component.css']
})
export class BeneficioFormComponent implements OnInit, IFormCanDeactivate {

  formBeneficio: FormGroup;
  private inscricao: Subscription;
  private beneficio: Beneficio;

  constructor(
    private beneficioService: BeneficioService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    /*Assim ou igual ao de baixo
      this.formulario = new FormGroup({
      descricao: new FormControl(null)
    });*/

    this.formBeneficio = this.formBuilder.group({
      id: [null],
      descricao: [null, Validators.required],
      data:[null],
      status: true
    });

    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      params['id'] != undefined ? this.getBeneficio(params['id']): "";
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onSubmit() {
    if(this.formBeneficio.valid) {
      this.beneficioService.onSubmit(this.formBeneficio)
      .subscribe(
        res => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: EMensage.MsgSucessoBeneficio});
          this.formBeneficio.reset();
          this.router.navigate(['/beneficios']);
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: error.json().errors[0].defaultMessage });
        }
      );
    } else {
      this.verificaValidacoesForm(this.formBeneficio);
    }
  }
  
  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo)
      controle.markAsTouched();
      if(controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificaValidTouched(campo) {
    return !this.formBeneficio.get(campo).valid && this.formBeneficio.get(campo).touched;
  }

  msgErro() {
    return EMensage.ErroCampoObrigatorio;
  }

  getBeneficio(id: number) {
    this.beneficioService.getBeneficio(id)
      .subscribe(beneficio =>  {
        this.preencherEditar(beneficio);
      });
  }

  preencherEditar(beneficio) {
    this.formBeneficio.patchValue({
      id: beneficio.id,
      descricao: beneficio.descricao,
      data: beneficio.data,
      status: beneficio.status
    });
  }

  podeDesativar() {
    this.confirmationService.confirm({
      header: 'Confimação',
      message: EMensage.MsgInfoAlterada,
      accept: () => {
        return true;
      },
      reject: () => {
        return false;
      }
    });
  }

}
