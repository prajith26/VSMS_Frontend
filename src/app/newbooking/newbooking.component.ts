import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingModel } from '../booking.model';
import { BookingService } from '../booking.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-newbooking',
  templateUrl: './newbooking.component.html',
  styleUrls: ['./newbooking.component.css']
})
export class NewbookingComponent implements OnInit {

  newBook= new BookingModel(null,null,null,null,null,null,false,false,false,false,false,false,null,false,null,false,null,false)
  constructor(private booking:BookingService,public router:Router,public auth:AuthService) { }
  userdata={
    name:"",
    mobileno:""
  }

  ngOnInit(): void {
    console.log(this.auth.sharedUser)
    this.newBook.user_email=this.auth.getEmailId();
    this.userdata.name=this.auth.getUserName();
    this.userdata.mobileno=this.auth.getMobileNumber();
  }

  newBooking(){
    console.log(this.newBook);
    this.booking.newBooking(this.newBook).subscribe(data=>{console.log(data)});
    this.booking.deleteChat(this.newBook).subscribe(data=>{console.log(data)});
    alert("Request for service booking is made. Wait for admin to approve");
    this.router.navigate(['/dashboard/dashhome'])
  }
}
