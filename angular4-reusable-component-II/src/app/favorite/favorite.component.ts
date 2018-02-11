import { Component, OnInit, Input , Output ,EventEmitter} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: ' favorite ',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('isFavorite') isFavorite: boolean;
  // tslint:disable-next-line:no-output-rename
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({
      newValue: this.isFavorite
    });
  }

}


export interface FavoriteChangeEventArgs {
  newValue: boolean
}

