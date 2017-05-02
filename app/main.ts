/**
 * Created by Abhishek on 6/3/2016.
 */

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {API} from "./api";
bootstrap(AppComponent, [ HTTP_PROVIDERS, API ]);

