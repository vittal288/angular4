import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { SearchService } from './search.service';
import { SharedService } from './../../../shared/shared.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  public bookNamesAndAuthor = [];
  constructor(private searchService: SearchService,
    private sharedService: SharedService) {

  }

  ngOnInit() {
    this.searchService.getSearchItems().subscribe((resp) => {
      this.bookNamesAndAuthor = resp;
    });
  }

  filterSearchItems(val: string) {
    if (val) {
      const filterValue = val.toLowerCase();
      if (this.bookNamesAndAuthor) {
        return this.bookNamesAndAuthor.filter(state => state.name.toLowerCase().startsWith(filterValue));
      }

    }
    return this.bookNamesAndAuthor;
  }

  onSelectSearchItem(event: any, searchKey: string) {
    this.sharedService.bookTitleOrAuthorSearchEvent.emit(searchKey['name']);
    this.sharedService.setData(searchKey);
  }

}
