import { Component, Input, OnInit } from '@angular/core';
import { GetCountryService } from '../../services/get-country.service';
import { Supplier } from '../../interfaces/supplier.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-suppliers-products',
  templateUrl: './suppliers-products.component.html',
  styleUrls: ['./suppliers-products.component.css']
})
export class SuppliersProductsComponent implements OnInit {
  
  @Input() country: Country[];

  constructor() {}

  ngOnInit(): void {
  }

  

 
  

}
