import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JonatasService {
  // SEMANA 1
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
}
