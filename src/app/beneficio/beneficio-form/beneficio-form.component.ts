import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';

import { EMensage } from './../../model/model';
import { MessageService } from 'primeng/components/common/messageservice';

import 'rxjs/add/operator/map';

import { BeneficioService } from './../beneficio.service';


@Component({
  selector: 'app-beneficio-form',
  templateUrl: './beneficio-form.component.html',
  styleUrls: ['./beneficio-form.component.css']
})
export class BeneficioFormComponent implements OnInit {

  formBeneficio: FormGroup;

  constructor(
    private beneficioService: BeneficioService,
    private http: Http,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    /*Assim ou igual ao de baixo
      this.formulario = new FormGroup({
      descricao: new FormControl(null)
    });*/

    this.formBeneficio = this.formBuilder.group({
      descricao: [null, Validators.required]
    });
  }

  onSubmit() {
    if(this.formBeneficio.valid) {
      this.beneficioService.onSubmit(this.formBeneficio)
      .subscribe(
        res => res,
        error => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: error.json().errors[0].defaultMessage });
          //console.log(error.json().errors[0].defaultMessage)
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

}
