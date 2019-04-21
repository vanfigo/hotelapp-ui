import { Bed } from './bed.interface';
import { RoomPhoto } from './room-photo.interface';

export interface Room {
  id?: number,
  'number'?: string,
  beds?: Bed[],
  roomPhotos?: RoomPhoto[],
  cost?: number
}
