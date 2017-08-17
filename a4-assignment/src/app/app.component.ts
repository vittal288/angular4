import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public eventEmitNo =[];
  public oddEventNo =[];

  onGameStarted(gameStartData:{emitNumber:number}){
    //console.log('Listned Data',gameStartData.emitNumber);
    if(gameStartData.emitNumber % 2 ===0){
      this.eventEmitNo.push(gameStartData.emitNumber);
    }else{
      this.oddEventNo.push(gameStartData.emitNumber);
    }      
  }
}
