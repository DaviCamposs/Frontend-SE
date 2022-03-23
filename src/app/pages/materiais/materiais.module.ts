import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaisComponent } from './components/materiais/materiais.component';



@NgModule({
  declarations: [
    MateriaisComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ MateriaisComponent ]
})
export class MateriaisModule { }
