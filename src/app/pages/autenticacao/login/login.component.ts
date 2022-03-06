import { AutenticacaoService } from './../shared/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormulario!: FormGroup

  constructor(private fb: FormBuilder , private autenticacaoService: AutenticacaoService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.setFormulario()
  }

  login() {
    if (this.loginFormulario.valid) {
      const { email , senha } = this.loginFormulario.value
      this.autenticacaoService.login(email,senha).subscribe(res => {
        localStorage.setItem('jwt',res.token! )
        this.autenticacaoService.logado = true
        this.router.navigateByUrl('')
      }, 
      erro => {
        this.toastrService.error(erro.error.mensagem)
      })
    } 
    else {
      this.toastrService.error('Insira um email e senha válidos(maior que 8 caracteres)')      
    }
  }
  // PRIVATE METHODS
  setFormulario() {
    this.loginFormulario = this.fb.group({
      email: ['' , [Validators.required , Validators.email]],
      senha: [ '' , [ Validators.required , Validators.minLength(8)]]
    })
  }

}
