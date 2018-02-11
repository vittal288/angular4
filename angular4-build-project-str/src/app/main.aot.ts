import '../polyfills';

import {platformBrowser} from '@angular/platform-browser';
import {enableProdMode} from '@angular/core';

import {AppModuleNgFactory} from './app.module.ngFactory'; //creates this file dynamically from angular

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);