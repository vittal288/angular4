import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {AppRoutingModule} from './app-routing-module';

@NgModule({
    declarations:[AppComponent,HomeComponent],
    imports:[AppRoutingModule,BrowserModule,RouterModule],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{


}