import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PainelCompilacaoModule } from './pages/painel-compilacao/painel-compilacao.module';
import { VictorModule } from './pages/treino/victor/victor.module';
import { PabloModule } from './pages/treino/pablo/pablo.module';
import { MatheusModule } from './pages/treino/matheus/matheus.module';
import { GauchoModule } from './pages/treino/gaucho/gaucho.module';
import { DylanModule } from './pages/treino/dylan/dylan.module';
import { ErickModule } from './pages/treino/erick/erick.module';
import { ToolbarModule } from './layout/toolbar/toolbar.module';
import { CompilacaoModalModule } from './modais/compilacao-modal/compilacao-modal.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConfirmacaoModule } from './modais/confirmacao/confirmacao.module';
import { LoginModalModule } from './modais/login/login-modal.module';
import { DbKeyInterceptor } from './core/config/db-key-interceptor';
import { EditarParametrosModule } from './modais/editar-parametros/editar-parametros.module';

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
    PabloModule,
    MatheusModule,
    GauchoModule,
    DylanModule,
    ErickModule,
    ToolbarModule,
    CompilacaoModalModule,
    ConfirmacaoModule,
    HttpClientModule,
    LoginModalModule,
    EditarParametrosModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DbKeyInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
