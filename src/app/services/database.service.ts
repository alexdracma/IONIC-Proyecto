import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, getDoc, updateDoc } from '@angular/fire/firestore';
import { UserService } from '../authentication/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: Firestore,
    private userService: UserService) {
      
    this.init()
  }
  
  async init(email = this.userService.email) {
    if (email !== null
      && email !== undefined) { //if user is already logged in, retrieve data
      
      const dbUserData = await this.getDocument(email)

      if (dbUserData !== undefined) {
        this.userService.setLocalUserData(dbUserData)
        this.userService.emitWidgets()
      }
    }
  }

  async createUserDocument(email: string, name: string) {
    const testRef = doc(this.firestore, 'users', email)
    await setDoc(testRef, {
      name: name,
      email: email,
      grid: {

      }
    })
  }

  async getDocument(email: string) {

    const docRef = doc(this.firestore, 'users', email)
    return (await getDoc(docRef)).data()    
  }

  async saveWidgets(widgets: any[]) {
    const docRef = doc(this.firestore, 'users', this.userService.email)
    await updateDoc(docRef, {
      grid: widgets
    })
  }
}
