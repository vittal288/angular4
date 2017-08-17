import {NgModule} from '@angular/core';
import {Routes,RouterModule,PreloadAllModules} from '@angular/router';

import {HomeComponent} from './core/home/home.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
//import {AuthGuard} from './auth/auth-guard.service';



const appRoutes:Routes=[   
    //{path:'',redirectTo:'/recipes',pathMatch:'full'},    
    {path:'',component:HomeComponent},    
    {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},//Lazy loading   
    {path:'shopping-list',loadChildren:'./shopping-list/shopping-list.module#ShoppingListModule'}//Lazy loading
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules}) //preLoadAllModules, loads all lazy loaded components once the application bootstraped. Means ng loads these modules once all eagered componet loads but not while bootstraping all modules
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}