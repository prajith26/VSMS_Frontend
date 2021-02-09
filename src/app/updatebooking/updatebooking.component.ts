import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingModel } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-updatebooking',
  templateUrl: './updatebooking.component.html',
  styleUrls: ['./updatebooking.component.css']
})
export class UpdatebookingComponent implements OnInit {

  newBook= new BookingModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
  userdata={
    name:"",
    mobileno:""
  }
  constructor(private book:BookingService,public router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.newBook= this.book.singlebooking;
    console.log(this.newBook)
    this.newBook.user_email=this.auth.getEmailId();
    this.userdata.name=this.auth.getUserName();
    this.userdata.mobileno=this.auth.getMobileNumber();
  }
  updateBooking(){
    this.book.updatebooking(this.newBook);
    this.router.navigate(['dashboard/dashhome']);
  }
}
