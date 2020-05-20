import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import {LogItemService} from '../../services/log-item.service';
import {ItemResponse} from '../../model/logItemResponse';


@Component({
  selector: 'history-tab',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss']
})
export class HistoryPageComponent implements OnInit{
  items: ItemResponse[]

  constructor(private itemService:LogItemService, private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.getItems()
  }

  public onDismiss (){
    this.modalCtrl.dismiss();
  }

  public recordItem(item){
    console.log(item)
  }

  getItems(): void{
    this.itemService.getLogItems()
      .subscribe(items => this.items=items)
  }


}