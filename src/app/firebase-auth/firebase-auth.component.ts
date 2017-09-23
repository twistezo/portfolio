import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-firebase-auth',
  templateUrl: './firebase-auth.component.html',
})

export class FirebaseAuthComponent {
  authForm: FormGroup;
  email: string;
  password: string;
  formData: any;

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.authForm = fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'validate': ''
    });
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login(formData) {
    this.authService.login(formData.email, formData.password);
    this.email = this.password = '';
    this.authForm.reset();
    this.authService.setLoginFailed(false);
  }

  logout() {
    this.authService.logout();
  }
}
