import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router'

import { Acesso } from './../model/acesso';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  private formularioLogin: FormGroup;
  private acesso: Acesso;

  constructor(
    private router: Router, 
    private http: Http, 
    private formBuilder: FormBuilder, 
    private authService : AuthService
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
        this.authService.armazenarToken(res.text())
        this.router.navigate(['/']);
      },
      error => {
        
      }
  );
  }

}
 