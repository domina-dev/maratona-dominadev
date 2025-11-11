import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DbKeyInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    localStorage.setItem("token",'');
    const estabelecimentoID = localStorage.getItem("estabelecimentoID");
    
    const dbKey = 'PRIME';

    const cloned = req.clone({
      headers: req.headers.set('X-DB-KEY', dbKey),
    });
    cloned.headers.set("Content-Type", "application/json");

    if (token) {
      cloned.headers.set("Authorization", "Bearer " + token);

      return next.handle(cloned).pipe(catchError(err => {
        if (err.status === 401 || err.status === 403) {
          // this.commomService.logout();
          window.localStorage.clear();
          err.status != 0 ? setTimeout(() => {
            alert("Sessão Expirada!")
          }, 300) : null;
          window.location.reload();
        }
        const error = err.error || err.statusText;
        return throwError(error);
      }));
    }
    else {
      return next.handle(req);
    }
  }
}
