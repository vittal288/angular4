import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // onNavBarClicked(navBarData:{navBar:string}){
  //   //console.log('Name',navBarData);
  //   this.navBar = navBarData.navBar;
  // }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBdhIAro889-HL-BPg6GD4sjcOFn8t8-EI",
      authDomain: "udemmy-angular4-recipe-book.firebaseapp.com",
      databaseURL: "https://udemmy-angular4-recipe-book.firebaseio.com",
      projectId: "udemmy-angular4-recipe-book",
      storageBucket: "udemmy-angular4-recipe-book.appspot.com",
      messagingSenderId: "569463758079"
    });
  }
}
