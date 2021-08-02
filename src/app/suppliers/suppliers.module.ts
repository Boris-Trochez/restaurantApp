import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { SuppliersProductsComponent } from './components/suppliers-products/suppliers-products.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SuppliersComponent,
    SuppliersListComponent,
    SuppliersProductsComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SuppliersComponent
  ]
})
export class SuppliersModule { }
