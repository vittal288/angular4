// @@ CORE MODULE/COMPONENTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// @@ APP COMPONENTS
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './header/search/search.component';


// @@ MODULE
import { NGMaterialImportsModule } from './../../ui-components-imports/material-imports.module';
import { AppRoutingModule } from './../../app-routing.module';



// @@ PIPES
import { SortAlphabeticallyPipe } from './../../global-components/pipes/sort-alphebetically.pipe';
import { FirstLetterUpperCasePipe } from './../../global-components/pipes/first-letter-uppercase.pipes';


// @@ SERVICES:
import { SearchService } from './header/search/search.service';
import { AuthService } from './../auth/auth.service';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SortAlphabeticallyPipe,
    FirstLetterUpperCasePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NGMaterialImportsModule,
    AppRoutingModule   
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AppRoutingModule
  ],
  providers: [
    SearchService,
    AuthService   
  ]
})
export class CoreModule { }
