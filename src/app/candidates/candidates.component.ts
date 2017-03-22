import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { PeopleService } from '../services/people.service';
import { HeaderComponent } from '../header/header.component'

@Component({
    selector: 'candidates',
    templateUrl: './candidates.component.html',
    styleUrls: ['./candidates.component.scss'],
    inputs: ['users']
})

export class CandidatesComponent {
    //public hide = false;
    constructor(
        private authenticationService: AuthenticationService,
        private peopleService: PeopleService) { }
    isDetailed = false;
    active = "";
    private users;
    private backupusers;
    private selected;
    ngOnInit() {
        this.authenticationService.checkCredentials();
        this.peopleService.getMyData()
            .subscribe((data) => {
                this.users = data;
                this.backupusers = this.users;
            });
    }
    doLogout() {
        this.authenticationService.doLogout();
    }
    onSelect(newVal, el) {
        if (typeof (this.selected) == 'object') {
            this.users = [];
            this.users.push(this.selected);
        }
        else {
            this.users = []
            this.users = this.backupusers;
            el.blur();
            el.focus();
        }
    }
}
