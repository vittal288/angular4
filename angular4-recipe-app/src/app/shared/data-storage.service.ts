import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../recipes/recipes.service';
import { AuthService } from '../auth/auth.service';
//import {ExtendedHttpService} from '../app.httpInterceptor';
@Injectable()

export class DataStorageService {

    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService
    ) {

    }

    stroreRecipe() {
        const token = this.authService.getToken();
        return this.http.put('https://udemmy-angular4-recipe-book.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes())
    }

    fetchRecipe() {
        const token = this.authService.getToken();
        //we can subscribe for the observable here as well         
        this.http.get('https://udemmy-angular4-recipe-book.firebaseio.com/recipe.json?auth=' + token)
            //this.httpInterceptorService.get('https://udemmy-angular4-recipe-book.firebaseio.com/recipe.json?auth='+token)
            .map((response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingrediant']) {
                        recipe['ingrediant'] = [];
                    }
                    return recipes;
                }
            })
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }, (err) => {
                console.log(err);
            })
    }
}