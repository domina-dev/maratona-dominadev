import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoaoRoutingModule } from './joao-routing.module';
import { JoaoComponent } from './joao.component';


@NgModule({
  declarations: [
    JoaoComponent
  ],
  imports: [
    CommonModule,
    JoaoRoutingModule
  ]
})
export class JoaoModule { }
