import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { GridComponent } from './grid.component';

//Libraries
import { NgxWidgetGridModule } from 'ngx-widget-grid';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxWidgetGridModule,
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
