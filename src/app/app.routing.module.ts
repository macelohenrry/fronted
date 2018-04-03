import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from './guards/auth.guard';
import { AcessoComponent } from './acesso/acesso.component';
import { InicioComponent } from './inicio/inicio.component';

const appRoutes: Routes = [
    { path:  'acesso', component: AcessoComponent },
    { path: '', component: InicioComponent,
        canActivate: [AuthGuard]    
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}