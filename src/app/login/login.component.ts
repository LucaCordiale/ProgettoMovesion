import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {
    username: null,
    password: null,
  }

  constructor(public auth: AuthServiceService) { }

  login(loginform: NgForm) {

    if (loginform.valid) {
      this.user = loginform.value;
      this.auth.login(this.user);
    }
    else {
      alert('username o password errata')
    }
  }

  ngOnInit(): void {
  }

}
