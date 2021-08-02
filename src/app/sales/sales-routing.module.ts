import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './pages/sales/sales.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'graficas',
        component: SalesComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class SalesRoutingModule { }
