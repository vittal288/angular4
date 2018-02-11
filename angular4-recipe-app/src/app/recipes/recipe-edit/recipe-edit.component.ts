import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }
  recipeForm: FormGroup;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.formInit();
    })
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingrediant')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      }))
  }

  private formInit() {
    let recipeName = "";
    let recipeImagePath = "";
    let description = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingrediant']) {
        for (let ingrediant of recipe.ingrediant) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingrediant.name, Validators.required),
              'amount': new FormControl(ingrediant.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingrediant': recipeIngredients
    })
  }

  getDynamicAddedControls(){    
    return this.recipeForm.get('ingrediant')['controls'];
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingrediants']
    // )
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['../'],{relativeTo:this.route});    
  }

  onCacnelRecipe() {
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIngrediant(index:number){
    (<FormArray>this.recipeForm.get('ingrediant')).removeAt(index);
  }


}
