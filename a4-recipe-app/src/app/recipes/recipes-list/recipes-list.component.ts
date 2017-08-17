import { Component, OnInit,OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipes.service';
import {DataStorageService} from '../../shared/data-storage.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit,OnDestroy {  
  recipes:Recipe[]=[];
  recipeChangeEvenSub:Subscription;
  constructor(private recipeService:RecipeService,private dataStorageService:DataStorageService) { 
    
  }

  ngOnInit() {    
    this.recipeChangeEvenSub = this.recipeService.recipeChangedEvent.subscribe((recipe:Recipe[])=>{
        this.recipes = recipe;       
    })    
    this.recipes = this.recipeService.getRecipes();    
    
  }

  ngOnDestroy(){
      this.recipeChangeEvenSub.unsubscribe();
  }

}
