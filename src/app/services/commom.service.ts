import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor() { }

  teste(){
    console.log("Executado Service!");
  }
}
