import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';
import { BookingService } from '../booking.service';
import { ChatModel } from '../chat.model';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  chatData: ChatModel[];
  msg= new ChatModel(null,null,null,null,null);
  constructor(private book:BookingService,public auth:AuthService) { }

  ngOnInit(): void {
    this.chatData=[];
    this.getChatData();
    console.log(this.chatData);
    this.msg.user_email=this.auth.getEmailId();
  }

  getChatData(){
    let item={
      email:this.auth.getEmailId()
    }
    this.book.getChatData(item).subscribe((data)=>{
      console.log(data)
      this.chatData = JSON.parse(JSON.stringify(data));
    // console.log(this.chatData);
    })


  }

  sendChat(){
    console.log(this.msg);
    this.book.postChatData(this.msg).subscribe((data)=>{
      console.log(data);
    });
    window.location.reload();
  }
}
