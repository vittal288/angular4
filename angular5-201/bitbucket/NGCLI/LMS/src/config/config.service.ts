import { Injectable } from '@angular/core';

import { AppSettings } from './config';

@Injectable()
export class ConfigService {
    constructor(private appSettings: AppSettings) {

    }
    getSearchItemAPIEndPoint() {
        return this.appSettings.exposeLocalJSONEndPoints('SEARCHITEM');
    }
    // getBookGetCategoriesAPIEndPoint() {
    //     return this.appSettings.exposeLocalJSONEndPoints('CATEGORY');
    // }
    getBookVolumeAPIEndPoint() {
        return this.appSettings.exposeGoogleEndPoints('BOOK-VOLUME');
    }
    getFireBaseConfigObj() {
        return this.appSettings.CONFIG.FIREBASE;
    }
    getAddVolumeToShelfAPIEndPoint() {
        return this.appSettings.exposeGoogleEndPoints('ADD-TO-SHELF');
    }
    getRemoveVolumeToShelfAPIEndPoint() {
        return this.appSettings.exposeGoogleEndPoints('REMOVE-FROM-SHELF');
    }

    getBookDetailsByISBNEndPoint() {
        return this.appSettings.exposeGoogleEndPoints('BOOK-BY-ISBN');
    }
}
