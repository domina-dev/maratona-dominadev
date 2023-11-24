import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL: any = [
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL
  ],
  exports: [MATERIAL]
})
export class MaterialModule { }
