import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrunoComponent } from './bruno.component';

const routes: Routes = [
  {path: '', component: BrunoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrunoRoutingModule { }
