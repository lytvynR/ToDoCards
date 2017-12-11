import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, tap, map} from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { filter } from 'rxjs/operators/filter';
import { forEach } from '@angular/router/src/utils/collection';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
const userUrl:string = 'api/USERS';


@Injectable()
export class LoginService {
  loginstatus: boolean=false;
    
    constructor(private http:HttpClient){};

    login(log:string):Observable<User[]>{
      return this.http.get<User[]>('api/USERS?login='+log);     
    }
    signOut(){
      this.loginstatus = false;
    }
    signIn(){
      this.loginstatus = true;
    }


}

