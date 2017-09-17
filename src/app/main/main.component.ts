import { Component } from '@angular/core';
import { AuthService } from '../firebase-auth/auth.service';

@Component({
    selector: 'app-main',
    templateUrl: '../main/main.component.html',
})

export class MainComponent {
    constructor(public authService: AuthService) { }
}
