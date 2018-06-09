import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCubeFormComponent } from './course-cube-form.component';

describe('CourseCubeFormComponent', () => {
  let component: CourseCubeFormComponent;
  let fixture: ComponentFixture<CourseCubeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCubeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCubeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
