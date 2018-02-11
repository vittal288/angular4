// @@ CORE MODULE 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NoopInterceptor } from './global-components/http-interceptor/app-httpinterceptor.service';



// @@ MODULES
import { NGMaterialImportsModule } from './ui-components-imports/material-imports.module';
import { AnytimeLibModule } from './modules/anytime-lib/anytime-lib.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { AdminPortalModule } from './modules/admin-portal/admin-portal.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './modules/shared/shared.module';

// @@ COMPONENTS
import { AppComponent } from './app.component';
import { NotFoundComponent } from './global-components/not-found/not-found.component';
import { LoadingComponent } from './global-components/loading/loading.component';
import { FlyerComponent } from './global-components/flyer/flyer.component';

// @@ SERVICES
import { HTTPCommonService } from './global-components/http-interceptor/app-http-common.service';
import { GlobalErrorHandler, GlobalHTTPErrorHanlder } from './global-components/global-error-handler/global-error-handler';

// @@ PIPES 
// import { FirstLetterUpperCasePipe } from './global-components/pipes/first-letter-uppercase.pipes';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoadingComponent,
    FlyerComponent,
    // FirstLetterUpperCasePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NGMaterialImportsModule,
    AnytimeLibModule,
    CoreModule,
    AdminPortalModule,
    AuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule.forRoot()
  ],
  providers: [
    HTTPCommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    GlobalHTTPErrorHanlder,
    GlobalErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
