import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GauchoComponent } from './gaucho.component';

const routes: Routes = [
  {path: '', component: GauchoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GauchoRoutingModule { }
