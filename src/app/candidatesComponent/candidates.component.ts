import { Component } from '@angular/core';
import { AuthenticationService } from '../loginComponent/authentication.service'
import { peopleService } from '../people.service'

@Component({
    selector: 'candidates',
    providers: [AuthenticationService, peopleService],
    templateUrl: './candidates.comonent.html',
    styleUrls: ['./candidates.component.scss'],
    inputs: ['users']
})

export class CandidatesComponent {

    constructor(
        private _service: AuthenticationService, private peopleService: peopleService) { }

    private users;
    isDetailed = false;
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
    enterFullDetails() {
        console.log("dwsdwd");
    }
    cancelDetailed() {
        console.log("cancell");
    }
}