// @@ CORE MODULE/COMPONENTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// @@ COMPONENTS
import { AnytimeLibComponent } from './anytime-lib.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { LikeAndRateBookComponent } from './like-and-rate-book/like-and-rate-book.component';
import { FilterBookComponent } from './filter-book/filter-book.component';
import { BookSliderComponent } from './book-slider/book-slider.component';

// @@ MODULES
import { AnyTimeLibRoutingModule } from './anytime-lib-routing.module';
import { NGMaterialImportsModule } from './../../ui-components-imports/material-imports.module';

// @@ SERVICES
import { BookListService } from './book-list/book-list.service';
import { BookDetailsService } from './book-details/book-details.service';
import {AnyTimeLibService} from './anytime-lib.service'


// @@ PIPES
import { RestrictStringLengthPipe } from './../../global-components/pipes/restrict-string-length.pipe';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AnyTimeLibRoutingModule,
    NGMaterialImportsModule
  ],
  declarations: [
    AnytimeLibComponent,
    BookDetailsComponent,
    BookListComponent,
    LikeAndRateBookComponent,
    FilterBookComponent,
    BookSliderComponent,
    RestrictStringLengthPipe
  ],
  providers: [   
    BookListService,
    BookDetailsService,
    AnyTimeLibService
  ]
})
export class AnytimeLibModule { }
