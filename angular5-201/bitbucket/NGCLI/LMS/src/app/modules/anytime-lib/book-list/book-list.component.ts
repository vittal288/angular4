import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookListService } from './book-list.service';
import { SharedService } from './../../shared/shared.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent implements OnInit {
  @Input('bookList') bookList = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private bookListService: BookListService) { }

  ngOnInit() {

  }

  onReadMore(bookDetails: any) {   
    const isbn = bookDetails.volumeInfo.industryIdentifiers[0]['identifier'];
    this.router.navigate(['book-details', isbn]);
    // this.sharedService.setData(bookDetails);
    // this.router.navigate(['book-details']);
  }
}
