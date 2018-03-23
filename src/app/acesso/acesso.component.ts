import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private http: Http, private formBuilder: FormBuilder, private authService : AuthService) {
    
   }

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmit() {
    this.authService.onSubmit(this.formularioLogin);

  }

}
 