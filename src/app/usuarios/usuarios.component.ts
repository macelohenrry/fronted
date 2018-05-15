import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NgLocalization } from '@angular/common';

import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { User, EMensage, Role } from './../model/model';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userForm: FormGroup;

  displayDialog: boolean;
  user: User;
  selectedUser: User;
  newUser: boolean;
  usuarios: User[];

  multiSelectRoles: Role[];

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private messageService: MessageService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(res => { this.usuarios = res })

    this.userForm = this.formBuilder.group({
      id: [null],
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.email],
      roles: [null, Validators.required]
    });

    this.usuariosService.getRoles().subscribe(res => { this.multiSelectRoles = res })

  }

  showDialogToAdd() {
    this.userForm.reset();
    this.displayDialog = true;
  }

  salvar() {
    if (this.userForm.valid) {
      this.usuariosService.salvar(this.userForm)
        .subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: EMensage.MsgSucesso });
          this.userForm.reset();
        },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: EMensage.ErroInformacaoInvalida });
          });
      this.router.navigate(['/']);
    } else {
      this.verificaValidacoesForm(this.userForm);
    }
  }

  remover() {
    this.usuariosService.remover(this.selectedUser.id)
      .subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: EMensage.MsgSucesso });
      },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: EMensage.MsgErro });
        });
    this.router.navigate(['/']);
  }

  confirmacao() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o Usuário?',
      accept: () => {
        this.remover();
      }
    });
  }

  onRowSelect(event) {
    this.userForm.patchValue({
      id: event.data.id,
      username: event.data.username,
      email: event.data.email,
      password: null,
      roles: event.data.roles
    });
    this.displayDialog = true;
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

  verificaValidTouched(campo) {
    return !this.userForm.get(campo).valid && (this.userForm.get(campo).touched || this.userForm.get(campo).dirty);
  }

  msgErro() {
    return EMensage.ErroCampoObrigatorio;
  }
  msgEmailErro() {
    return EMensage.ErroEmail;
  }



}
