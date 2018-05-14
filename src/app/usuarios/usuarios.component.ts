import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';

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
  users: User[];

  multiSelectRoles: Role[];

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
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
    this.displayDialog = true;
  }

  salvar() {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.usuariosService.salvar(this.userForm)
        .subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: EMensage.MsgSucesso });
          this.userForm .reset();
        },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: EMensage.ErroInformacaoInvalida });
          });
    } else {
      this.verificaValidacoesForm(this.userForm);
    }
  }

  remover() {

  }

  onRowSelect(event) {

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
