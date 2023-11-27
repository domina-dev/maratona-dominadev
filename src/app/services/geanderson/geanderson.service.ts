import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeandersonService {

  constructor() { }

  teste(){
    alert("Teste Geanderson Executado com sucesso!")
  }
}
