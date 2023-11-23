import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelCompilacaoComponent } from './painel-compilacao.component';

const routes: Routes = [
  {path: '', component: PainelCompilacaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelCompilacaoRoutingModule { }
