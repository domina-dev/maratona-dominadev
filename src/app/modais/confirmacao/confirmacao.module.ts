import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacaoComponent } from './confirmacao.component';
import { MaterialModule } from 'src/app/modules/material.module';



@NgModule({
  declarations: [
    ConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ConfirmacaoModule { }
