import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingModel } from '../booking.model';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})
export class DashhomeComponent implements OnInit {

  name: String = "Welcome " + this.auth.getUserName();

  bookService: BookingModel[];
  pending: BookingModel[];
  approved: BookingModel[];
  confirmed: BookingModel[];
  adminpending: BookingModel[];
  adminapproved: BookingModel[];
  constructor(private book: BookingService, public auth: AuthService,public router:Router) { }

  ngOnInit(): void {

    this.pending = [];
    this.approved = [];
    this.confirmed = [];
    this.adminpending = [];
    this.adminapproved = [];
    

    if(this.auth.isAdmin()){
      console.log("admin")
      this.adminCalls();
    }
    else{
      console.log("user")
      this.userCalls();
    }

  }

  userCalls(){
    let item = {
      email: this.auth.getEmailId()
    };
    //call made to booking service to retrieve all pending work requests
    this.book.getPending(item).subscribe((data) => {
      console.log(data)
      this.pending = JSON.parse(JSON.stringify(data));
    });

    //call made to booking service to retrieve all approved work requests
    this.book.getApproved(item).subscribe((data) => {
      console.log(data)
      this.approved = JSON.parse(JSON.stringify(data));
    });

    //call made to booking service to retrieve all completed work requests
    this.book.getCompleted(item).subscribe((data) => {
      console.log(data)
      this.confirmed = JSON.parse(JSON.stringify(data));
    });
  }

  adminCalls() {
    //Admin call to get all approved req(current works)
    this.book.getAdminApproved().subscribe((data) => {
      console.log(data)
      this.adminapproved = JSON.parse(JSON.stringify(data));
    });
    //Admin call to get all pending req
    this.book.getAdminPending().subscribe((data) => {
      console.log(data)
      this.adminpending = JSON.parse(JSON.stringify(data));
    });
  }

  accept(mail,date){
    // console.log(mail)
    let check={
      email: mail,
      item:true,
      date:date
    }
    this.book.acceptAdmin(check)
    // alert("approved")
    window.location.reload();
  }

  reject(mail,date){
    console.log("hi")
    let check={
      email: mail,
      item:true,
      date:date
    }
    this.book.rejectAdmin(check);
    this.sendMsg(mail,date);
    window.location.reload();
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

  updateDetails(booking){
    this.book.singlebooking=booking;
    this.router.navigate(['dashboard/updatedetails']);
  }
  
  sendMsg(mail,date){
    let item ={
      user_email:mail,
      msg_admin:"Sorry this date is not available. Please make a request on another date"
    }
    this.book.postAdminChat(item).subscribe((data)=>{
      console.log(data);
    })
  }
  delete(booking){
    this.book.deletePendingReq(booking).subscribe(data=>{console.log(data)});
    window.location.reload();
  }


}

