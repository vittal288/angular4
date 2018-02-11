import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import {AccountService} from './account.service';


//ASSINGMENT FILE 
import {UserService} from './assignment/users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //this is to intimate ANGULAR to load dependency
  providers:[AccountService,UserService]
})
export class AppComponent implements OnInit {

  //creating an empty array of objects, which holds following type of data
  accounts:{name:string,status:string}[];

  activeUsers:string[];
  inactiveUsers:string[];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

  //this is to intimate TYPESCRIPT to load dependency 
  constructor(private accountServce:AccountService,private userServie:UserService){

  }

  ngOnInit(){    
    this.accounts = this.accountServce.accounts;

    //feed the array from user service
    this.activeUsers = this.userServie.activeUsers;
    this.inactiveUsers = this.userServie.inactiveUsers;
  }



  //ASSIGMENT CODE 
  //@@ SHARE THE DATA WITH EVENT EMITTER AND PROPERTY BINDNG 
  //  activeUsers = ['Max', 'Anna'];
  //  inactiveUsers = ['Chris', 'Manu'];
  //  //public sendUser :any;
  //  onActiveUserUpdate(user){ 
  //     this.inactiveUsers.push(user); 
  //     this.activeUsers.splice(this.activeUsers.indexOf(user),1)            
  //  }

  //  onInActiveUserUpdate(user){
  //     this.activeUsers.push(user);
  //     this.inactiveUsers.splice(this.inactiveUsers.indexOf(user),1)
  //  }

  //@@ SHARE THE DATA USING SERVICE 

}
