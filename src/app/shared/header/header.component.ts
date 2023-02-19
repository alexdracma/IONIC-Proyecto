import { Component, ViewChild } from '@angular/core';
import { WidgetService } from '../../grid/services/widget.service';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/services/auth.service';
import { ActionSheetController } from '@ionic/angular';

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
    private authService: AuthService,
    private actionSheetCtrl: ActionSheetController) { }

  addWidget(widget: string) {
    this.widgetService.addWidget(widget);
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

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login'])
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      buttons: [
        {
          text: 'Log out',
          icon: 'log-out',
          handler: () => this.logout()
        }
      ],
      animated: true,
      backdropDismiss: true,
      keyboardClose: true,
      mode: 'ios'
    })

    actionSheet.present()
  }
}
