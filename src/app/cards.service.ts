import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';

@Injectable()


export class CardsService {
    constructor(private http:Http){}
    cards:any[];
    getCards(){
        this.http.get('http://192.168.0.104:3100/').toPromise().then(res => res.json()).then(res => {this.cards = res; console.log(res);});
    }

}
