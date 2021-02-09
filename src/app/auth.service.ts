import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http:HttpClient) { }

  sharedUser:UserModel;
  email:string;
  username:string;
  usermobile:string;
  //LOGIN
  loginUser(user){
    // console.log(user);
    return this.http.post("http://localhost:5000/login",user);
  }

  //NEW USER
  newUser(user){
    console.log(user);
    return this.http.post("http://localhost:5000/register",user);
  }

  // Get user details from DB
  getUserdata(booking){
    return this.http.post("http://localhost:5000/user/details",booking);
  }

  //GET User Name
  getUserName(){
    return localStorage.getItem('user_name');
  }
  //GET Mobile Number
  getMobileNumber(){
    return localStorage.getItem('mobile');
  }
  //GET Email Id
  getEmailId(){
    return localStorage.getItem('email');
  }

  isAdmin(){
    return localStorage.getItem('isAdmin');
  }

  //authen and guard
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getAdmin(){
    return !!localStorage.getItem('isAdmin')
  }




}
