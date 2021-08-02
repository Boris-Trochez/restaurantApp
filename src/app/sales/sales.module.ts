import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';

import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { SalesComponent } from './pages/sales/sales.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { SalesRoutingModule } from './sales-routing.module';
import { upperCasePipe } from './pipes/upper-case.pipe';


@NgModule({
  declarations: [
    DonutChartComponent,
    SalesComponent,
    BarChartComponent,
    upperCasePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule,
    SalesRoutingModule
  ],
  exports: [
    SalesComponent
  ]
})
export class SalesModule { }
