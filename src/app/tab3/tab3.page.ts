import { Component, OnInit } from '@angular/core';
import {HistoryPageComponent} from './history/history.component';
import {LoggerComponent } from './logger/logger.component';
import { NavController, ModalController } from '@ionic/angular';
import {LogItemService} from '../services/log-item.service';
import {ItemResponse} from '../model/logItemResponse.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  items:ItemResponse[]

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController, private itemService:LogItemService) {}
  
  ngOnInit(): void {
      this.getItems()
  }

  public async openHistoryComponent(){
    let historyComp: HistoryPageComponent 

    const historyModal = 
      await this.modalCtrl.create({
        component: HistoryPageComponent,
        componentProps: { items: this.items }
      })
      
    historyModal.present();
  }

  public async openLoggerComponent(){
    let loggerComp: LoggerComponent

    const loggerModal = 
      await this.modalCtrl.create({
        component: LoggerComponent,
        componentProps: loggerComp
      })
      
    loggerModal.present();
  }

  getItems(): void{
    this.itemService.getLogItems()
      .subscribe(items => this.items=items)
  }
  
}
