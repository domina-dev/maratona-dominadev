import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeandersonComponent } from './geanderson.component';

const routes: Routes = [
  {path: '', component: GeandersonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeandersonRoutingModule { }
