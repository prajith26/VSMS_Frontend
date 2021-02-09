import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth:AuthService,public router:Router) { }

  ngOnInit(): void {
    console.log(this._auth.loggedIn())
  }
  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('isAdmin')
    localStorage.removeItem('mobile')
    localStorage.removeItem('user_name')
    localStorage.removeItem('email')
    window.sessionStorage.clear()
    this.router.navigate(['/'])
  }
}
