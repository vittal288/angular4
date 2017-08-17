import {Component,EventEmitter,Output,Input,OnInit} from '@angular/core';

import {UserService} from '../users.services';

@Component({
    selector:'app-active-component',
    templateUrl:'./active.component.html',
    styleUrls:['./active.component.css'],   
})
export class ActiveComponent implements OnInit{    
    
    //@@@ SHARING DATA using EVENT EMIT 
    //  @Input() activeUser:string;
    //  @Output() activeUserEvent = new EventEmitter<string>();
     
    //  public updateUserToInActive(user){  
    //     this.activeUserEvent.emit(user);        
    //  }

    
    //SHARING DATA using COMMON SERVICES
    users=[];
    ngOnInit(){
        this.users = this.userService.activeUsers;
    }  
     constructor(private userService:UserService){

     }
    
    updateUserToInActive(user){
       this.userService.updateInActiveUser(user);       
    }
     
}
