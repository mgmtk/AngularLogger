import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { HistoryPageComponent } from './history/history.component';
import {LoggerComponent } from './logger/logger.component';
import { ChartModule } from 'angular-highcharts';
import { OutputGraphComponent } from './chart/output-graph.component';
import { HighchartsChartComponent } from 'highcharts-angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: Tab3Page,},
      {path: 'history', component:HistoryPageComponent},
      {path: 'logger', component:LoggerComponent}
    ]),
    ChartModule
  ],
  declarations: [Tab3Page, HistoryPageComponent, LoggerComponent, OutputGraphComponent, HighchartsChartComponent],
  entryComponents:[HistoryPageComponent, LoggerComponent]
})
export class Tab3PageModule {}
