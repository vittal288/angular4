import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { GobalEventBus } from './event-bus';
import { testLessons } from './../shared/model/test-lessons';


@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top Level component is broadcasted all lessons');
    GobalEventBus.notifyObservers(testLessons);
  }

}
