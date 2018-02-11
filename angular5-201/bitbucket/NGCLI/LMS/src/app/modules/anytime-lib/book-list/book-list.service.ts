import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HTTPCommonService } from './../../../global-components/http-interceptor/app-http-common.service';
import { ConfigService } from './../../../../config/config.service';


@Injectable()

export class BookListService {
    constructor(private http: HTTPCommonService,
        private configService: ConfigService,
    ) {

    }
}