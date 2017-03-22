import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Const } from '../app.component';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeopleService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }
    getMyData() {
        // ...using get request
        return this.http.get(Const.BASE_URL + 'people')
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
    getSpecific(id) {
        return this.http.get(Const.BASE_URL + 'people?id=' + id)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
    getUsers() {
        // ...using get request
        return this.http.get(Const.BASE_URL + 'users')
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
    adduser(data: Object) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(Const.BASE_URL + 'users', JSON.stringify(data), { headers })      //added return
            .map(res => res.json())

    }
}
