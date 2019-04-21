import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../providers/room.service';

import { Room } from '../../../interfaces/room.interface';

@Component({
  selector: 'app-room-available',
  templateUrl: './room-available.component.html',
  styles: []
})
export class RoomAvailableComponent implements OnInit {

  rooms: Room[];

  constructor(private roomService: RoomService) {
    //this.roomService.findAvailable().subscribe((data: Room[]) => this.rooms = data);
  }

  ngOnInit() {
  }

}
