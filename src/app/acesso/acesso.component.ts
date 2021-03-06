import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router'

import { MessageService } from 'primeng/components/common/messageservice';

import { EMensage } from './../model/model';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    private router: Router,
    private http: Http,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {

  }

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmit() {
    this.authService.onSubmit(this.formularioLogin)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: EMensage.ErroLogin });
        }
      );
  }

}
