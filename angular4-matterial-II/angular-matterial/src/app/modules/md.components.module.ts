import { NgModule } from '@angular/core';
import {
  MaterialModule,
  MdCheckboxModule,
  MdRadioModule,
  MdSelectModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdIconModule,
  MdButtonModule,
  MdChipsModule,
  MdProgressSpinnerModule,
  MdTooltipModule,
  MdTabsModule,
  MdDialogModule,
  MdInputModule} from '@angular/material'

@NgModule({

  exports:[
    MaterialModule,  
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdIconModule,   
    MdDatepickerModule,
    MdNativeDateModule,
    MdButtonModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdTabsModule,
    MdDialogModule,
    MdTooltipModule
  ]
})
export class MDComponentsModule { }
