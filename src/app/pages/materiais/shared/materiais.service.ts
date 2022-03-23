import { environment } from './../../../../environments/environment';
import { MateriaisResponse } from './materiaisResponse.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

  constructor(private http: HttpClient) { }

  getMateriais(): Observable<MateriaisResponse> {
    return this.http.get<MateriaisResponse>(`${environment.api}/material`)
  }
}
