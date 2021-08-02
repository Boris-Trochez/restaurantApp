import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../../interfaces/supplier.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  country: Country[] = [];
  flag: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  addSupplier( event: Country ) {
    console.log("evento", event)
    this.country = [];
    this.country.push(event);
    this.flag = true;
  }

}
