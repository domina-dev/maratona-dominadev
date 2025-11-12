import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelCompilacaoRoutingModule } from './painel-compilacao-routing.module';
import { PainelCompilacaoComponent } from './painel-compilacao.component';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConsoleModule } from '../console/console.module';
import { MudarStatusComponent } from 'src/app/modais/mudar-status/mudar-status.component';


@NgModule({
  declarations: [
    PainelCompilacaoComponent,
    MudarStatusComponent
  ],
  imports: [
    CommonModule,
    PainelCompilacaoRoutingModule,
    MaterialModule,
    NgxChartsModule,
    ConsoleModule
  ]
})
export class PainelCompilacaoModule { }
