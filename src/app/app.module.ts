//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
//Ionic
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//App component & module
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//My modules
import { SharedModule } from './shared/shared.module';
//My components
import { GridComponent } from './grid/grid.component';
//My services
import { WidgetService } from './services/widget.service';
//Libraries
import { NgxWidgetGridModule } from 'ngx-widget-grid';

@NgModule({
  declarations: [AppComponent, GridComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule, NgxWidgetGridModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, WidgetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
