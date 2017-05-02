/**
 * Created by Abhishek on 6/4/2016.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class API {

    private http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    public getUsers() {
        return this.http.get('http://jsonplaceholder.typicode.com/users');
    }
}
