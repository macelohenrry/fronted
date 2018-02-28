import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing.module';

import { MenuComponent } from './menu.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule

  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
