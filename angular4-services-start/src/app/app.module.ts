import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import {AccountService} from './account.service';
import {LoggingService} from './logging.service';


//assignments files 
import {ActiveComponent} from './assignment/active-component/active.component';
import {InActiveComponent} from './assignment/in-active-component/in-active.component';
import {UserService} from './assignment/users.services';
import {CountService} from './assignment/count.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,

    ActiveComponent,
    InActiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountService,LoggingService,CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
