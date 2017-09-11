import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: '../form/form.component.html',
})

export class FormComponent {
    rForm: FormGroup;
    message: any;
    email: String = '';
    phone: number;
    text: String = '';

    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    onlyDigitsRegex = /^(0|[1-9][0-9]*)$/;

    constructor(private fb: FormBuilder) {
        this.rForm = fb.group({
            'email': [null, Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
            'phone': [null, Validators.compose([Validators.pattern(this.onlyDigitsRegex), Validators.minLength(7)])],
            'text': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
            'validate': ''
        });
    }

    addPost(message) {
        this.email = message.email;
        this.phone = message.phone;
        this.text = message.text;
    }
}
