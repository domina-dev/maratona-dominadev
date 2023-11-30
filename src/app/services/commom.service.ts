import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compilacao } from '../model/compilacao';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Compilacao[]> {
    return this.http.get<Compilacao[]>(`${environment.url_api}/compilacao`).pipe(take(1))
  }

  adicionar(compilacao: Compilacao): Observable<Compilacao> {
    return this.http.post<Compilacao>(`${environment.url_api}/compilacao`, compilacao).pipe(take(1))
  }

  atualizar(compilacao: Compilacao): Observable<Compilacao> {
    return this.http.put<Compilacao>(`${environment.url_api}/compilacao`, compilacao).pipe(take(1))
  }

  deletar(id: number): Observable<Compilacao> {
    return this.http.delete<Compilacao>(`${environment.url_api}/compilacao`, {
      params: { id: id }
    }).pipe(take(1))
  }

}
