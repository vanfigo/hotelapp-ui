import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomAvailableComponent } from './room-available/room-available.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RoomAvailableComponent
  ],
  exports: [
    RoomAvailableComponent
  ]
})
export class RoomModule { }
