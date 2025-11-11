import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { EditarParametrosComponent } from './editar-parametros.component';

@NgModule({
  declarations: [EditarParametrosComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [EditarParametrosComponent]
})
export class EditarParametrosModule { }
