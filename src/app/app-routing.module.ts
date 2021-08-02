import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/pages/products/products.component';
import { SalesComponent } from './sales/pages/sales/sales.component';
import { SuppliersComponent } from './suppliers/pages/suppliers/suppliers.component';
import { HealthyBoardComponent } from './healthy-board/pages/healthy-board/healthy-board.component';

const routes: Routes = [
  // Lazy load helps to improve the performance of the web app, due to it loads the children routes of 
  // a module just when it is called by the right path. Otherwise, this module is not going to be loaded.
  {
    path:'ventas',
    loadChildren: () => import('./sales/sales.module').then( m => m.SalesModule),
  },
  {
    path:'',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  {
    path:'proveedores',
    component: SuppliersComponent
  },
  {
    path: 'muralSaludable',
    component: HealthyBoardComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
