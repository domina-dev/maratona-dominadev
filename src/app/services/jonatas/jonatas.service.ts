import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class JonatasService extends BaseService {
  constructor() {
    super();
  }

  // SEMANA 1 - Dia 1 (27/11/2023)
  mostrarNome() {
    let nome: string = 'Jonatas';
    this.auxiliarNome(nome);
  }

  private auxiliarNome(nome: string) {
    console.log('O nome é', nome);
  }
  mostrarMedia() {
    let media: number = (1 + 3 + 5 + 10) / 3;
    console.log('A media dos valores é', media);
  }
  // SEMANA 1 - Dia 2 (29/11/2023)

  verificarMenorIdade(anoNascimento?: any) {
    let anoAtual: number = 2023;
    let idade: number;
    idade = anoAtual - anoNascimento;

    if (idade < 18) {
      alert('Pessoa com menos de 18 anos de idade');
    } else if (idade === 18 || idade > 18) {
      alert('Pessoa com 18 ou mais anos de idade');
    } else {
      alert('Informe um ano de nascimento');
    }
  }

  verificarIdade(anoNascimento?: any) {
    let anoAtual: number = 2023;
    let idade: number;
    idade = anoAtual - anoNascimento;

    if (idade < 18) {
      alert('Pessoa MENOR de idade');
    } else if (idade >= 18) {
      alert('Pessoa MAIOR de idade');
    } else {
      alert('Informe um ano de nascimento');
    }
  }

  idadeEleitoral(anoNascimento?: any) {
    let anoAtual: number = 2023;
    let idade: number;
    idade = anoAtual - anoNascimento;

    if (idade <= 15) {
      alert('A idade é '+ idade +', NÃO pode votar!');
    } else if (idade === 16 || idade === 17) {
      alert('A idade é '+ idade +', o Voto é OPCIONAL!');
    } else if (idade >= 18 && idade <= 70) {
      alert('A idade é '+ idade +', o voto é OBRIGATÓRIO!');
    } else {
      alert('A idade é '+ idade +', o voto é OPCIONAL!');
    }
  }
}
