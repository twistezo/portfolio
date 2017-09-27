import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'app-dashboard-contact',
    templateUrl: '../dashboard/dashboard-contact.component.html'
})

export class DashboardContactComponent {
    messages$: FirebaseListObservable<any[]>;

    constructor(private af: AngularFireDatabase) {
        this.messages$ = this.af.list('messages', {
            query: {
                limitToFirst: 100
            }
        });
    }
}
