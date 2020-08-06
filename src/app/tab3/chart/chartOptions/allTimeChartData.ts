import { ChartData }from './chartData'
import { ItemResponse } from 'src/app/model/logItemResponse.model';

export class AllTimeChartData extends ChartData{
    
    data:any
    label:string
    labels: Array<string>
    end: number;
    start:number;
    items: Array<ItemResponse>

    public constructor(items: Array<ItemResponse>){
        super()
        this.items = items.sort((a,b) => a.date.getFullYear() - b.date.getFullYear())
        this.label = 'All Time Poops'
        this.start = this.items[0].date.getFullYear()
        this.end = new Date().getFullYear()
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
        return this.items
        .map((item) => item.date.getFullYear())
        .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
    }

}
