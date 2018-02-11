import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { SharedService } from './../shared/shared.service';

@Injectable()
export class AuthService {
    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    private token: any;
    constructor(private _firebaseAuth: AngularFireAuth,
        private router: Router,
        private sharedService: SharedService) {
        this.user = _firebaseAuth.authState;
        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                    this.sharedService.storeToSession('user', user);
                } else {
                    this.userDetails = null;
                }
            }
        );
    }
    signInWithTwitter() {
        return this._firebaseAuth.auth.signInWithPopup(
            new firebase.auth.TwitterAuthProvider()
        );
    }
    signInWithFacebook() {
        return this._firebaseAuth.auth.signInWithPopup(
            new firebase.auth.FacebookAuthProvider()
        );
    }
    signInWithGoogle() {
        return this._firebaseAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );
    }
    signInWithEmailAndPassword(email, password) {
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }
    registerWithEmailAndPassword(email, password) {
        return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    isAuthenticated() {
        // if (this.userDetails == null) {
        //     return false;
        // } else {
        //     return true;
        // }
        const userSession = this.sharedService.getFromSession('user');
        if (userSession !== null) {
            return true;
        } else {
            return false;
        }
    }
    logout() {
        // this._firebaseAuth.auth.signOut()
        //     .then((res) => this.router.navigate(['/']));
        return this._firebaseAuth.auth.signOut();
    }

    getAuthToken() {
        const userSesion = this.sharedService.getFromSession('user');
        return userSesion['stsTokenManager']['accessToken'];
    }

    getUserInfo() {
        if (this.getSessionUser() !== null && this.getSessionUser() !== undefined) {
            return this.getSessionUser();
        } else {
            return false;
        }
    }

    getSessionUser() {
        if (this.sharedService.getFromSession('user')) {
            this.token = this.sharedService.getFromSession('user');
            return this.token;
        } else {
            return null;
        }
    }
}
