import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PainelCompilacaoModule } from './pages/painel-compilacao/painel-compilacao.module';
import { VictorModule } from './pages/treino/victor/victor.module';
import { JonatasModule } from './pages/treino/jonatas/jonatas.module';
import { JoaoModule } from './pages/treino/joao/joao.module';
import { GuilhermeModule } from './pages/treino/guilherme/guilherme.module';
import { GeandersonModule } from './pages/treino/geanderson/geanderson.module';
import { BrunoModule } from './pages/treino/bruno/bruno.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PainelCompilacaoModule,
    VictorModule,
    JonatasModule,
    JoaoModule,
    GuilhermeModule,
    GeandersonModule,
    BrunoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
