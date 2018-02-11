import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserEventsExperimentsComponent } from './browser-events-experiments/browser-events-experiments.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowserEventsExperimentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
