import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;

  formModel: any = {};
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  onUserFormSubmit() {
    console.log(this.userForm.value);
  }


  onSubmit() {
    console.log(this.userForm.value);
  }

  onEditForm() {
    var serverObj = {
      firstName: "asd",
      lastName: "asd",
      email: "vittal288@gmail1.com",
      password: "123456",
      confirmPassword: "asd"
    }

    this.userForm.setValue(serverObj);
  }

}
