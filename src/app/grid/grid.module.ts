import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { GridComponent } from './grid.component';
import { WidgetsModule } from './widgets/widgets.module';

//Libraries
import { NgxWidgetGridModule } from 'ngx-widget-grid';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxWidgetGridModule,
    WidgetsModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
