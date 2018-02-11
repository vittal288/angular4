
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap'; // merge all observable into one observable 
import { fromPromise } from 'rxjs/observable/fromPromise'; // converts promise to observable 
import * as firbase from 'firebase';
import { Router } from '@angular/router';



import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    @Effect() // if you dont want to change the state of application then use @Effect({dispath: false})
    authSignup = this.actions$
        .ofType(AuthActions.TRY_SIGNUP)
        .map((action: AuthActions.TrySignUp) => {
            return action.payload;
        }) // observable subscribed and resolved here 
        .switchMap((authData: { username: string, password: string }) => {
            return fromPromise(firbase.auth()
                .createUserWithEmailAndPassword(authData.username, authData.password));
        }) // observable subscribed and resolved here 
        .switchMap(() => {
            return fromPromise(firbase.auth().currentUser.getIdToken());
        })// all furhter observable subscribed and resolved here 
        .mergeMap((token: string) => {
            return [
                {
                    type: AuthActions.SIGN_UP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ]
        });

    @Effect()
    authSignin = this.actions$
        .ofType(AuthActions.TRY_SIGNIN)
        .map((action: AuthActions.TrySignIn) => {
            return action.payload
        })
        .switchMap((authData: { username: string, password: string }) => {
            return fromPromise(firbase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        })
        .switchMap(() => {
            return fromPromise(firbase.auth().currentUser.getIdToken());
        })
        .mergeMap((token: string) => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGN_IN
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                }
            ]
        });

    @Effect({ dispatch: false })
    authLogout = this.actions$
        .ofType(AuthActions.LOG_OUT)
        .do(() => {
            this.router.navigate(['/'])
        });

    constructor(private actions$: Actions, private router: Router) {

    }
}
