import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;

    // it calls ngOntit method
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // One way of handling async operations using async method
  it('should load todos items from server', async(() => {

    // when dependency like TodoService is loaded in Module Level in provider array
    const todoService = TestBed.get(TodoService);

    // when dependency like TodoService injected component level in proiver array of @Component decorative
    // const todoService = fixture.debugElement.injector.get(TodoService);

    spyOn(todoService, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]));
    //spyOn(todoService, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    fixture.detectChanges();

    // to handle async operations results 
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
      console.log(' async EXPECT WAS CALLED')
    })
  }));


  // One way of handling async operations using async method
  it('should load todos items from server', fakeAsync(() => {

    // when dependency like TodoService is loaded in Module Level in provider array
    const todoService = TestBed.get(TodoService);

    // when dependency like TodoService injected component level in proiver array of @Component decorative
    // const todoService = fixture.debugElement.injector.get(TodoService);

    spyOn(todoService, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]));
    // spyOn(todoService, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));
    fixture.detectChanges();

    // to handle async operations results 
    tick();
    expect(component.todos.length).toBe(3);
    console.log('fakeAsync EXPECT WAS CALLED')

  }));
});
