import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureWariningAlertComponent } from './failure-warining-alert.component';

describe('FailureWariningAlertComponent', () => {
  let component: FailureWariningAlertComponent;
  let fixture: ComponentFixture<FailureWariningAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureWariningAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureWariningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
