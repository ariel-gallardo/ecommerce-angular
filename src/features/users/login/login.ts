import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '../services/login-facade';

@Component({
  selector: 'user-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
  providers: [LoginFacade]
})
export class Login implements OnInit {

  constructor(private loginFacade: LoginFacade) {
  }

  ngOnInit(): void {

  }

  
}
