import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.scss']
})
export class OutputGraphComponent implements OnInit {
    
    DayGraph = {
        data: [{
            name: 'Poops',
            data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
        },{
            name: 'Size',
            data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
        }],
        categories: ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    };

    WeekGraph = {
        data: [{
            name: 'Poops',
            data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
        },{
            name: 'Size',
            data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
        }],
        categories: ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    };

    highcharts = Highcharts;
    chartOptions = {   
    chart: {
        type: "spline"
    },
    title: {
        text: "Monthly Site Visitor"
    },
    xAxis:{
        categories:this.DayGraph.categories
    },
    yAxis: {          
        title:{
            text:"Visitors"
        } 
    },
    series: this.DayGraph.data
    };

  constructor() { }

  // series = new Highcharts.Series(this.highcharts, this.chartOptions)

  changeData(changeData: any){
    // this.chartOptions.series.
    // options.series = changeData.data
    // this.highcharts.setOptions(options)
    // this.chartOptions.series = changeData.data
  }

  ngOnInit(){
     // this.selectedData = this.DayGraph
  }
}