import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PabloService extends BaseService {

  constructor() {
    super();
  }

  mostrarNome(nome: string) {
    console.log("Nome recebido:", nome)
  }

  calcularNumero(numero1: number, numero2: number, numero3: number) {
    let resultado = (numero1 + numero2 + numero3) / 3;
    console.log(resultado);
  }

  mostraIdade(dataNascimento: Date) {
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear()
    if (idade >= 18) {
      console.log("maior de idade", idade)
    }
    else {
      console.log("menor de idade", idade);
    }
  }

  verificacaoEleitoral(dataNascimento: Date) {
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear()
    if (idade <= 15) {
      alert("15 anos ou menos não vota")
    }
    else if (idade == 16 || idade == 17) {
      alert("16 e 17 anos voto opcional")
    }
    else if (idade >= 18 && idade <= 70) {
      alert("Entre 18 e 70 é obrigatório")
    }
    else if (idade >= 70) {
      alert("Acima de 70 é opcional")
    }
  }
  /**
   * 
   * @param numero 
   * 
   */       
  analisarLista(numero: number) {
    let lista = [0, 2, 3, 8, 17]
    const numeroLista = lista.length;
    if (lista.length === 0) {
      console.log("lista vazia");

    }
    console.log(numeroLista);
    { numeroLista };
  }
}


