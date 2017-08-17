import {Injectable} from '@angular/core';


import {Recipe} from './recipes.model';
import {Ingrediant} from '../shared/ingrediants.model';
import {Subject} from 'rxjs/Subject';
//we are injecting service inside the service, so include @Injectable() decorative in recieving service
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{     
    recipeChangedEvent = new Subject<Recipe[]>();
    private recipes:Recipe[]=[
    new Recipe(            
                'A Chicken Leg Soup',
                'This is a Simply Taste','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
                [
                    new Ingrediant('Meat',1),
                    new Ingrediant('French Fries',2),
                    new Ingrediant('Soya Saouce',2)
                ]),
    new Recipe(              
                'Maggie',
                'Yemmee,awesome..',
                'https://budgetbytes.com/wp-content/uploads/2009/12/Garlic-Noodles-front.jpg',
                [
                    new Ingrediant('Noodles',2),
                    new Ingrediant('Carret',2),
                    new Ingrediant('Beans',2)
                ])];
    
    constructor(private shoppingListService:ShoppingListService){

    }

    setRecipes(recipes:Recipe[]){
        this.recipes = recipes;        
        this.recipeChangedEvent.next(this.recipes.slice());
    }
    getRecipes(){
        //to out side this component just return the copy of recipes array 
        return this.recipes.slice();        
    }   

    addIngrediantsToShoppingList(ingrediants:Ingrediant[]){
        this.shoppingListService.addIngrediant(ingrediants);
    } 

    getRecipe(index:number){       
        //return this.recipes.slice()[index]
        return this.recipes[index];
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChangedEvent.next(this.recipes.slice());
    }

    updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipeChangedEvent.next(this.recipes.slice());
    }
    deleteRecipe(index:number){       
        this.recipes.splice(index,1);
        this.recipeChangedEvent.next(this.recipes.slice());
    }
  

}