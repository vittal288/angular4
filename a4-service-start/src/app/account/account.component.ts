//import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers:[LoggingService,AccountService]
  //@@ -->AccountService is removed from providers array, because this is already imported in its parent component i.e app.component 
  //providers:[LoggingService] //imported in AccountSerivce 
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  
  //type script should know , from where Login service is coming from 
  constructor(private logginService:LoggingService,private accountService:AccountService){

  }

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //@@@ above emit code will replace with SERVICE 
    this.accountService.updateStatus(this.id,status);



    // //@@@ 1st WAY 
    // //this is one way of importing dependency injection and crearing an instance of it
    // const logginService = new LoggingService();
    // logginService.logStatusChange(status)  

    //@@ 2nd WAY 
    //this.logginService.logStatusChange(status);  


    //EMIT the event which is registered in accountService(common service for COMP account and COMP new-account)
    this.accountService.statusUpdated.emit(status);
  }
}
