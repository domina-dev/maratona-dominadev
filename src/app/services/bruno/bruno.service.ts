import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class BrunoService extends BaseService {

  constructor() {
    super();
  }

  private cliente: string = 'Théo';
  private media: number = (1 + 5 + 10) / 3;

  nomearCliente() {
    console.log("O nome do cliente é:", this.cliente)
  }

  mediaNumeros() {
    console.log('A média entre esses três números é:', this.media)
  }
}
