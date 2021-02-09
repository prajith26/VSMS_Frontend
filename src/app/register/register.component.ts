import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit(): void {

    // SLIDE EFFECT STARTS.............................................
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
    // SLIDE EFFECT ENDS................................................
  }

  //Login Process Starts....................................................
  User = {
    username: '',
    password: ''
  }

  userVerify() {
    this.auth.loginUser(this.User)
      .subscribe(
        data => {
          this.auth.sharedUser = JSON.parse(JSON.stringify(data)).user; //remove if not needed later
          // console.log(this.auth.sharedUser);
          localStorage.setItem("user_name", this.auth.sharedUser.user_name);
          localStorage.setItem("mobile", this.auth.sharedUser.user_mobile);
          localStorage.setItem('email', this.auth.sharedUser.user_email);


          if (this.User.username == 'admin@gmail.com') {
            localStorage.setItem("isAdmin", "true");       // write code here to navigate to admin dashboard
            this.router.navigate(['/dashboard/dashhome']);

          }
          localStorage.setItem('token',JSON.parse(JSON.stringify(data)).token)
          alert(JSON.parse(JSON.stringify(data)).message);
          // alert(data.message);
          console.log(data);
          this.router.navigate(['/dashboard/dashhome']);                    // write code here to navigate to user dashboard
        },
        err => {
          alert(err.error.message)
        }
      )
  }
  //Login Process Ends....................................................

  //Registration Process Starts....................................................
  userData = {
    name: "",
    email: "",
    mobile: "",
    pwd: "",
    address: ""
  }
  userRegister() {
    this.auth.newUser(this.userData)
      .subscribe((data) => {
        console.log(data);
        alert(JSON.parse(JSON.stringify(data)).message);
        // this.router.navigate(['/register']);
      });
      window.location.reload();
  }
  //Registration Process Ends....................................................


}
