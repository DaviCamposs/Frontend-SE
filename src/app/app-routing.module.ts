import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'autenticacao',
    loadChildren: () => import('./pages/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
  },
  {
    path: '**',
    redirectTo: 'autenticacao'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
