import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation.component';

export const RESERVATION_ROUTES: Routes = [
  { path: '', component: ReservationComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];
