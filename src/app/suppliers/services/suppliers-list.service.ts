import { Injectable } from '@angular/core';
import { Supplier } from '../interfaces/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SuppliersListService {

  constructor() { }


  getSuppliersList() {
    const suppliersList: Supplier[] = [
      {
        name: 'High quality meats',
        country: 'Japón',
        category: 'carnes'
      },
      {
        name: 'Lacteos del sur',
        country: 'Argentina',
        category: 'lacteos'
      },
      {
        name: 'Campo alegre',
        country: 'Colombia',
        category: 'vegetales'
      }
    ]

    return suppliersList;
  }

}
