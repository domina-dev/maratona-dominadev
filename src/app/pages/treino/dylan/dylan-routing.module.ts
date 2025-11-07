import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DylanComponent } from './dylan.component';

const routes: Routes = [
  {path: '', component: DylanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DylanRoutingModule { }
