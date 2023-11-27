import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VictorComponent } from './victor.component';

const routes: Routes = [
  {path: '', component: VictorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VictorRoutingModule { }
