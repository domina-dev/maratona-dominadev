import { Injectable } from '@angular/core';
import { NumberArray } from 'd3';

@Injectable({
  providedIn: 'root'
})
export class GuilhermeService {

  constructor() { }

  mostraNome() {
    let nome = prompt('Qual seu nome?')
    console.log(nome);

  }

  calculaMedia() {
    let numeros = [10, 10, 10];
    let soma: number = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    let media = soma / numeros.length;
    console.log("a média é: " + media);
    
  }
}
