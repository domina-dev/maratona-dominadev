import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class VictorService extends BaseService {

  constructor() {
    super();
  }

  //--------------------FUNÇÕES MARATONA SEMANA 1----------------------

  //-----------------EXERCIO 1 DIA 1-----------------
  /**
   *
   * @param nome string
   */
  exibirNomeInformado(nome?: any) {
    console.log(nome);
  };


  //-----------------EXERCIO 2 DIA 1-----------------
  /**
   *
   * @param numero1 number
   * @param numero2 number
   * @param numero3 number
  */
  calcularMedia(numero1?: any, numero2?: any, numero3?: any) {
    let soma: number = numero1 + numero2 + numero3;
    let media: number = soma / 3;
    console.log(media)
  };


  //-----------------EXERCIO 1 DIA 2-----------------
  /**
   *
   * @param anoNascemento number
  */
  calculaIdade(anoNascemento?: any) {
    let anoAtual: number = 2023;
    let idadePessoa: number = anoAtual - anoNascemento;

    if (idadePessoa < 18) {
      alert('Essa pessoa e MENOR de idade')
    } else {
      alert('Essa pessoa e MAIOR de idade')
    }
  }


  //-----------------EXERCIO 2 DIA 2-----------------
  /**
   *
   * @param diaNascimento number
   * @param mesNascimento number
   * @param anoNascemento number
  */
  calculaAniversario(diaNasc?: any, mesNasc?: any, anoNasc?: any) {
    let d = new Date();
    let diaAtual: number = d.getDate();
    let mesAtual: number = d.getMonth() + 1;
    let anoAtual: number = d.getFullYear();
    let quantosAnos = anoAtual - anoNasc;

    if (mesAtual < mesNasc || mesAtual == mesNasc && diaAtual < diaNasc) {
      quantosAnos--;
    };

    if (quantosAnos < 18) {
      alert('Essa pessoa e MENOR de idade')
    } else {
      alert('Essa pessoa e MAIOR de idade')
    };

    let date = new Date(anoNasc, mesNasc - 1, diaNasc);
    let diaAnoNasc = this.diaDoAno(date);
    let diaHoje = this.diaDoAno(new Date());
    let restante = diaHoje - diaAnoNasc;

    if (restante < 0) {
      alert("Faltam " + (Math.abs(restante) - 1) + "dias para o aniversario");
    } else {
      let dias = Math.abs(restante - 365);
      alert(`O último aniversario foi há ${Math.abs(restante) + 1} dias
      \nFaltam ${dias} dias para o proximo aniversario`);
    }
  }

  private diaDoAno(data: any) {
    let inicioAno: any = new Date(data.getFullYear(), 0, 0);
    let diferenca: any = data - inicioAno;
    let umDiaEmMilisegundos = 1000 * 60 * 60 * 24;
    let diaAno = Math.floor(diferenca / umDiaEmMilisegundos);
    console.log('Dia do ano é: ' + diaAno);
    return diaAno;
  }


  //-----------------EXERCIO 3 DIA 2-----------------
  /**
   *
   * @param idade number
   */
  pessoaEleitoral(idade?: any) {
    if (idade <= 15) {
      alert("Essa pessoa NÃO VOTA, pois tem " + idade + " anos")
    } else if (idade == 16 || idade == 17 || idade > 70) {
      alert("Essa pessoa tem o voto OPICIONAL, pois tem " + idade + " anos")
    } else {
      alert("Essa pessoa tem o voto OBRIGATORIO, pois ela tem " + idade + " anos")
    }
  }


  //-----------------EXERCIO 4 DIA 2-----------------
  /**
   *
   * @param valor number
   * @param moeda string
   */
  valorPagamento(valor?: any, moeda?: any) {

    let conversao: number = 1;

    if (moeda.toLowerCase() == 'dolar') {
      conversao = valor * 4.93
      console.log(`Voce recebeu ${valor} Dólar/USD de pagamento, que equivale a ${conversao} Reais/BRL, valor atual do dolar é US$4.93`)
    }
    else if (moeda.toLowerCase() == 'libras') {
      conversao = valor * 6.24
      console.log(`Voce recebeu ${valor} Libra/GBP de pagamento, que equivale a ${conversao} Reais/BRL, valor atual da Libra é £6.24`)
    }
    else if (moeda.toLowerCase() == 'euro') {
      conversao = valor * 5.36
      console.log(`Voce recebeu ${valor} Euro/EUR de pagamento, que equivale a ${conversao} Reais/BRL, valor atual do Euro é €5.36`)
    }
    else if (moeda.toLowerCase() == 'iene') {
      conversao = valor * 0.034
      console.log(`Voce recebeu ${valor} Iene/JPY de pagamento, que equivale a ${conversao} Reais/BR, valor atual do Iene é ¥0.034`)
    }
    else if (moeda.toLowerCase() == 'real') {
      console.log(`Voce recebeu ${valor} Real/BRL de pagamento `)
    }
    else{
      alert('ATENÇÃO! Parece que voce não recebeu valor nenhum')
    }
  }


  //-----------------EXERCIO 5 DIA 2-----------------   , moeda?: any
  /**
   *
   * @param valor number
   * @param moeda string
   */
  valorRecebido(valor?: any) {
    let conversaoMoeda: number = 1;
    let moeda: string = 'Dolar'
    switch (moeda.toLowerCase()) {
      case 'dolar':
        conversaoMoeda = valor * 4.93;
        alert(`Voce acabou de receber um valor de ${valor} Dólar/USD, convertendo para o Real/BRL corresponde a ${conversaoMoeda} Reais/BRL, valor atual do dolar é US$4.93`)
        break;

      case 'libras':
        conversaoMoeda = valor * 6.24;
        alert(`Voce acabou de receber um valor de ${valor} Libra/GBP, convertendo para o Real/BRL corresponde a ${conversaoMoeda} Reais/BRL, valor atual da Libra é £6.24`)
        break;

      case 'euro':
        conversaoMoeda = valor * 5.36;
        alert(`Voce acabou de receber um valor de ${valor} Euro/EUR, convertendo para o Real/BRL corresponde a ${conversaoMoeda} Reais/BRL, valor atual do Euro é €5.36`)
        break;

      case 'iene':
        conversaoMoeda = valor * 0.034;
        alert(`Voce acabou de receber um valor de ${valor} Iene/JPY, convertendo para o Real/BRL corresponde a ${conversaoMoeda} Reais/BRL, valor atual do Iene é ¥0.034`)
        break;

      case 'real':
        alert(`Voce acabou de receber um valor de ${valor} Real/BRL`)
        break;

      default:
        alert('ATENÇÃO! Parece que voce não recebeu valor nenhum')
        break;
    }
  }
}
