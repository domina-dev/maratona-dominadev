import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErickRoutingModule } from './erick-routing.module';
import { ErickComponent } from './erick.component';


@NgModule({
  declarations: [
    ErickComponent
  ],
  imports: [
    CommonModule,
    ErickRoutingModule
  ]
})
export class ErickModule { }
