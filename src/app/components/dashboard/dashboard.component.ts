import { Component, OnInit } from '@angular/core';

import { ReservationService } from '../../providers/reservation.service';

import { Reservation } from '../../interfaces/reservation.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  loading: boolean = true;
  reservations: Reservation[];

  constructor(private reservationService: ReservationService) {
    this.reservationService.findAll().subscribe((data: Reservation[]) => {
      this.reservations = data;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
