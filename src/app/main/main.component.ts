import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[CardsService]
})


export class MainComponent implements OnInit {
  constructor(private cardsService:CardsService){}
    ngOnInit() {
     this.cardsService.getCards();
    }
}