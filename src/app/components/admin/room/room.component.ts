import { Component, OnChanges, AfterViewChecked } from '@angular/core';
import { RoomService } from '../../../providers/room.service';
import { faPlusCircle, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Room } from 'src/app/interfaces/room.interface';
declare var $ :any;

@Component({
  selector: 'app-admin-room',
  templateUrl: './room.component.html',
  styleUrls: ['room.component.css']
})
export class RoomComponent implements AfterViewChecked {
  carouselStarted: boolean = false;
  ngAfterViewChecked(): void {
    if(this.rooms && !this.carouselStarted){
      $('.carousel').carousel();
      this.carouselStarted = true;
    }
  }
  faPlusCircle = faPlusCircle;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  rooms: Room[];

  constructor(private roomService: RoomService) {
    this.roomService.findAll().subscribe((data: Room[]) => {
      this.rooms = data;
    });
  }

  delete = (id: number) => this.roomService.deleteById(id).subscribe(() => this.rooms = this.rooms.filter((room: Room) => room.id !== id));

}
