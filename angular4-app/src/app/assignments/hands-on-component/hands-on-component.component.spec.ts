import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsOnComponentComponent } from './hands-on-component.component';

describe('HandsOnComponentComponent', () => {
  let component: HandsOnComponentComponent;
  let fixture: ComponentFixture<HandsOnComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandsOnComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandsOnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
