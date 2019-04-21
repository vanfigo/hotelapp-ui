import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bed } from '../interfaces/bed.interface';

@Injectable({
  providedIn: 'root'
})
export class BedService {

  private url: string = 'http://localhost:8080/beds'

  constructor(private http: HttpClient) { }

  findAll = () => this.http.get(`${this.url}`);

  findById = (id: number) => this.http.get(`${this.url}/${id}`);

  save = (bed: Bed) => this.http.post(this.url, bed);

  update = (bed: Bed) => this.http.put(this.url, bed);

  deleteById = (id: number) => this.http.delete(`${this.url}/${id}`);

}
