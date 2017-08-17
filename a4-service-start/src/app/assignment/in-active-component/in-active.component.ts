import {Component,Input,Output,EventEmitter,OnInit} from '@angular/core';

import {UserService} from '../users.services';

@Component({
    selector:'app-in-active-component',
    templateUrl:'./in-active.component.html',
    styleUrls:['./in-active.component.css']
})
export class InActiveComponent implements OnInit{
    // @Input() inActiveUser:any;
    // @Output() inActiveUserEvent = new EventEmitter<string>();
      
    // onUpdateUserToActive(user){
    //     this.inActiveUserEvent.emit(user);
    // } 


    //SHARING DATA using COMMON SERVICES
    users =[];   
    ngOnInit(){
        this.users = this.userService.inactiveUsers;
    }
    constructor(private userService:UserService){

    }

    onUpdateUserToActive(user){
        this.userService.updateActiveUser(user);
    }
}