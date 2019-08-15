import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
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
    const extraColumn = cols + 1; // 4


    // row iteration
    for (let i = 0; i < retArr.length; i++) {
      const colCheckBox = {
        position: i,
        name: 'entire-col-select-checkbox',
        value: false
      };
      // to construct the columns headers
      this.colDefs.push(colCheckBox);

      // column iteration
      // each check box expect column header
      for (let j = 0; j < retArr[i].length; j++) {
        retArr[i][j] = {
          position: i + '-' + j,
          name: 'checkbox',
          value: false
        }
      }

      // extra column for select entire row checkbox
      for (let l = 0; l < extraColumn; l++) {
        if (l === cols) {
          const selectAllRowCheckbox = {
            value: false,
            position: i + '' + l,
            name: 'entire-row-select-checkbox'
          };

          retArr[i].push(selectAllRowCheckbox);
        }
      }
    }

    return retArr;
  }


  onCheckBoxClick(checkbox, rowIndex, colIndex) {
    if (checkbox.name === 'entire-row-select-checkbox') {
      this.selectRow(rowIndex, checkbox.value);
    }

    if (checkbox.name === 'entire-col-select-checkbox') {
      this.selectCol(checkbox.position, checkbox.value);
    }
  }

  selectRow(rowIndex, value) {
    for (let i = 0; i < this.twoDmodel.length; i++) {
      if (rowIndex === i) {
        for (let j = 0; j < this.twoDmodel[i].length; j++) {
          const currentCheckBox = this.twoDmodel[i][j];
          currentCheckBox['value'] = value;
          this.twoDmodel[i][j] = currentCheckBox;
        }
      }
    }
  }

  selectCol(colIndex, value ) {
    for (let i = 0; i < this.twoDmodel.length; i++) {
      for (let j = 0; j < this.twoDmodel[i].length; j++) {
        if (colIndex === j) {
          const currentCheckBox = this.twoDmodel[i][j];
          currentCheckBox['value'] = value;
          this.twoDmodel[i][j] = currentCheckBox;
        }
      }
    }
  }
}
