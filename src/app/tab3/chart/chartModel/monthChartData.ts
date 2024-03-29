import { ChartData }from './chartData'
import { ItemResponse } from 'src/app/model/logItemResponse.model';

export class MonthlyChartData extends ChartData{
    
    data:any
    label:string
    labels: Array<string>
    end: number;
    start:number;
    items: Array<ItemResponse>

    public constructor(items: Array<ItemResponse>){
        super()
        this.items = items
        this.label = 'Monthly Poops'
        this.start = 1
        this.end = new Date().getDate()
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
        let labels: Array<string> = []
        for(let i = this.start; i <= this.end; i++){
            labels.push(i.toString())
        }
        return labels
    }

    protected createTimeUnitData(){
        let year = new Date().getFullYear()
        let month = new Date().getMonth()

        return this.items
        .filter((item) => item.date.getFullYear() == year && item.date.getMonth() == month)
        .map((item) => item.date.getDate())
        .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
    }

}
