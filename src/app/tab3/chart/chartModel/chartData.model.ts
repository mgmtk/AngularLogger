export class ChartData{
    public data: Array<number>
    public label: string
    public dataLabels: Array<string>

    public constructor(data, label, dataLabels){
        this.data = data
        this.label = label
        this.dataLabels = dataLabels
    }

}