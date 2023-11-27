import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VictorRoutingModule } from './victor-routing.module';
import { VictorComponent } from './victor.component';


@NgModule({
  declarations: [
    VictorComponent
  ],
  imports: [
    CommonModule,
    VictorRoutingModule
  ]
})
export class VictorModule { }
