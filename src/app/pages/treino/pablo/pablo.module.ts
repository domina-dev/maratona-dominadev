import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PabloRoutingModule } from './pablo-routing.module';
import { PabloComponent } from './pablo.component';


@NgModule({
  declarations: [
    PabloComponent
  ],
  imports: [
    CommonModule,
    PabloRoutingModule
  ]
})
export class PabloModule { }
