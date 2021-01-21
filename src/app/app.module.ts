import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalcModule } from './calc';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
