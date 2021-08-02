import { Component, OnInit } from '@angular/core';

import { FruitListService } from '../../service/fruit-list.service';
import { Fruit } from '../interfaces/fruit.interface';
import { fruityvice } from '../../../shared/utils/links-apis';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css']
})
export class FruitsListComponent implements OnInit {
  fruitsList: Fruit[] = [];

  constructor(
    private fruitListService: FruitListService
  ) { }

  ngOnInit(): void {
    this.getFruitsList();
  }

  getFruitsList() {
    this.fruitListService.getFruitsList( `${ fruityvice }/all` )
    .subscribe( data => {
      console.log("data", data)
      this.fruitsList = data;
    })
  }

}
