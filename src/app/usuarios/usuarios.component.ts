import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from './../model/model';

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
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id: [null],
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.email]
    });
  }

  showDialogToAdd() {
    this.displayDialog = true;
  }

  salvar() {
    console.log("Salvou");
  }

  remover() {

  }

  onRowSelect(event) {

  }


}
