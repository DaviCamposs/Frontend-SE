import { Router } from '@angular/router';
import { AutenticacaoService } from './../../../pages/autenticacao/shared/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  estaLogado(): boolean {
    return this.autenticacaoService.logado
  }

  logout() {
    this.autenticacaoService.logado = false
    localStorage.clear()
    this.router.navigateByUrl('')
  }

}
