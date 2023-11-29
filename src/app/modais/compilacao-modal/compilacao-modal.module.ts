import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompilacaoModalComponent } from './compilacao-modal.component';
import { MaterialModule } from 'src/app/modules/material.module';



@NgModule({
  declarations: [
    CompilacaoModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CompilacaoModalModule { }
