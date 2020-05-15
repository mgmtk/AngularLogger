import { Component, OnInit } from '@angular/core';
import { chartOptions, allTimeChartData, yearChartData, monthChartData, weekChartData, dayChartData } from '../../data/chartdata';

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
   
    constructor() {
        Object.assign(this, { chartOptions });
        Object.assign(this, { allTimeChartData });
        Object.assign(this, { yearChartData});
        Object.assign(this, { monthChartData });
        Object.assign(this, { weekChartData });
        Object.assign(this, { dayChartData });
        Object.assign(this, { chartOptions });
    }

    ngOnInit(){
        this.chartData = this.dayChartData.data;
        this.chartLabels = this.dayChartData.label
    }

    changeData(changeData: any){
        this.chartData = changeData.data
        this.chartLabels = changeData.labels
    }


    onChartClick(event){
        console.log(event);
    }

    onChartHovered(e:any): void{
        console.log(e)
    }
}