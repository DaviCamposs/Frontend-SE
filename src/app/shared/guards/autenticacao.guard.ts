import { AutenticacaoService } from './../../pages/autenticacao/shared/autenticacao.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(private router: Router, private autenticacaoService: AutenticacaoService){}

  canActivate(): boolean {
    const jwt = localStorage.getItem('jwt') || ''
    const jwtHelper = new JwtHelperService()

    if (jwtHelper.isTokenExpired(jwt)) {
      this.autenticacaoService.logado = false
      this.router.navigateByUrl('')
    } 
      this.autenticacaoService.logado = true
      return true
  }
  
}
