import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingModel } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-servicehistory',
  templateUrl: './servicehistory.component.html',
  styleUrls: ['./servicehistory.component.css']
})
export class ServicehistoryComponent implements OnInit {
  bookService: BookingModel[];
  constructor(private book:BookingService,private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.bookService=[];
    this.book.getAdminCompleted().subscribe((data) => {
      console.log(data)
      this.bookService = JSON.parse(JSON.stringify(data));
    });
    console.log(this.bookService)
  }
  viewDetails(booking){
    this.book.singlebooking=booking;

    this.auth.getUserdata(booking).subscribe((data)=>{
      this.auth.sharedUser=JSON.parse(JSON.stringify(data));
      console.log(data)
    });
    // this.router.navigate(['dashboard/viewdetails']);

    setTimeout(()=>{
      console.log(this.auth.sharedUser[0].user_name);
      console.log(this.auth.sharedUser[0].user_mobile);
      this.router.navigate(['dashboard/viewdetails']);
    },500)
  }

}
