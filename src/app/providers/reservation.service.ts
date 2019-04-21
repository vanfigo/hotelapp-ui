import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url: string = 'http://localhost:8080/reservations'

  constructor(private http: HttpClient) { }

  findAll = () => this.http.get(this.url);

  save = (reservation: Reservation) => this.http.post(this.url, reservation);

}
