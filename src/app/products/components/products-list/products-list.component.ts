import { Component, OnInit, Output } from '@angular/core';
import { Food } from '../../interfaces/food.interface';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  foodList: Food[] = [];

  constructor(
    private foodListService: FoodListService
  ) { }

  ngOnInit(): void {
    this.getFoodList();
  }

  getFoodList() {
    this.foodList = this.foodListService.getFoodList();
  }

}
