import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModulosResponse, CursoResponse } from './modulosResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  constructor(private http: HttpClient) { }


  getModulos(): Observable< ModulosResponse> {
    return this.http.get<ModulosResponse>(`${environment.api}/modulo`)
  }

  getCurso(id: string): Observable< CursoResponse > {
    return this.http.get<CursoResponse>(`${environment.api}/curso/${id}`)
  }

}
