import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  noOfRows = 5;
  noOfCols = 5;
  twoDmodel = [];
  colDefs = [];

  btnArr = [
    {
      "name": "Button1"
    },
    {
      "name": "Button2"
    },
    {
      "name": "Button3"
    },
    {
      "name": "Button4"
    },
    {
      "name": "Button4"
    }
  ]

  constructor() { }

  ngOnInit() {
    this.twoDmodel = this.generate2DModel(this.noOfRows, this.noOfCols);
  }

  generate2DModel(rows, cols) {
    // if (rows === cols) {
    if (true) {
      // retArr is the skeleton of 2-D array
      const retArr = [];
      for (let i = 0; i < cols; i++) {
        retArr.push(new Array(rows).fill(0));
      }
      const extraColumn = cols + 1; // 4

      // 2D array is filling with checkboxes
      // row iteration
      for (let i = 0; i < retArr.length; i++) {
        const colCheckBox = {
          position: i,
          name: 'Select Rule',
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


      // Select All Check Box
      this.colDefs.push({
        position: 'select-all',
        name: 'SELECT ALL',
        value: false
      });

      // returning an filled 2D array with checkboxes model
      return retArr;
    }

    // else {
    //   alert('Number rows should be equal to number of columns to construct 2d array NG MODEL');
    // }
  }


  onCheckBoxClick(checkbox, rowIndex) {
    if (checkbox.name === 'entire-row-select-checkbox') {
      this.selectRow(rowIndex, checkbox.value, null);
    }

    if (checkbox.name === 'Select Rule') {
      this.selectCol(checkbox.position, checkbox.value, null);
    }

    // select all check boxes
    if (checkbox.name === 'SELECT ALL') {
      this.selectRow(this.noOfRows, checkbox.value, 'select-all');
      this.selectCol(this.noOfCols, checkbox.value, 'select-all');

      // select all columns header checkbox
      for (let i = 0; this.colDefs.length; i++) {
        const currentCheckBox = this.colDefs[i];
        currentCheckBox['value'] = checkbox.value;
        this.colDefs[i] = currentCheckBox;
      }
    }
  }

  // select particular row
  selectRow(rowIndex, value, flg) {
    for (let i = 0; i < this.twoDmodel.length; i++) {
      if (rowIndex === i) {
        for (let j = 0; j < this.twoDmodel[i].length; j++) {
          const currentCheckBox = this.twoDmodel[i][j];
          currentCheckBox['value'] = value;
          this.twoDmodel[i][j] = currentCheckBox;
        }
      }

      // select all checkboxes row wise
      if (flg === 'select-all') {
        for (let j = 0; j < this.twoDmodel[i].length; j++) {
          const currentCheckBox = this.twoDmodel[i][j];
          currentCheckBox['value'] = value;
          this.twoDmodel[i][j] = currentCheckBox;
        }
      }
    }
  }


  // select particular column
  selectCol(colIndex, value, flg) {

    for (let i = 0; i < this.twoDmodel.length; i++) {
      for (let j = 0; j < this.twoDmodel[i].length; j++) {
        if (colIndex === j) {
          const currentCheckBox = this.twoDmodel[i][j];
          currentCheckBox['value'] = value;
          this.twoDmodel[i][j] = currentCheckBox;
        }

        // select all checkboxes column wise
        if (flg === 'select-all') {
          const currentCheckBox = this.twoDmodel[i][j];
          currentCheckBox['value'] = value;
          this.twoDmodel[i][j] = currentCheckBox;
        }
      }
    }
  }


}
