import { ChartData }from './chartData'
import { ItemResponse } from 'src/app/model/logItemResponse.model';

export class WeeklyChartData extends ChartData{
    
    data:any
    label:string
    labels: Array<string>
    end: number;
    start:number;
    items: Array<ItemResponse>

    public constructor(items: Array<ItemResponse>){
        super()
        this.items = items
        this.label = 'Weekly Poops'
        this.labels = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.start = 0
        this.end = new Date().getDay()
    }

    protected getStart(): number {
        return this.start;
    }
    
    protected getEnd(): number {
        return this.end;
    }

    public getLabel(): string {
        return this.label;
    }

    public getLabels(): Array<string>{
        return this.labels.slice(this.start , this.end+1)
    }

    protected createTimeUnitData(){
        let year = new Date().getFullYear()
        let month = new Date().getMonth()
        let day = new Date().getDay()
        let date = new Date().getDate()
        
        return this.items
        .filter((item) => item.date.getFullYear() == year && item.date.getMonth() == month
        && item.date.getDate() >= (date - day))
        .map((item) => item.date.getDay())
        .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
    }

}
