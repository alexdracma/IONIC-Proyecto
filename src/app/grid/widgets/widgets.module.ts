import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
import { ToSringPipe } from './weather/pipes/to-string.pipe';

@NgModule({
  declarations: [ClockComponent, WeatherComponent, ToSringPipe],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    ClockComponent,
    WeatherComponent
  ]
})
export class WidgetsModule { }
