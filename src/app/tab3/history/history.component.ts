import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import {ItemResponse} from '../../model/logItemResponse';


@Component({
  selector: 'history-tab',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.scss']
})
export class HistoryPageComponent implements OnInit{
  @Input() items: ItemResponse[]

  constructor( private modalCtrl: ModalController) {}

  ngOnInit(): void {

  }

  public onDismiss (){
    this.modalCtrl.dismiss();
  }

  public recordItem(item){
    console.log(item)
  }

}