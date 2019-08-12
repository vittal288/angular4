import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  twoDmodel = [];
  colDefs = [];

  constructor() { }

  ngOnInit() {
    this.twoDmodel = this.generate2DModel(4, 4);
  }

  generate2DModel(rows, cols) {
    const retArr = [];
    for (let i = 0; i < cols; i++) {
      retArr.push(new Array(rows).fill(0));
    }

    for (let i = 0; i < retArr.length; i++) {
      const colCheckBox = {
        position: i,
        name: 'Rule-' + i,
        value: false
      };
      this.colDefs.push(colCheckBox);

      for (let j = 0; j < retArr[i].length; j++) {
        retArr[i][j] = {
          position: i + '-' + j,
          name: 'checkbox',
          value: false
        }
      }
    }
    return retArr;
  }


  onSubmit() {
    console.log(this.userForm.value);
  }

  onCheckBoxClick(row, col) {
    console.log('ITEM', this.twoDmodel[row][col]);
  }

  selectRow(rowIndex) {
    console.log('rowIndex', rowIndex);
    for (let i = 0; i < this.twoDmodel.length; i++) {
      if (rowIndex === i) {
        for (let j = 0; j < this.twoDmodel[i].length; j++) {
          const currentCheckBox = this.twoDmodel[i][j];
          // if (!currentCheckBox['value']) {
          //   currentCheckBox['value'] = !currentCheckBox['value'];
          // }
          currentCheckBox['value'] = !currentCheckBox['value'];
          this.twoDmodel[i][j] = currentCheckBox;
        }
      }
    }
  }

  selectCol(colIndex) {
    console.log('COL INDEX', colIndex);
    for (let i = 0; i < this.twoDmodel.length; i++) {
      for (let j = 0; j < this.twoDmodel[i].length; j++) {
        if (colIndex === j) {
          const currentCheckBox = this.twoDmodel[i][j];
          // if (!currentCheckBox['value']) {
          //   currentCheckBox['value'] = !currentCheckBox['value'];
          // }
          currentCheckBox['value'] = !currentCheckBox['value'];
          this.twoDmodel[i][j] = currentCheckBox;
        }
      }
    }
  }

}
