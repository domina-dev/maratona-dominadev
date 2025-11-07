import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DylanRoutingModule } from './dylan-routing.module';
import { DylanComponent } from './dylan.component';


@NgModule({
  declarations: [
    DylanComponent
  ],
  imports: [
    CommonModule,
    DylanRoutingModule
  ]
})
export class DylanModule { }
