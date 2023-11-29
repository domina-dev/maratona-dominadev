import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class VictorService extends BaseService{
  
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
   * @param numerosMedia number[]
   */
  calcularMedia(numero1?: any, numero2?: any, numero3?: any) {
    let soma: number = numero1 + numero2 + numero3;
    let media: number = soma / 3;
    console.log(media)
  };
}
