import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {SuccessWarningAlertComponent} from './assignments/warning-alerts/success-warning-alert/success-warning-alert.components';
import { FailureWariningAlertComponent } from './assignments/warning-alerts/failure-warining-alert/failure-warining-alert.component';
import { HandsOnComponentComponent } from './assignments/hands-on-component/hands-on-component.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessWarningAlertComponent,
    FailureWariningAlertComponent,
    HandsOnComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
