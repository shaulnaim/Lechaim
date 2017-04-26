import { Component, Input , OnInit} from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { PeopleService } from '../../services/people.service';
import { HeaderComponent } from '../../header/header.component'

@Component({
    selector: 'representatives',
    templateUrl: './representatives.component.html',
    styleUrls: ['./representatives.component.scss'],
    inputs: ['users']
})

export class RepresentativesComponent implements OnInit {
    //public hide = false;
    constructor(
        private authenticationService: AuthenticationService,
        private peopleService: PeopleService) { }
    isDetailed = false;
    active = "";
    private representatives;
    private backuprepresentatives;
    private selected;
    ngOnInit() {
        this.authenticationService.checkCredentials();
        this.peopleService.getRepresentatives()
            .subscribe((data) => {
                this.representatives = data;
                debugger;
                this.backuprepresentatives = this.representatives;
            });
    }
    doLogout() {
        this.authenticationService.doLogout();
    }
    onSelect(newVal, el) {
        if (typeof (this.selected) == 'object') {
            this.representatives = [];
            this.representatives.push(this.selected);
        }
        else {
            this.representatives = []
            this.representatives = this.backuprepresentatives;
            el.blur();
            el.focus();
        }
    }
}
