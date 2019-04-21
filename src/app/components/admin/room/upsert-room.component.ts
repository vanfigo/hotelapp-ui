import { Component, OnInit } from '@angular/core';
import { Room } from '../../../interfaces/room.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { faSave, faBackspace, faPlusCircle, faTrash, faCameraRetro, faBed } from '@fortawesome/free-solid-svg-icons';
import { RoomService } from '../../../providers/room.service';
import { RoomPhotoService } from '../../../providers/room-photo.service';
import { Bed } from '../../../interfaces/bed.interface';
import { RoomPhoto } from '../../../interfaces/room-photo.interface';

@Component({
  selector: 'app-upsert-room',
  templateUrl: './upsert-room.component.html',
  styles: []
})
export class UpsertRoomComponent implements OnInit {
  faSave = faSave;
  faBackspace = faBackspace;
  faPlusCircle = faPlusCircle;
  faTrash = faTrash;
  faCameraRetro = faCameraRetro;
  faBed = faBed;
  room: Room;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private roomService: RoomService,
              private roomPhotoService: RoomPhotoService) {
    this.activatedRoute.params
      .subscribe(params => {
        if(params['id'])
          this.roomService.findById(params['id']).subscribe((data: Room) => this.room = data);
        else
          this.room = {
            number: null,
            cost: null,
            beds: [],
            roomPhotos: []
          };
      });
  }

  ngOnInit() {
  }

  upsert = () => {
    if(this.room.id)
      this.roomService.update(this.room).subscribe(this.redirectRoom);
    else
      this.roomService.save(this.room).subscribe(this.redirectRoom);
  }

  redirectRoom = () => {
    this.router.navigate(['/admin/rooms']);
  }

  addBed = () => {
    let bed: Bed = {
      id: 0,
      name: "",
      people: null,
      height: null,
      width: null
    };
    this.room.beds.push(bed);
  }

  addPhoto = () => {
    let photo: RoomPhoto = { url: null };
    this.room.roomPhotos.push(photo);
  }

  bedSelected = (bed: Bed, idx: number) => this.room.beds[idx] = bed;

  photoSelected = (url: string, idx: number) =>{
    this.room.roomPhotos[idx].url = url;
    //this.roomPhotoService.save(roomPhoto).subscribe((data: RoomPhoto) => roomPhoto = data);
  }

  deleteBed = (idx: number) => this.room.beds.splice(idx, 1);

  deletePhoto = (idx: number) => this.room.roomPhotos.splice(idx, 1);

}
