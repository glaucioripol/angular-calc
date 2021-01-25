import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcComponent } from './components';


@NgModule({
  declarations: [CalcComponent],
  imports: [
    CommonModule
  ],
  exports: [CalcComponent]
})
export class CalcModule { }
