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

  findByStatus = () => this.http.get(`${this.url}/activeStatus`);

  filter = (reservation: Reservation) => this.http.post(`${this.url}/filter`, reservation);

  save = (reservation: Reservation) => this.http.post(this.url, reservation);

  checkIn = (id: number) => this.http.put(`${this.url}/${id}/checkIn`, {});

  checkOut = (id: number) => this.http.put(`${this.url}/${id}/checkOut`, {});

}
