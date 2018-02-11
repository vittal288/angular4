import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() eventNumber = new EventEmitter<{ emitNumber: number }>();
  private counter: number;
  private intervalEvent;
  constructor() { }

  ngOnInit() {
  }

  public onStartGame() {
    var _self = this;
    let counter: number = 0;
    this.intervalEvent = setInterval(function () {
      counter = counter + 1;
      _self.eventNumber.emit({
        emitNumber: counter
      });
    }, 1000)
  }
  public onStopGame() {    
    clearInterval(this.intervalEvent);
  }
}
