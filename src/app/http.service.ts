import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class peopleService {
    // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url

        getMyData() {

         // ...using get request
         return this.http.get('http://localhost:3000/people')
                   .map((res) => res.json())
                   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}