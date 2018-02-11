import { Component, OnInit,EventEmitter,Output,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //which type of data we are emitting from this event emitter shold mention in EventEmitter
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  
  //to get the access of HTML Element reference in TS
  @ViewChild('serverNameContentInput') serverNameContentInput:ElementRef;
  //newServerName='';
  //newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement){
    
    this.serverCreated.emit({
        serverName:nameInput.value,
        serverContent:this.serverNameContentInput.nativeElement.value
    });
  }
  onAddBlueprint(nameInput:HTMLInputElement){
    this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverNameContentInput.nativeElement.value
    });
  }

}
