import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'logger-tab',
  templateUrl: 'logger.component.html',
  styleUrls: ['logger.component.scss']
})


export class LoggerComponent implements OnInit{
   startTimeSet: boolean
   startTime: Date

   constructor(private modalCtrl: ModalController) {
    this.startTimeSet= false;

   }

  ngOnInit(): void {
    
  }

  public setStartTime(event){
    this.startTime = event.startTime
    this.startTimeSet = true;
  }

  public onDismiss (){
    this.modalCtrl.dismiss();
  }


}