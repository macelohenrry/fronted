import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MenuModule } from './menu/menu.module';
import { BeneficioModule } from './beneficio/beneficio.module';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';

import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { AcessoComponent } from './acesso/acesso.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    AcessoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MenuModule,
    BeneficioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
