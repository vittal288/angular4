import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
//import {HttpModule,ConnectionBackend,Http,XHRBackend,RequestOptions } from '@angular/http';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipes.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
//import {ExtendedHttpService} from '../app.httpInterceptor';

import { HeaderComponent } from './header/header.component';//core component
import { HomeComponent } from './home/home.component';//core component 
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';//header is using rouerLink and routers

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,//because appDrownDirective is used in header component
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,//app component is using router so we have export back to app component
        HeaderComponent//because I am using <app-header> selector in app component 
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        // {
        //   provide: ExtendedHttpService,
        //   useFactory: (backend: XHRBackend, options: RequestOptions,authService:AuthService,router:Router) => {
        //     return new ExtendedHttpService(backend, options,authService,router);
        //   },
        //   deps: [ XHRBackend, RequestOptions]
        // }     
    ],
})
export class CoreModule {

}