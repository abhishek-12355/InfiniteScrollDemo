/**
 * Created by Abhishek on 6/3/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
var api_1 = require('./api');
var AppComponent = (function () {
    function AppComponent(ap) {
        this.ap = ap;
        this.api = ap;
    }
    AppComponent.prototype.onScroll = function () {
        var users = this.api.getUsers();
        users.lift(function (r) { return r.json(); }).subscribe(function (r) { return console.log(r); });
        console.log(users);
        /*.then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.error(error));*/
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [
                ".search-results {\n\t\t\theight: 20rem;\n\t\t\toverflow: scroll;\n\t\t}"
            ],
            directives: [angular2_infinite_scroll_1.InfiniteScroll],
            templateUrl: './app/app.component.html'
        }), 
        __metadata('design:paramtypes', [api_1.API])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map