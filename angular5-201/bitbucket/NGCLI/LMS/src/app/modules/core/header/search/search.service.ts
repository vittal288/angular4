// import { SharedService } from './../../../shared/shared.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HTTPCommonService } from './../../../../global-components/http-interceptor/app-http-common.service';
import { ConfigService } from '../../../../../config/config.service';

@Injectable()
export class SearchService {
    constructor(
        private configService: ConfigService,
        private httpCommonService: HTTPCommonService,
    ) {
    }

    getSearchItems(): Observable<any> {
        const url = `${this.configService.getSearchItemAPIEndPoint()}`;
        return this.httpCommonService.get(url);
    }
}
