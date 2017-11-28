import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Card } from './card'


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable()


export class CardsService {
    private cardsUrl = 'api/CARDS';
    constructor(private http: HttpClient){}
    getCards():Observable<Card[]>{
       // this.http.get('http://192.168.0.104:3100/').toPromise().then(res => res.json()).then(res => {this.cards = res; console.log(res);});
        return this.http.get<Card[]>(this.cardsUrl).pipe(tap(cards => console.log(cards)));

    }
    getCard(id: number): Observable<Card> {
        const url = `${this.cardsUrl}/${id}`;
        return this.http.get<Card>(url);
    }
    addCard(card: Card){
        return this.http.post<Card>(this.cardsUrl, card, httpOptions).pipe(
            catchError(this.handleError<Card>('addHero'))
          );

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
       
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
       
         
       
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
    }

}
