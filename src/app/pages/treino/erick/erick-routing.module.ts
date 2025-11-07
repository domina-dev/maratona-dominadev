import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErickComponent } from './erick.component';

const routes: Routes = [
  {path: '', component: ErickComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErickRoutingModule { }
