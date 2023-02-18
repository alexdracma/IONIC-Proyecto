import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  formRegister: FormGroup

  constructor(private authService: AuthService,
    private router: Router,
    private toastController: ToastController) { 
    
    this.formRegister = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  navigate(navigateTo: string) {
    this.router.navigate([navigateTo])
  }

  async onSubmit() {

    const response = await this.authService.register(this.formRegister.value) //when it registers the user it also authenticates it automatically
      
    if (response === 'correct') {
        this.navigate('/') //go to dashboard
    } else {
      switch (response) {
        case 'missing-name':
          this.presentErrorToast('You have to provide a name')
          break;
        case 'auth/missing-email':
          this.presentErrorToast('You have to provide an email')
          break;
        case 'missing-password':
          this.presentErrorToast('You have to provide a password')
          break;
        case 'auth/email-already-in-use':
          this.presentErrorToast('The email is already in use')
          break;
        case 'auth/weak-password':
          this.presentErrorToast('The password you entered is too weak')
          break;
        case 'auth/invalid-email':
          this.presentErrorToast('The email you provided is not valid')
          break;
        default:
          console.warn(response)
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
