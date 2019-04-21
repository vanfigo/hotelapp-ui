import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BedComponent } from './bed/bed.component';
import { UpsertBedComponent } from './bed/upsert-bed.component';
import { RoomComponent } from './room/room.component';
import { UpsertRoomComponent } from './room/upsert-room.component';

import { SharedModule } from '../shared/shared.module';

import { SharedPipeModule } from '../../components/shared/shared-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    SharedPipeModule,
    SharedModule
  ],
  declarations: [
    BedComponent,
    UpsertBedComponent,
    RoomComponent,
    UpsertRoomComponent
  ]
})
export class AdminModule { }
