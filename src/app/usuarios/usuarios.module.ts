import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosComponent } from './usuarios.component';
import { SheredModule } from './../shered/shered.module';
import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuariosService } from './usuarios.service';

@NgModule({
  imports: [
    CommonModule,
    SheredModule,

    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosComponent
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
