import { environment } from './../../../../environments/environment.prod';
import { QuestionarioResponse, QuestionariosResponse } from './questionariosResponse.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor(private http: HttpClient) { }

  getQuestionarios(): Observable< QuestionariosResponse> {
    return this.http.get<QuestionariosResponse>(`${environment.api}/questionario`)
  }

  getQuestionario(id: string): Observable< QuestionarioResponse> {
    return this.http.get<QuestionarioResponse>(`${environment.api}/questionario/${id}`)
  }
}
