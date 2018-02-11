import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';


import {CuaromValidator} from './custom.validators';
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  statuses=['Stable','Critical','Finished']
  private projectForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname':new FormControl(null,[Validators.required,CuaromValidator.inValidProjectName.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email],CuaromValidator.forbiddenEmailAsynchValidator),
      'status':new FormControl('Critical')
    })
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }

  //normal custom validators
}
