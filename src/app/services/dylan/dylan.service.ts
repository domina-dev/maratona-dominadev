import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class DylanService extends BaseService {

  constructor() {
    super();
  }

  apresentarNome(nome: string, sobrenome: string) {
    console.log(nome + " " + sobrenome);
  }

  media(n1: number, n2: number, n3: number) {
    console.log((n1 + n2 + n3) / 3);
  }


  restricaoIdadeSemDate(dia: number, mes: number, ano: number) {

    const diaAtual = 12;
    const mesAtual = 11;
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

  verificaIdadeComDate(dataNascimento:Date){
    let dataHoje = new Date();
    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();

    if(dataHoje.getMonth()<=dataNascimento.getMonth() && dataHoje.getDate()<= dataNascimento.getDate()){
      idade --;
    }

    if(idade>=18){
      alert("Maior de idade!");
      console.log("Maior de idade, sua idade é: " + idade);
      
      
    }else{
      alert("Menor de idade!");
      console.log("Menor de idade, sua idade é: " + idade);
    }
  }



  verificaVotacao(dataNascimento: Date){
    let dataHoje = new Date();
    let idade = dataHoje.getFullYear() - dataNascimento.getFullYear();

    if(dataHoje.getMonth()<=dataNascimento.getMonth() && dataHoje.getDate()<= dataNascimento.getDate()){
      idade --;
    }

    if(idade<= 15){
      alert("Não vota!");
      console.log("Não vota:"  + idade);
    } else if( idade == 16 || idade == 17){
      alert("Voto opcional!");
      console.log("Voto opcional:  " + idade);
    } else if( idade>=18 && idade<= 70){
      alert("Voto obrigatório!");
      console.log("Voto obrigatório! " + idade);
    }else{
      alert("Voto opcional!");
      console.log("Voto opcional: " + idade);
    }
  }

// dolar - real = 5.32
// euro - real = 6.17
// iene - real = 0.034
// peso - real = 0.0038
// libra - real = 6.99


  cotacaoSemSwithCase(moeda:String, valor:number){

    if(moeda === 'dolar'){
      let conversaoDolar = valor * 5.32;
      console.log("Valor de US$ " + valor +" "+ moeda  +" em real R$: " + conversaoDolar.toFixed(2));
    } else if (moeda === 'euro'){
      let conversaoEuro = valor * 6.17;
      console.log("Valor de € " + valor +" "+ moeda  +" em real R$: " + conversaoEuro.toFixed(2));
    } else if (moeda === 'iene'){
      let conversaoIene = valor * 0.034;
      console.log("Valor de JP¥" + valor +" "+ moeda  +" em real R$: " + conversaoIene.toFixed(2));
    } else if (moeda === 'peso'){
      let conversaoPeso = valor * 0.0038;
      console.log("Valor de $" + valor +" "+ moeda  +" em real R$: " + conversaoPeso.toFixed(2));
    } else if (moeda === 'libra'){
      let conversaoLibra = valor * 6.99;
      console.log("Valor de £" + valor +" "+ moeda  +" em real R$: " + conversaoLibra.toFixed(2));
    }
  }


  conversaoComSwitch(moeda: String, valor: number) {

    switch (moeda) {
      case "dolar":
        let conversaoDolar = valor * 5.32;
        console.log("Valor de US$ " + valor +" "+ moeda  +" em real R$: " + conversaoDolar.toFixed(2));
        break;
      case "euro":
        let conversaoEuro = valor * 6.17;
        console.log("Valor de € " + valor +" "+ moeda  +" em real R$: " + conversaoEuro.toFixed(2));
        break;
      case "libra":
         let conversaoLibra = valor * 6.99;
         console.log("Valor de £" + valor +" "+ moeda  +" em real R$: " + conversaoLibra.toFixed(2));
        break;
      case "peso":
        let conversaoPeso = valor * 0.0038;
        console.log("Valor de $" + valor +" "+ moeda  +" em real R$: " + conversaoPeso.toFixed(2));
        break;
      case "iene":
        let conversaoIene = valor * 0.034;
        console.log("Valor de JP¥" + valor +" "+ moeda  +" em real R$: " + conversaoIene.toFixed(2));
        break;

      default:
        break;
    }
  }

  restricaoIdadeComDateDias(dataNascimento: Date) {
    let hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    let aniversarioEsteAno = new Date(hoje.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate());

    if (hoje<aniversarioEsteAno) {
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

}
