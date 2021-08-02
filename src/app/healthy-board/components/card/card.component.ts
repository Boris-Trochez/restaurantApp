import { Component, Input, OnInit } from '@angular/core';
import { Fruit } from '../interfaces/fruit.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() fruitsList: Fruit[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  

}
