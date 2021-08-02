import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Supplier } from '../../interfaces/supplier.interface';
import { GetCountryService } from '../../services/get-country.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {
  
  country: Country;
  suppliersList: Supplier[] = [];
  supplierName: string = 'Seleccione un proveedor';
  supplierSelected: Supplier = {
    name: this.supplierName,
    country: '',
    category: ''
  };
  
  @Output() newItemEvent = new EventEmitter<Country>();

  constructor(
    private getCountryService: GetCountryService
  ) { }

  ngOnInit(): void {
    this.getSuppliersList();
  }

  selectSupplier() {
    console.log("HEREEEE", this.supplierSelected)
    if( this.supplierName === 'High quality meats' ) {
      this.setSupplier( this.supplierName,'Japan', 'Carnes'  );
    } else if ( this.supplierName === 'Lacteos del sur' ) {
      this.setSupplier( this.supplierName,'Argentina', 'Lácteos'  );
    } else {
      this.setSupplier( this.supplierName,'Colombia', 'Vegetales'  );
    }

    this.getCountry();
  }

  getCountry() {
    console.log("name suu", this.supplierSelected.country)
    this.getCountryService.getCountry( this.supplierSelected.country)
      .subscribe( res => {
        console.log("servicio", res)
        this.country = { ...res };
        console.log("country", this.country)
        this.newItemEvent.emit( this.country );
      })
  }

  setSupplier( name: string, country: string, category: string) {
    this.supplierSelected.name = name;
    this.supplierSelected.country = country;
    this.supplierSelected.category = category;
  }

  getSuppliersList() {
    this.suppliersList = [
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
    ];
  }

}
