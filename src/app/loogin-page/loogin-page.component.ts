import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.Service';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators/filter';
import { Subscription } from 'rxjs/Subscription';
import { catchError, tap, map} from 'rxjs/operators';
import { find } from 'rxjs/operators/find';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loogin-page',
  templateUrl: './loogin-page.component.html',
  styleUrls: ['./loogin-page.component.scss']
})



export class LooginPageComponent implements OnInit {
  constructor(private loginService:LoginService, private router: Router) {}
  user:User[];
  log:string='';
  pwd:string='';

  ngOnInit() {
  }

  login(log:string, pwd:string):void{ 
    log = log.trim();
    pwd = pwd.trim();

    this.loginService.login(log).subscribe(user => {
      this.user = user; 
      console.log(user);
      if((user[0].login == log) && (user[0].pwd == pwd)){
        this.loginService.signIn();
        console.log('login status changed '+ this.loginService.loginstatus);
        this.router.navigate(['/main']);
      }else{
        console.log('login is failed');
      }
    
    });  
  }
  
  
}
