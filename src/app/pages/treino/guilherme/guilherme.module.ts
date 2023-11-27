import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuilhermeRoutingModule } from './guilherme-routing.module';
import { GuilhermeComponent } from './guilherme.component';


@NgModule({
  declarations: [
    GuilhermeComponent
  ],
  imports: [
    CommonModule,
    GuilhermeRoutingModule
  ]
})
export class GuilhermeModule { }
