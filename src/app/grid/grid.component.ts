import { Component , AfterViewInit , ViewChild, Renderer2 } from '@angular/core';
import { NgxWidgetGridComponent, WidgetPositionChange } from 'ngx-widget-grid';
import { WidgetService } from '../services/widget.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterViewInit {

  public rows = 3;
  public cols = 2;

  constructor(private widgetService: WidgetService,
    private renderer: Renderer2) { }

  @ViewChild('grid', { static: true }) grid: NgxWidgetGridComponent;

  ngAfterViewInit(): void {
    this.widgetService.grid = this.grid
  }
  
  get editable() {
    return this.widgetService.editable
  }

  get widgets() {
    return this.widgetService.widgets
  }

  askDeleteWidget(index: number) {
    this.widgetService.askDeleteWidget(index)
  }

  onWidgetChange(event: WidgetPositionChange) {
  }

  public onGridFull(e : any) {
    console.log(e);
  }

}
