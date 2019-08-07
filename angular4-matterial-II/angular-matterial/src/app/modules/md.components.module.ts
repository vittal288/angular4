import { NgModule } from '@angular/core';
// import {
//   MaterialModule,
//   matCheckboxModule,
//   matRadioModule,
//   matSelectModule,
//   matDatepickerModule,
//   matNativeDateModule,
//   matIconModule,
//   matButtonModule,
//   matChipsModule,
//   matProgressSpinnerModule,
//   matTooltipModule,
//   matTabsModule,
//   matDialogModule,
//   matInputModule, MatInputModule} from '@angular/material'


import {
  MatCheckboxModule, MatRadioModule, MatSelectModule, MatDatepickerModule,
  MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatInputModule, MatDialogModule, MatTabsModule
} from '@angular/material';

@NgModule({

  exports: [
    // MaterialModule,
    // matCheckboxModule,
    // matRadioModule,
    // matInputModule,
    // matIconModule,
    // matDatepickerModule,
    // matNativeDateModule,
    // matButtonModule,
    // matChipsModule,
    // matProgressSpinnerModule,
    // matTabsModule,
    // matDialogModule,
    // matTooltipModule

    MatCheckboxModule, MatRadioModule, MatSelectModule, MatDatepickerModule,
    MatNativeDateModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatInputModule, MatDialogModule, MatTabsModule
  ]
})
export class MatComponentsModule { }
