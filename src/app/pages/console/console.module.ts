import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { ConsoleComponent } from './console.component';


@NgModule({
  declarations: [
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[ConsoleComponent]
})
export class ConsoleModule { }
