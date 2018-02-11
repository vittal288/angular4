import { Observable } from 'rxjs';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

import { UserDetailsComponent } from './user-details.component';
import {Subject} from 'rxjs';


// ROUTER  TEST
//  Providing RouterModule in providers may resolve the issue "No Provide for a Router"
// but it causes lot other issues and evenn by imorting this module will increase the complexity of UTCs for Router
// instead of loading real RouterModule DI, we fake the dependcy to the component using techniq called STUBBING

class RouterStub {
  navigate() {

  }
}

class ActivatedRouteStub {
  private subject = new Subject();

  push (value) {
    return this.subject.next(value)
  }

  // params property is an observable in the implementaion in the component 
  get params(){
    return this.subject.asObservable();
  }
  // params: Observable<any> = Observable.empty();
}
describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      // stubbing the RouterModule by injecting fake RouterStub class 
      // providers:[RouterModule]
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user should navigate to user page after saving', () => {
    // arrange part 
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    // act part
    component.save();

    // assert
    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate to not found page if user passes invlaid id', () => {
    // injected Router
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    // inject Activated Route 
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  })
});
