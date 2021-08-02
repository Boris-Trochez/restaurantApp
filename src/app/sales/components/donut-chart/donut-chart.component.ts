import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions;
  
 ngOnInit(): void{
   this.chartOptions = {   
      chart : {
         plotBorderWidth: null,
         plotShadow: false
      },
      title : {
         text: 'Ventas Totales'   
      },
      tooltip : {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
         enabled: false
      },
      plotOptions : {
         pie: {
            shadow: false,
            center: ['50%', '50%'],
            size:'45%',
            innerSize: '20%'            
         }
      },
      series : [{
         type: 'pie',
         name: 'Arroz con pollo',
         data: [
            ['Arroz con leche',   45.0],
            ['Empanadas de pipián',       26.8],
            {
               name: 'Ensalada de frutas',
               y: 12.8,
               sliced: true,
               selected: true
            },
            ['Lasagna',    8.5],
            ['Copa de jugo en mora',     6.2],
            ['Ajiaco',      0.7]
         ]
      }]
   }
   HC_exporting( this.highcharts );
 }


}
   

  

