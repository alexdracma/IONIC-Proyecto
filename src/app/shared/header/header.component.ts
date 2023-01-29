import { Component } from '@angular/core';
import { WidgetService } from '../../services/widget.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private widgetService: WidgetService) {}

  addWidget() {
    this.widgetService.addWidget();
  }

  editWidgets() {
    this.widgetService.editWidgets();
  }

}
