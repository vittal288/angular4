import { SetToken } from './store/auth.actions';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.authService.isAuthenticated();
    // map mathod will resolve the observable and returns to boolean 
    return this.store.select('auth')
    .take(1)// execute only once, to avoid un expected behaviour 
    .map((auhtState: fromAuth.State) => {
      return auhtState.authenticated;
    })
  }
}
