import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookingService } from '../booking.service';
import { ChatModel } from '../chat.model';


@Component({
  selector: 'app-discussionadminchat',
  templateUrl: './discussionadminchat.component.html',
  styleUrls: ['./discussionadminchat.component.css']
})
export class DiscussionadminchatComponent implements OnInit {
  chatData: ChatModel[];
  msg= new ChatModel(null,null,null,null,null);
  
  constructor(private book:BookingService,public auth:AuthService,public router:Router) { }

  ngOnInit(): void {
    let item ={
      email:this.auth.email
    }
    this.msg.user_email=this.auth.email;
    this.book.getAdminChat(item).subscribe((data)=>{
      this.chatData=JSON.parse(JSON.stringify(data));
    })
  }
 
  sendChat(){
    console.log(this.msg);
    this.book.postAdminChat(this.msg).subscribe((data)=>{
      console.log(data);
    });
    this.router.navigate(['dashboard/admindisco']);
    // window.location.reload();
  }

}
