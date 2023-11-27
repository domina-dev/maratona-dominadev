import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoaoService {

  constructor() { }

  teste(){
    alert("Teste Joao Executado com sucesso!")
  }

  ordenarClientes(){
    alert("Clientes ordenados em ordem alfabética")
  }
}
