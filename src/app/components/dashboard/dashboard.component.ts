import { Component, OnInit } from '@angular/core';
import { faSearch, faCheckCircle, faStopCircle, faBroom } from '@fortawesome/free-solid-svg-icons';

import { ReservationService } from '../../providers/reservation.service';

import { Reservation } from '../../interfaces/reservation.interface';
import { Status } from '../../interfaces/status.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faSearch = faSearch;
  faCheckCircle = faCheckCircle;
  faStopCircle = faStopCircle;
  faBroom = faBroom;
  loading: boolean = true;
  reservation: any;
  reservations: Reservation[];

  constructor(private reservationService: ReservationService) {
    this.reservation = {
      name: "",
      email: "",
      room: {
        number: null
      }
    };
    this.filter();
  }

  ngOnInit() {
  }

  isCreated = (status: Status) => status === Status.CREATED;

  filter = () => {
    this.loading = true;
    this.reservationService.filter(this.reservation).subscribe((data: Reservation[]) => {
      this.reservations = data
      this.loading = false;
    });
  }

  clear = (form: NgForm) => {
    form.resetForm();
    this.filter();
  }

  checkIn = (reservation: Reservation) => {
    this.reservationService.checkIn(reservation.id).subscribe(this.filter);
  }

  checkOut = (reservation: Reservation) => {
    this.reservationService.checkOut(reservation.id).subscribe(this.filter);
  }

}
