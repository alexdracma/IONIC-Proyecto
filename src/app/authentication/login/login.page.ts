import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  formLogin: FormGroup

  constructor(private authService: AuthService,
    private router: Router,
    private toastController: ToastController) { 
    
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  navigate(navigateTo: string) {
    this.router.navigate([navigateTo])
  }

  async onSubmit() {
    
    const result = await this.authService.login(this.formLogin.value)

    if ( result === 'correct' ) {
      this.navigate('/') //go to dashboard
    } else {
      switch (result) {
        case 'auth/wrong-password':
          this.presentErrorToast('The password you entered is incorrect')
          break;
        case 'auth/missing-email':
          this.presentErrorToast('You have to provide an email')
          break;
        case 'missing-password':
          this.presentErrorToast('You have to provide a password')
          break;
        case 'auth/invalid-email':
          this.presentErrorToast('The email you provided is not valid')
          break;
        case 'auth/user-not-found':
          this.presentErrorToast('The user does not exist')
          break;
        default:
          console.warn(result)
          this.presentErrorToast('Error, try again')
          break;
      }
    }
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      icon: 'alert-circle',
      color: 'danger'
    })

    await toast.present()
  }
}
