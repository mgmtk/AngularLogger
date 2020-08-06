import { ItemResponse } from 'src/app/model/logItemResponse.model';

export abstract class ChartData {
    public chartData: Array<number> = []

    public constructor(){
        this.chartData = []
    }

    public createChart(){
        let start = this.getStart()
        let end = this.getEnd()
        let data = this.createTimeUnitData()
        this.chartData = this.createTimeSeries(data, start, end)
        
    }

    public getChartData(){
        return this.chartData
    }

    protected abstract createTimeUnitData(): any;

    protected abstract getStart(): number;

    protected abstract getEnd(): number;

    public abstract getLabel(): string; 

    public abstract getLabels(): Array<string>; 

    private createTimeSeries(data, start, end){
        let chartData:Array<number> = []

        for(let i = start; i <= end; i++){
    
            if(!(i in data)){
                chartData.push(0)
                continue
            }
            chartData.push(data[i])
        }
        return chartData
    }
}