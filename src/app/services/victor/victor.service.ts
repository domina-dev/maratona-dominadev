import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VictorService {

  constructor() { }

  private nome: string = "Victor dos Santos"

  nomeInformado() {
    console.log(this.nome)
  }

  calcularMedia(){
    let numeros: number[] = [4, 2, 3, 8];
    let soma: number = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    let media: number = soma / numeros.length;
    console.log(media)
  }
}
