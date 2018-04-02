import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Http, Response } from '@angular/http';

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    /*Assim ou igual ao de baixo
      this.formulario = new FormGroup({
      descricao: new FormControl(null)
    });*/

    this.formBeneficio = this.formBuilder.group({
      descricao: [null]
    });
  }

  onSubmit() {
    this.beneficioService.onSubmit(this.formBeneficio)
    .map((response: Response) => {
      console.log(response.ok)
    })
    .subscribe(
      res => res,
      error => console.log(error));

  }

}
