import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AccordionModule} from 'primeng/accordion';

import { AppRoutingModule } from '../app.routing.module';
import { MenuComponent } from './menu.component';


@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
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
