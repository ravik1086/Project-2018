import { TestBed, inject } from '@angular/core/testing';

import { CourseCubeService } from './course-cube.service';

describe('CourseCubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseCubeService]
    });
  });

  it('should be created', inject([CourseCubeService], (service: CourseCubeService) => {
    expect(service).toBeTruthy();
  }));
});
