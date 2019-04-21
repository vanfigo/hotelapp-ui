import { Pipe, PipeTransform } from '@angular/core';
import { RoomPhoto } from '../interfaces/room-photo.interface';

@Pipe({
  name: 'roomPhoto'
})
export class RoomPhotoPipe implements PipeTransform {

  transform(photo: RoomPhoto, args?: any): any {
    console.log(photo);
    return photo.url ? photo.url : 'https://png.icons8.com/office/picture/64';
  }

}
