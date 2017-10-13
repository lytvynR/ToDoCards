import { Component, OnInit } from '@angular/core';

export class Item {
  cardTitle: string;
  constructor(cardTitle: string){
    this.cardTitle = cardTitle;
  }

}



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {
  time: number=1;

  constructor() { }
  
    ngOnInit() {
    }
}