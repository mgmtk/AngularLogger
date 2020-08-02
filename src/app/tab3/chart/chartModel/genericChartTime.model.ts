import { ItemResponse } from 'src/app/model/logItemResponse.model';

export abstract class GenericChartTime {
    public min: number;
    public max: number;

    public createChartSeries(){
        let data = this.getTimeUnitData()
        this.createTimeSeries()
    }

    public getChartData(){

    }

    public abstract getTimeUnitData();

    private createTimeSeries(data, min, max){
        let chartData:Array<number> = []
        let chartLabels:Array<string> = []

        for(let i = this.min; i <= this.max; i++){
            chartLabels.push(i.toString());
            if(!(i in data)){
                chartData.push(0)
                continue
            }
            chartData.push(data[i])
        }
        return {chartData, chartLabels}
    }
}