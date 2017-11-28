import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Card } from '../card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-cards',
  templateUrl: './add-new-cards.component.html',
  styleUrls: ['./add-new-cards.component.scss']
})
export class AddNewCardsComponent implements OnInit {
  constructor(private cardsService:CardsService, private router:Router) { }

  ngOnInit() {

  }

  addNewCard(name: string, description:string, priority:number){
    name = name.trim();
    description = description.trim();
    status = "To do";
    let owner ="";
    if (!name) { return; }
    if (!description) { return; }
    console.log("From add" + name + "" + description + "" + priority);
    this.cardsService.addCard({ name, description, priority, status, owner } as Card).subscribe();
    this.back();
  }

  back(): void{
    this.router.navigateByUrl("/main", { skipLocationChange: false });
  }

}
