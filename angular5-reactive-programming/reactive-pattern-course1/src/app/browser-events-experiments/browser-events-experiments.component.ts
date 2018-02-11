import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-events-experiments',
  templateUrl: './browser-events-experiments.component.html',
  styleUrls: ['./browser-events-experiments.component.css']
})
export class BrowserEventsExperimentsComponent implements OnInit {

  hoverSection: HTMLElement;
  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    // here we in call back function, we have just subscrobed for the event which browser emitted 
    // we dont have access to mousemove event(because this is the browser implementation), only we can subscribe to it 
    // -->but in Observer pattern(custom events) in RXJS, we can call the method in our code and 
    // --->this is the only difference between browser events and custom events 

    // like this is impossible to call the browser event like window.mousemove in any of our code, to fire this user have to perform on action on it 

    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }

  unsubscribe() {
    // un subscribing the mouse move event 
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}

function onMouseMove(event: MouseEvent) {
  console.log(event);
}
