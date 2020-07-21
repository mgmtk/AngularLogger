export interface IItemResponse{
    date: Date
    type: string
    size: string
    smell: number
    pain: number
}

export class ItemResponse implements IItemResponse{
    public date: Date
    public type: string
    public size: string
    public smell: number
    public pain: number

    public constructor(item: IItemResponse){
        this.date = item.date;
        this.pain = item.pain;
        this.size = item.size;
        this.smell = item.smell;
        this.type = item.type;
    }
}