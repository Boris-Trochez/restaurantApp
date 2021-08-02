import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.interface';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor() { }

  getFoodList() {
    const foodList: Food[] = [
      {
        name: 'Arroz con pollo',
        price: 15000,
        img: '../../../../assets/imgs/products/chicken-and-rice.jpg'
      },
      {
        name: 'Arroz con leche',
        price: 8000,
        img: '../../../../assets/imgs/products/chicken-and-rice.jpg'
      },
      {
        name: 'Ajiaco',
        price: 17000,
        img: '../../../../assets/imgs/products/chicken-and-rice.jpg'
      },
      {
        name: 'Empanadas de pipian x 10',
        price: 9000,
        img: '../../../../assets/imgs/products/chicken-and-rice.jpg'
      },
      {
        name: 'Lasagna',
        price: 11000,
        img: '../../../../assets/imgs/products/chicken-and-rice.jpg'
      },
      {
        name: 'Ensalada de frutas',
        price: 12000,
        img: '../../../../assets/imgs/products/chicken-and-rice.jpg'
      },
      {
        name: 'Copa de jugo de mora',
        price: 6000,
        img: '../../../../assets/imgs/products/chicken-and-rice.jpg'
      },
      {
        name: 'Copa de jugo de mora',
        price: 6000,
        img: '../../../../assets/imgs/products/chicken-and-rice.jpg'
      }
    ];

    return foodList;
  }
}
