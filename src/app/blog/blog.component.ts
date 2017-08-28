import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BlogNote } from './blog-note';
import { Todo } from './todo';

@Component({
    selector: 'app-blog',
    templateUrl: '../blog/blog.component.html'
 })

 export class BlogComponent implements OnInit {
    notes$: FirebaseListObservable<any[]>;

    constructor(private af: AngularFireDatabase) { }

    ngOnInit() {
        this.notes$ = this.af.list('notes', {
            query: {
                limitToFirst: 100
            }
            });
        this.addNote(1, 'test', 'Lukasz', 'body');
        this.addTodo('blalbabl');
    }

    addNote(id: number,
        author: string,
        title: string,
        body: string,
    ): void {
        this.notes$.push({
            id: id,
            author: author,
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
