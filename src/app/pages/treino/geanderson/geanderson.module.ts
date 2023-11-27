import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeandersonRoutingModule } from './geanderson-routing.module';
import { GeandersonComponent } from './geanderson.component';


@NgModule({
  declarations: [
    GeandersonComponent
  ],
  imports: [
    CommonModule,
    GeandersonRoutingModule
  ]
})
export class GeandersonModule { }
