import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BeneficioComponent } from './beneficio/beneficio.component';
import { AcessoComponent } from './acesso/acesso.component';
import { InicioComponent } from './inicio/inicio.component';

const APP_ROUTES: Routes = [
    { path: 'beneficios', component: BeneficioComponent },
    { path:  'acesso', component: AcessoComponent },
    { path: '', component: InicioComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);