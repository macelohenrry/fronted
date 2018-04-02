import { SheredModule } from './shered/shered.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { MenuModule } from './menu/menu.module';
import { BeneficioModule } from './beneficio/beneficio.module';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';

import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { AcessoComponent } from './acesso/acesso.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthService } from './acesso/auth.service';


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
    ReactiveFormsModule,
    MenuModule,
    BeneficioModule,
    InputTextModule,
    ButtonModule,
    SheredModule,
    
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
