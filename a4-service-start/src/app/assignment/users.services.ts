import {Injectable,Component} from '@angular/core';
import {CountService} from './count.service';

@Injectable()
@Component({
    providers:[CountService]
})
export class UserService{
     constructor(private countService:CountService){

     }
     public activeUsers = ['Max', 'Anna'];
     public inactiveUsers = ['Chris', 'Manu'];
        

    
    updateInActiveUser(user:string){
        this.inactiveUsers.push(user);
        this.activeUsers.splice(this.activeUsers.indexOf(user),1);
        this.countService.countInActiveUserTX();
    }

    updateActiveUser(user:string){
        this.activeUsers.push(user);
        this.inactiveUsers.splice(this.inactiveUsers.indexOf(user),1);
        this.countService.countActiveUserTX();
    }
}