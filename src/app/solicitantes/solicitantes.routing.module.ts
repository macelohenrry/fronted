import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SolicitantesComponent } from "./solicitantes.component";
import { SolicitanteDetalheComponent } from "./solicitante-detalhe/solicitante-detalhe.component";
import { SolicitanteFormComponent } from "./solicitante-form/solicitante-form.component";

const solicitantesRoutes: Routes = [
    { path: '', component: SolicitantesComponent },
    { path: 'novo', component: SolicitanteFormComponent },
    { path: ':id', component: SolicitanteDetalheComponent },
    { path: ':id/editar', component: SolicitanteFormComponent }
]

@NgModule({
    imports: [RouterModule.forChild(solicitantesRoutes)],
    exports: [RouterModule],
})
export class SolicitantesRoutingModule {}