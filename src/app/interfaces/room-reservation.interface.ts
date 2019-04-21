import { RoomPhoto } from './room-photo.interface';
import { Reservation } from './reservation.interface';

export interface RoomReservation {
  id?: number,
  'number': string,
  cost: number
  peopleTotal: number,
  roomPhotos: RoomPhoto[],
  reservations: Reservation[]
}
