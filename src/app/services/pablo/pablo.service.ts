import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { listaProdutos } from 'src/app/shared/bateria-de-exercicios';

const COTACAO_DOLAR = 5.32
const COTACAO_EURO = 6.17
const COTACAO_LIBRA = 6.99
const COTACAO_IENE = 0.034
const COTACAO_PESO_ARS = 0.0038

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



  verficaIdade(dtNascimento: Date) {
    let hoje = new Date;
    let idade = hoje.getFullYear() - dtNascimento.getFullYear();
    let anoAniversario = new Date(hoje.getFullYear(), dtNascimento.getMonth(), dtNascimento.getDate());

    if (hoje < anoAniversario) {
      idade = idade - 1
    }
    if (idade >= 18) {
      alert("de maior",)
      console.log('de maior', idade);

    }
    else
      alert("de menor"), idade;
  }

  verificaMomentoEleitoral(dtNascimento: Date) {
    let hoje = new Date();
    let idade = hoje.getFullYear() - dtNascimento.getFullYear();
    let anoAniversario = new Date(hoje.getFullYear(), dtNascimento.getMonth(), dtNascimento.getDate());

    if (hoje < anoAniversario) {
      idade = idade - 1
    }
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

  cotacaoRealIfElse(moeda: string, valor: number) {
    let resultado;
    if (moeda === "Dolar") {
      resultado = valor * COTACAO_DOLAR;
      console.log("valor de 100 Dolares convertido em Real R$:", resultado);
    }
    else if (moeda === "Euro") {
      resultado = valor * COTACAO_EURO;
      console.log("valor de 100 Euros convertido em  Real R$:", resultado);
    }
    else if (moeda === "Libra") {
      resultado = valor * COTACAO_LIBRA;
      console.log("valor de 100 Libras convertido em Real R$:", resultado);
    }
    else if (moeda === "Iene") {
      resultado = valor * COTACAO_IENE;
      console.log("valor de 100 Ienes convertido em Real R$:", resultado);
    }
    else if (moeda === "Peso Ars") {
      resultado = valor * COTACAO_PESO_ARS;
      console.log("valor de 100  Pesos argentinos convertido em Real R$:", resultado);
    }
    else console.log("Moeda não encontrada.");
  }

  cotacaoRealSwitch(moeda: string, valor: number) {
    let resultado;
    switch (moeda) {
      case "Dolar":
        resultado = valor * COTACAO_DOLAR;
        console.log("valor de 100 Dolares convertido em Real R$:", resultado);
        break;
      case "Euro":
        resultado = valor * COTACAO_EURO;
        console.log("valor de 100 Euros convertido em Real R$:", resultado);
        break;
      case "Libra":
        resultado = valor * COTACAO_LIBRA;
        console.log("valor de 100 Libras convertido em Real R$:", resultado);
        break;
      case "Iene":
        resultado = valor * COTACAO_IENE;
        console.log("valor de 100 Ienes convertido em Real R$:", resultado);
        break;
      case "Peso Ars":
        resultado = valor * COTACAO_PESO_ARS;
        console.log("valor de 100 Pesos argentinos convertido em Real R$:", resultado);
        break;
      default: console.log("Moeda não encontrada.");
        break;
    }
  }
  somar(numero1: number, numero2: number) {
    console.log("A soma dos numeros ", numero1 + numero2)
  }

  verficaProduto() {
    let maior = listaProdutos[0];
    let menor = listaProdutos[3];
    for (let index = 0; index < listaProdutos.length; index++) {
      const element = listaProdutos[index];
      if (element.valor > maior) {
        maior = element
      }
      if (element.valor < menor) {
        menor = element
      }
    }
    console.log("O produto mais caro é:", maior);
    console.log("O produto mais barato é:", menor);

  }




}
