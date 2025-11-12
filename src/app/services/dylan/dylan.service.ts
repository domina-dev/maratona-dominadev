import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class DylanService extends BaseService{

  constructor() { 
    super();
  }

  apresentarNome (nome:string){
    console.log(nome);
  }

  media ( n1: number, n2: number, n3:number){
    console.log((n1 + n2 + n3)/3);
  }

  restricaoIdade (dia: number, mes: number, ano: number){

    const diaAtual = 11;
    const mesAtual = 11;
    const anoAtual = 2025;

    let idade = anoAtual - ano;

    if (mesAtual <= mes && diaAtual < dia) {
    idade--;
  }

    if (idade < 18){
      alert("Menor de idade!");

    }else{
      alert("Maior de idade!")
    }
    console.log("idade:" + idade);
  }

}
