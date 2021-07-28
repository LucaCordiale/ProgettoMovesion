import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAutenticated: boolean = false;
  user:any = {
    username: "",
    password: "",
  }

 
  
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private route:Router) { }
 
 login(user)  {
   if(user.username, user.password ){
    localStorage.setItem('token', '123456');
    this.isAutenticated = true;
    this.getLoggedInName.emit(user.username);
    this.route.navigate(['/home'])
  }
   
 }
 getEmitter() { 
  return this.getLoggedInName; 
} 

 logout() {
  localStorage.removeItem('token')
  this.isAutenticated = false
  this.route.navigate(['/'])
}

}
