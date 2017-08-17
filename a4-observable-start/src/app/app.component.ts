import { Component,OnInit,OnDestroy } from '@angular/core';
import {UserService} from './user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  user1Activated:boolean =false;
  user2Activated:boolean =false;

  userAcitvatedObservable:Subscription;


  constructor(private userService:UserService){

  }
  
  ngOnInit(){
    this.userAcitvatedObservable = this.userService.userActivated.subscribe((id:number)=>{
        if(id === 1){
          this.user1Activated =true;
        }else if(id === 2){
          this.user2Activated =true;
        }
    })
  }
  ngOnDestroy(){
      //un subsribe all observables in on destory component life cycle hook
      this.userAcitvatedObservable.unsubscribe();
      console.log('userAcitvatedObservable : I am Unsubsribed')
  }
}
