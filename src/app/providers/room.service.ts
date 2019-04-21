import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url: string = 'http://localhost:8080/rooms'

  constructor(private http: HttpClient) { }

  findAll = () => this.http.get(`${this.url}`);

  findById = (id: number) => this.http.get(`${this.url}/${id}`);

  save = (room: Room) => this.http.post(this.url, room);

  update = (room: Room) => this.http.put(this.url, room);

  deleteById = (id: number) => this.http.delete(`${this.url}/${id}`);

}
