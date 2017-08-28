import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../firebase-auth/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BlogNote } from './blog-note';
import { Todo } from './todo';

const lorem: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas diam non neque hendrerit, at commodo felis suscipit. Nunc a velit rhoncus, imperdiet quam tempor, efficitur libero. Duis sit amet ornare mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas diam non neque hendrerit, at commodo felis suscipit. Nunc a velit rhoncus, imperdiet quam tempor, efficitur libero. Duis sit amet ornare mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas diam non neque hendrerit, at commodo felis suscipit. Nunc a velit rhoncus, imperdiet quam tempor, efficitur libero. Duis sit amet ornare mi.';

@Component({
    selector: 'app-blog',
    templateUrl: '../blog/blog.component.html'
 })

 export class BlogComponent implements OnInit {
    title: string;
    body: string;

    notes$: FirebaseListObservable<any[]>;

    constructor(private af: AngularFireDatabase, public authService: AuthService) { }

    ngOnInit() {
        this.notes$ = this.af.list('notes', {
            query: {
                limitToFirst: 100
            }
            });
        // this.addNote(1, 'Lukasz', 'Some title', lorem);
    }

    addNote(
        title: string,
        body: string,
    ): void {
        this.notes$.push({
            id: 0,
            author: this.authService.getUserName(),
            date: new Date().toLocaleDateString(),
            title: title,
            body: body,
        });
    }

    addTodo(note: string): void {
        this.notes$.push({ content: note, done: false });
    }
    deleteTodo(note: any): void {
        this.af.object('/notes/' + note.$key).remove();
    }
    toggleDone(note: any): void {
        this.af.object('/notes/' + note.$key)
            .update({ content: note.content, done: !note.done });
    }
    updateTodo(note: any, newValue: string): void {
        this.af.object('/notes/' + note.$key)
            .update({ content: newValue, done: note.done });
    }

}
