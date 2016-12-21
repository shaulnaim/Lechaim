import {Component} from '@angular/core';
import {AuthenticationService, User} from './authentication.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private router: Router,
        private _service:AuthenticationService) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'פרטי כניסה שגויים';
        }
    }
    signup() {
        this.router.navigate(['/representorsSignup']);
    }
}
