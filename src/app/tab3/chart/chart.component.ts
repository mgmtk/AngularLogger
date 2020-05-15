import { Component, OnInit } from '@angular/core';
import { chartOptions, allTimeChartData, allTimeLabels,  yearChartData, monthChartData, weekChartData, dayChartData,
yearLabels, monthLabels, weekLabels, dayLabels } from '../../data/chartdata';

@Component({
    selector: 'chart-component',
    templateUrl: 'chart.component.html',
    styleUrls: ['chart.component.scss']
  })

  export class ChartComponent implements OnInit{

    chartData = [];
    chartLabels = [];
    
    allTimeChartData: any
    yearChartData: any
    monthChartData: any
    weekChartData: any
    dayChartData: any
    chartOptions: any
    allTimeLabels: any
    yearLabels: any
    monthLabels: any
    weekLabels: any
    dayLabels: any
   
    constructor() {
        Object.assign(this, { chartOptions });
        Object.assign(this, { allTimeChartData });
        Object.assign(this, { allTimeLabels});
        Object.assign(this, { yearChartData});
        Object.assign(this, { yearLabels});
        Object.assign(this, { monthChartData });
        Object.assign(this, { monthLabels});
        Object.assign(this, { weekChartData });
        Object.assign(this, { weekLabels});
        Object.assign(this, { dayChartData });
        Object.assign(this, { dayLabels });

    }

    ngOnInit(){
        console.log(this.allTimeChartData)
        this.chartData = this.allTimeChartData
        this.chartLabels = this.allTimeLabels
        
    }

    changeData(changeData: any, changeLabels: any){
        this.chartData = changeData
        this.chartLabels = changeLabels
    }


    onChartClick(event){
        console.log(event);
    }

    onChartHovered(e:any): void{
        console.log(e)
    }
}