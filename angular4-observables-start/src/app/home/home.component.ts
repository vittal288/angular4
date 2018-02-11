import { Component, OnInit,OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  // myObservableSubscription:Subscription;
  // myCustomSubscription:Subscription;

  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    //here map is an objservable operator and this also returns an observable
    const myNumber = Observable.interval(1000)
          .map((data:number)=>{
            return data*2;
          })
    this.numbersObsSubscription = myNumber.subscribe((number:number)=>{
      console.log(number);
    })

    const myObservable = Observable.create((observer:Observer<string>)=>{
        setTimeout(()=>{
            //post 2 scond , next data package will emit 
            observer.next('first Data Package');
        },2000);
        setTimeout(()=>{
            observer.next('second Data Package');
        },4000);
        setTimeout(()=>{
            //observer.error('does not work');
            observer.complete();
        },5000);        
        setTimeout(()=>{
           observer.next('second Data Package');
        },6000);        
    });

    this.customObsSubscription =  myObservable.subscribe(
      (data:string)=>{console.log(data);},
      (error:string)=>{console.log(error);},
      ()=>{console.log('Completed');}
    );
  }

  ngOnDestroy(){
    console.log('COMPOENT IS DESTROYED')
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
