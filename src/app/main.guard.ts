import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import { LoginService } from './login.Service';
import { Router } from '@angular/router';

@Injectable()
export class MainGuard implements CanActivate{
    constructor(private loginService:LoginService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
        if (this.loginService.loginstatus === false){
           this.router.navigate(['/login']);
        }
        return this.loginService.loginstatus;
    }
}