import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @Input() card: Card;
  constructor(private route: ActivatedRoute, private cardsService:CardsService, private location:Location) { }

  ngOnInit() {
    this.getCard();
  }

  getCard(): void {
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.cardsService.getCard(id)
      .subscribe(card => this.card = card);
  }
  back(): void{
    this.location.back();
  }

}
