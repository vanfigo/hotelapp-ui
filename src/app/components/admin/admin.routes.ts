import { Routes } from '@angular/router';
import { BedComponent } from './bed/bed.component';
import { RoomComponent } from './room/room.component';
import { UpsertBedComponent } from './bed/upsert-bed.component';
import { UpsertRoomComponent } from './room/upsert-room.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'beds', component: BedComponent },
  { path: 'beds/add', component: UpsertBedComponent },
  { path: 'beds/edit/:id', component: UpsertBedComponent },
  { path: 'rooms', component: RoomComponent },
  { path: 'rooms/add', component: UpsertRoomComponent },
  { path: 'rooms/edit/:id', component: UpsertRoomComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];
