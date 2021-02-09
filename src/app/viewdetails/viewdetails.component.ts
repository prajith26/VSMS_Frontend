import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BookingModel } from '../booking.model';
import { BookingService } from '../booking.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  singleBook:BookingModel;
 userData:UserModel;
 name: String = this.auth.username;
 mobile: String = this.auth.usermobile;
//   userData={
//     user_name       : "",
//     user_email      : "",
//     user_password   : "",
//     user_createdon  : "",   //Signup date
//     user_mobile     : "",
//     user_address    : ""
// };
  constructor(private book:BookingService,public auth:AuthService) { }

  ngOnInit(): void {

  
    console.log(this.auth.sharedUser)
    this.userData=this.auth.sharedUser
    this.singleBook=this.book.singlebooking;
    console.log(this.userData);
    // const uname = this.userData.user_name;

    

  }

}
