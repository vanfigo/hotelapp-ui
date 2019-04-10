import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { FireAuthService } from '../providers/fire-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: FireAuthService) { }

  canActivate(): boolean {
    return this.auth.authenticated;
  }
}
