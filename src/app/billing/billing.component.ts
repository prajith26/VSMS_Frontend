import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingModel } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  adminapproved: BookingModel[];
  singlebook:BookingModel;
  constructor(private book:BookingService,public router:Router) { }
  
  ngOnInit(): void {
    this.adminapproved = [];
   
    //Admin call to get all approved req(current works)
    this.book.getAdminApproved().subscribe((data) => {
      console.log(data)
      this.adminapproved = JSON.parse(JSON.stringify(data));
    });
  }

  item ={
    amount:"",
    booking_admin:""
  };

  select(booking){
    this.singlebook=booking;
    console.log(this.singlebook)
  }

  addAmount(){
    this.singlebook.booking_amount=this.item.amount;
    this.singlebook.booking_admin=this.item.booking_admin;
    this.singlebook.booking_completion=true;
    console.log(this.singlebook);
    this.book.addAmount(this.singlebook).subscribe((data)=>{
      console.log(data);
    });
    this.book.deleteAdminChat(this.singlebook).subscribe((data)=>{
      console.log(data);
    });
    this.book.deleteReject().subscribe((data)=>{console.log(data)});
    window.location.reload();
  }

}
