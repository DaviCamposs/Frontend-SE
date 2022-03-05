import { AutenticacaoService } from './../shared/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormulario!: FormGroup

  constructor(private fb: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.setFormulario()
  }

  login() {
    console.log('as')
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  // PRIVATE METHODS
  setFormulario() {
    this.loginFormulario = this.fb.group({
      email: ['' , [Validators.required , Validators.email]],
      senha: [ '' , [ Validators.required , Validators.minLength(8)]]
    })
  }

}
