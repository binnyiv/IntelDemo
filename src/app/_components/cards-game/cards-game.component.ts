import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CardsGameService } from '../../_services/cards-game.service';

@Component({
  selector: 'app-cards-game',
  templateUrl: './cards-game.component.html',
  styleUrls: ['./cards-game.component.scss']
})
export class CardsGameComponent implements OnInit {

  public inputString: any = "";
  public sortedCardList: any = "";

  constructor(private service: CardsGameService) { }

  ngOnInit(): void {
  }

  getSortedCards(){ 
    this.service.getSortedCards(this.inputString)
    .pipe()
    .subscribe(response => {
      if(response != null)
      this.sortedCardList = response;
    });

    //this.sortedCardList = await this.service.getSortedCards(this.inputString);
    console.log(this.sortedCardList);
  }
}
