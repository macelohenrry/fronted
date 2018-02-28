import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BeneficioComponent } from '../beneficio/beneficio.component';
import { BeneficioFormComponent } from "./beneficio-form/beneficio-form.component";

const benefioRoutes: Routes = [
    ///*
    { path: 'beneficios', component: BeneficioComponent},
    { path: 'beneficios/novo', component: BeneficioFormComponent},
    { path: 'beneficios/:id/editar', component: BeneficioFormComponent}
    //*/

    /*
    //Caso fosse utilizar rotas Filhas
    { path: 'beneficios', component: BeneficioComponent, children: [
        { path: 'novo', component: BeneficioFormComponent },
        { path: ':id/editar', component: BeneficioFormComponent }
    ]}
    //*/
];

@NgModule({
    imports: [RouterModule.forChild(benefioRoutes)],
    exports: [RouterModule]
})
export class BeneficioRoutingModule {}