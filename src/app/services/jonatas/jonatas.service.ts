import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JonatasService {

  constructor() { }

  teste(){
    alert("Teste Jonatas Executado com sucesso!")
  }
}
