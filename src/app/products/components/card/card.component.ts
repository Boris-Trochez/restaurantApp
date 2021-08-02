import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../interfaces/food.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() foodList: Food[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("img", this.foodList[0].img);
  }

}
