import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm:FormGroup;
  forBiddeUserNames = ['Chris','Anna'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email],this.forBiddenEmails),
      }),
      'gender':new FormControl('male'),
      'hobbies': new FormArray([])
    });

    //@@@ Track the each value change of the form 
    // this.signupForm.valueChanges.subscribe((value)=>{
    //     console.log(value);
    // })

    //@@@ track the each form field status
    this.signupForm.statusChanges.subscribe((status)=>{
        console.log(status);
    })


    //SET VALUE and PATCH VALUE 
    // this.signupForm.setValue({
    //   userData:{
    //     'username':'vittal',
    //     'email':'vittal288@gmail.com'
    //   },
    //   gender:'male'
    // });

    this.signupForm.patchValue({
      userData:{
        'email':'test@test.com'
      }
    })
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  // onAddHobby(){
  //   const control = new FormControl(null,Validators.required);
  //   (<FormArray>this.signupForm.get('hobbies')).push(control);
  //   console.log('ARRAY', this.signupForm.get('hobbies'));
  // }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }


  forbiddenNames(control:FormControl):{[s:string]:boolean}{
    if(this.forBiddeUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden':true}
    }
    return null;
  }

  //custom asynch validators 
  forBiddenEmails(control:FormControl): Promise<any> | Observable<any>{
      const promise = new Promise<any>((resolve,reject)=>{
          setTimeout(()=>{
              if(control.value === 'test@test.com'){
                  resolve({'emailIsForbidden':true})
              }else{
                resolve(null);
              }
          },1500);
      });
      return promise;
  }
}
