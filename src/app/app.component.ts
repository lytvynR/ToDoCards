import { Component } from '@angular/core';


export class Item {
  cardTitle: string;
  constructor(cardTitle: string){
    this.cardTitle = cardTitle;
  }

}


@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  time: number=1;
  
  cardTitle: string;

  items: Item[] = [];


  addNewToDo(text: string): void {
    if(text==null || text==undefined || text.trim()=="")
      return;
    this.items.push(new Item(text));
    this.clear();
  }
  clear(){
      this.cardTitle=""
  }
  deleteTodo(index) {
    this.items.splice(index, 1);
  }
 
}
