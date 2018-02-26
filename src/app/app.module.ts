import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuModule } from './menu/menu.module';
import { AcessoComponent } from './acesso/acesso.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    AcessoComponent
  ],
  imports: [
    BrowserModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
