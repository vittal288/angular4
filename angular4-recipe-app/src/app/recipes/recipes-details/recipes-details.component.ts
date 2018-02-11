import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Recipe} from "../recipes.model";
import {Ingrediant} from '../../shared/ingrediants.model';
import {RecipeService} from '../recipes.service';


@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private router:Router,private recipeService:RecipeService,private route:ActivatedRoute) { 
    //
  }

  ngOnInit() {
    //console.log('RECIPE',this.recipe);
    this.route.params.subscribe((params:Params)=>{
        this.id =+params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);        
    })
  }

  onAddToShoppingList(){       
    this.recipeService.addIngrediantsToShoppingList(this.recipe.ingrediant);
  }
  onEditRecipe(){
    //this.router.navigate(['edit'],{relativeTo:this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }

}
