import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { listaProdutos } from 'src/app/shared/bateria-de-exercicios';
import { signos } from 'src/app/shared/semana1/mirabolante';
import { Observable } from 'rxjs';

const COTACAO_DOLAR = 5.32;
const COTACAO_EURO = 6.17;
const COTACAO_IENE = 0.034;
const COTACAO_PESO = 0.0038;
const COTACAO_LIBRA = 6.99;


@Injectable({
  providedIn: 'root'
})
export class VictorService extends BaseService {
  http: any;

  constructor() {
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

  convercaoMoedaSwitch(valor: number, moeda: string) {
    let resultadoReal = 0

    switch (moeda) {
      case "dolar":
        resultadoReal = valor * COTACAO_DOLAR;
        console.log("O valor convertido em Real é R$:", resultadoReal);
        break;
      case "euro":
        resultadoReal = valor * COTACAO_EURO;
        console.log("O valor convertido em Real é R$:", resultadoReal);
        break;
      case "iene":
        resultadoReal = valor * COTACAO_IENE;
        console.log("O valor convertido em Real é R$:", resultadoReal);
        break;
      case "peso":
        resultadoReal = valor * COTACAO_PESO;
        console.log("O valor convertido em Real é R$:", resultadoReal);
        break;
      case "libra":
        resultadoReal = valor * COTACAO_LIBRA;
        console.log("O valor convertido em Real é R$:", resultadoReal);
        break;

      default:
        console.log("moeda não encontrada");

        break;

    }

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
    this.alunos.filter(a => a.nota >= 6);


    console.log("Os alunos Aprovados foram",);

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
