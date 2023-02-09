import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

//My modules
import { SharedModule } from '../shared/shared.module';
import { GridModule } from '../grid/grid.module';
//My components
//My services
import { WidgetService } from '../services/widget.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    DashboardPageRoutingModule,
    SharedModule,
    GridModule,
  ],
  declarations: [DashboardPage],
  providers: [
    WidgetService,
  ]
})
export class DashboardPageModule {}
