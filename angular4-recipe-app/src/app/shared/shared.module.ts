///@@@ WHY THIS MODULE CREATIN : to share the appDropDown directive which is using in different modules like RecipeModule and AppModule. 
//DropDownDirective(appDropDown) will not work in FeatureModule(RecipeModule or ShoppingModule) but works in AppModule(headerComponent) to make it work we have create 
//SHaredModule and export it 
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropDownDirective} from './dropdown.directive';

@NgModule({
    declarations:[
        DropDownDirective
    ],
    exports:[
        CommonModule,
        DropDownDirective
    ]
})
export class SharedModule{

}