import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditCourseService } from './edit-course/edit-course.service';

import {MDComponentsModule} from './modules/md.components.module';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],

  //the components which we add/reffered dynamically 
  entryComponents:[
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MDComponentsModule  
  ],
  providers: [
    EditCourseService,
    //this is to inject using provider oject 
    {provide:EditCourseService,useClass:EditCourseService},    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
