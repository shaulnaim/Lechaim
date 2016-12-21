import { Component } from '@angular/core';
import { AuthenticationService } from '../loginComponent/authentication.service';
import { peopleService } from '../people.service';

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
    
    isDetailed = false;
    private users;
    ngOnInit() {
        this._service.checkCredentials();
        this.peopleService.getMyData()
            .subscribe((data) => this.users = data);
    }
    logout() {
        this._service.logout();
    }
    onSelect(newVal) {
        console.log('value is changed to ', newVal);
    }
    onFocus(el) {
        el.value = '';
    }
    json(obj) {
        return JSON.stringify(obj);
    }
    enterFullDetails() {
        console.log('dwsdwd');
    }
    cancelDetailed() {
        console.log('cancell');
    }
}
