import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BytebankComponent } from './bytebank/bytebank.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

@NgModule({
  declarations: [
    AppComponent,
    BytebankComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
