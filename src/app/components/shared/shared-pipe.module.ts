import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricePipe } from '../../pipes/price.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PricePipe
  ],
  exports: [
    PricePipe
  ]
})
export class SharedPipeModule { }
