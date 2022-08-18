import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentByBooknameComponent } from './student-by-bookname.component';

describe('StudentByBooknameComponent', () => {
  let component: StudentByBooknameComponent;
  let fixture: ComponentFixture<StudentByBooknameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentByBooknameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentByBooknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
