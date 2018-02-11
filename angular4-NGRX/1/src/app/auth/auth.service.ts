// import { SignIn, AuthActions, SetToken } from './store/auth.actions';
// import { Store } from '@ngrx/store';
// import { Router } from '@angular/router';
// import * as firebase from 'firebase';
// import { Injectable } from '@angular/core';

// import * as fromApp from '../store/app.reducers';
// import * as authActions from '../auth/store/auth.actions';

// @Injectable()
// export class AuthService {
//   // token: string;

//   constructor(private router: Router, private store: Store<fromApp.AppState>) { }

//   signupUser(email: string, password: string) {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((user) => {
//         this.store.dispatch(new authActions.SignUp());
//         firebase.auth().currentUser.getToken()
//           .then((token: string) => {
//             this.store.dispatch(new authActions.SetToken(token))
//           });
//       })
//       .catch(
//       error => console.log(error)
//       )
//   }

//   signinUser(email: string, password: string) {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(
//       response => {
//         this.store.dispatch(new authActions.SignIn());
//         this.router.navigate(['/']);
//         firebase.auth().currentUser.getToken()
//           .then((token: string) => {
//             this.store.dispatch(new authActions.SetToken(token))
//           });
//       }
//       )
//       .catch(
//       error => console.log(error)
//       );
//   }

//   logout() {
//     firebase.auth().signOut();
//     // this.token = null;
    
//   }

//   // getToken() {
//   //   firebase.auth().currentUser.getToken()
//   //     .then(
//   //     (token: string) => this.token = token
//   //     );
//   //   return this.token;
//   // }

//   // isAuthenticated() {
//   //   return this.token != null;
//   // }
// }
