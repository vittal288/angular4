import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppSettings } from '../../../config/config';

// @@ MODULES 
import { AuthRoutingModule } from './auth-routing.module';

// @@ COMPONENT 
import { SigninComponent } from './signin/signin.component';
import { LoadingComponent } from './../../global-components/loading/loading.component';

// @@ SERVICES
import { ConfigService } from '../../../config/config.service';
// import { SharedService } from './../shared/shared.service';





@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        CommonModule,
    ],
    exports: [

    ],
    providers: [
        AppSettings,
        ConfigService,
        LoadingComponent,
        // SharedService
    ]
})
export class AuthModule {

}
