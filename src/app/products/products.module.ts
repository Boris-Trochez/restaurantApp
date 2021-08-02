import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './pages/products/products.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsListComponent } from './components/products-list/products-list.component';




@NgModule({
  declarations: [
    CardComponent,
    ProductsComponent,
    CarouselComponent,
    ProductsListComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
