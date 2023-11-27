import { Injectable } from '@angular/core';
import { Compilacao } from 'src/app/model/compilacao';

@Injectable({
  providedIn: 'root'
})
export class BrunoService {
  
  constructor() { }

  teste(){
    alert("Teste Bruno Executado com sucesso!")
  }
}
