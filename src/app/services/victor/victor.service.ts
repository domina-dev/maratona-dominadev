import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VictorService {

  //--------------------VARIAVEIS MARATONA SEMANA 1----------------------
  private nome: string = "Victor dos Santos Souza"
  private numerosMedia: number[] = [5, 8, 11]

  // constructor() { }

  //--------------------FUNÇÕES MARATONA SEMANA 1----------------------
  exibirNomeInformado() {
    console.log(this.nome);
  };
  calcularMedia() {
    let numero1: number = this.numerosMedia[0];
    let numero2: number = this.numerosMedia[1];
    let numero3: number = this.numerosMedia[2];
    let soma: number = numero1 + numero2 + numero3;
    let media: number = soma / 3;
    console.log(media)
  };
}
