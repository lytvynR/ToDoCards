import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.Service';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  
  constructor(private router: Router, private loginService:LoginService){}

  ngOnInit(){
    
  }
  
  signOut(){
    console.log(this.loginService.loginstatus);
    if(this.loginService.loginstatus === true){
      this.router.navigate(['/login']);
      this.loginService.signOut();
      console.log('login status changed '+ this.loginService.loginstatus);
    }
  }

}

