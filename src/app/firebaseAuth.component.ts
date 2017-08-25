import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-firebase-auth',
    templateUrl: './firebaseAuth.component.html',
    // styleUrls: ['./app.component.css']
 })
 
export class FirebaseAuthComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}
