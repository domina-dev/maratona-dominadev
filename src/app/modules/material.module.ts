import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MATERIAL: any = [
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  FormsModule,
  MatToolbarModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatMenuModule,
  MatSnackBarModule
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
