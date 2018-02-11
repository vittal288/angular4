import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnytimeLibComponent } from './anytime-lib.component';

describe('AnytimeLibComponent', () => {
  let component: AnytimeLibComponent;
  let fixture: ComponentFixture<AnytimeLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnytimeLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnytimeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
