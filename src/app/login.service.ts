import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  islogin: boolean=false;

  getLoginStatus(){
    return this.islogin;
  };
  Login(){
      this.islogin = true;
      console.log("login" + this.islogin);
    };

}
