import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from '../card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})


export class MainComponent implements OnInit {
  cards:Card[];
  constructor(private cardsService:CardsService){}
    ngOnInit() {
      this.getCards();
    }

    getCards(): void{
      this.cardsService.getCards()
      .subscribe(cards => this.cards = cards);
    }
    toDo(arg): boolean{
      return true;
    
    }
}