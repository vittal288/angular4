import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService,AccountService]
  //@@ -->AccountService is removed from providers array, because this is already imported in its parent component i.e app.component 
  //providers:[LoggingService] //imported in AccountSerivce 
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

    //type script should know , from where Login service is coming from 
  constructor(private logingService:LoggingService,private accountService:AccountService){

    //CAPTURE or LISTEN or SUBSCRIBE the event which is registered in accountService and emitted from COMPONENT account 
    this.accountService.statusUpdated.subscribe((status)=>{
        alert('STATUS'+ status);
    })
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    //@@@ --> commenting EMIT EVENT and same implemented or passing the data to app component using SERVICE
    this.accountService.addAccount(accountName,accountStatus); 

    // //@@@ 1st WAY 
    // //this is one way of importing dependency injection and crearing an instance of it 
    // const logService = new LoggingService();
    // logService.logStatusChange(accountStatus);

    ////@@@ 2nd WAY, of importing depenency injection 
    //this.logingService.logStatusChange(accountStatus);
  }
}
