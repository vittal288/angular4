import { Component, OnInit, InjectionToken,Inject} from '@angular/core';
//import {EditCourseService} from './edit-course.service';
import {MD_DIALOG_DATA} from '@angular/material';

//export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})


export class EditCourseComponent implements OnInit {

  //MD_DIALOG_DATA: custom dependency injection token
  constructor(@Inject(MD_DIALOG_DATA) data:any) {
    console.log("DATA",data);
   }

  ngOnInit() {
  }

}
