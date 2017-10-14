import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login.Service';

@Component({
  selector: 'app-loogin-page',
  templateUrl: './loogin-page.component.html',
  styleUrls: ['./loogin-page.component.scss'],
  providers: [LoginService]
})



export class LooginPageComponent implements OnInit {
  login_status:boolean;
  login:any;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.login_status = this.loginService.getLoginStatus();
    this.login = this.loginService.Login;
  }
  
}
