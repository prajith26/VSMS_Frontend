import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name : String = this.auth.getUserName();
  role : String = this.auth.getEmailId()=="admin@gmail.com"?"Admin":"User";

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  toggle(){
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("content").classList.toggle("active");
  }

 

}
