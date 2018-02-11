import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipesComponent } from './recipes.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';


const recipesRoutes: Routes = [
            {path: '', component: RecipesComponent, children: [
                { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
                { path: ':id', component: RecipesDetailsComponent },
                { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
            ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule],
    providers:[AuthGuard]//We are loading here because it is being used only in Recipes Module and it will inject here from child injector , and removed from coreModule
})
export class RecipesRoutingModule {

}