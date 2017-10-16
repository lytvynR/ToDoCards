import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login.Service';

@Component({
  selector: 'app-loogin-page',
  templateUrl: './loogin-page.component.html',
  styleUrls: ['./loogin-page.component.scss'],
  providers: [LoginService]
})



export class LooginPageComponent implements OnInit {
 
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    
  }
  
}
