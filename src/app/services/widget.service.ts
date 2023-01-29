import { AfterViewInit, Injectable, ViewChild } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { NgxWidgetGridComponent } from 'ngx-widget-grid';

@Injectable({
  providedIn: 'root'
})
export class WidgetService implements AfterViewInit{

  @ViewChild(GridComponent) gridComponent: any;

  private _grid : NgxWidgetGridComponent;

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
    {
      top: 1,
      left: 1,
      height: 2,
      width: 2,
      color: this.generateHslaColors(),
      text: 'Hello'
    },
    {
      top: 3,
      left: 3,
      height: 1,
      width: 1,
      color: this.generateHslaColors(),
      text: 'Foo'
    }, {
      top: 4,
      left: 4,
      height: 2,
      width: 2,
      color: this.generateHslaColors(),
      text: 'Bar'
    }
  ]

  public get widgets() {
    return [...this._widgets]
  }

  

  addWidget() {
    const nextPosition = this._grid.getNextPosition();
    //console.log(nextPosition)
    if (nextPosition) {
      this._widgets.push({color: this.generateHslaColors(), ...nextPosition, text: 'lala'});
      console.log(this._widgets)
    } else {
      console.warn('No Space Available!! ');
      alert('No hay sitio disponible!')
    }
  }

  deleteWidget() {
    console.log('widget deleted')
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
