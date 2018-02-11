// import {AuthService} from './auth.service';
// import {ToasterService, UtilityService } from './../shared/utility';
// import {Router } from '@angular/router';
// import {ConfigService} from '../../../config/config.service';
// import { SharedService } from '../shared/shared.service';
// import {Injectable, Inject} from '@angular/core';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import {Subject} from 'rxjs/Subject';


// export class MockSharedService extends SharedService {

//     getFromSession(key: string) {
//       if (sessionStorage.getItem(key) !== '') {
//         return JSON.parse(sessionStorage.getItem(key));
//       }

//     }


// }
// export class MockServiceConfig extends ConfigService {
//   getLoginEndPoint() {
//     return `https://login.microsoftonline.com/tfp`;
// }
// }

// describe('Service: Auth', () => {

//   let service: AuthService;
//   let toasterService: ToasterService;
//   let sharedService: MockSharedService;
//   let router: Router;
//   let configService: MockServiceConfig;
//   let utilityService: UtilityService


//   beforeEach(() => {
//     sharedService = new MockSharedService();
//     service = new AuthService(sharedService, toasterService, router, configService, utilityService);
//    // service.onInit();
//   });

//   afterEach(() => {
//     service = null;
//     sessionStorage.removeItem('authToken');
//   });

//   it('should return true from isLogedIn when there is a token', () => {
//     sessionStorage.setItem('authToken', '1234');
//    // shareddata.authenticated = false;
//     expect(service.isLogedIn()).toBeTruthy();
//   });

//   it('should return true from getUserInfo when there is a token', () => {
//     expect(service.getUserInfo()).toBeFalsy();
//   });

//  it('GetToken', () => {
//   sessionStorage.setItem('authToken', '1234');
//    expect(service.getToken()).toString();
//  });

// })
