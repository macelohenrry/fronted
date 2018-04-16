import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from './guards/auth.guard';
import { AcessoComponent } from './acesso/acesso.component';
import { InicioComponent } from './inicio/inicio.component';

const appRoutes: Routes = [
    //Usando loadChildren, não pode deixar nenhum import do BeneficioModule em outro arquivo
    { path: 'solicitantes',
        loadChildren: 'app/solicitantes/solicitantes.module#SolicitantesModule',
        canActivate: [AuthGuard]
    },
    { path: 'beneficios', 
        loadChildren: 'app/beneficio/beneficio.module#BeneficioModule',
        canActivate: [AuthGuard] 
    },
    { path:  'acesso', component: AcessoComponent },
    { path: '', 
        component: InicioComponent,
        canActivate: [AuthGuard]    
    }, 
    { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}