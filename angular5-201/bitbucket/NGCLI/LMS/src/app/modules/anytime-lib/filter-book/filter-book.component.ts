import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { BookCategories } from './../../../models/book-categories.model';
import { AnyTimeLibService } from './../anytime-lib.service';


@Component({
  selector: 'app-filter-book',
  templateUrl: './filter-book.component.html',
  styleUrls: ['./filter-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FilterBookComponent implements OnInit {
  @Input('categories') categories: any;
  constructor(private anyTimeLibService: AnyTimeLibService) { }

  ngOnInit() {
   // console.log('Categories 123', this.categories);
  }

  onSelectCategory(catName: string) {
    this.anyTimeLibService.selectCateEvent.emit(catName);
  }

}
