import { Component,ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('f') signUpForm:NgForm;
  answer:string='';
  defaultQuestion ='pet';
  genders= ['Male','Female'];
  formSubmit:boolean =false;
  user={
    username:'',
    email:'',
    secret:'',
    answer:'',
    gender:''
  }


  //assignments
  defaultSubscription = 'advance';
  @ViewChild('f2') userForm:NgForm;
  userFormSubmit:boolean=false;
  userFormObj={
    email:'',
    subscription:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    //@@@ --> this method overrides the existing form values 
    // this.signUpForm.setValue({
    //   userData:{
    //     username:'superuser',
    //     email:''        
    //   },
    //   gender:'',
    //   secret:'teacher',
    //   answer:''
    // });

    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName,              
      }    
    })
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signUpForm);
    this.formSubmit =true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.answer;
    this.user.gender = this.signUpForm.value.gender;
    
    this.onReset();
  }

  onReset(){
    this.signUpForm.resetForm();
  }


  //assignments
  onUserFormSubmit(){
    console.log('User Form', this.userForm);
    this.userFormSubmit =true;
    this.userFormObj.email = this.userForm.value.email;
    this.userFormObj.subscription = this.userForm.value.subscription;
  }
}
