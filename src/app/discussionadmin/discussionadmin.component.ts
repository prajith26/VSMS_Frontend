import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingModel } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-discussionadmin',
  templateUrl: './discussionadmin.component.html',
  styleUrls: ['./discussionadmin.component.css']
})
export class DiscussionadminComponent implements OnInit {
  bookService: BookingModel[];

  constructor(private book:BookingService,private auth:AuthService,public router:Router) { }

  ngOnInit(): void {
    this.bookService=[];
    this.book.getAdminApproved().subscribe((data)=>{
      this.bookService=JSON.parse(JSON.stringify(data));
      console.log(data);
    })
  }
  viewDetails(email){
    this.auth.email=email;
    console.log(this.auth.email);
    this.router.navigate(['dashboard/adminchat']);
  }

}
