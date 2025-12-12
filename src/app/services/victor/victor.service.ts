import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { listaProdutos } from 'src/app/shared/bateria-de-exercicios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

const COTACAO_DOLAR = 5.32;
const COTACAO_EURO = 6.17;
const COTACAO_IENE = 0.034;
const COTACAO_PESO = 0.0038;
const COTACAO_LIBRA = 6.99;


@Injectable({
  providedIn: 'root'
})
export class VictorService extends BaseService {


  constructor(private http: HttpClient) {
    super()

  }
  mostraNome(nome: string) {
    console.log("o nome recebido é ", nome)
  }

  calculaMedia(numero1: number, numero2: number, numero3: number) {
    let media = (numero1 + numero2 + numero3) / 3
    console.log("a média dos números informados é ", media)

  }

  verificaMenorIdade(dtNascimento: Date) {
    let hoje = new Date()
    let idade = hoje.getFullYear() - dtNascimento.getFullYear()
    let niverAno = new Date(hoje.getFullYear(), dtNascimento.getMonth(), dtNascimento.getDate())

    if (hoje < niverAno) {
      idade = idade - 1
    }

    if (idade < 18) {
      alert("Menor de idade")

    } else {
      alert("Não é Menor de idade")
    }

  }

  proximoAniversario(dtNascimento: Date) {
    let hoje = new Date()
    let proxNiver = new Date(hoje.getFullYear(), dtNascimento.getMonth(), dtNascimento.getDate())

    if (proxNiver < hoje) {
      proxNiver.setFullYear(proxNiver.getFullYear() + 1)
    }

    let diffMs = proxNiver.getTime() - hoje.getTime()
    let dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

    console.log("A diferença para o prox aniversario é", dias, "dias.");


  }

  verificacaoEleitoral(dtNascimento: Date) {
    let hoje = new Date()
    let idade = hoje.getFullYear() - dtNascimento.getFullYear()
    let niverAno = new Date(hoje.getFullYear(), dtNascimento.getMonth(), dtNascimento.getDate())

    if (hoje < niverAno) {
      idade = idade - 1
    }

    if (idade < 16) {
      console.log("Não vota", idade)
    } else if (idade == 16 || idade == 17) {
      console.log("Voto opcional", idade);
    } else if (idade >= 18 && idade <= 70) {
      console.log("Voto obrigatório", idade);
    } else {
      console.log("Opcional");
    }
  }

  converterMoedaIf(valor: number, moeda: string) {
    let resultadoReal = 0

    if (moeda === "dolar") {
      resultadoReal = valor * COTACAO_DOLAR;
    } else if (moeda === "euro") {
      resultadoReal = valor * COTACAO_EURO;
    } else if (moeda === "iene") {
      resultadoReal = valor * COTACAO_IENE;
    } else if (moeda === "peso") {
      resultadoReal = valor * COTACAO_PESO;
    } else if (moeda === "libra") {
      resultadoReal = valor * COTACAO_LIBRA;
    } else {
      console.log("Moeda não encontrada");

    }
    console.log(`conversão em R$ ${resultadoReal}`);
    return resultadoReal

  }
  apiCotacao(): Observable<any> {
    return this.http.get("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,JPY-BRL,ARS-BRL")
  }

  convercaoMoedaSwitch(valor: number, moeda: string) {
    let resultadoReal = 0
    this.apiCotacao().subscribe(response => {

      switch (moeda) {
        case "Dolar":
          resultadoReal = valor * response.USDBRL.high;
          console.log("O valor convertido em Real é R$:", resultadoReal);
          break;
        case "Euro":
          resultadoReal = valor * response.EURBRL.high;
          console.log("O valor convertido em Real é R$:", resultadoReal);
          break;
        case "Iene":
          resultadoReal = valor * response.JPYBRL.high;
          console.log("O valor convertido em Real é R$:", resultadoReal);
          break;
        case "Peso":
          resultadoReal = valor * response.ARSBRL.high;
          console.log("O valor convertido em Real é R$:", resultadoReal);
          break;
        case "Libra":
          resultadoReal = valor * response.GBPBRL.high;
          console.log("O valor convertido em Real é R$:", resultadoReal);
          break;

        default:
          console.log("moeda não encontrada");

          break;

      }
    })


  }

  somarNumero(N1: number, N2: number) {
    let resultado = N1 + N2
    console.log("O resultado da soma é", resultado);


  }

  listarProduto() {


    let maior = listaProdutos[0]
    let menor = listaProdutos[0]

    for (let index = 0; index < listaProdutos.length; index++) {
      const produtoAtual = listaProdutos[index];

      if (produtoAtual.valor > maior.valor) {
        maior = produtoAtual
      }
      if (produtoAtual.valor < menor.valor) {
        menor = produtoAtual
      }
    }
    console.log("O produto com maior valor é", maior);
    console.log("O produto com menor valor é", menor);


  }

  /**
   * Recebe data informada e mostra signo no console do navegador
   * @param dtNascimento 
   */
  verificaSigno(dtNascimento: Date) {
    let diaNascimento = dtNascimento.getDate();
    let mesNascimento = dtNascimento.getMonth() + 1;
    let signoAtual
    // forEach / usando 1 if apenas 
    signos.forEach(s => {
      if ((mesNascimento === s.inicio.mes && diaNascimento >= s.inicio.dia) || (mesNascimento === s.fim.mes && diaNascimento <= s.fim.dia)) {
        signoAtual = s;
      }

    });
    console.log(signoAtual);
  }




  alunos: alunos[] = [
    { id: 1, nome: 'joão', nota: 5.5 },
    { id: 2, nome: 'maria', nota: 6 },
    { id: 3, nome: 'daniel', nota: 7.5 },
    { id: 4, nome: 'julia', nota: 4 },
    { id: 5, nome: 'isis', nota: 8 }
  ]

  alunosAprovado() {
    let alunosAprovado =
      this.alunos.filter(a => a.nota >= 6);


    console.log("Os alunos Aprovados foram", alunosAprovado);

  }



  listagemProduto() {

    let maior = listaProdutos[0]
    let menor = listaProdutos[0]

    listaProdutos.forEach((produtoAtual: any) => {


      if (produtoAtual.valor > maior.valor) {
        maior = produtoAtual
      }
      if (produtoAtual.valor < menor.valor) {
        menor = produtoAtual
      }

    });

    console.log("O produto com maior valor é", maior);
    console.log("O produto com menor valor é", menor);

  }


  signoApi(): Observable<any> {
    return this.http.get("http://localhost:3000/signo")
  }

  signosApi(dtNascimento: Date) {
    let diaNascimento = dtNascimento.getDate();
    let mesNascimento = dtNascimento.getMonth() + 1;
    let signoAtual
    this.signoApi().subscribe(response => {
      if ((mesNascimento === response.inicio.mes && diaNascimento >= response.inicio.dia) || (mesNascimento === response.fim.mes && diaNascimento <= response.fim.dia)) {
        signoAtual = response;
      }
    })
    console.log(signoAtual);
  }


























  verificacaoIdade(dtNascimento: Date) {
    let hoje = new Date()
    let idade = hoje.getFullYear() - dtNascimento.getFullYear()
    let niverAno = new Date(hoje.getFullYear(), dtNascimento.getMonth(), dtNascimento.getDate())

    if (hoje < niverAno) {
      idade = idade - 1
    }

    if (idade < 18) {
      alert("menor de idade")
    }

  }
  /** 
   *Nascimento 12/03/2007 
   *Hoje 01/03/2025
   aniversario 12/03/2025 
   */
}
export interface alunos {
  id: number;
  nome: string;
  nota: number;
}


const signos = [
  { nome: 'Áries', inicio: { dia: 21, mes: 3 }, fim: { dia: 20, mes: 4 } },
  { nome: 'Touro', inicio: { dia: 21, mes: 4 }, fim: { dia: 20, mes: 5 } },
  { nome: 'Gêmeos', inicio: { dia: 21, mes: 5 }, fim: { dia: 20, mes: 6 } },
  { nome: 'Câncer', inicio: { dia: 21, mes: 6 }, fim: { dia: 22, mes: 7 } },
  { nome: 'Leão', inicio: { dia: 23, mes: 7 }, fim: { dia: 22, mes: 8 } },
  { nome: 'Virgem', inicio: { dia: 23, mes: 8 }, fim: { dia: 22, mes: 9 } },
  { nome: 'Libra', inicio: { dia: 23, mes: 9 }, fim: { dia: 22, mes: 10 } },
  { nome: 'Escorpião', inicio: { dia: 23, mes: 10 }, fim: { dia: 21, mes: 11 } },
  { nome: 'Sagitário', inicio: { dia: 22, mes: 11 }, fim: { dia: 21, mes: 12 } },
  { nome: 'Capricórnio', inicio: { dia: 22, mes: 12 }, fim: { dia: 20, mes: 1 } },
  { nome: 'Aquário', inicio: { dia: 21, mes: 1 }, fim: { dia: 18, mes: 2 } },
  { nome: 'Peixes', inicio: { dia: 19, mes: 2 }, fim: { dia: 20, mes: 3 } }

]