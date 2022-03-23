import { QuillModule } from 'ngx-quill';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosRoutingModule } from './modulos-routing.module';
import { ModulosListaComponent } from './modulos-lista/modulos-lista.component';
import { CursoComponent } from './curso/curso.component';


@NgModule({
  declarations: [
  
    ModulosListaComponent,
       CursoComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    QuillModule.forRoot()
  ]
})
export class ModulosModule { }
