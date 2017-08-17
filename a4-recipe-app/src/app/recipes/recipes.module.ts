import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import {SharedModule} from '../shared/shared.module';
import {RecipesRoutingModule} from './recipes-routing.module';

@NgModule({
    declarations: [
        RecipeStartComponent,
        RecipesComponent,
        RecipesListComponent,
        RecipesDetailsComponent,
        RecipesItemComponent,
        RecipeEditComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ],
    providers: [

    ],
    bootstrap: [

    ]
})
export class RecipesModule {

}

//@@@ NOTE: We are not RecipeService this module, because it is being used in other components like headComponent through data-storage service
//@@@ ReactiveFormsModule : we are using reactive forms only in Recipes Module , so we are moving here 
//@@ Import CommonModule: High chances we have to include CommonModule in all feature module like recipes.module to get access of all built in directive 
//@@ we have to all Routes which are related to Recipe Feature Module 