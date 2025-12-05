import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { log } from 'console';
import { listaProdutos } from 'src/app/shared/bateria-de-exercicios';
import { index } from 'd3';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signo } from './enum/signo';
import { periodoSigno, signos1linha } from './model/Objetos';
import { environment } from 'src/environments/environment';

const cotacao_Dolar = 5.32;
const cotacao_Euro = 6.17;
const cotacao_Libra = 6.99;
const cotacao_Peso = 0.0038;
const cotacao_Iene = 0.034;

@Injectable({
  providedIn: 'root'
})
export class DylanService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }
  /**
   * Função recebe string nome, e sobrenome, e exibe ambas juntas no console do navegador.
   * @param nome 
   * @param sobrenome 
   */
  apresentarNome(nome: string, sobrenome: string) {
    console.log(nome + " " + sobrenome);
  }
  /**
   * A função recebe 3 números, faz a soma e divide por 3, efetuando a média, e imprimindo no console
   * @param n1 
   * @param n2 
   * @param n3 
   */
  media(n1: number, n2: number, n3: number) {
    console.log((n1 + n2 + n3) / 3);
  }
  /**
   * A função recebe, o dia, mês e ano que foi nascido, e calcula a idade pelo ano atual - ano nascido. Com a constante dia, mes e ano atual que é mudado de forma manual, imprime a idade e se o usuário é menor ou menor de idade no  console do navegador.
   * bug: dos parametros
   * @param dia 
   * @param mes 
   * @param ano 
   */
  restricaoIdadeSemDate(dia: number, mes: number, ano: number) {
    const diaAtual = 4;
    const mesAtual = 12;
    const anoAtual = 2025;

    let idade = anoAtual - ano;

    if (diaAtual <= dia && mesAtual < mes) {
      idade--;
    }

    if (idade >= 18) {
      alert("Maior de Idade");
    } else {
      alert("Menor de Idade");
    }
    console.log("Idade:" + idade);
  }
  /**
   *  A função recebe a data de nascimento com ferramenta Date, e ano atual e ano nascido, imprime a idade e se o usuário é menor ou maior de idade no  console do navegador.
   * @param dataNascimento 
   */
  verificaIdadeComDate(dataNascimento: Date) {
    let dataHoje = new Date();
    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();

    if (dataHoje.getMonth() <= dataNascimento.getMonth() && dataHoje.getDate() <= dataNascimento.getDate()) {
      idade--;
    }
    if (idade >= 18) {
      alert("Maior de idade!");
      console.log("Maior de idade, sua idade é: " + idade);
    } else {
      alert("Menor de idade!");
      console.log("Menor de idade, sua idade é: " + idade);
    }
  }
  /**
   * A função recebe a data de nascimento com ferramenta Date, verifica a idade, e imprime a idade e se o usuário vota ou não vota no  console do navegador.
   * @param dataNascimento 
   */
  verificaVotacao(dataNascimento: Date) {
    let dataHoje = new Date();
    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();
    if (dataHoje.getMonth() <= dataNascimento.getMonth() && dataHoje.getDate() <= dataNascimento.getDate()) {
      idade--;
    }
    if (idade <= 15) {
      alert("Não vota!");
      console.log("Não vota:" + idade);
    } else if (idade == 16 || idade == 17) {
      alert("Voto opcional!");
      console.log("Voto opcional:  " + idade);
    } else if (idade >= 18 && idade <= 70) {
      alert("Voto obrigatório!");
      console.log("Voto obrigatório! " + idade);
    } else {
      alert("Voto opcional!");
      console.log("Voto opcional: " + idade);
    }
  }
  /**
   * Essa função recebe a moeda que deseja convertir em reais, sem utilização do Switch Case, e imprime o valor convertido em reais no console do navegador
   * Lembrando bug, do parametros
   * @param moeda 
   * @param valor 
   */
  cotacaoSemSwithCase(moeda: String, valor: number) {
    let resultado: any;
    let respostaConvertida = "Valor de $ " + valor + " " + moeda + " em real R$: ";
    if (moeda.toLowerCase() === 'dolar') {
      resultado = valor * cotacao_Dolar;
    } else if (moeda.toLowerCase() === 'euro') {
      resultado = valor * cotacao_Euro;
    } else if (moeda.toLowerCase() === 'libra') {
      resultado = valor * cotacao_Libra;
    } else if (moeda.toLowerCase() === 'peso') {
      resultado = valor * cotacao_Peso;
    } else if (moeda.toLowerCase() === 'iene') {
      resultado = valor * cotacao_Iene;
    }
    resultado = resultado.toFixed(2);
    respostaConvertida += resultado.replace(".", ",");
    console.log(respostaConvertida);
  }
  /**
   * Essa função recebe a moeda que deseja convertir em reais, com utilização do Switch Case, e imprime o valor convertido em reais no console do navegador
   * Lembrando bug, do parametros
   * @param moeda 
   * @param valor 
   */
  conversaoComSwitch(moeda: String, valor: number) {
    let resultado: any;
    let respostaConvertida = "Valor de $ " + valor + " " + moeda + " em real R$: ";

    switch (moeda.toLowerCase()) {
      case "dolar":
        resultado = valor * cotacao_Dolar;
        break;
      case "euro":
        resultado = valor * cotacao_Euro;
        break;
      case "libra":
        resultado = valor * cotacao_Libra;
        break;
      case "peso":
        resultado = valor * cotacao_Peso;
        break;
      case "iene":
        resultado = valor * cotacao_Iene;
        break;
      default: console.log("Moeda não encontrada!");
        break;
    }

    resultado = resultado.toFixed(2);
    respostaConvertida += resultado.replace(".", ",");
    console.log(respostaConvertida);
  }
  /**
   * A função recebe data de nascimento, além de informar ao usuário pela idade se é maior ou menor, e revela os dias que faltam para o próximo aniversário do usuário.
   * @param dataNascimento 
   */
  restricaoIdadeComDateDias(dataNascimento: Date) {
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    let aniversarioEsteAno = new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate());
    if (hoje < aniversarioEsteAno) {
      idade--;
    }
    let proximoAniversario = new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate());
    if (hoje > proximoAniversario) {
      (proximoAniversario.setFullYear(hoje.getFullYear() + 1));
    }
    const diaMilissegundos = 86400000; // dia tem 24 horas, cada hora tem 60 minutos, cada minuto tem 60 segundos, e cada segundo tem 1000 milissegundos ou seja 1000*60*60*24 = 86.400.000
    let diferenca = (proximoAniversario.getTime() - hoje.getTime());
    let diasAniversario = Math.ceil(diferenca / diaMilissegundos);
    if (idade >= 18) {
      alert("Maior de Idade");
    } else {
      alert("Menor de Idade");
    }
    console.log("Idade:" + idade);
    console.log("Dias que faltam para o aniversário: " + diasAniversario);
  }
  /**
   * A função recebe dois numeros, e soma ambos numeros, e imprime no console do navegador o resultado da soma
   * @param numero1 
   * @param numero2 
   */
  somar(numero1: number, numero2: number) {
    let resultado = numero1 + numero2;
    console.log(numero1 + " + " + numero2 + " = " + resultado);
  }
  /**
   * A função pecorre uma lista de produtos utilizando a ferramenta for, analisando o valor, imprime no console do navegador o mais caro e o mais barato
   */
  pecorrerLista() {
    let maisCaro = listaProdutos[0];
    let maisBarato = listaProdutos[0];

    for (let i = 1; i < listaProdutos.length; i++) {
      const produtoAtual = listaProdutos[i];

      if (produtoAtual.valor > maisCaro.valor) {
        maisCaro = produtoAtual;
      }
      if (produtoAtual.valor < maisBarato.valor) {
        maisBarato = produtoAtual;
      }
    }
    console.log(" O produto mais caro é: ", maisCaro.nome, " preço R$ ", maisCaro.valor);
    console.log(" O produto mais barato é: ", maisBarato.nome, " preço R$ ", maisBarato.valor);
  }
  /**
   * A função pecorre uma lista de produtos utilizando a ferramenta for each, analisando o valor, imprime no console do navegador o mais caro e o mais barato
   */
  eachProdutos() {
    let produtoCaro = listaProdutos[0];
    let produtoBarato = listaProdutos[0];

    listaProdutos.forEach(p => {
      //p -> produto atual

      if (p.valor > produtoCaro.valor) {
        produtoCaro = p;
      }

      if (p.valor < produtoBarato.valor) {
        produtoBarato = p;
      }
    });

    console.log(" O produto mais caro é: ", produtoCaro.nome, " preço R$ ", produtoCaro.valor);
    console.log(" O produto mais barato é: ", produtoBarato.nome, " preço R$ ", produtoBarato.valor);
  }
  /**
   * A função pecorre uma lista de produtos utilizando a ferramenta find, Math max e min, além do map, analisando o valor, imprime no console do navegador o mais caro e o mais barato
   */
  produtoFind() {
    let maiorValor = Math.max(...listaProdutos.map(p => p.valor));
    let menorValor = Math.min(...listaProdutos.map(p => p.valor));

    let maisCaro = listaProdutos.find(p => p.valor === maiorValor)!;
    let maisBarato = listaProdutos.find(p => p.valor === menorValor)!;

    if (maisCaro) {
      console.log(" O produto mais caro é: ", maisCaro.nome, " preço R$ ", maisCaro.valor);
    }

    if (maisBarato) {
      console.log(" O produto mais barato é: ", maisBarato.nome, " preço R$ ", maisBarato.valor);
    }
  }
  /**
   * A função ler uma data de nascimento, utilizando matriz com os dias que muda o período, e muda o signo, utilizando if, imprime o signo correspondente a data de nascimento.
   * @param dataNascimento 
   */
  signo(dataNascimento: Date) {

    let dataFormatada = dataNascimento.toLocaleDateString("pt-BR");
    let [dia, mes] = dataFormatada.split("/").map(Number)

    const dias = [21, 19, 21, 21, 21, 21, 23, 23, 23, 23, 22, 22];
    const signos = [
      "Aquário", "Peixes", "Áries", "Touro", "Gêmeos", "Câncer",
      "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio"
    ];
    let indexMes = mes - 1;

    if (dia < dias[indexMes]) {
      indexMes = indexMes - 1;
    }

    if (indexMes < 1) {
      indexMes = 11;
    }
    const signoEncontrado = signos[indexMes];
    console.log(`A data de nascimento ${dataFormatada}  corresponde ao signo `, signoEncontrado);
  }
  /**
   * A função ler uma data de nascimento, utilizando matriz com os dias que muda o período, e muda o signo, utilizando a ferramenta for each, imprime o signo correspondente a data de nascimento.
   * @param dataNascimento 
   */
  signos2(dataNascimento: Date) {

    let dataFormatada = dataNascimento.toLocaleDateString("pt-BR");
    let [dia, mes] = dataFormatada.split("/").map(Number);

    const dias = [21, 19, 21, 21, 21, 21, 23, 23, 23, 23, 22, 22];
    const signos = [
      "Aquário", "Peixes", "Áries", "Touro", "Gêmeos", "Câncer",
      "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio"
    ];
    let signoEncontrado;
    signos.forEach((signo, indexMes) => {
      if (indexMes === mes - 1) {
        if (dia < dias[indexMes]) {
          signoEncontrado = signos[indexMes - 1 < 0 ? 11 : indexMes - 1];
        } else {
          signoEncontrado = signo;
        }
      }
    });
    console.log(`A data de nascimento ${dataFormatada}  corresponde ao signo ${signoEncontrado}`);
  }
  /**
   * A função ler uma data de nascimento, e utilizando a ferramenta find, e utilizando teorias de ternario, imprime no console log do navegador o signo.
   * @param dataNascimento 
   */
  signosUmaLinha(dataNascimento: Date) {
    dataNascimento.setFullYear(2000)
    let dataFormatada = dataNascimento.toLocaleDateString("pt-BR");
    let [dia, mes] = dataFormatada.split("/").map(Number);

    let signoEncontrado = signos1linha.find((S => S.dtInicial.mes === S.dtFinal.mes ? mes == S.dtInicial.mes && dia >= S.dtInicial.dia && dia <= S.dtFinal.dia : (mes === S.dtInicial.mes && dia >= S.dtInicial.dia) || (mes === S.dtFinal.mes && dia <= S.dtFinal.dia)));

    console.log(" Sua Data de Nascimento no dia ", dia, " mes ", mes, " corresponde ao signo ", signoEncontrado?.nome);
  }
  /**
   * A função ler uma data de nascimento, e utilizando a ferramenta for each e o objeto em conjunto com enum, imprime no console log do navegador o signo.
   * @param dataNascimento 
   */
  signoenum(dataNascimento: Date) {
    let dataNascimentoMantida = new Date(dataNascimento.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate()).toLocaleDateString("pt-BR");
    dataNascimento.setFullYear(2000);
    let dataFormatada = dataNascimento.toLocaleDateString("pt-BR");
    let [dia, mes] = dataFormatada.split("/").map(Number);
    let resultado!: Signo;

    periodoSigno.forEach((periodo: any) => {
      const [diaInicio, mesInicio] = [
        periodo.inicio.getDate(),
        periodo.inicio.getMonth() + 1
      ];
      const [diaFim, mesFim] = [
        periodo.fim.getDate(),
        periodo.fim.getMonth() + 1
      ];
      if (periodo.signo === Signo.CAPRICORNIO) {
        if (
          (mes === 12 && dia >= diaInicio) ||
          (mes === 1 && dia <= diaFim)
        ) {
          resultado = periodo.signo;
        }
      } else {
        if (
          (mes === mesInicio && dia >= diaInicio) ||
          (mes === mesFim && dia <= diaFim) ||
          (mes > mesInicio && mes < mesFim)
        ) {
          resultado = periodo.signo;
        }
      }
    });
    console.log(`A data de nascimento ${dataNascimentoMantida}  corresponde ao signo ${resultado}`);
  }
  /**
   * Uma função que busca uma API, de mudança de moeda em tempo real, que vai ser usado na função conversaoAPI
   * @returns 
   */
  private conversorMoeda(): Observable<any> {
    return this.http.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,BTC-BRL,JPY-BRL').pipe(take(1));
  }
  /**
   * A função pega em tempo real a cotação da moeda e converte em real, imprimindo signo no console do navegador
   * @param moeda 
   * @param valor 
   */
  conversaoAPI(moeda: String, valor: number) {
    let resultado: any;
    let respostaConvertida = "Valor de $ " + valor + " " + moeda + " em real R$: ";
    let indexMoedas = " ";

    this.conversorMoeda().subscribe({
      next: (response) => {
        switch (moeda.toLowerCase()) {
          case "dolar":
            indexMoedas = "USD-BRL";
            resultado = valor * (+response.USDBRL.high);
            break;
          case "euro":
            indexMoedas = "EUR-BRL";
            resultado = valor * (+response.EURBRL.high);
            break;
          case "libra":
            indexMoedas = "GBP-BRL";
            resultado = valor * (+response.GBPBRL.high);
            break;
          case "peso":
            indexMoedas = "ARS-BRL";
            resultado = valor * (+response.ARSBRL.high);
            break;
          case "iene":
            indexMoedas = "JPY-BRL";
            resultado = valor * (+response.JPYBRL.high);
            break;
          case "bitcoin":
            indexMoedas = "BTC-BRL";
            resultado = valor * (+response.BTCBRL.high);
            break;
          default: console.log("Moeda não encontrada!");
            break;
        }
        resultado = resultado.toFixed(2);
        respostaConvertida += resultado.replace(".", ",");
        console.log(respostaConvertida);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Finalizado');
      }
    })
  }
  /**
   * Essa função pega um mock utilizando a ferramenta Mockoon, onde possui um array com objeto signo, tendo dentro do objeto nome do signo, inicio do periodo e final do periodo, imprimindo signo no console do navegador
   * @returns
   */
  private signoConvecao(): Observable<any> {
    return this.http.get('http://localhost:3001/signo').pipe(take(1));
  }

  signoAPI(dataNascimento: Date) {
    let dataNascimentoMantida = new Date(dataNascimento.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate()).toLocaleDateString("pt-BR");
    dataNascimento.setFullYear(2000)
    let dataFormatada = dataNascimento.toLocaleDateString("pt-BR");
    let [dia, mes] = dataFormatada.split("/").map(Number);
    let resultado: string | undefined;

    this.signoConvecao().subscribe({
      next: (response) => {
        response.forEach((signo: any) => {
          const [diaInicio, mesInicio] = [
            new Date(signo.inicio).getDate(),
            new Date(signo.inicio).getMonth() + 1
          ];
          const [diaFim, mesFim] = [
            new Date(signo.fim).getDate(),
            new Date(signo.fim).getMonth() + 1
          ];
          if (signo.nome === "Capricórnio") {
            if (
              (mes === 12 && dia >= diaInicio) ||
              (mes === 1 && dia <= diaFim)
            ) {
              resultado = signo.nome;
            }
          } else {
            if (
              (mes === mesInicio && dia >= diaInicio) ||
              (mes === mesFim && dia <= diaFim) ||
              (mes > mesInicio && mes < mesFim)
            ) {
              resultado = signo.nome;
            }
          }
        });
        console.log(`A data de nascimento ${dataNascimentoMantida} corresponde ao signo ${resultado}`);
      },
      error: (err) => {
        console.error("Error", err);
      }
    });
  }
}

