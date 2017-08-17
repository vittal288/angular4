import {Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject'

import { Ingrediant } from '../shared/ingrediants.model';


Injectable();
export class ShoppingListService {
    private ingrediants: Ingrediant[] = [
        new Ingrediant('Apples', 5),
        new Ingrediant('Tommatto', 2)
    ];
    //public indgredientChangedEvent = new EventEmitter<Ingrediant[]>();
    public indgredientChangedEvent = new Subject<Ingrediant[]>();
    public startEditing = new Subject<number>();
    
    public getIngrients(){        
        return this.ingrediants.slice();
    }

    public getIngredient(index:number){
        return this.ingrediants[index]
    }

    public addIngrediants(ingrediant:Ingrediant){
        this.ingrediants.push(ingrediant);
        //this.indgredientChangedEvent.emit(this.ingrediants.slice()); //replacing event emitter code with observable SUBJECT for cross communication component
        this.indgredientChangedEvent.next(this.ingrediants.slice());
    }

    addIngrediant(ingrediants:Ingrediant[]){
        // for (let ingrediant of ingrediants){
        //     this.addIngrediants(ingrediant)
        // }

        //using ES6 spread operator(...) : convert array items to list of items 
        this.ingrediants.push(...ingrediants);
        //this.indgredientChangedEvent.emit(this.ingrediants.slice());
        this.indgredientChangedEvent.next(this.ingrediants.slice());
    }

    updateIngredeint(index:number,newIngredieant:Ingrediant){
        this.ingrediants[index]= newIngredieant;
        this.indgredientChangedEvent.next(this.ingrediants.slice());
    }

    deleteIngredeint(index:number){
        console.log('Index',index);
        this.ingrediants.splice(index,1);
        this.indgredientChangedEvent.next(this.ingrediants.slice());
    }
}