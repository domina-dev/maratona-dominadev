import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VictorService {

  constructor() { }

  teste(){
    alert("Teste Victor Executado com sucesso!")
  }
}
