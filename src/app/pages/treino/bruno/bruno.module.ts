import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrunoRoutingModule } from './bruno-routing.module';
import { BrunoComponent } from './bruno.component';


@NgModule({
  declarations: [
    BrunoComponent
  ],
  imports: [
    CommonModule,
    BrunoRoutingModule
  ]
})
export class BrunoModule { }
