import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

import {HomeComponent} from './home.component';
import {UserComponent} from './users/user.component';


const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',loadChildren:'./users/user.module#UserModule'}
]
@NgModule({
    
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[

    ]
})


export class AppRoutingModule{

}