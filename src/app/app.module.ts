import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PainelCompilacaoModule } from './pages/painel-compilacao/painel-compilacao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PainelCompilacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
