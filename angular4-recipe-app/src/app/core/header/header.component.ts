import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';


import { DataStorageService } from '../../shared/data-storage.service';
import {Recipe} from '../../recipes/recipes.model';
import {RecipeService} from '../../recipes/recipes.service';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: "app-header",
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
   
    public authPublicSrc:AuthService;
    //@Output() navLinkFlg = new EventEmitter<{navBar:string}>();
    // navigate(event){
    //     //console.log('NAV BAR' ,event.target.text);

    //     this.navLinkFlg.emit({navBar:event.target.text});
    // }

    constructor(private dataStorageService: DataStorageService,
                private recipeService:RecipeService,
                private authService:AuthService) {
        
        this.authPublicSrc = this.authService;
    }

    ngOnInit() {

    }
    onSaveData() {
        this.dataStorageService.stroreRecipe()
            .subscribe((response: Response) => {
                console.log('RESOPONSE', response);
            });
    }

    onFetchData() {
        this.dataStorageService.fetchRecipe();        
    }

    onLogout(){
        this.authService.logout();
    }
}