import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  checkBoxes = [
    {
      col: 'Col1',
      name: 'Rule 1'
    },
    {
      col: 'Col2',
      name: 'Rule 2'
    },
    {
      col: 'Col3',
      name: 'Rule 3'
    },
    {
      col: 'Col4',
      name: 'Rule 4'
    },
    {
      col: 'Col5',
      name: 'Rule 5'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onChecked(){

  }

  onCheckedSelectAll(){

  }

}
