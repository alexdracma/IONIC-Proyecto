import { AfterViewInit, Injectable, ViewChild } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { NgxWidgetGridComponent } from 'ngx-widget-grid';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WidgetService implements AfterViewInit{

  @ViewChild(GridComponent) gridComponent: any;

  private _grid: NgxWidgetGridComponent;
  private _editable: boolean = false;

  constructor( private toastCtrl: ToastController) {}

  public set grid(grid: NgxWidgetGridComponent) {
    this._grid = grid
  }

  get grid() {
    return this._grid
  }

  ngAfterViewInit(): void {
    this._grid = this.gridComponent.test;
  }

  private _widgets:any[] = [
  ]

  public get widgets() {
    return [...this._widgets]
  }

  public get editable() {
    return this._editable
  }

  editWidgets() {
    this._editable = !(this._editable)
  }

  addWidget() {
    const nextPosition = this._grid.getNextPosition();
    if (nextPosition) {
      this._widgets.push({color: this.generateHslaColors(), ...nextPosition, text: '', width: 1, height: 1});
    } else {
      this.presentToast('No more space available!')
    }
  }

  async presentToast(message: string) {

    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    })
    
    toast.present()
  }

  async askDeleteWidget(index: number) {

    const alert = await this.toastCtrl.create({
      message: 'Do you wish to delete the selected widget?',
      buttons: [
        {
          text: 'No',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this._widgets.splice(index, 1);
          }
        }
      ]
    })

    alert.present()
  }

  generateHslaColors(saturation? : any, lightness? : any, alpha? : any) {
    const h = this.getRandomIntInclusive(0, 360 * 10);
    const s = saturation >= 0 && saturation <= 100 ? saturation : 80;
    const l = lightness >= 0 && lightness <= 100 ? lightness : 80;
    const a = alpha >= 0 && alpha <= 100 ? alpha : 100;
    return `hsla(${h / 10},${s}%,${l}%,${a})`;
  }

  getRandomIntInclusive(min : number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    return random;
  }

}
