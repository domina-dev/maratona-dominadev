import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuilhermeComponent } from './guilherme.component';

const routes: Routes = [
  {path: '', component: GuilhermeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuilhermeRoutingModule { }
