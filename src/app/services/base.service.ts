import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  default(param1?: any, param2?: any, param3?: any) {
    alert("Teste Executado com sucesso!")
  }
}
