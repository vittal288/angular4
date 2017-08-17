import { Component, OnInit,OnDestroy } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  paramsSubscription:Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     
      //snapshot method will execure synchronously and it wont execute whenver params updated if we are residing in same component 
      this.user = {
        id:this.route.snapshot.params['id'],
        name:this.route.snapshot.params['name']
      }
  
    
      //@@@ -->this code will not run, when NGONIT loads. Instead it loads only when params is changed 
      //@@@ --> By angular way , whenever we moved out from the compoent in the browser, the component will destroy and it recreates whenver it is reqired.
      //        Even the though compoent destroyed by angular life cycle , this subscriber will not desroy, instead it resides in in browser memory. The only way to destroy is 
      //        is using in onDestroy life cycle hook and i.e shown below 
      //PARAMS: is an obseravable and it can handle asynchronosly, whenver URL params changes then data will capture in callback method of subscribe
      // this.route.params.subscribe((params:Params)=>{
      //     this.user.id= params['id'];
      //     this.user.name = params['name'];
      // });


      this.paramsSubscription = this.route.params.subscribe((params:Params)=>{
          this.user.id= params['id'];
          this.user.name = params['name'];
      });
     
  }

  ngOnDestroy(){
      this.paramsSubscription.unsubscribe();
  }

}
