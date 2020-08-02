import { Component, OnInit, Input } from '@angular/core';
import { chartOptions, allTimeLabels, yearLabels, monthLabels, weekLabels, dayLabels } from '../../data/chartdata';
import { ItemResponse } from 'src/app/model/logItemResponse.model';
import {ChartType} from '../../model/chartEnum.model';
import {ChartData } from '../../model/chartData.model'
import { listChanges } from 'angularfire2/database';


@Component({
    selector: 'chart-component',
    templateUrl: 'chart.component.html',
    styleUrls: ['chart.component.scss']
  })

  export class ChartComponent implements OnInit{
    @Input() items: ItemResponse[]

    chartData = [];
    chartLabels = [];
    chartType = ChartType
    
    chartOptions: any
    allTimeLabels: any
    yearLabels: any
    monthLabels: any
    weekLabels: any
    dayLabels: any
   
    constructor() {

        Object.assign(this, { chartOptions });
        Object.assign(this, { allTimeLabels});
        Object.assign(this, { yearLabels});
        Object.assign(this, { monthLabels});
        Object.assign(this, { weekLabels});
        Object.assign(this, { dayLabels });

    }

    ngOnInit(){
        let retrievedData:ChartData = this.getAllData(ChartType.ALL)
        this.chartData = [{
            data: retrievedData.data,
            label: retrievedData.label
        }]

        this.chartLabels = retrievedData.dataLabels  
    }

    changeData(chartType: ChartType){
        let retrievedData:ChartData = this.getAllData(chartType)
        this.chartData = [{
            data: retrievedData.data,
            label: retrievedData.label
        }]

        this.chartLabels = retrievedData.dataLabels 
    }

    private getAllData(chartType:ChartType): ChartData{
       
        let label: string = ''
        let data: any = null
        let start: number = 0
        let end: number = null
        let ret: any

        switch(chartType){
            case ChartType.ALL: {
                label = 'All Time Poops'
               
                data = this.items
                .map((item) => item.date.getFullYear())
                .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))

                let keys = Object.keys(data)
                start = Number(keys[0])
                end = new Date().getFullYear()
                break;
            }
            case ChartType.YEAR: {
                label = 'Monthly Poops'
                let year = new Date().getFullYear()

                data = this.items
                .filter((item) => item.date.getFullYear() == year)
                .map((item) => item.date.getMonth())
                .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
                end = new Date().getMonth()
                break;
            }
            case ChartType.MONTH: {
                label = 'Monthly Poops'
                let year = new Date().getFullYear()
                let month = new Date().getMonth()

                data = this.items
                .filter((item) => item.date.getFullYear() == year && item.date.getMonth() == month)
                .map((item) => item.date.getDate())
                .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
                break;
            }
            case ChartType.WEEK: {
                label = 'Weekly Poops'
                let year = new Date().getFullYear()
                let month = new Date().getMonth()
                let day = new Date().getDay()
                let date = new Date().getDate()

                
                data = this.items
                .filter((item) => item.date.getFullYear() == year && item.date.getMonth() == month
                && item.date.getDate() >= (date - day))
                .map((item) => item.date.getDay())
                .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
                break;
            }
            case ChartType.DAY: {
                label = 'Daily Poops'
                let year = new Date().getFullYear()
                let month = new Date().getMonth()
                let date = new Date().getDate()

                data = this.items
                .filter((item) => item.date.getFullYear() == year && item.date.getMonth() == month
                && item.date.getDate() == date)
                .map((item) => item.date.getHours())
                .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
                console.log(data)
                break;

            }

            default: {
                return null;
            }

        }
        

        if(end == null){
            let keys = Object.keys(data)
            ret = this.createTimeSeries(data, start, Number(keys[keys.length-1]))
        }
        else{
            ret = this.createTimeSeries(data, start, end)
        }
        
        console.log(ret)

        return new ChartData(ret.chartData, label, ret.chartLabels)
        
        
    }

    private createTimeSeries(data, min, max){
        let chartData:Array<number> = []
        let chartLabels:Array<string> = []

        for(let i = min; i <= max; i++){
            chartLabels.push(i.toString());
            if(!(i in data)){
                chartData.push(0)
                continue
            }
            chartData.push(data[i])
        }
        return {chartData, chartLabels}
    }

    onChartClick(event){
        console.log(event);
    }

    onChartHovered(e:any): void{
        console.log(e)
    }
}