import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'painel',
    loadChildren: () => import('./pages/painel-compilacao/painel-compilacao.module').then(m => m.PainelCompilacaoModule)
  },
  {
    path: 'erick',
    loadChildren: () => import('./pages/treino/erick/erick.module').then(m => m.ErickModule)
  },
  {
    path: 'dylan',
    loadChildren: () => import('./pages/treino/dylan/dylan.module').then(m => m.DylanModule)
  },
  {
    path: 'gaucho',
    loadChildren: () => import('./pages/treino/gaucho/gaucho.module').then(m => m.GauchoModule)
  },
  {
    path: 'matheus',
    loadChildren: () => import('./pages/treino/matheus/matheus.module').then(m => m.MatheusModule)
  },
  {
    path: 'pablo',
    loadChildren: () => import('./pages/treino/pablo/pablo.module').then(m => m.PabloModule)
  },
  {
    path: 'victor',
    loadChildren: () => import('./pages/treino/victor/victor.module').then(m => m.VictorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
