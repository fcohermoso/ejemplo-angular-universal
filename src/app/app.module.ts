import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonComponent } from './digimon/digimon.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ListaDigimonsComponent } from './lista-digimons/lista-digimons.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonComponent,
    ListaDigimonsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
