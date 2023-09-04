import { Component } from "@angular/core";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: red; padding-left: 10px; }
    `]
})

export class LoginComponent {
    userName: any;
    password: any;
    mouseoverLogin: any;

    login(formValues: any) {
        console.log(formValues);
    }
}