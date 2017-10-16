
import { LoginService } from './Login.Service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})

export class AppComponent{
  islogin:boolean=true;
  constructor(private loginService:LoginService){
    
  }



  

}

