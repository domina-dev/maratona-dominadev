import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatheusRoutingModule } from './matheus-routing.module';
import { MatheusComponent } from './matheus.component';


@NgModule({
  declarations: [
    MatheusComponent
  ],
  imports: [
    CommonModule,
    MatheusRoutingModule
  ]
})
export class MatheusModule { }
