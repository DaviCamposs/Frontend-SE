import { MateriaisModule } from './pages/materiais/materiais.module';
import { SemautenticacaoGuard } from './shared/guards/semautenticacao.guard';
import { AutenticacaoGuard } from './shared/guards/autenticacao.guard';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AutenticacaoModule } from './pages/autenticacao/autenticacao.module';
import { ToastrModule } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AutenticacaoModule,
    MateriaisModule,
    ToastrModule.forRoot(),
    QuillModule.forRoot()
  ],
  providers: [AutenticacaoGuard, SemautenticacaoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
