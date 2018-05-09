import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';

const usuariosRoutes: Routes = [

  { path: '', component: UsuariosComponent }

]

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule { }
