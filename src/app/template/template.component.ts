import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../firebase-auth/auth.service';

@Component({
    selector: 'app-template',
    templateUrl: '../template/template.component.html'
})

export class TemplateComponent {
    constructor(public authService: AuthService) { }
}
