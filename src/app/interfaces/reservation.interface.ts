import { Room } from './room.interface';
import { Status } from './status.interface';

export interface Reservation {
  id?: number,
  room?: Room,
  name: string,
  lastName?: string,
  email?: string,
  people: number,
  startDate: string,
  endDate: string,
  creationDate?: Date,
  checkInDate?: Date,
  checkOutDate?: Date,
  status: Status
}
