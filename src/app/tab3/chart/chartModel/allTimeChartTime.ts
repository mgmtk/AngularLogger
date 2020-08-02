import { GenericChartTime }from './genericChartTime.model'
import { ItemResponse } from 'src/app/model/logItemResponse.model';

export class AllTimeChartTime extends GenericChartTime{

    data:any
    label:string
    end: number;
    start:number;
    items:any

    public constructor(items: Array<ItemResponse>){
        super()
        this.items = items
        this.label = 'All Time Poops'
        this.end = new Date().getFullYear()
    }


    public createTimeUnitData(){
        let data = this.items
        .map((item) => item.date.getFullYear())
        .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))

        let keys = Object.keys(data)
        this.start = Number(keys[0])
    }
}
