import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservation } from '../../interfaces/reservation.interface';
import { faConciergeBell, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { RoomReservationService } from '../../providers/room-reservation.service';
import { ReservationService } from '../../providers/reservation.service';

import { Status } from '../../interfaces/status.interface';
import { RoomReservation } from '../../interfaces/room-reservation.interface'
import { Room } from '../../interfaces/room.interface'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  faConciergeBell = faConciergeBell;
  faMapMarker = faMapMarker;

  reservation: Reservation;
  roomReservations: RoomReservation[];
  lookedUp: boolean = false;
  loading: boolean = false;

  constructor(private roomReservationService: RoomReservationService,
              private reservationService: ReservationService) {
    this.reservation = {
      name: "",
      startDate: null,
      endDate: null,
      people: null,
      status: Status.CREATED
    };
    this.refresh();
  }

  ngOnInit() { }

  refresh = (form?: NgForm) => {
    if(form) form.resetForm();
    this.lookedUp = false;
    //this.roomReservationService.findAll().subscribe((data: RoomReservation[]) => this.roomReservations = data);
  }

  lookUp = () => {
    this.loading = true;
    this.roomReservationService.findFromToPeople(this.reservation).subscribe((data: RoomReservation[]) => {
      this.roomReservations = data;
      this.lookedUp = true;
      this.loading = false;
    });
  }

  reserve = (room: Room, form: NgForm) => {
    this.reservation.room = { id: room.id }
    this.reservationService.save(this.reservation).subscribe(() => this.refresh(form));
  }

}
