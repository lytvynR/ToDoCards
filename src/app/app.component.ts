
import { LoginService } from './Login.Service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})

export class AppComponent{
  
  constructor(private loginService:LoginService){
  }
  isLogin(){
    this.loginService.getLoginStatus();
    console.log("login from AppComponents" + this.loginService.getLoginStatus());
  }



  

}

