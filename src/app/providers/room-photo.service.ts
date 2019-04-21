import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomPhoto } from '../interfaces/room-photo.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomPhotoService {

  private url: string = 'http://localhost:8080/roomPhotos'

  constructor(private http: HttpClient) { }

  save = (room: RoomPhoto) => this.http.post(this.url, room);

  update = (room: RoomPhoto) => this.http.put(this.url, room);
}
