import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomReservation } from '../interfaces/room-reservation.interface';
import { Reservation } from '../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {

  private url: string = 'http://localhost:8080/roomReservations'

  constructor(private http: HttpClient) { }

  findAll = () => this.http.get(this.url);

  findFromToPeople = (reservation: Reservation) =>
    this.http.get(`${this.url}/from/${reservation.startDate}/to/${reservation.endDate}/people/${reservation.people}`);

}
