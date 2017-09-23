import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  loginFailed = false;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    this.loginFailed = false;
  }

  getUserName(): string {
    return this.firebaseAuth.auth.currentUser.email;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log('Error:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        this.loginFailed = true;
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  setLoginFailed(value: boolean) {
    this.loginFailed = value;
  }
}

