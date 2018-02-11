import { Component, OnInit } from '@angular/core';
//import {FormGroup,FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-servers', //select by tag name
  //selector: '[app-servers]', select by attribute
  //selector: '.app-servers',//select by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private allowUserClick = false;
  private serverCreationStatus ="No Server was Created !";
  private serverName;
  private serverCreated:boolean=false;
  private servers =['Server One','server two'];
  constructor() {
    setTimeout(()=>{
      this.allowUserClick =true;
    },2000);
   }

  ngOnInit() {
  }

  private onServerCreate(){ 
    this.servers.push(this.serverName);
    this.serverCreated =true;
    this.serverCreationStatus =`Server was created ${this.serverName}`;
  }

  private onUpdateServerName(event:Event){
    //type casting, if we declare event of type in any in function arguement then no need typecast 
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
