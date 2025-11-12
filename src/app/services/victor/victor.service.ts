import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class VictorService extends BaseService {

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
}
