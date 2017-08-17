import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Ingrediant} from '../shared/ingrediants.model';
import {ShoppingListService} from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']  
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  addIngrediantSubscription:Subscription;
  ingrediants:Ingrediant[];
  constructor(private shoppingListService:ShoppingListService) {
     
   }

  ngOnInit() {
  
    this.ingrediants =this.shoppingListService.getIngrients();    
    this.addIngrediantSubscription =  this.shoppingListService.indgredientChangedEvent.subscribe((ingrediant:Ingrediant[])=>{        
        this.ingrediants = ingrediant;
    });    
  }

  onEditItem(index:number){
    this.shoppingListService.startEditing.next(index);
  }
  ngOnDestroy(){
    this.addIngrediantSubscription.unsubscribe();
  }


}
