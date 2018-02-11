import { Component, OnInit, ViewEncapsulation ,Input} from '@angular/core';

@Component({
  selector: 'app-like-and-rate-book',
  templateUrl: './like-and-rate-book.component.html',
  styleUrls: ['./like-and-rate-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LikeAndRateBookComponent implements OnInit {
  @Input('bookVolume') bookVolume: any;
  constructor() { }

  ngOnInit() {
    // console.log('BOOK VOUME', this.bookVolume);
  }

}
