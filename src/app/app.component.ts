import { Router } from '@angular/router';
import { AutenticacaoService } from './pages/autenticacao/shared/autenticacao.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'novo-frontend';

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {}

  ngOnInit(): void {
    const jwt = localStorage.getItem('jwt') || ''
    const jwtHelper = new JwtHelperService()

    if (jwtHelper.isTokenExpired(jwt)) {
      this.autenticacaoService.logado = false
      this.router.navigateByUrl('')
    } else {
      this.autenticacaoService.logado = true
    }
      
  }

}
