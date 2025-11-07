import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GauchoRoutingModule } from './gaucho-routing.module';
import { GauchoComponent } from './gaucho.component';


@NgModule({
  declarations: [
    GauchoComponent
  ],
  imports: [
    CommonModule,
    GauchoRoutingModule
  ]
})
export class GauchoModule { }
