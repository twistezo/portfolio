import { Component } from '@angular/core';
import { AuthService } from '../firebase-auth/auth.service';
import { DashboardContactComponent } from '../dashboard/dashboard-contact.component';

@Component({
    selector: 'app-main',
    templateUrl: '../main/main.component.html',
})

export class MainComponent {
    constructor(public authService: AuthService, private dashboardContactComponent: DashboardContactComponent) { }
}
