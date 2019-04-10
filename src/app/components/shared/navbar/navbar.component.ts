import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../../providers/fire-auth.service';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {
  faUserCircle = faUserCircle;
  faSignOutAlt = faSignOutAlt;

  constructor(private auth: FireAuthService) { }

  ngOnInit() {
  }

  logout = () => this.auth.logout();

}
