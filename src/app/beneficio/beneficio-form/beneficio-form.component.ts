import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-beneficio-form',
  templateUrl: './beneficio-form.component.html',
  styleUrls: ['./beneficio-form.component.css']
})
export class BeneficioFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private http: Http,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    /*Assim ou igual ao de baixo
      this.formulario = new FormGroup({
      descricao: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      descricao: [null]
    });
  }

  onSubmit() {
    this.http.post('/beneficios', JSON.stringify(this.formulario.value))
      .subscribe(dados => console.log(dados));

  }

}
