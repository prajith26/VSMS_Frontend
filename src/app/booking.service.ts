import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingModel } from './booking.model';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  singlebooking:BookingModel;
  constructor(public http:HttpClient) { }

  //To add a new request to DB
  newBooking(item){
    return this.http.post('http://localhost:5000/user/newBook',item) 
  }

  //To retrive work req from DB
  getPending(email){
    // console.log(email);
    return this.http.post('http://localhost:5000/user/pending',email)
  }
  getApproved(email){
    return this.http.post('http://localhost:5000/user/approved',email)
  }
  getCompleted(email){
    return this.http.post('http://localhost:5000/user/completed',email)
  }
  //-----------------------------

  //To retrieve req for Admin
  getAdminPending(){
    return this.http.get('http://localhost:5000/admin/pending')
  }
  getAdminApproved(){
    return this.http.get('http://localhost:5000/admin/approved')
  }
  getAdminCompleted(){
    return this.http.get('http://localhost:5000/admin/completed')
  }
  //------------------------------

  //Admin accept

  acceptAdmin(check){
    return this.http.put('http://localhost:5000/admin/update',check)
    .subscribe((data)=>{console.log(data)});
  }


  rejectAdmin(check){
    return this.http.put('http://localhost:5000/admin/reject',check)
    .subscribe((data)=>{console.log(data)});
  }


  //Update Booking details by USER

  updatebooking(item){
    return this.http.put('http://localhost:5000/user/update',item)
    .subscribe((data)=>{console.log(data)});
  }

  //User deletes pending reqs
  deletePendingReq(booking){
    return this.http.post('http://localhost:5000/user/deletepending',booking);
  }


  //user chat reqs
  getChatData(item){
    return this.http.post('http://localhost:5000/user/getchat',item);
  }

  postChatData(chatData){
    return this.http.post('http://localhost:5000/user/postchat',chatData)
  }

  //Admin chat reqs
  getAdminChat(item){
    return this.http.post('http://localhost:5000/admin/getchat',item);
  }
  postAdminChat(chatData){
    return this.http.post('http://localhost:5000/admin/postchat',chatData)
  }

  //Admin add Amount
  addAmount(item){
    return this.http.put('http://localhost:5000/admin/addamount',item);
  }

  //user delete chat
  deleteChat(item){
    return this.http.post('http://localhost:5000/user/deletechat',item);
  }

  //admin delete chat
  deleteAdminChat(item){
      return this.http.post('http://localhost:5000/admin/deletechat',item);
    
  }

  //admin delete reject reqs
  deleteReject(){
    return this.http.delete('http://localhost:5000/admin/deletereject');
  }

}

