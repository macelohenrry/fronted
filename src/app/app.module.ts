import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';

import { MessageService } from 'primeng/components/common/messageservice';
import { GrowlModule } from 'primeng/components/growl/growl';

import { SheredModule } from './shered/shered.module';
import { MenuModule } from './menu/menu.module';

import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { AcessoComponent } from './acesso/acesso.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthService } from './acesso/auth.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    AcessoComponent,
    InicioComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenuModule,
    GrowlModule,

    SheredModule,
    
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'pt-BR'
    },
    MessageService, 
    AuthService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
