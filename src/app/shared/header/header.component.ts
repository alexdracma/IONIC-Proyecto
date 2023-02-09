import { Component, ViewChild } from '@angular/core';
import { WidgetService } from '../../services/widget.service';
import { Router } from '@angular/router';
import { UserService } from '../../authentication/services/user.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @ViewChild('addWgdtPopover') private addWdgtPopover: any;
  isAddWdgtPopoverOpen = false;

  constructor(private widgetService: WidgetService,
    private router: Router,
    private userService: UserService) { }

  addWidget() {
    this.widgetService.addWidget();
    this.addWdgtPopover.dismiss();
  }

  editWidgets() {
    this.widgetService.editWidgets();
  }

  presentAddWidgetPopover(ev: Event) {
    this.addWdgtPopover.event = ev
    this.isAddWdgtPopoverOpen = true
  }

  navigate(navigateTo: string) {
    this.router.navigate([navigateTo])
  }

  logout() {
    this.userService.logout();
  }
}
