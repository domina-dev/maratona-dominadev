import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class VictorService extends BaseService {

  //-------------------VARIAVEIS MARATONA SEMANA 1---------------------


  constructor() {
    super();
  }

  //--------------------FUNÇÕES MARATONA SEMANA 1----------------------

  /**
   * 
   * @param nome string
   */
  exibirNomeInformado(nome?: any) {
    console.log(nome);
  };

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

  /**
   * 
   * @param diaNasc number
   * @param mesNasc number
   * @param anoNasc number
   */
  calculaAniversario(diaNasc?: any, mesNasc?: any, anoNasc?: any) {
    let date = new Date(anoNasc, mesNasc-1, diaNasc)
    let diaDoAnoNasc = this.diaDoAno(date);
    let diaDeHoje = this.diaDoAno(new Date());

    let restante = diaDeHoje - diaDoAnoNasc;
    if(restante < 0){
      alert("Faltam " + (Math.abs(restante)-1) + " dias para o aniversário");
    }else{
      let dias = Math.abs(restante - 365);
      alert(`o aniversário foi há ${Math.abs(restante) + 1} dias
        \nFaltam ${dias} dias para o próximo aniversário`);
    }

  }

  private diaDoAno(data: any) {
    let inicioDoANo: any = new Date(data.getFullYear(), 0, 0);
    let diferenca: any = data - inicioDoANo;
    let umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    let diaDoAno = Math.floor(diferenca / umDiaEmMilissegundos);
    console.log('Day of year: ' + diaDoAno);
    return diaDoAno;
  }
}
