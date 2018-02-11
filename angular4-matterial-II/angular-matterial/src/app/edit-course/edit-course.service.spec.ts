import { TestBed, inject } from '@angular/core/testing';

import { EditCourseService } from './edit-course.service';

describe('EditCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCourseService]
    });
  });

  it('should be created', inject([EditCourseService], (service: EditCourseService) => {
    expect(service).toBeTruthy();
  }));
});
