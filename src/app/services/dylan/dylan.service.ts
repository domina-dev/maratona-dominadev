import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class DylanService extends BaseService{
  idade: number = 19;

  constructor() { 
    super();
  }

  teste(idade: number){
    if(idade < 18 || idade > 69){
      console.log("Voto Opcional");
    }else if (idade >= 18 || idade < 70){
      console.log("Voto Obrigatório");
    }

    console.log(idade);
  }
}
