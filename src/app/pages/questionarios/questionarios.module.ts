import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionariosRoutingModule } from './questionarios-routing.module';
import { QuestionarioListaComponent } from './questionario-lista/questionario-lista.component';
import { QuestionarioComponent } from './questionario/questionario.component';


@NgModule({
  declarations: [
    QuestionarioListaComponent,
    QuestionarioComponent
  ],
  imports: [
    CommonModule,
    QuestionariosRoutingModule
  ]
})
export class QuestionariosModule { }
