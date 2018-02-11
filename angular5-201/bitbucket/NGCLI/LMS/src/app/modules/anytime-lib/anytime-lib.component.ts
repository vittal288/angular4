import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { SharedService } from './../shared/shared.service';
import { AnyTimeLibService } from './anytime-lib.service';

import { BookDetailsService } from './book-details/book-details.service';



@Component({
  selector: 'app-anytime-lib',
  templateUrl: './anytime-lib.component.html',
  styleUrls: ['./anytime-lib.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnytimeLibComponent implements OnInit {
  public searchKey: string;
  public books = [];
  public categories = [];
  public selectedCat = [];

  constructor(private sharedService: SharedService,
    private anyTimeLibService: AnyTimeLibService,
    private bs: BookDetailsService) {

  }

  ngOnInit() {
    // this.clearSession();
    this.getBookList('Arundhati Roy');
    this.sharedService.bookTitleOrAuthorSearchEvent.subscribe((searchKey) => {
      this.getBookList(searchKey);
    });

    this.anyTimeLibService.selectCateEvent.subscribe((catName) => {
      this.selectedCat.push(catName);
      this.filterBooks(this.selectedCat);
    });
  }
  // loadRandomBooks() {
  //   this.anyTimeLibService.getRandomNames().subscribe((searchNames)=>{
  //     console.log('NAMES', searchNames)
  //   });
  // }
  getBookList(searchKey: string) {
    this.anyTimeLibService.getBookLists(searchKey).subscribe((bookList) => {
      this.books = bookList.items;
      this.extractCategories(bookList.items);
    });
  }

  extractCategories(books) {
    books.forEach((book) => {
      this.categories.push(book.volumeInfo.categories[0]);
    });

    this.categories = this.categories.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
  }

  filterBooks(cats) {
    // console.l 
    // for (let i = 0; i < this.selectedCat.length; i++) {
    //   for (let j = 0; j < this.books.length; j++) {
    //     if (this.selectedCat[i] === this.books[j]['volumeInfo']['categories'][0]) {
    //       this.books.push(this.books[j]);
    //     }
    //   }
    // }

    // console.log('filter ', this.filterBooks);
  }
}
