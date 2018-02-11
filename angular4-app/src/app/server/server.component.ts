import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css'],
    styles:[`
    .online{
      color:white
    }
  `]
})

export class ServerComponent{
 public serverId:number = 1234;
 public serverStatus:string='Online';

 constructor(){
     this.serverStatus = Math.random() > 0.5 ? 'offline':'online';
 }
 private getColor(){
     return this.serverStatus === 'offline'? 'red':'green';
 }
 getServerStatus(){
     return this.serverStatus;
 }
}