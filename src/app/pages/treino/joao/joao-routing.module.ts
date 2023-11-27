import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoaoComponent } from './joao.component';

const routes: Routes = [
  {path: '', component: JoaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoaoRoutingModule { }
