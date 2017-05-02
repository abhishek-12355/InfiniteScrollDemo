/**
 * Created by Abhishek on 6/3/2016.
 */
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var api_1 = require("./api");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, api_1.API]);
//# sourceMappingURL=main.js.map