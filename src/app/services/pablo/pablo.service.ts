import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PabloService extends BaseService {

  constructor() {
    super();
  }

  mostrarNome(nome:string){
    console.log("Nome recebido:",nome)
  }

  calcularNumero(numero1:number ,numero2:number, numero3:number){
    let resultado =  (numero1 + numero2 + numero3)/ 3;
    console.log(resultado);
}
}
