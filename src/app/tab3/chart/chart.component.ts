import { Component, OnInit, Input } from '@angular/core';
import { chartOptions} from '../../options/chartOptions';
import { ItemResponse } from 'src/app/model/logItemResponse.model';
import {ChartType} from './chartModel/chartEnum.model';
import { ChartData } from './chartModel/chartData';
import { AllTimeChartData } from './chartModel/allTimeChartData';
import { YearlyChartData } from './chartModel/yearChartData';
import { MonthlyChartData } from './chartModel/monthChartData';
import { WeeklyChartData } from './chartModel/weekChartData';
import { DailyChartData } from './chartModel/dayChartData';


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
   
    constructor() {
        Object.assign(this, { chartOptions });
    }

    ngOnInit(){
        let retrievedData:ChartData = this.getAllData(ChartType.ALL)

        this.chartData = [{
            data: retrievedData.getChartData(),
            label: retrievedData.getLabel()
        }]
        this.chartLabels = retrievedData.getLabels()
    }

    changeData(chartType: ChartType){
        let retrievedData:ChartData = this.getAllData(chartType)

        this.chartData = [{
            data: retrievedData.getChartData(),
            label: retrievedData.getLabel()
        }]
        this.chartLabels = retrievedData.getLabels()
    }

    private getAllData(chartType:ChartType): ChartData{

        let chart: ChartData

        switch(chartType){
            case ChartType.ALL: {
                chart = new AllTimeChartData(this.items)
                break
            }
            case ChartType.YEAR: {
                chart = new YearlyChartData(this.items)
                break
            }
            case ChartType.MONTH: {
                chart = new MonthlyChartData(this.items)
                break
            }
            case ChartType.WEEK: {
                chart = new WeeklyChartData(this.items)
                break
            }
            case ChartType.DAY: {
                chart = new DailyChartData(this.items)
                break
            }
            default: {
                return null;
            }
        }

        chart.createChart()
        return chart
        
    }

    onChartClick(event){
        console.log(event);
    }

    onChartHovered(e:any): void{
        console.log(e)
    }
}