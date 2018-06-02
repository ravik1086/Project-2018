import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCubeComponent } from './course-cube.component';

describe('CourseCubeComponent', () => {
  let component: CourseCubeComponent;
  let fixture: ComponentFixture<CourseCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
