import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { SharedService } from './../../shared/shared.service';
import { BookDetailsService } from './book-details.service';

import { AuthService } from './../../auth/auth.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailsComponent implements OnInit {
  public book: any;
  public isbn: string;
  constructor(private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private bookDetailsService: BookDetailsService,
    private authService: AuthService) {

  }

  ngOnInit() {

    // this.book = this.bookDetailsService.getBookDetailsByIsbn('9789385990977');
    // console.log('BOOK', this.book);

    this.bookDetailsService.getBookDetailsByIsbn('9789385990977').subscribe((book) => {
      this.book = book.items[0];
      console.log('BOOK', this.book);
    });


    // this.route.params.subscribe((params: Params) => {
    //   this.isbn = params['isbn'];
    //   if (this.isbn !== null) {
    //     this.bookDetailsService.getBookDetailsByIsbn(this.isbn).subscribe((book) => {
    //       this.book = book.items[0];
    //       console.log('BOOK ISBN', book.items[0]);
    //     });
    //   }
    // });

    // this.book = this.sharedService.getData();
  }

  onAddToShelf(isbn: string) {   
    if (this.authService.isAuthenticated()) {
      this.bookDetailsService.addBookToShelf(isbn).subscribe((resp) => {
        console.log('ADD Resp', resp);
      });
    }else {
      this.router.navigate(['signin']);
    }
  }

}
