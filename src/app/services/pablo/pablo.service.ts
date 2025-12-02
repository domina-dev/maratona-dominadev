import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { listaProdutos } from 'src/app/shared/bateria-de-exercicios';
/**const para tipo moedas*/
const COTACAO_DOLAR = 5.32
const COTACAO_EURO = 6.17
const COTACAO_LIBRA = 6.99
const COTACAO_IENE = 0.034
const COTACAO_PESO_ARS = 0.0038

@Injectable({
  providedIn: 'root'
})
export class PabloService extends BaseService {
  signos: any;

  constructor() {
    super();
  }

  mostrarNome(nome: string) {   /**atividade 1 - dia1.ts */
    console.log("Nome recebido:", nome)
  }

  calcularNumero(numero1: number, numero2: number, numero3: number) {       /**atividade 2 - dia1.ts */
    let resultado = (numero1 + numero2 + numero3) / 3;
    console.log(resultado);
  }

  proximoAniversario(dtNascimento: Date) {     /**atividade 2 - dia2.ts */
    let hoje = new Date()
    let proxNiver = new Date(hoje.getFullYear(), dtNascimento.getMonth(), dtNascimento.getDate())

    if (proxNiver < hoje) {
      proxNiver.setFullYear(proxNiver.getFullYear() + 1)
    }

    let diffMs = proxNiver.getTime() - hoje.getTime()
    let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

    console.log("A diferença para o proximo aniversario é de ", dias, "dias.");
  }

  analisarLista() {        /**atividade de aquecimento  - dia2.ts */
    let lista = [0, 2, 3, 8, 17]
    const numeroLista = lista.length;
    if (lista.length === 0) {
      console.log("lista vazia");

    }
    console.log(numeroLista);
    { numeroLista };
  }



  verficaIdade(dtNascimento: Date) {        /**atividade 1 - dia2.ts */
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

  verificaMomentoEleitoral(dtNascimento: Date) {      /**atividade 3 - dia2.ts */
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

  cotacaoRealIfElse(moeda: string, valor: number) {      /**atividade 4-usando if/else - dia2.ts */
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

  cotacaoRealSwitch(moeda: string, valor: number) {       /**atividade 4-usando switch case - dia2.ts */
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
  somar(numero1: number, numero2: number) {             /**atividade de aquecimento  - dia3.ts */
    console.log("A soma dos numeros ", numero1 + numero2)
  }

  verficaProduto() {          /**atividade de lista- dia3.ts */
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


  verificarProdutoMaior() {          /**atividade de lista- dia3.ts */
    let caro = listaProdutos[0];
    let barato = listaProdutos[0];

    listaProdutos.forEach((produtoAtual: any) => {
      if (produtoAtual.valor > caro.valor) {
        caro = produtoAtual
      }
      else if (produtoAtual.valor < barato.valor) {
        barato = produtoAtual
      }
    });
    console.log("Produto mais caro", caro);
    console.log("Produto mais barato", barato);

  }

  /**atividade mirabolante.ts */
  signo(dtNascimento: Date) {
    let data = dtNascimento.toLocaleDateString("Pt-BR");  /** toLocalDateString - usado para converter data eua / br */
    let [dia, mes] = data.split("/").map(Number); /** split vai separa dia e mes - map pecorre toda lista de numero */
    const dias = [21, 19, 21, 21, 21, 21, 23, 23, 23, 23, 22, 22]
    const signos = ["Aquario", "Peixes", "Aries", "Touro", "Gemeos", "Cancer", "Leao", "Virgem", "Libra", "Escopiao", "Sagitario", "Capricornio"];
    let indexMes = mes - 1;

    if (dia < dias[indexMes]) {
      indexMes = indexMes - 1;
    }
    if (indexMes < 1) {
      indexMes = 12;
    }
    const signoZ = signos[indexMes];
    console.log("A data de nascimento", data, "corresponde ao signo de", signoZ);
  }


  signoUmaLinha(dtNas: Date) {
    console.log(this.signos.find((signoAtual: Signo) => new Date(anNs, dtNas.getMonth(), dtNas.getDate()) >= signoAtual.dtIn && new Date(anNs, dtNas.getMonth(), dtNas.getDate()) <= signoAtual.dtF));
  }

/** moedas utilizadas na task 
 * USD - Dolar 
 * EUR - Euro 
 * MXN - peso Mexicano
 * JPY - Iene
 * GBP - Libra
 */
  cotacaoApi() {
    const moedas ="USD, EUR, MXN, JPY, GBP"                            
    const url = "https://economia.awesomeapi.com.br/json/last/:moedas"
  }
}

export interface Signo {
    nome: string;      // Abreviações//
    dtIn: Date;       //dtIn - data inicial//
    dtF: Date;        //dtF - data final//
}

export const anNs = 2024   // anNs - ano nascimento//

export const signos: Signo[] = [
    { nome: "Aries", dtIn: new Date(anNs, 2, 21), dtF: new Date(anNs, 3, 20) },
    { nome: "Touro", dtIn: new Date(anNs, 3, 21), dtF: new Date(anNs, 4, 20) },
    { nome: "Gemeos", dtIn: new Date(anNs, 4, 21), dtF: new Date(anNs, 5, 20) },
    { nome: "Cancer", dtIn: new Date(anNs, 5, 21), dtF: new Date(anNs, 6, 22) },
    { nome: "Leao", dtIn: new Date(anNs, 6, 23), dtF: new Date(anNs, 7, 22) },
    { nome: "Virgem", dtIn: new Date(anNs, 7, 23), dtF: new Date(anNs, 8, 22) },
    { nome: "Libra", dtIn: new Date(anNs, 8, 23), dtF: new Date(anNs, 9, 22) },
    { nome: "Escopiao", dtIn: new Date(anNs, 9, 23), dtF: new Date(anNs, 10, 21) },
    { nome: "Sagitario", dtIn: new Date(anNs, 10, 22), dtF: new Date(anNs, 11, 21) },
    { nome: "Capricornio", dtIn: new Date(anNs, 11, 22), dtF: new Date(anNs, 0, 21) },
    { nome: "Aquario", dtIn: new Date(anNs, 0, 21), dtF: new Date(anNs, 1, 18) },
    { nome: "Peixes", dtIn: new Date(anNs, 1, 19), dtF: new Date(anNs, 2, 20) },
]
