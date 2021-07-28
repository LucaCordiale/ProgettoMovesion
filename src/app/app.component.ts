import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProgettoMovesion';
  avatar: '';
  
  

  constructor(public auth: AuthServiceService){}

  ngOnInit(){
    this.auth.getEmitter().subscribe((user)=> { 
      console.log(user); 
      this.avatar = user
    }); 
  }
}

