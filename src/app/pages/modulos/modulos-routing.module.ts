import { CursoComponent } from './curso/curso.component';
import { ModulosListaComponent } from './modulos-lista/modulos-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ModulosListaComponent
  },
  {
    path: ':id',
    component: CursoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
