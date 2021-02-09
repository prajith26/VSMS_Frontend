import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-workstatus',
  templateUrl: './workstatus.component.html',
  styleUrls: ['./workstatus.component.css']
})
export class WorkstatusComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {

  }

}
