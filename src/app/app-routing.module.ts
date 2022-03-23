import { MateriaisComponent } from './pages/materiais/components/materiais/materiais.component';
import { SemautenticacaoGuard } from './shared/guards/semautenticacao.guard';
import { AutenticacaoGuard } from './shared/guards/autenticacao.guard';
import { LandingComponent } from './shared/components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'autenticacao',
    loadChildren: () => import('./pages/autenticacao/autenticacao.module').then(m => m.AutenticacaoModule)
  },
  {
    path: 'modulos',
    loadChildren: () => import('./pages/modulos/modulos.module').then(m => m.ModulosModule),
    canActivate: [AutenticacaoGuard]
  },
  {
    path: 'materiais',
    component: MateriaisComponent
  },
  {
    path: 'questionarios',
    loadChildren: () => import('./pages/questionarios/questionarios.module').then(m => m.QuestionariosModule),
    canActivate: [AutenticacaoGuard]
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
