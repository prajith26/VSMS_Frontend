import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,public router:Router){}
  canActivate():boolean{
    if(this.auth.loggedIn()){
        return true;
    }
    else{
        this.router.navigate(['register'])
        return false;
    }
  }
    
  
  
}
