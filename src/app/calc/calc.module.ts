import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcComponent } from './components';
import { CalcService } from './services';


@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CalcService
  ],
  exports: [
    CalcComponent
  ]
})
export class CalcModule { }
