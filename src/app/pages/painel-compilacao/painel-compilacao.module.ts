import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelCompilacaoRoutingModule } from './painel-compilacao-routing.module';
import { PainelCompilacaoComponent } from './painel-compilacao.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [
    PainelCompilacaoComponent
  ],
  imports: [
    CommonModule,
    PainelCompilacaoRoutingModule,
    MaterialModule
  ]
})
export class PainelCompilacaoModule { }
