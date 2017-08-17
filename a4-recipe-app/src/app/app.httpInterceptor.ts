// import { Injectable } from '@angular/core';
// import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Request } from '@angular/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { AuthService } from './auth/auth.service';
// import * as _ from 'lodash';

// @Injectable()
// export class ExtendedHttpService extends Http {

//     constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private authService: AuthService,private router: Router) {
//         super(backend, defaultOptions);
//     }

//     // request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     //     return this.intercept(super.request(url, options));
//     // }

//         request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//         //do whatever 
//         if (typeof url === 'string') {
//           if (!options) {
//             //options = { headers: new Headers() };
//           }
//           this.setHeaders(options);
//         } else {
//           this.setHeaders(url);
//         }

//         return super.request(url, options).catch(this.catchErrors());
//       }

//     get(url: string, options?: RequestOptionsArgs): Observable<Response> {
//         console.log('URL',url);
//         return this.intercept(super.get(url, options));
//     }

//     post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
//         //return this.intercept(super.post(url, body, this.getRequestOptionArgs(options))); 
//         return this.intercept(super.post(url, body));
//     }

//     put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
//         //return this.intercept(super.put(url, body, this.getRequestOptionArgs(options))); 
//         return this.intercept(super.put(url, body));
//     }

//     delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
//         return this.intercept(super.delete(url, options));
//     }

//     // getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
//     //     if (options == null) {
//     //         options = new RequestOptions();
//     //     }
//     //     if (options.headers == null) {
//     //         //options.headers = new Headers();
//     //     }
//     //     options.headers.append('Content-Type', 'application/json');
//     //     options.headers.append('x-auth-token','asda#q423234sdfsf24');
//     //     return options;
//     // }

//     intercept(observable: Observable<Response>): Observable<Response> {
//         return observable.catch((err, source) => {
//             //if (err.status == 401 && !_.endsWith(err.url, 'api/auth/login')) {
//             if (err.status == 401) {
//                 this.router.navigate(['signup']);
//                 return Observable.empty();
//             } else {
//                 return Observable.throw(err);
//             }
//         });

//     }

//     private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
//         //add whatever header that you need to every request
//         //in this example I add header token by using authService that I've created
//         const token = this.authService.getToken();   
//         console.log('TOKEN #123', token);
//         objectToSetHeadersTo.headers.set('x-token', token);
//     }

//     private catchErrors() {
//         return (res: Response) => {
//             if (res.status === 401 || res.status === 403) {
//                 //handle authorization errors
//                 //in this example I am navigating to logout route which brings the login screen
//                 this.router.navigate(['signin']);
//             }
//             return Observable.throw(res);
//         };
//     }

// }



// import { Injectable } from '@angular/core';
// import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Router } from '@angular/router';
// import { AuthService } from './auth/auth.service';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// @Injectable()
// export class ExtendedHttpService extends Http {

//   constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router, private authService: AuthService) {
//     super(backend, defaultOptions);
//   }

//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     //do whatever 
//     if (typeof url === 'string') {
//       if (!options) {
//         options = { headers: new Headers() };
//       }
//       this.setHeaders(options);
//     } else {
//       this.setHeaders(url);
//     }

//     return super.request(url, options).catch(this.catchErrors());
//   }

//   private catchErrors() {
//     return (res: Response) => {
//       if (res.status === 401 || res.status === 403) {
//         //handle authorization errors
//         //in this example I am navigating to logout route which brings the login screen
//         this.router.navigate(['logout']);
//       }
//       return Observable.throw(res);
//     };
//   }

//   private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
//     //add whatever header that you need to every request
//     //in this example I add header token by using authService that I've created
//     objectToSetHeadersTo.headers.set('Token', this.authService.getToken());
//   }
// }