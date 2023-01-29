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
import { GridModule } from './grid/grid.module';
//My components
//My services
import { WidgetService } from './services/widget.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    FormsModule,
    GridModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    WidgetService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
