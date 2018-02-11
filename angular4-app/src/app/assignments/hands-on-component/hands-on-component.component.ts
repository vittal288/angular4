import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hands-on-component',
  templateUrl: './hands-on-component.component.html',
  styleUrls: ['./hands-on-component.component.css'],
  styles:[`
  .txtCls{
    color:red;
  }
  `]
})
export class HandsOnComponentComponent implements OnInit {
  private username:string ='';
  private toggleFlg:boolean =false;
  private arrLogAllBtnEvents =[];

  constructor() { }

  ngOnInit() {
  }
  private onLogBtnEvents(){  
    this.toggleFlg = !this.toggleFlg;
    this.arrLogAllBtnEvents.push(this.arrLogAllBtnEvents.length+1);   
  }
 
}
