import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { HTTPCommonService } from './../../global-components/http-interceptor/app-http-common.service';
import { ConfigService } from './../../../config/config.service';
import { AppSettings } from './../../../config/config';


@Injectable()

export class AnyTimeLibService {
    public selectCateEvent = new EventEmitter<string>();
    constructor(private http: HTTPCommonService,
        private configService: ConfigService,
        private constant: AppSettings
    ) {
    }

    getBookLists(titleOrAuthor: string): Observable<any> {
        const apiKey = this.constant.CONFIG.GOOGLE_KYES.API_KEY;
        // const URL = `${this.configService.getBookVolumeAPIEndPoint()}/${titleOrAuthor}:keyes&key${apiKey}`;
        const URL = `${this.configService.getBookVolumeAPIEndPoint()}/${titleOrAuthor}`;
        console.log('URL', URL);
        return this.http.get(URL);
    }

    getRandomNames(): Observable<any> {
        const URL = `${this.configService.getSearchItemAPIEndPoint()}`;
        return this.http.get(URL);
    }
}