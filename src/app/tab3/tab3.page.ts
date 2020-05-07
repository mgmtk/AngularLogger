import { Component, OnInit } from '@angular/core';
import {HistoryPageComponent} from './history/history.component';
import {LoggerComponent } from './logger/logger.component';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  title = 'myHighchart';
   
  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController) {}
  
  public async openHistoryComponent(){
    let historyComp: HistoryPageComponent

    const historyModal = 
      await this.modalCtrl.create({
        component: HistoryPageComponent,
        componentProps: historyComp
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

  onChartClick(event){
    console.log(event);
  }

  onChartHovered(e:any): void{
    console.log(e)
  }

  ngOnInit(){
    
  }

}
