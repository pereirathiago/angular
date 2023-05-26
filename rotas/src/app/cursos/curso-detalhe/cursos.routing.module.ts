import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursosComponent } from "../cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "../curso-nao-encontrado/curso-nao-encontrado.component";

const appRoutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule {

}