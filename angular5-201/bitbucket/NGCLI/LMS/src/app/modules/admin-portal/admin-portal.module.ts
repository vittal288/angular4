import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminPortalComponent } from './admin-portal.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { FilterBookComponent } from './filter-book/filter-book.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPortalRoutingModule
  ],
  declarations: [AdminPortalComponent, AddBookComponent, ListBookComponent, FilterBookComponent]
})
export class AdminPortalModule { }
