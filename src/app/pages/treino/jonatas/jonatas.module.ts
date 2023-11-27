import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JonatasRoutingModule } from './jonatas-routing.module';
import { JonatasComponent } from './jonatas.component';


@NgModule({
  declarations: [
    JonatasComponent
  ],
  imports: [
    CommonModule,
    JonatasRoutingModule
  ]
})
export class JonatasModule { }
