import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SharedPipeModule } from '../../components/shared/shared-pipe.module';

import { ReservationComponent } from './reservation.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    SharedModule,
    SharedPipeModule
  ],
  declarations: [
    ReservationComponent
  ],
  exports: []
})
export class ReservationModule { }
