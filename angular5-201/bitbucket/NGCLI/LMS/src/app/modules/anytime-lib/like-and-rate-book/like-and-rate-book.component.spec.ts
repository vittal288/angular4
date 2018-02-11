import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeAndRateBookComponent } from './like-and-rate-book.component';

describe('LikeAndRateBookComponent', () => {
  let component: LikeAndRateBookComponent;
  let fixture: ComponentFixture<LikeAndRateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeAndRateBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeAndRateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
