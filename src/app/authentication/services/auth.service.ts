import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { DatabaseService } from '../../services/database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth,
    private dbService: DatabaseService) { }

  async register({ email, password, name }: any) {

    if (!name) {
      return 'missing-name'
    }

    if (!password) {
      return 'missing-password'
    }
    
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.dbService.createUserDocument(email, name) //on register a doc for the user is created
        return 'correct'
      })
      .catch(error => {
        return error.code
      })
  }

  async login({ email, password }: any) {

    if (!password) {
      return 'missing-password'
    }

    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.dbService.init(email)
        return 'correct'
      })
      .catch(error => {
        return error.code
      })
    
  }

  logout() {
    return signOut(this.auth)
  }
}
