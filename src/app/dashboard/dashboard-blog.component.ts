import { Component, OnInit } from '@angular/core';
import { BlogComponent } from '../blog/blog.component';
import { AuthService } from '../firebase-auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dashboard-blog',
    templateUrl: '../dashboard/dashboard-blog.component.html'
})

export class DashboardBlogComponent implements OnInit {
    rForm: FormGroup;
    title: string;
    body: string;
    blogComponent: BlogComponent;

    constructor(private bComponent: BlogComponent, private fb: FormBuilder) {
        this.blogComponent = bComponent;
        this.rForm = fb.group({
            'title': [null],
            'body': [null],
        });
    }

    ngOnInit() {
        this.blogComponent.ngOnInit();
    }

    add(title, body) {
        this.blogComponent.addPost(title, body);
        this.rForm.reset();
    }

}
