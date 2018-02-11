import { Store } from '@ngrx/store';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';

// import { AuthService } from '../auth/auth.service';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    return this.store.select('auth') // whenver state changes, it will get fire so we are restricting it to fire only one time 
      .take(1)
      .switchMap((authState: fromAuth.State) => {
        const copiedReq = req.clone({ params: req.params.set('auth', authState.token) });
        return next.handle(copiedReq);
      });
  }
}
// switchMap , wont resolve the observable but it returns an observable 
