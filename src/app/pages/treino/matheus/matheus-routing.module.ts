import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatheusComponent } from './matheus.component';

const routes: Routes = [
  {path: '', component: MatheusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatheusRoutingModule { }
