import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  exports: [
    LoginComponent,
    RegistroComponent
  ]
})
export class AutenticacaoModule { }
