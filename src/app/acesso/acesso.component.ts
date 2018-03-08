import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

import { AcessoService } from './acesso.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  formularioLogin: FormGroup;
  

  constructor(private http: Http, private formBuilder: FormBuilder, private acessoService : AcessoService) {
    
   }

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmit() {
    this.acessoService.onSubmit(this.formularioLogin);

  }

}
