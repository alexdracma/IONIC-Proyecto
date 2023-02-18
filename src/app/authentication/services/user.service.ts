import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _email: string
  private _name: string
  private _widgets: any[] = []

  widgetSubject = new Subject<any[]>();

  emitWidgets() {
    this.widgetSubject.next(this._widgets)
  }

  constructor(private auth: Auth) {

    if (this.auth.currentUser !== null
      && this.auth.currentUser.email !== null) { //if user is already logged in store their email
      
      this._email = this.auth.currentUser.email
    }
    
  }

  public get widgets() {
    return this._widgets
  }

  public get email() {
    return this._email
  }

  public get name() {
    return this._name
  }

  public setLocalUserData(dbData: any) {
    this._email = dbData['email']
    this._name = dbData['name']
    this._widgets = [] //reset the widgets from the last user
    if (dbData.grid.length !== undefined) {
      this._widgets = dbData['grid'] //if user has widgets saved place them
    }
  }

}
