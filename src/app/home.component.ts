import { Component } from '@angular/core';
import { AuthenticationService } from './loginComponent/authentication.service'
import { peopleService } from './http.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService, peopleService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class HomeComponent {

    constructor(
        private _service: AuthenticationService, private peopleService: peopleService) { }

    private users;
    model = { "id": 0, "age": 27, "name": "Jo Sanford", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jonkspr/128.jpg" }
    ngOnInit() {
        this._service.checkCredentials();
        this.peopleService.getMyData()
            .subscribe((data) => this.users = data);
    }
    logout() {
        this._service.logout();
    }
    onSelect(newVal) {
        console.log("value is changed to ", newVal);
        this.model = newVal;
    }
    onFocus(el) {
        el.value = "";
    }
    json(obj) {
        return JSON.stringify(obj);
    }
}