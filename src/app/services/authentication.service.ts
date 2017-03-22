import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { PeopleService } from '../services/people.service';

var USERS = [];

@Injectable()
export class AuthenticationService {
  constructor(
    private router: Router,
    private peopleService: PeopleService) {   
   
 }

  doLogout() {
    localStorage.removeItem("user");
    this.reLogin();
  }

  reLogin() {
    this.router.navigate(['/Login']);
  }

  doLogin(user) {
    this.peopleService.getUsers()
            .subscribe((data) => {
                USERS = data;
            });
    var authenticatedUser = USERS.find(u => u.email === user.email);
    if (authenticatedUser) {
      localStorage.setItem("user", authenticatedUser.email);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this.reLogin();
    }
  }
}