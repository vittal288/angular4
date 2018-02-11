import { Component } from '@angular/core';
import {FavoriteChangeEventArgs} from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts = {
    title : 'Title',
    isFavorite: false
  }

  onFavoriteChanged(eventArgs: FavoriteChangeEventArgs) {
    console.log('Fav is changed !!!', eventArgs);
  }
}
