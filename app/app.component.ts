/**
 * Created by Abhishek on 6/3/2016.
 */

import { Component } from '@angular/core';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import { API } from './api';

@Component({
    selector: 'my-app',
    styles: [
        `.search-results {
			height: 20rem;
			overflow: scroll;
		}`
    ],
    directives: [ InfiniteScroll ],
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    private api:API;
    constructor(private ap:API) {
        this.api = ap;
    }
    onScroll () {
        let users = this.api.getUsers();
        users.lift(r=>r.json()).subscribe(r=>console.log(r));
        console.log(users);
            /*.then(res=>res.json())
            .then(res=>console.log(res))
            .catch(error=>console.error(error));*/
    }
}

