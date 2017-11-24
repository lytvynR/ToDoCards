import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class LoginService {
    
    constructor(private http:Http){};
    islogin:boolean=true;
    login(){
        //this.http.get('http://192.168.0.104:3100/').toPromise().then(res => res.json()).then((res)=>console.log(res));
        console.log('loggined')
       
      }
    isLogin(){
        this.http.get('http://192.168.0.104:3100/').toPromise().then(res => res.json()).then(res => {this.islogin = res; console.log(res);});
    }

}
