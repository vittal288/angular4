import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {  MatDialog } from '@angular/material';

import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isChecked: boolean = true;
  public foods = [{ id: 1, name: 'Mango' }, { id: 2, name: 'Orragne' }, { id: 3, name: 'Apple' }]
  public food = 3;
  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);
  public progress: number = 0;
  public timer;
  public categories = [
    { name: 'Beginner' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
  ];
  public courses;
  isLoading: boolean;


  constructor(private matDialog: MatDialog) {

  }
  ngOnInit() {
    this.isLoading = true;
    this.showSpinner();
    this.getCourses().subscribe(x => this.isLoading = false);
  }

  onChecked(event: any) {
    console.log(event);

  }

  onRadioChange(event: any) {
    console.log(event);
  }

  onSelect(event: any) {
    console.log(event);
  }

  selectCategory(category) {
    this.categories.filter(c => c != category)
      .forEach(c => c['selected'] = false);

    category.selected = !category.selected;
  }

  showSpinner() {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress == 100) clearInterval(this.timer)
    }, 20);
  }

  getCourses() {
    return Observable.timer(2000);
  }

  openDialogue() {
    this.matDialog.open(EditCourseComponent, {
      data: { courseId: 1 }
    })
      .afterClosed()
      .subscribe((result) => {
        console.log(result);
      })
  }
}
