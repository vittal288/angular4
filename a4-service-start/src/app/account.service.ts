import {Injectable,EventEmitter} from '@angular/core';
import {LoggingService} from './logging.service';
//this service is used to share the data between the components 

//we importing this because, we are injected or imorted a service(LoggingService) inside of it and should include this metadata of decorative inside the LoggingSerice
@Injectable()
export class AccountService {
    statusUpdated = new EventEmitter<string>();
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private logginService:LoggingService){

    }
    addAccount(name:string,status:string) {        
        this.accounts.push({name:name,status:status});
        this.logginService.logStatusChange(status);
    }

    updateStatus(id:number,status:string) {
        this.accounts[id].status = status;
        this.logginService.logStatusChange(status);
    }
}