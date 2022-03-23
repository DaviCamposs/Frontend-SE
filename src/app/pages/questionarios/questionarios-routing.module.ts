import { QuestionarioComponent } from './questionario/questionario.component';
import { Questionario } from './shared/questionariosResponse.interface';
import { QuestionarioListaComponent } from './questionario-lista/questionario-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QuestionarioListaComponent
  },
  {
    path: ':id',
    component: QuestionarioComponent
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
export class QuestionariosRoutingModule { }
