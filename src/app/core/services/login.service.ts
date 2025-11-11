import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Aluno } from 'src/app/model/aluno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = environment.url_api

  constructor(private http: HttpClient) { }

  login(body: Aluno): Observable<any> {
    return this.http.post<any>(`${this.API}/login`, body).pipe(take(1))
  }
}
