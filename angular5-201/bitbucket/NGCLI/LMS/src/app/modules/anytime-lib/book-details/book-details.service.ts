import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HTTPCommonService } from './../../../global-components/http-interceptor/app-http-common.service';
import { ConfigService } from './../../../../config/config.service';


@Injectable()

export class BookDetailsService {
    constructor(private http: HTTPCommonService,
        private configService: ConfigService,
    ) {

    }

    getBookDetailsByIsbn(isbn: string): Observable<any> {
        const URL = `${this.configService.getBookDetailsByISBNEndPoint()}${isbn}`;
        return this.http.get(URL);
    }
    
    addBookToShelf(isbn: string): Observable<any> {
        const URL = `${this.configService.getAddVolumeToShelfAPIEndPoint()}${isbn}`;
        return this.http.get(URL);
    }
}