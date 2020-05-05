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

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController) {}

  chartData = [];
  chartLabels = [];
  openHistory: boolean = false;

  allTimeChartData = [ { 
    data: [200, 301, 242, 312, 280, 345], label: 'All Time Poops' 
  }];

  yearChartData = [
    { data: [40,32,67,23,31,55,62,21,13,45,68,11], label: 'Yearly Poops' }
  ];

  monthChartData = [
    { data: [10,15,11,13], label: 'Monthly Poops' }
  ];

  weekChartData = [
    { data: [1,2,3,3,2,4,1], label: 'Weekly Poops' }
  ];

  dayChartData = [
    { data: [7,6,5,4,3,2,1], label: 'Daily Poops' }
  ];

  chartOptions = {
    responsive: true,
    scales:{
      //yAxes: [{
       // ticks: {
        //  max : 10,
        //  min : 0,
       // }
      //}]
    },plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: "#222",

        font: {
          family: 'FontAwesome',
          size: 14
        },
      
      },
      deferred: false
  }};

  ngOnInit(){
    this.chartData = this.dayChartData;
    this.chartLabels = this.dayLabels;
  }
  
  /*

  _lineChartColors:Array<any> = [{
    backgroundColor: 'blue',
     borderColor: 'blue',
     pointBackgroundColor: 'blue',
     pointBorderColor: 'red',
     pointHoverBackgroundColor: 'blue',
     pointHoverBorderColor: 'red' 
   }
 ];
 */

  allLabels = ['2015', '2016', '2017', '2018', '2019', '2020'];
  yearLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
  monthLabels = ['Week1', 'Week2', 'Week3', 'Week4'];
  weekLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  dayLabels = ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12']

  public async openHistoryComponent(){
    let historyComp: HistoryPageComponent

    const historyModal = 
      await this.modalCtrl.create({
        component: HistoryPageComponent,
        componentProps: historyComp
      })
      
    //this.navCtrl.navigateForward('history');
    historyModal.present();
  }

  public async openLoggerComponent(){
    let loggerComp: LoggerComponent

    const loggerModal = 
      await this.modalCtrl.create({
        component: LoggerComponent,
        componentProps: loggerComp
      })
      
    //this.navCtrl.navigateForward('history');
    loggerModal.present();
  }

  onChartClick(event){
    console.log(event);
  }

  onChartHovered(e:any): void{
    console.log(e)
  }

  changeData(changeData: any, chartLabels: any){
    this.chartData = changeData
    this.chartLabels = chartLabels
  }

}
