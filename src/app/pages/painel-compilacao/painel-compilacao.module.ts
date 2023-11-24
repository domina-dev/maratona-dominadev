import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelCompilacaoRoutingModule } from './painel-compilacao-routing.module';
import { PainelCompilacaoComponent } from './painel-compilacao.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    PainelCompilacaoComponent
  ],
  imports: [
    CommonModule,
    PainelCompilacaoRoutingModule,
    MaterialModule,
    NgxChartsModule
  ]
})
export class PainelCompilacaoModule { }
