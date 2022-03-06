import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AutenticacaoService } from './../shared/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  registroFormulario!: FormGroup

  constructor(private fb: FormBuilder, private autenticacaoService: AutenticacaoService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.setFormulario()
  }

  registrar() {
    if (this.registroFormulario.valid) {
      const { nome , email , senha, senha2 } = this.registroFormulario.value
      if (senha !== senha2) {
        this.toastr.error('Senhas não conferem, digite novamente')
        return
      }  

      this.autenticacaoService.registrarUsuario(nome,email,senha).subscribe(
        res => {
          this.toastr.success('Usuário registrado')
          this.router.navigateByUrl('autenticacao/login')
        },
        erro => {
          this.toastr.error(erro.error.mensagem)
        }
      )
    } else {
      this.toastr.error('Dados inválidos, tente novamente')
    }
  }

  // PRIVATE METHODS
  setFormulario() {
    this.registroFormulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      senha2: ['', [Validators.required, Validators.min(8)]]
    })

  }

}
