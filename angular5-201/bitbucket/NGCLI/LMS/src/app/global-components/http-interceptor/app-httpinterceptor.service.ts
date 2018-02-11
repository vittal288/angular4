import { Injectable, Injector, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthService } from '../../modules/auth/auth.service'
import { LoadingComponent } from './../loading/loading.component';


@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    constructor(
        private loadingComponent: LoadingComponent,
        injector: Injector, private authService: AuthService) {
        this.authService = injector.get(AuthService);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingComponent.onOpenModal();               
        if (this.authService.isAuthenticated()) {            
            const authToken = this.authService.getAuthToken();
            req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${authToken}`) });
            req = req.clone({ headers: req.headers.set('Accept', '*/*') });
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        } else {
            req = req.clone({ headers: req.headers.set('Accept', '*/*') });
        }
        const started = Date.now();
        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    const statisticks = `Request for ${req.urlWithParams} took ${elapsed} ms.`;
                    console.log('%c LATENCY INFO !!! ', 'background: #5bc0de; color: #FFF', statisticks);
                    this.loadingComponent.onCloseModal();
                }
            });
    }
}
