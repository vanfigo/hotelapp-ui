import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { FireAuthService } from '../../providers/fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user: User = {
    email: "rloyolaj@gmail.com",
    uid: "",
    password: "robalon"
  };

  constructor(private fireAuth: FireAuthService) { }

  ngOnInit() {
  }

  login = () => {
    this.fireAuth.emailLogin(this.user);
  }

}
