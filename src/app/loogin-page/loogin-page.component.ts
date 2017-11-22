import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login.Service';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-loogin-page',
  templateUrl: './loogin-page.component.html',
  styleUrls: ['./loogin-page.component.scss'],
  providers: [LoginService]
})



export class LooginPageComponent implements OnInit {
  constructor(private loginService:LoginService, private http:Http) { }

  ngOnInit() {
    this.http.get('http://192.168.0.104:3100/').toPromise().then(res => res.json()).then((res)=>console.log(res));
  }
  login(){
    console.log('loggined')
  }
  
}
