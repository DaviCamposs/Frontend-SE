import { AutenticacaoResponse } from './autenticacaoResponse.interface';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  registrarUsuario(nome: string , email: string , senha: string): Observable<AutenticacaoResponse> {
    return this.http.post<AutenticacaoResponse>(`${environment.api}/autenticacao/registro`, { nome , email , senha })
  }

  login(email: string , senha: string): Observable<AutenticacaoResponse> {
    return this.http.post<AutenticacaoResponse>(`${environment.api}/autenticacao/login`, { email , senha })
  }
}
