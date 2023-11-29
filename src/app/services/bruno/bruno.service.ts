import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class BrunoService extends BaseService{

  constructor() { 
    super();
  }

  /**
   * 
   * @param nome string
   */
   exibirNomeInformado(nome?: any) {
    console.log(nome);
  };
}
