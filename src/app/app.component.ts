
import { LoginService } from './Login.Service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  
  constructor(private loginService:LoginService){}

  ngOnInit(){
    
  }
  relog(){
    this.loginService.islogin = !this.loginService.islogin;
  }

  

}

