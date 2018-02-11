import { Component, OnInit,OnDestroy,ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/subscription';

import {Ingrediant} from '../../shared/ingrediants.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subSubscription:Subscription;
  arrInGradient =[];
  editMode:boolean =false;
  editItemIndex:number;
  editedItem:Ingrediant;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subSubscription = this.shoppingListService.startEditing.subscribe((index:number)=>{      
      this.editMode = true;
      this.editItemIndex=index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    })
  }

  onSubmit(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingrediant(value.name,value.amount);    
    if(this.editedItem){
      this.shoppingListService.updateIngredeint(this.editItemIndex,newIngredient);      
    }else{
      this.shoppingListService.addIngrediants(newIngredient);      
    }
    this.editMode =false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDeleteItem(){
    this.shoppingListService.deleteIngredeint(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subSubscription.unsubscribe();
  }
  
}
