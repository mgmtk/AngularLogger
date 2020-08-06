import { ChartData }from './chartData'
import { ItemResponse } from 'src/app/model/logItemResponse.model';

export class YearlyChartData extends ChartData{
    
    data:any
    label:string
    end: number;
    start:number;
    items: Array<ItemResponse>
    labels: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];


    public constructor(items: Array<ItemResponse>){
        super()
        this.items = items
        this.label = 'Yearly Poops'
        this.start = 0
        this.end = new Date().getMonth()
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

        return this.items
        .filter((item) => item.date.getFullYear() == year)
        .map((item) => item.date.getMonth())
        .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
    }

}
