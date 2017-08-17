import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {ShoppingListRouteModule} from './shopping-list-routing.module';


@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
      CommonModule,
      FormsModule,
      ShoppingListRouteModule      
    ]

})
export class ShoppingListModule{
    
}
 