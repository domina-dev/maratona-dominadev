import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JonatasComponent } from './jonatas.component';

const routes: Routes = [
  {path: '', component: JonatasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JonatasRoutingModule { }
