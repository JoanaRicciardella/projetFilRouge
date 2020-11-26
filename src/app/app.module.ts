import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HardstyleComponent } from './hardstyle/hardstyle.component';


@NgModule({
  declarations: [
    AppComponent,
    HardstyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
