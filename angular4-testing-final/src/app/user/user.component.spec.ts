import { async, ComponentFixture, TestBed ,fakeAsync,tick} from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from './user.service';
import {DataService} from '../shared/data.service';


describe("User : Component",()=>{
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[UserComponent]
    });
  })

  it('should create the app',()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should use the username from user service",()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;

    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();//to update the property on the component , but this will happen in browser automatically 
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in',()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn =true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;//get the compiled version of Template    
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });
  it('shouldn\'t display the user name if user is not logged in',()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;   
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;//get the compiled version of Template    
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('should\'t fetch the data successfully if not called asynchronously',()=>{
      let fixture =TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService,"getDetails") // spy is used to spy the real time service call to web server
      .and.returnValue(Promise.resolve('Data'));//spy service in real time returing an promise with some dummy data 
      fixture.detectChanges();
      expect(app.data).toBe(undefined);
  });

  it('should fetch the data successfully if  called asynchronously',async(()=>{
      let fixture =TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService,"getDetails") // spy is used to spy the real time service call to web server
      .and.returnValue(Promise.resolve('Data'));//spy service in real time returing an promise with some dummy data 
      fixture.detectChanges();
      fixture.whenStable().then(()=>{//once we recieve the confirmation of execution of async call service
        expect(app.data).toBe('Data');
      })
  }));
  it('should fetch the data successfully if  called asynchronously',fakeAsync(()=>{
      let fixture =TestBed.createComponent(UserComponent);
      let app = fixture.debugElement.componentInstance;
      let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService,"getDetails") // spy is used to spy the real time service call to web server
      .and.returnValue(Promise.resolve('Data'));//spy service in real time returing an promise with some dummy data 
      fixture.detectChanges();
      tick();//this method indicates that all our async calls were over 
      expect(app.data).toBe('Data');  
  }));

})

