import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'painel',
    loadChildren: () => import('./pages/painel-compilacao/painel-compilacao.module').then(m => m.PainelCompilacaoModule)
  },
  {
    path: 'bruno',
    loadChildren: () => import('./pages/treino/bruno/bruno.module').then(m => m.BrunoModule)
  },
  {
    path: 'geanderson',
    loadChildren: () => import('./pages/treino/geanderson/geanderson.module').then(m => m.GeandersonModule)
  },
  {
    path: 'guilherme',
    loadChildren: () => import('./pages/treino/guilherme/guilherme.module').then(m => m.GuilhermeModule)
  },
  {
    path: 'joao',
    loadChildren: () => import('./pages/treino/joao/joao.module').then(m => m.JoaoModule)
  },
  {
    path: 'jonatas',
    loadChildren: () => import('./pages/treino/jonatas/jonatas.module').then(m => m.JonatasModule)
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
