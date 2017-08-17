import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public authMessages:string="";
  public hideMessage:boolean =false;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSignUp(form:NgForm){     
      const email = form.value.email;
      const password = form.value.password;  
      this.authService.signUpUser(email,password);   

      this.authService.autTxDataEvent
      .subscribe((message:any)=>{
        this.authMessages = message;
        this.hideMessage =true;
        setTimeout(()=>{
          this.hideMessage =false;
        },5000)
      },(err)=>{
         console.log(err);
      }) 
  }
}
